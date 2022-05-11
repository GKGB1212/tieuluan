import React, { useEffect } from "react";
import Slider from "../components/slider.component/slider.component";
import ContainerMain from "../components/container.component/container.component";
import Category from "../components/category.component/category.component";
import Consumer from "../components/consumer.component/consumer.component";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilterPostsForMainLayout } from "../redux/product/productSlice";
import LoadingComponent from "../components/loader/LoadingComponent";

import DATA from "../trials/data";
import './main-layout.styles.css';

const MainLayout = ({ children }) => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.product.loading);
    const lstPostPurchase = useSelector(state => state.product.lstPostPurchase);
    const lstPostLease = useSelector(state => state.product.lstPostLease);
    useEffect(() => {
        dispatch(fetchFilterPostsForMainLayout({
            Page: 1,
            Size: 8,
            PostTypeID: 1
        }));
        dispatch(fetchFilterPostsForMainLayout({
            Page: 1,
            Size: 8,
            PostTypeID: 2
        }))
    }, [])
    return (
        <div>
            <ContainerMain>
                <Slider />
                <Category />
                <Consumer products={lstPostPurchase} totalArtical='12455' title="Mua bán bất động sản" type="purchase" />
                <Consumer products={lstPostLease} totalArtical='124777' title="Cho thuê bất động sản" type="lease" />
            </ContainerMain>
            <LoadingComponent isLoading={loading} />
        </div>
    )
}
export default MainLayout;


