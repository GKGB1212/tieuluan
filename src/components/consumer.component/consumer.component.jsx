//component này là cái chứa các item trong trang chủ á
import React, { useEffect, useState } from "react";
import './consumer.styles.css';
import Item from "../item.component/item.component";
import { Link } from "react-router-dom";
// Import hook useDispatch từ react-redux và action updateUsername từ userSlice
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilterPosts } from '../../redux/product/productSlice';

const Consumer = ({ title, totalArtical, type, products }) => {
    const postTypeNumber = useSelector(state => state.product.postTypeNumber);
    return products ? (
        <div class="list">
            <h2 class="consumerTitle">{title}</h2>
            <div class="oneRowContent">
                <div class="gridContent">
                    {
                        products.filter((item, idx) => idx < 15)
                            .map((item) => (
                                <Item key={item.id} item={item} />
                            ))
                    }
                </div>
                <ul class="autoWidth" class="cs-hidden">
                </ul>
            </div>
            <div class="loadMoreWrapper">
                {
                    type == 'purchase'
                        ? (
                            <Link to={{pathname:'/tim-kiem-bds', state:{type:1}}}>
                                Xem tất cả {postTypeNumber.muaBan} tin ➔
                            </Link>
                        )
                        : (
                            <Link to={{pathname:'/tim-kiem-bds', state:{type:2}}}>
                                Xem tất cả {postTypeNumber.thue} tin ➔
                            </Link>
                        )}
            </div>
        </div>
    ) : ''
}

export default Consumer;