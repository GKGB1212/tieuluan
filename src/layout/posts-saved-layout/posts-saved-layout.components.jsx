import React, { useEffect, useState } from "react";
import './posts-saved-layout.styles.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetPostLiked, fetchLike } from "../../redux/likePost/likePostSlice";
import { Redirect } from "react-router-dom";
import NotifyErrorComponent from "../../components/notify.component/notify.component";
import LoadingComponent from "../../components/loader/LoadingComponent";

const PostsSaved = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const lstPostLike = useSelector(state => state.likePost.lstPostLike);
    const loading = useSelector(state => state.likePost.loading);
    const [isShowNotify, setIsShowNotify] = useState(false);
    const [titleForBox, setTitleForBox] = useState('');
    const [idToChange, setIdToChange] = useState(null)
    useEffect(() => {
        dispatch(fetchGetPostLiked());
    }, [])
    const cancel = () => {
        setIdToChange(null);
        setIsShowNotify(false);
    }
    const handleLike = async () => {
        if (idToChange == null) {
            return;
        } else {
            await dispatch(fetchLike(idToChange))
            await dispatch(fetchGetPostLiked());
            setIdToChange(null);
            setIsShowNotify(false);
        }
    }
    const handleClickUnLike = (title, id) => {
        setIsShowNotify(true);
        setTitleForBox(title);
        setIdToChange(id);
    }
    return currentUser ? (
        <div className="main-content">
            <div className="container WrapperContainer">
                <div className="indexPage PaperContainer">
                    <div className="PaperWrapper">
                        <h4 class="TitleHeading">Tin đã lưu</h4>
                        <div className="row list">
                            <div className="listt">
                                {lstPostLike && lstPostLike.length > 0 ? (
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
                                                                                    item.imageUrls.length > 0 ? (
                                                                                        <img src={item.imageUrls[0]} alt={item.title} height="106" loading="lazy" />
                                                                                    ) : (
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
                                                                    <div class="sc-jDwBTQ SWKJx"><span>Đăng ngày {item.createdDate.split('T')[0].split('-')[2]}-{item.createdDate.split('T')[0].split('-')[1]}-{item.createdDate.split('T')[0].split('-')[0]}</span></div>
                                                                </div>
                                                            </div>
                                                            {
                                                                item.isSold
                                                                    ? (
                                                                        item.postTypeID == 1 || item.postTypeID == 3
                                                                            ? (
                                                                                <div className="divChangeStatus">
                                                                                    <div className="divSold">
                                                                                        Đã bán
                                                                                    </div>
                                                                                </div>
                                                                            ) : (
                                                                                <div className="divChangeStatus">
                                                                                    <div className="divSold">
                                                                                        Đã tìm được
                                                                                    </div>
                                                                                </div>
                                                                            )

                                                                    ) : ('')
                                                            }
                                                            <div className="divLike" style={{ marginRight: "20px" }}>
                                                                <button className="sc-cHGsZl bwQGTK" onClick={() => handleClickUnLike(item.title,item.id)}>
                                                                    {
                                                                        item.like == true ? (
                                                                            <img width="20" src="https://static.chotot.com.vn/storage/adType/adItem/heart-active.png" alt="unlike" />
                                                                        ) : (
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
                                )
                                    : (<div style={{ width: "100%" }}>
                                        <div class="notfound">
                                            <div class="alert alert-warning">
                                                <img src="https://static.chotot.com/storage/empty_state/desktop/search_no_found_keyword.png" alt="PageNotFound" loading="lazy" height="200px" width="400px" /><br />
                                                <b>Bạn chưa lưu tin đăng nào!</b><br />
                                                Hãy bấm nút ❤ ở tin đăng để lưu và xem lại sau.</div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NotifyErrorComponent
                isShow={isShowNotify}
                title={titleForBox}
                cancel={cancel}
                handleChangeStatusPost={handleLike}
            />
            <LoadingComponent isLoading={loading}/>
        </div>
    ) : (<Redirect to={"/Login"} />)
}

export default PostsSaved;