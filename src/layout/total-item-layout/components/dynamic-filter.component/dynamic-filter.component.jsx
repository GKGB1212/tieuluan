import React, { useEffect, useState } from "react";
import './dynamic-filter.styles.css'
import { useDispatch } from "react-redux";
import { fetchFilterPosts } from "../../../../redux/product/productSlice";

const DynamicFilter = ({ lstCity, Search, type,provinceId, categoryId, changeIsShow }) => {
    const dispatch=useDispatch()
    const [ProvinceID, setProvinceID] = useState(0);
    const [PostTypeID, setPostTypeID] = useState(0);
    const [CategoryID, setCategoryID] = useState(0);
    useEffect(() => {
        if(type!=null){
            setPostTypeID(type)
        }
        if(categoryId!=null){
            setCategoryID(categoryId);
        }
        if(provinceId!=null){
            alert("gia binh",provinceId)
            setProvinceID(provinceId);
        }
    }, [type,categoryId,provinceId])
    const handleClickSearch = () => {
        var objSearch={Search};
        if(ProvinceID!=0){
            objSearch.ProvinceID=ProvinceID
        }
        if(PostTypeID!=0){
            objSearch.PostTypeID=PostTypeID
        }
        if(CategoryID!=0){
            objSearch.CategoryID=CategoryID
        }
        dispatch(fetchFilterPosts(objSearch));
    }
    return (
        <div className="DynamicFilterStyle_dynamicFilterWrapper">
            <div className="WrapperScroll_wrapperOverflow">
                <div className="DynamicFilterStyle_dynamicFilter">
                    <div className="ItemStyles_filterItem ItemStyles_filterItemSelected" role="button" tabindex="0">
                        <select value={ProvinceID} className="select" onChange={(e) => setProvinceID(e.target.value)}>
                            <option value="0">Chọn Tỉnh/ Thành phố</option>
                            {lstCity.map((item) => {
                                return <option key={item.code} value={item.code}>{item.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="ItemStyles_filterItem ItemStyles_filterItemSelected" role="button" tabindex="0">
                        <select className="select" value={PostTypeID} onChange={(e) => setPostTypeID(e.target.value)}>
                            <option value="0">Chọn loại bài đăng</option>
                            <option value="1">Mua bán</option>
                            <option value="2">Cho thuê</option>
                        </select>
                    </div>
                    <div className="ItemStyles_filterItem ItemStyles_filterItemSelected" role="button" tabindex="0">
                        {(PostTypeID == 1)
                            ? (
                                <select className="select" value={CategoryID} onChange={(e) => setCategoryID(e.target.value)}>
                                    <option value="0">Chọn Loại BĐS</option>
                                    <option value="1">Căn hộ/ Chung cư</option>
                                    <option value="2">Nhà ở</option>
                                    <option value="4">Văn phòng/ Mặt bằng kinh doanh</option>
                                    <option value="3">Đất</option>
                                </select>
                            ) :
                            (
                                <select className="select" value={CategoryID} onChange={(e) => setCategoryID(e.target.value)}>
                                    <option value="0">Chọn Loại BĐS</option>
                                    <option value="1">Căn hộ/ Chung cư</option>
                                    <option value="2">Nhà ở</option>
                                    <option value="4">Văn phòng/ Mặt bằng kinh doanh</option>
                                    <option value="5">Nhà trọ</option>
                                </select>
                            )}
                    </div>
                    <div className="ItemStyles_filterItem ItemStyles_filterItemSelected" role="button" tabindex="0">
                        <button onClick={handleClickSearch}>Tìm kiếm</button>
                    </div>
                    {/* <div className="ItemStyles_filterItem ItemStyles_filterItemSelected" role="button" tabindex="0">
                        <button onClick={changeIsShow}>Lọc</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default DynamicFilter;