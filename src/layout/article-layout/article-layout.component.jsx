import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchNewByID } from "../../redux/article/articleSlice";
import './article-layout.styles.css'
const ArticleLayout = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const article = useSelector(state => state.article.new);
    useEffect(() => {
        dispatch(fetchNewByID(id));
    }, []);
    useEffect(() => {
        console.log("Bài viết",article)
    }, [article]);
    const formatDateTimeDDmmYYYY=function(date) {
        const dateTime = updateDateTime(date);
    
        let dateString = `${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()}`;
        return dateString
    }
    const updateDateTime=function(date) {
        try {
            const dateTime = new Date(date);
    
            return dateTime;
        }
        catch {
            return new Date();
        }
    }
    return (
        article ? (
            <div className="article">
                <div className="wrapper">
                    <div className="title_page">
                        <div className="container-article">
                            <div className="row justify-content-center-article">
                                <div className="col"><p id="breadcrumb_site">
                                    <span><span><a>Tin nổi bật</a></span></span></p>
                                    <h1 className="text-center fs-32 ff-bold">{article.title}</h1>
                                    <div className="description_info cl-gray text-center">{formatDateTimeDDmmYYYY(article.createdDate)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-article">
                        <div className="container-article">
                            <div className="row justify-content-center-article">
                                <div className="col" dangerouslySetInnerHTML={{ __html: article.details }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : ('')
    );
}
export default ArticleLayout;

















