import React, { useState } from "react";
import './index.css';
// Import hook useDispatch từ react-redux và action updateUsername từ userSlice
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from "./redux/product/productSlice";

const Imagess = () => {
    const dispatch = useDispatch();
    const onImageChange = (event) => {
        dispatch(fetchPosts());
    }

    return (
        <div>
        <h1>hhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h1>
        <button onClick={onImageChange}>button</button>
        </div>
    )
}
export default Imagess;