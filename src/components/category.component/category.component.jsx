import React from "react";
import './category.styles.css';

const Category = () => {
    const handleMouseOverInLi = (num) => {
        num === 1 ? document.getElementById("num1").style.display = 'block' : document.getElementById("num2").style.display = 'block';
    }
    const handleMouseOutInLi = (num) => {
        num === 1 ? document.getElementById("num1").style.display = 'none' : document.getElementById("num2").style.display = 'none';
    }
    return (
        <div class="category">
            <h1 class="Categories__Title-sc-1fgp6wm-1 eBxpbB">Khám phá danh mục Bất động sản</h1>
            <div class="Categories__WrapperCat">
                <li class="categoriesItem flex" onMouseOver={() => handleMouseOverInLi(1)} onMouseOut={() => handleMouseOutInLi(1)}>
                    <a aria-label="Mua bán" class="categoriesA flex" href="https://nha.chotot.com/tp-ho-chi-minh/quan-go-vap/mua-ban-bat-dong-san">
                        <div class="flex-img">
                            <img src="https://cdn.chotot.com/admincentre/jRbB3FhWaCaimgTxbQOddBx1Ihs0ZKSTdPSvgIY4LzA/preset:raw/plain/263e0d636a0c4c504e2023d70b0890c3-2714331825079252180.jpg" class="categoryImg" />
                        </div>
                        <div class="flex flex-col flex-auto flex-text">
                            <span class="categoryText">Mua bán</span>
                            <span class="categorySubText"><span><b>114.795</b> tin đăng mua bán</span></span>
                        </div>
                    </a>
                    <div class="categoriesDropdownContent dropdown-content" id="num1">
                        <a href="https://nha.chotot.com/tp-ho-chi-minh/quan-go-vap/mua-ban-can-ho-chung-cu" class="categoriesDropdownItem text-text">Căn hộ/Chung cư</a>
                        <a href="https://nha.chotot.com/tp-ho-chi-minh/quan-go-vap/mua-ban-nha-dat" class="categoriesDropdownItem text-text">Nhà ở</a>
                        <a href="https://nha.chotot.com/tp-ho-chi-minh/quan-go-vap/mua-ban-dat" class="categoriesDropdownItem text-text">Đất</a>
                        <a href="https://nha.chotot.com/tp-ho-chi-minh/quan-go-vap/sang-nhuong-van-phong-mat-bang-kinh-doanh" class="categoriesDropdownItem text-text">Văn phòng, Mặt bằng kinh doanh</a>
                    </div>
                </li>
                <li class="categoriesItem flex" onMouseOver={() => handleMouseOverInLi(2)} onMouseOut={() => handleMouseOutInLi(2)}>
                    <a aria-label="Mua bán" class="categoriesA flex" href="https://nha.chotot.com/tp-ho-chi-minh/quan-go-vap/mua-ban-bat-dong-san">
                        <div class="flex-img">
                            <img src="https://cdn.chotot.com/admincentre/RS-KMKRI0nk8SihU9EHxMmATr9f6J94Am5GmCQ9JYro/preset:raw/plain/2b376df86babe2fcb516b94cfba8a7cc-2714309445056272716.jpg" class="categoryImg" />
                        </div>
                        <div class="flex flex-col flex-auto flex-text">
                            <span class="categoryText">Cho thuê</span>
                            <span class="categorySubText"><span><b>114.795</b> tin đăng cho thuê</span></span>
                        </div>
                    </a>
                    <div class="categoriesDropdownContent dropdown-content" id="num2">
                        <a href="https://nha.chotot.com/tp-ho-chi-minh/quan-go-vap/mua-ban-can-ho-chung-cu" class="categoriesDropdownItem text-text">Căn hộ/Chung cư</a>
                        <a href="https://nha.chotot.com/tp-ho-chi-minh/quan-go-vap/mua-ban-nha-dat" class="categoriesDropdownItem text-text">Nhà ở</a>
                        <a href="https://nha.chotot.com/tp-ho-chi-minh/quan-go-vap/mua-ban-dat" class="categoriesDropdownItem text-text">Đất</a>
                        <a href="https://nha.chotot.com/tp-ho-chi-minh/quan-go-vap/sang-nhuong-van-phong-mat-bang-kinh-doanh" class="categoriesDropdownItem text-text">Văn phòng, Mặt bằng kinh doanh</a>
                    </div>
                </li>
            </div>
        </div>
    )
}

export default Category;