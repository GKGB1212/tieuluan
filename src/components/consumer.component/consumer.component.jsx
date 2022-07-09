//component này là cái chứa các item trong trang chủ á
import React, { useEffect, useState } from "react";
import './consumer.styles.css';
import Item from "../item.component/item.component";
import { Link } from "react-router-dom";
// Import hook useDispatch từ react-redux và action updateUsername từ userSlice
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilterPosts } from '../../redux/product/productSlice';
import ItemArticle from "../item-article.component/item-article.component";

const Consumer = ({ title, totalArtical, type, products }) => {
    const postTypeNumber = useSelector(state => state.product.postTypeNumber);
    return products ? (
        <div className="list">
            <h2 className="consumerTitle">{title}</h2>
            <div className="oneRowContent">
                <div className="gridContent" style={{ padding: "0 5px" }}>
                    {
                        type == 'article' ? (
                            products.filter((item, idx) => idx < 15)
                                .map((item) => (
                                    <ItemArticle key={item.id} item={item} />
                                ))
                        ) : (
                            products.filter((item, idx) => idx < 15)
                                .map((item) => (
                                    <Item key={item.id} item={item} />
                                ))
                        )
                    }
                </div>
                <ul className="autoWidth">
                </ul>
            </div>
            <div className="loadMoreWrapper">
                {
                    type == 'purchase'
                        ? (
                            <Link to={{ pathname: '/tim-kiem-bds', state: { type: 1 } }}>
                                Xem tất cả {postTypeNumber.muaBan} tin ➔
                            </Link>
                        )
                        : type == 'article' ? (
                            <Link to={{ pathname: '/all-article' }}>
                                Xem thêm các bài khác ➔
                            </Link>
                        ) : (<Link to={{ pathname: '/tim-kiem-bds', state: { type: 2 } }}>
                            Xem tất cả {postTypeNumber.thue} tin ➔
                        </Link>)}
            </div>
        </div>
    ) : ''
}

export default Consumer;