import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNews } from "../../redux/article/articleSlice";
import './all-article-layout.style.css'
import default_news from '../../assets/images/tin-khong-co-hinh.jpg'
const AllArticleLayout = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const article = useSelector(state => state.article.newsResponse);
    const onChangePage = (pageNumber) => {
        setCurrentPage(pageNumber)
        dispatch(fetchNews({
            page: pageNumber,
            size: 7
        }));
    }
    useEffect(() => {
        dispatch(fetchNews({
            page: 1,
            size: 7
        }));
    }, [])
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
    const convertToPlain=function(html){

        // Create a new div element
        var tempDivElement = document.createElement("div");
    
        // Set the HTML content with the given value
        tempDivElement.innerHTML = html;
    
        // Retrieve the text property of the element 
        return tempDivElement.textContent || tempDivElement.innerText || "";
    }
    return article ? (
        <div className="">
            <div className="title_page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div>
                            <h1 className="text-center fs-32 ff-bold">Tin Tức Bất Động Sản</h1>
                            <div className="description_info text-center">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                article.news && article.news.length ? (
                    <div className="content_page">
                        <div className="post_featured">
                            <div className="container">
                                <div className="item_post">
                                    <Link to={{ pathname: `/news/${article.news[0].id}` }}>
                                        <div className="row"><div className="col-md-6">
                                            {
                                                article.news[0].imageUrl ? (
                                                    <img width="768" height="576" className="img-fluid wp-post-image wp-stateless-item" sizes="(max-width: 768px) 100vw, 768px" data-image-size="medium_large" alt="" src={article.news[0].imageUrl} />
                                                ) : (
                                                    <img width="768" height="576" className="img-fluid wp-post-image wp-stateless-item" sizes="(max-width: 768px) 100vw, 768px" data-image-size="medium_large" alt="" src={default_news} />
                                                )

                                            }                                        </div>
                                            <div className="col-md-6"><div className="post_meta">
                                                <h3 className="title_post fs-24 ff-bold">{article.news[0].title}</h3>
                                            </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="post_ab" style={{ width: "100%", top: "75.8375px" }}>
                                        <div className="row"><div className="col-md-6">
                                        </div><div className="col-md-6">
                                                <div className="post_meta">
                                                    <div className="excerpt_info">
                                                        <div className="d-none d-md-block">
                                                            {convertToPlain(article.news[0].details)}
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li>{formatDateTimeDDmmYYYY(article.news[0].createdDate)}</li>
                                                    </ul>
                                                    <hr className="d-none d-md-block" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list_post">
                            <div className="container">
                                <div style={{ marginLeft: "30px", marginRight: "30px" }}>
                                    <div>
                                        <div className="cate_group">
                                            {
                                                article.news.map((x) => (
                                                    <div className="item_post">
                                                        <Link to={{ pathname: `/news/${x.id}` }}>
                                                            <div className="row">
                                                                <div className="order-md-1">
                                                                    <div className="post_meta">
                                                                        <div className="title_post fs-18 ff-bold">
                                                                            {x.title}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-4 col-md-5 order-md-0 item_imgbox">
                                                                    {
                                                                        x.imageUrl ? (
                                                                            <img width="500" height="375" className="img-fluid wp-post-image wp-stateless-item" sizes="(max-width: 768px) 100vw, 768px" data-image-size="medium_large" alt="" src={x.imageUrl} />
                                                                        ) : (
                                                                            <img width="500" height="375" className="img-fluid wp-post-image wp-stateless-item" sizes="(max-width: 768px) 100vw, 768px" data-image-size="medium_large" alt="" src={default_news} />
                                                                        )

                                                                    }
                                                                    {/* <img width="500" height="375" src="https://static.chotot.com/storage/chotot-kinhnghiem/nha/2022/06/80681bee-kinh-nghiem-dau-tu-nha-cho-thue-1-500x375.webp" className="img-fluid wp-post-image wp-stateless-item" alt="8 kinh nghiệm đầu tư nhà cho thuê an toàn, hiệu quả" loading="lazy" srcset="https://static.chotot.com/storage/chotot-kinhnghiem/nha/2022/06/80681bee-kinh-nghiem-dau-tu-nha-cho-thue-1-500x375.webp 500w, https://static.chotot.com/storage/chotot-kinhnghiem/nha/2022/06/80681bee-kinh-nghiem-dau-tu-nha-cho-thue-1-768x576.webp 768w, https://static.chotot.com/storage/chotot-kinhnghiem/nha/2022/06/80681bee-kinh-nghiem-dau-tu-nha-cho-thue-1.webp 800w" sizes="(max-width: 500px) 100vw, 500px" data-image-size="medium" data-stateless-media-bucket="static-chotot-com" data-stateless-media-name="storage/chotot-kinhnghiem/nha/2022/06/80681bee-kinh-nghiem-dau-tu-nha-cho-thue-1.webp" /> */}
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <div className="post_ab">
                                                            <div className="row">
                                                                <div className="order-md-1">
                                                                    <div className="post_meta">
                                                                        <div className="">
                                                                            <div className="excerpt_info">
                                                                                <div className="d-none d-md-block">{convertToPlain(article.news[0].details)}</div></div><ul><li>{formatDateTimeDDmmYYYY(x.createdDate)}</li></ul></div></div></div><div className="col-4 col-md-5 order-md-0 item_imgbox"></div></div></div>
                                                    </div>
                                                ))
                                            }
                                             <Pagination
                activePage={currentPage}
                itemsCountPerPage={7}
                totalItemsCount={article.totalSize}
                pageRangeDisplayed={5}
                onChange={(pageNumber) => onChangePage(pageNumber)}
            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ('')
            }
        </div>
    ) : ('');
}
export default AllArticleLayout;

















