import React, { useEffect } from "react";
import Slider from "../components/slider.component/slider.component";
import ContainerMain from "../components/container.component/container.component";
import Category from "../components/category.component/category.component";
import Consumer from "../components/consumer.component/consumer.component";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilterPostsForMainLayout } from "../redux/product/productSlice";
import { fetchNews } from "../redux/article/articleSlice";
import LoadingComponent from "../components/loader/LoadingComponent";
import ArticleLayout from "./article-layout/article-layout.component";
import MessengerCustomerChat from 'react-messenger-customer-chat';

import DATA from "../trials/data";
import './main-layout.styles.css';

const MainLayout = ({ children }) => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.product.loading);
    const lstPostPurchase = useSelector(state => state.product.lstPostPurchase);
    const lstPostLease = useSelector(state => state.product.lstPostLease);
    const lstNews = useSelector(state => state.article.newsResponse);
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
        }));
        dispatch(fetchNews({
            page: 1,
            size: 8
        }))
    }, []);
    return (
        <div>
            <ContainerMain className="containerMain">
                {/* <ArticleLayout/> */}
                <Slider />
                <Category />
                <Consumer products={lstPostPurchase} totalArtical='12455' title="Mua bán bất động sản" type="purchase" />
                <MessengerCustomerChat
                    pageId="108923665216134"
                    appId="5429323507132483"
                />
                <Consumer products={lstPostLease} totalArtical='124777' title="Cho thuê bất động sản" type="lease" />
                {
                    lstNews.news ? (
                        <Consumer products={lstNews.news} totalArtical='124777' title="Tin tức bất động sản" type="article" />
                    ) : ('')
                }
            </ContainerMain>
            <LoadingComponent isLoading={loading} />
        </div>
    )
}
export default MainLayout;


