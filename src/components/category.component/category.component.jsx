import React,{useEffect} from "react";
import './category.styles.css';
import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchGetPostTypeNumber } from "../../redux/product/productSlice";
import { Link } from "react-router-dom";

const Category = () => {
    const history=useHistory();
    const dispatch=useDispatch();
    const postTypeNumber=useSelector(state=>state.product.postTypeNumber );
    useEffect(()=>{
        dispatch(fetchGetPostTypeNumber())
    },[]);
    const handleMouseOverInLi = (num) => {
        num === 1 ? document.getElementById("num1").style.display = 'block' : document.getElementById("num2").style.display = 'block';
    }
    const handleMouseOutInLi = (num) => {
        num === 1 ? document.getElementById("num1").style.display = 'none' : document.getElementById("num2").style.display = 'none';
    }
    return (
        <div className="category">
            <h1 className="Categories__Title-sc-1fgp6wm-1 eBxpbB">Khám phá danh mục bất động sản</h1>
            <div className="Categories__WrapperCat">
                <li className="categoriesItem flex" onMouseOver={() => handleMouseOverInLi(1)} onMouseOut={() => handleMouseOutInLi(1)}>
                    <Link aria-label="Mua bán" className="categoriesA flex" to={{pathname:'/tim-kiem-bds', state:{type:1}}}>
                        <div className="flex-img">
                            <img src="https://cdn.chotot.com/admincentre/jRbB3FhWaCaimgTxbQOddBx1Ihs0ZKSTdPSvgIY4LzA/preset:raw/plain/263e0d636a0c4c504e2023d70b0890c3-2714331825079252180.jpg" className="categoryImg" />
                        </div>
                        <div className="flex flex-col flex-auto flex-text">
                            <span className="categoryText">Mua bán</span>
                            <span className="categorySubText"><span><b></b> tin đăng mua bán</span></span>
                        </div>
                    </Link>
                    <div className="categoriesDropdownContent dropdown-content" id="num1">
                        <Link to={{pathname:'/tim-kiem-bds', state:{type:1, categoryId:1}}} className="categoriesDropdownItem text-text">Căn hộ/Chung cư</Link>
                        <Link to={{pathname:'/tim-kiem-bds', state:{type:1, categoryId:2}}} className="categoriesDropdownItem text-text">Nhà ở</Link>
                        <Link to={{pathname:'/tim-kiem-bds', state:{type:1, categoryId:3}}} className="categoriesDropdownItem text-text">Đất</Link>
                        <Link to={{pathname:'/tim-kiem-bds', state:{type:1, categoryId:4}}} className="categoriesDropdownItem text-text">Văn phòng, Mặt bằng kinh doanh</Link>
                    </div>
                </li>
                <li className="categoriesItem flex" onMouseOver={() => handleMouseOverInLi(2)} onMouseOut={() => handleMouseOutInLi(2)}>
                    <Link aria-label="Mua bán" className="categoriesA flex" to={{pathname:'/tim-kiem-bds', state:{type:2}}}>
                        <div className="flex-img">
                            <img src="https://cdn.chotot.com/admincentre/RS-KMKRI0nk8SihU9EHxMmATr9f6J94Am5GmCQ9JYro/preset:raw/plain/2b376df86babe2fcb516b94cfba8a7cc-2714309445056272716.jpg" className="categoryImg" />
                        </div>
                        <div className="flex flex-col flex-auto flex-text">
                            <span className="categoryText">Cho thuê</span>
                            <span className="categorySubText"><span><b></b> tin đăng cho thuê</span></span>
                        </div>
                    </Link>
                    <div className="categoriesDropdownContent dropdown-content" id="num2">
                        <Link to={{pathname:'/tim-kiem-bds', state:{type:2, categoryId:1}}} className="categoriesDropdownItem text-text">Căn hộ/Chung cư</Link>
                        <Link to={{pathname:'/tim-kiem-bds', state:{type:2,categoryId:2}}} className="categoriesDropdownItem text-text">Nhà ở</Link>
                        <Link to={{pathname:'/tim-kiem-bds', state:{type:2,categoryId:5}}} className="categoriesDropdownItem text-text">Nhà trọ</Link>
                        <Link to={{pathname:'/tim-kiem-bds', state:{type:2,categoryId:4}}} className="categoriesDropdownItem text-text">Văn phòng, Mặt bằng kinh doanh</Link>
                    </div>
                </li>
            </div>
        </div>
    )
}

export default Category;