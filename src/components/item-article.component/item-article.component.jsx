import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './item-article.styles.css';
import default_news from '../../assets/images/tin-khong-co-hinh.jpg'

const ItemArticle = ({ item }) => {
    return (
        <div className="container-box">
            <Link to={{ pathname: `news/${item.id}` }} className="link-box">
                <div className="box-article">
                    <div className="image">{
                        item.imageUrl ? (
                            <img alt="" src={item.imageUrl} />
                        ) : (
                            <img alt="" src={default_news} />
                        )

                    }
                    </div>
                    <div className="content">
                        <div className="title">
                            {item.title}
                        </div>
                        <div className="details" dangerouslySetInnerHTML={{ __html: item.details }}>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ItemArticle;