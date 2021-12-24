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
        console.log(postTypeNumber)
        dispatch(fetchGetPostTypeNumber())
    },[]);
    useEffect(()=>{
        console.log(postTypeNumber)
    },[postTypeNumber]);
    const handleMouseOverInLi = (num) => {
        num === 1 ? document.getElementById("num1").style.display = 'block' : document.getElementById("num2").style.display = 'block';
    }
    const handleMouseOutInLi = (num) => {
        num === 1 ? document.getElementById("num1").style.display = 'none' : document.getElementById("num2").style.display = 'none';
    }
    return (
        <div class="category">
            <h1 class="Categories__Title-sc-1fgp6wm-1 eBxpbB">Khám phá danh mục bất động sản</h1>
            <div class="Categories__WrapperCat">
                <li class="categoriesItem flex" onMouseOver={() => handleMouseOverInLi(1)} onMouseOut={() => handleMouseOutInLi(1)}>
                    <Link aria-label="Mua bán" class="categoriesA flex" to={{pathname:'/tim-kiem-bds', state:{type:1}}}>
                        <div class="flex-img">
                            <img src="https://cdn.chotot.com/admincentre/jRbB3FhWaCaimgTxbQOddBx1Ihs0ZKSTdPSvgIY4LzA/preset:raw/plain/263e0d636a0c4c504e2023d70b0890c3-2714331825079252180.jpg" class="categoryImg" />
                        </div>
                        <div class="flex flex-col flex-auto flex-text">
                            <span class="categoryText">Mua bán</span>
                            <span class="categorySubText"><span><b>{postTypeNumber.muaBan}</b> tin đăng mua bán</span></span>
                        </div>
                    </Link>
                    <div class="categoriesDropdownContent dropdown-content" id="num1">
                        <Link to={{pathname:'/tim-kiem-bds', state:{type:1, categoryId:1}}} class="categoriesDropdownItem text-text">Căn hộ/Chung cư</Link>
                        <Link to={{pathname:'/tim-kiem-bds', state:{type:1, categoryId:2}}} class="categoriesDropdownItem text-text">Nhà ở</Link>
                        <Link to={{pathname:'/tim-kiem-bds', state:{type:1, categoryId:3}}} class="categoriesDropdownItem text-text">Đất</Link>
                        <Link to={{pathname:'/tim-kiem-bds', state:{type:1, categoryId:4}}} class="categoriesDropdownItem text-text">Văn phòng, Mặt bằng kinh doanh</Link>
                    </div>
                </li>
                <li class="categoriesItem flex" onMouseOver={() => handleMouseOverInLi(2)} onMouseOut={() => handleMouseOutInLi(2)}>
                    <Link aria-label="Mua bán" class="categoriesA flex" to={{pathname:'/tim-kiem-bds', state:{type:2}}}>
                        <div class="flex-img">
                            <img src="https://cdn.chotot.com/admincentre/RS-KMKRI0nk8SihU9EHxMmATr9f6J94Am5GmCQ9JYro/preset:raw/plain/2b376df86babe2fcb516b94cfba8a7cc-2714309445056272716.jpg" class="categoryImg" />
                        </div>
                        <div class="flex flex-col flex-auto flex-text">
                            <span class="categoryText">Cho thuê</span>
                            <span class="categorySubText"><span><b>{postTypeNumber.thue}</b> tin đăng cho thuê</span></span>
                        </div>
                    </Link>
                    <div class="categoriesDropdownContent dropdown-content" id="num2">
                        <Link to={{pathname:'/tim-kiem-bds', state:{type:2, categoryId:1}}} class="categoriesDropdownItem text-text">Căn hộ/Chung cư</Link>
                        <Link to={{pathname:'/tim-kiem-bds', state:{type:2,categoryId:2}}} class="categoriesDropdownItem text-text">Nhà ở</Link>
                        <Link to={{pathname:'/tim-kiem-bds', state:{type:2,categoryId:5}}} class="categoriesDropdownItem text-text">Nhà trọ</Link>
                        <Link to={{pathname:'/tim-kiem-bds', state:{type:2,categoryId:4}}} class="categoriesDropdownItem text-text">Văn phòng, Mặt bằng kinh doanh</Link>
                    </div>
                </li>
            </div>
        </div>
    )
}

export default Category;