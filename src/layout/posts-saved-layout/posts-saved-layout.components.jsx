import React, { useEffect, useState } from "react";
import './posts-saved-layout.styles.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetPostLiked,fetchLike } from "../../redux/likePost/likePostSlice";
import { Redirect } from "react-router-dom";

const PostsSaved = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const lstPostLike = useSelector(state => state.likePost.lstPostLike);
    useEffect(() => {
        dispatch(fetchGetPostLiked());
    }, [])
    const handleLike=async(id)=>{
        await dispatch(fetchLike(id))
        await dispatch(fetchGetPostLiked());
    }
    return currentUser ? (
        <div className="main-content">
            <div className="container WrapperContainer">
                <div className="indexPage PaperContainer">
                    <div className="PaperWrapper">
                        <h4 class="TitleHeading">Tin đã lưu</h4>
                        <div className="row list">
                            <div className="listt">
                                {
                                    lstPostLike.map((item) => (
                                        <div>
                                            <div className="listItem">
                                                <div style={{ marginLeft: "10px" }}>
                                                    <ul className="sc-csuQGl jdmbsx">
                                                        <li>
                                                            <Link to={{ pathname: `products/${item.id}` }}>
                                                                <div className="ctAdItemContainer">
                                                                    <div className="sc-Rmtcm jYrOeG">
                                                                        <div className="sc-kgoBCf dPyyiW">
                                                                            <div className="sc-kGXeez hDgMYM">
                                                                                {
                                                                                    item.imageUrls.length>0?(
                                                                                        <img src={item.imageUrls[0]} alt={item.title} height="106" loading="lazy" />
                                                                                    ):(
                                                                                        <img src="https://pinklotus.vn/wp-content/uploads/2019/04/bat-dong-san.jpg" alt={item.title} height="106" loading="lazy" />
                                                                                    )
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="sc-bRBYWo enrfhw">
                                                                        <div className="sc-ckVGcZ hXRBzs">
                                                                            <h3 class="sc-jKJlTe cUQZyp">{item.title}</h3>
                                                                        </div>
                                                                        <div className="sc-kEYyzF EYiyr">
                                                                            <div itemprop="price" content="4650000000" class="sc-kkGfuU dBCFhH"><span>{item.price} đ</span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                            <div className="sc-eHgmQL hNtdWe">
                                                                <div className="sc-cvbbAY knzJMl">
                                                                    <div class="sc-jDwBTQ SWKJx"><span title="26 phút trước">{item.createdDate}</span></div>
                                                                </div>
                                                            </div>
                                                            <div className="divLike" style={{ marginRight: "20px" }}>
                                                                <button className="sc-cHGsZl bwQGTK" onClick={()=>handleLike(item.id)}>
                                                                    {
                                                                        item.like==true?(
                                                                            <img width="20" src="https://static.chotot.com.vn/storage/adType/adItem/heart-active.png" alt="unlike" />
                                                                        ):(
                                                                            <img width="20" src="https://static.chotot.com.vn/storage/adType/adItem/heart.png" alt="like" />
                                                                        )
                                                                    }
                                                                </button>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (<Redirect to={"/Login"} />)
}

export default PostsSaved;