import React, { useState, useEffect } from "react";
import './total-item-layout.styles.css';
import DynamicFilter from "../components/dynamic-filter.component/dynamic-filter.component";
import TotalItemContainer from "../components/total-item-container.component/total-item-container.component";
import ModalFilter from "../../../components/modal-filter/modal-filter";
import DATA from "../../../trials/data";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { useParams } from "react-router";
import { fetchFilterPosts } from "../../../redux/product/productSlice";

const TotalItemLayout = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const Search = location.search;
    const lstPostSearch = useSelector(state => state.product.lstPostSearch);
    const [lstCity, setLstCity] = useState([]);
    const [type, setType] = useState(null);
    const [categoryId,setCategoryId]=useState(null);
    const [isShowModalFilter,setIsShowModalFilter]=useState(false);

    useEffect(() => {
        try {
            setType(location.state.type);
            setCategoryId(location.state.categoryId);
        } catch {

        }
        if (location.pathname == '/tim-kiem-bds') {
            if (type != null) {
                if(categoryId==undefined){
                    dispatch(fetchFilterPosts({
                        PostTypeID: type,
                        Page: 1,
                        Size: 12
                    }))
                }else{
                    dispatch(fetchFilterPosts({
                        PostTypeID: type,
                        Page: 1,
                        Size: 12,
                        CategoryID: categoryId
                    }))
                }
            }
        }
    }, [type])
    useEffect(() => {
        fetch('https://provinces.open-api.vn/api/?depth=3&fbclid=IwAR1OGuDDmUlDdkyoYmh6umuMeiP9PcIGENaOgFsM0vX_6TAju5D8BLUAz9o')
            .then(function (response) {
                if (response.status !== 200) {
                    console.log('Lỗi, mã lỗi ' + response.status);
                    return;
                }
                // parse response data
                response.json().then(data => {
                    setLstCity(data);
                })
            })
    }, [])

    const changeIsShow=()=>{
        setIsShowModalFilter(!isShowModalFilter);
    }
    return (
        // type?(
        <div className="container ct-listing">
            <ModalFilter isShowModalFilter={isShowModalFilter} changeIsShow={changeIsShow}/>
            <DynamicFilter lstCity={lstCity} Search={Search} type={type} categoryId={categoryId} changeIsShow={changeIsShow}/>
            <h1>{props.location.type}</h1>
            <TotalItemContainer lstPostSearch={lstPostSearch} Search={Search} />
        </div>
    )
}
export default TotalItemLayout;