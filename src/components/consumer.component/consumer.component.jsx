//component này là cái chứa các item trong trang chủ á
import React,{useEffect,useState} from "react";
import './consumer.styles.css';
import Item from "../item.component/item.component";
import { Link } from "react-router-dom";
// Import hook useDispatch từ react-redux và action updateUsername từ userSlice
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts} from '../../redux/product/productSlice';

const Consumer = ({ title, totalArtical,type}) => {
    const dispatch = useDispatch();
    const products=useSelector(state => state.product.products);
    const newTo = {
        pathname: "/totalItem",
        type
      };
    useEffect(()=>{
        console.log(products.length)
        dispatch(fetchPosts());
    },[])
    return products.posts?(
        <div class="list">
            <h2 class="consumerTitle">{title}</h2>
            <div class="oneRowContent">
                <div class="gridContent">
                    {
                        products.posts.filter((item, idx) => idx < 15)
                            .map((item) => (
                                <Item key={item.id} item={item} />
                            ))
                    }

                </div>
                <ul class="autoWidth" class="cs-hidden">
                </ul>
            </div>
            <div class="loadMoreWrapper">
            <Link to={newTo}>
                    Xem thêm {products.totalSize} tin khác
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18">
                        <g fill="none" fill-rule="evenodd">
                            <path stroke="#38699F" stroke-linecap="round" stroke-width="1.5" d="M1.125 3L6.75 8 1.125 13" transform="translate(1 1)">
                            </path>
                            <path stroke="#FFF" stroke-width=".1" d="M0 0H9V16H0z" opacity=".01" transform="translate(1 1)">
                            </path>
                        </g>
                    </svg>
                </Link>
            </div>
        </div>
    ):''
}

export default Consumer;