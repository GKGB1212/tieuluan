import React, { useEffect, useState } from "react";
import './profile-current-user-layout.styles.css'
import { fetchPostByCurrentUser, fetchSoldPost } from "../../redux/product/productSlice";
import { setUpSoldPost } from "../../redux/product/productSlice";
import { fetchLike } from "../../redux/likePost/likePostSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import default_avt from '../../assets/images/default_user.png'
import NotifyErrorComponent from "../../components/notify.component/notify.component";

const ProfileCurrentUserLayout = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const loading = useSelector(state => state.product.loading);
    const successChangeSoldPost = useSelector(state => state.product.successChangeSoldPost);
    const post = useSelector(state => state.product.lstPostByUser);
    const [isShowNotify, setIsShowNotify] = useState(false);
    const [titleForBox, setTitleForBox] = useState('');
    const [idToChange, setIdToChange] = useState(null)
    const history = useHistory()
    useEffect(() => {
        dispatch(fetchPostByCurrentUser());
    }, []);
    const handleClickToPost = (itemId) => {
        history.push(`/products/${itemId}`);
    }
    const handleLike = async (id) => {
        if (currentUser == null) {
            history.push('/Login');
        } else {
            await dispatch(fetchLike(id));
            dispatch(fetchPostByCurrentUser());
        }
    }
    const cancel = () => {
        setIdToChange(null);
        setIsShowNotify(false);
    }
    const handleClickChangeStatus = (title, id) => {
        setIsShowNotify(true);
        setTitleForBox(title);
        setIdToChange(id);
    }
    const handleChangeStatusPost = async () => {
        if (idToChange == null) {
            return;
        } else {
            await dispatch(fetchSoldPost(idToChange));
            dispatch(fetchPostByCurrentUser());
            setIdToChange(null);
        }
    }
    useEffect(() => {
        if (successChangeSoldPost == true) {
            setIsShowNotify(false);
            dispatch(setUpSoldPost());
        }
    }, [successChangeSoldPost]);
    const handleConvertPrice = (n) => {
        return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
    return post ? (
        <div className="main-content">
            <div className="container WrapperContainer">
                <div className="PaperContainer contactInfo false" style={{ paddingTop: "10px" }}>
                    <div className="PaperInfoWrapper">
                        <div className="row">
                            <div className="BasicInfo">
                                <div className="AvatarWrapper">
                                    {
                                        currentUser.avatar != "empty"
                                            ? (
                                                <img size="80" alt={post.name} src={currentUser.avatar} className="imgAvt" />
                                            ) : (
                                                <img size="80" alt={post.name} src={default_avt} className="imgAvt" />
                                            )
                                    }
                                </div>
                                <div className="InfoWrapper">
                                    <span class="name">{post.name}</span>
                                    <div className="FollowRow">
                                        <div style={{ marginRight: "10px" }} onClick={() => history.push({ pathname: '/follow', state: { type: 1 } })}><b>{post.followedCount}</b> Người theo dõi</div>
                                        <div onClick={() => history.push({ pathname: "/followed", state: { type: 2 } })}><b>{post.followCount}</b> Đang theo dõi</div>
                                    </div>
                                    <div class="UltiRow">
                                        <button class="MainFunctionButton Follow" onClick={() => history.push('/dashboard/profile')}>Chỉnh sửa thông tin cá nhân</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="indexPage PaperContainer">
                    <div className="PaperWrapper">
                        <h4 class="TitleHeading">Tin đang đăng</h4>
                        <div className="row list">
                            <div className="listt">
                                {
                                    post.postShowing ? (
                                        post.postShowing.length > 0 ?
                                            post.postShowing.map((item, index) => (
                                                <div>
                                                    <div className="listItem">
                                                        <div style={{ marginLeft: "10px" }}>
                                                            <ul className="sc-csuQGl jdmbsx">
                                                                <li>
                                                                    <div onClick={() => { handleClickToPost(item.id) }}>
                                                                        <div className="ctAdItemContainer">
                                                                            <div className="sc-Rmtcm jYrOeG">
                                                                                <div className="sc-kgoBCf dPyyiW">
                                                                                    <div className="sc-kGXeez hDgMYM">
                                                                                        {
                                                                                            item.imageUrls.length > 0
                                                                                                ? (<img alt={item.title} src={item.imageUrls[0]} height="106" loading="lazy" />)
                                                                                                : (<img height="106" loading="lazy" />)
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="sc-bRBYWo enrfhw">
                                                                                <div className="sc-ckVGcZ hXRBzs">
                                                                                    <h3 class="sc-jKJlTe cUQZyp">{item.title}</h3>
                                                                                </div>
                                                                                <div className="sc-kEYyzF EYiyr">
                                                                                    <div itemprop="price" class="sc-kkGfuU dBCFhH"><span>{handleConvertPrice(item.price)} VND</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
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

                                                                            ) : (
                                                                                item.postTypeID == 1 || item.postTypeID == 3
                                                                                    ? (
                                                                                        <div className="divChangeStatus">
                                                                                            <button className="btnChangeStatusOfPost" onClick={() => handleClickChangeStatus(item.title, item.id)}>
                                                                                                Đã bán
                                                                                            </button>
                                                                                        </div>
                                                                                    ) : (
                                                                                        <div className="divChangeStatus">
                                                                                            <button className="btnChangeStatusOfPost" onClick={() => handleClickChangeStatus(item.title, item.id)}>
                                                                                                Đã tìm được
                                                                                            </button>
                                                                                        </div>
                                                                                    )
                                                                            )
                                                                    }
                                                                    <div className="divLike" style={{ marginRight: "20px" }}>

                                                                        <button className="sc-cHGsZl bwQGTK" onClick={() => handleLike(item.id)}>
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
                                            )) : (
                                                <div style={{ padding: "8px 0px 8px 0px", width: "100%" }}>
                                                    <div class="notfound">
                                                        <div class="alert alert-warning">Hiện tại bạn không có tin đang hiện !</div>
                                                    </div>
                                                </div>
                                            ))
                                        : (
                                            <div style={{ padding: "8px 0px 8px 0px", width: "100%" }}>
                                                <div class="notfound">
                                                    <div class="alert alert-warning">Hiện tại bạn không có tin đang hiện !</div>
                                                </div>
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div >
                {/* tin chưa được duyệt */}
                < div className="indexPage PaperContainer" >
                    <div className="PaperWrapper">
                        <h4 class="TitleHeading">Tin chưa được duyệt</h4>
                        <div className="row list">
                            <div className="listt">
                                {
                                    post.postPending ?
                                        post.postPending.length > 0 ?
                                            post.postPending.map((item, index) => (
                                                <div>
                                                    <div className="listItem">
                                                        <div style={{ marginLeft: "10px" }}>
                                                            <ul className="sc-csuQGl jdmbsx">
                                                                <li>
                                                                    <div onClick={() => { handleClickToPost(item.id) }}>
                                                                        <div className="ctAdItemContainer">
                                                                            <div className="sc-Rmtcm jYrOeG">
                                                                                <div className="sc-kgoBCf dPyyiW">
                                                                                    <div className="sc-kGXeez hDgMYM">
                                                                                        {
                                                                                            item.imageUrls.length > 0
                                                                                                ? (<img src={item.imageUrls[0]} height="106" loading="lazy" />)
                                                                                                : (<img height="106" loading="lazy" />)
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="sc-bRBYWo enrfhw">
                                                                                <div className="sc-ckVGcZ hXRBzs">
                                                                                    <h3 class="sc-jKJlTe cUQZyp">{item.title}</h3>
                                                                                </div>
                                                                                <div className="sc-kEYyzF EYiyr">
                                                                                    <div itemprop="price" class="sc-kkGfuU dBCFhH"><span>{handleConvertPrice(item.price)} VND</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="sc-eHgmQL hNtdWe">
                                                                        <div className="sc-cvbbAY knzJMl">
                                                                            <div class="sc-jDwBTQ SWKJx"><span>Đăng ngày {item.createdDate.split('T')[0].split('-')[2]}-{item.createdDate.split('T')[0].split('-')[1]}-{item.createdDate.split('T')[0].split('-')[0]}</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="divChangeStatus">
                                                                        <button className="btnChangeStatusOfPost" onClick={() => history.push(`/chinh-sua/${item.id}`)}>
                                                                            Chỉnh sửa thông tin bài viết
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                            : (
                                                <div style={{ padding: "8px 0px 8px 0px", width: "100%" }}>
                                                    <div class="notfound">
                                                        <div class="alert alert-warning">Hiện tại bạn không có tin chờ duyệt ! !</div>
                                                    </div>
                                                </div>
                                            )
                                        : (
                                            <div style={{ padding: "8px 0px 8px 0px", width: "100%" }}>
                                                <div class="notfound">
                                                    <div class="alert alert-warning">Hiện tại bạn không có tin chờ duyệt ! !</div>
                                                </div>
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div >
                {/* tin bị từ chối */}
                < div className="indexPage PaperContainer" >
                    <div className="PaperWrapper">
                        <h4 class="TitleHeading">Tin bị từ chối</h4>
                        <div className="row list">
                            <div className="listt">
                                {
                                    post.postDenied ?
                                        post.postDenied.length > 0
                                            ?
                                            post.postDenied.map((item, index) => (
                                                <div>
                                                    <div className="listItem">
                                                        <div style={{ marginLeft: "10px" }}>
                                                            <ul className="sc-csuQGl jdmbsx">
                                                                <li>
                                                                    <div onClick={() => { handleClickToPost(item.id) }}>
                                                                        <div className="ctAdItemContainer">
                                                                            <div className="sc-Rmtcm jYrOeG">
                                                                                <div className="sc-kgoBCf dPyyiW">
                                                                                    <div className="sc-kGXeez hDgMYM">
                                                                                        {
                                                                                            item.imageUrls.length > 0
                                                                                                ? (<img alt={item.title} src={item.imageUrls[0]} height="106" loading="lazy" />)
                                                                                                : (<img height="106" loading="lazy" />)
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="sc-bRBYWo enrfhw">
                                                                                <div className="sc-ckVGcZ hXRBzs">
                                                                                    <h3 class="sc-jKJlTe cUQZyp">{item.title}</h3>
                                                                                </div>
                                                                                <div className="sc-kEYyzF EYiyr">
                                                                                    <div itemprop="price" class="sc-kkGfuU dBCFhH"><span>{handleConvertPrice(item.price)} VND</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="sc-eHgmQL hNtdWe">
                                                                        <div className="sc-cvbbAY knzJMl">
                                                                            <div class="sc-jDwBTQ SWKJx"><span>Đăng ngày {item.createdDate.split('T')[0].split('-')[2]}-{item.createdDate.split('T')[0].split('-')[1]}-{item.createdDate.split('T')[0].split('-')[0]}</span></div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            )) : (
                                                <div style={{ padding: "8px 0px 8px 0px", width: "100%" }}>
                                                    <div class="notfound">
                                                        <div class="alert alert-warning">Hiện tại bạn không có tin bị từ chối !</div>
                                                    </div>
                                                </div>
                                            )
                                        : (
                                            <div style={{ padding: "8px 0px 8px 0px", width: "100%" }}>
                                                <div class="notfound">
                                                    <div class="alert alert-warning">Hiện tại bạn không có tin bị từ chối !</div>
                                                </div>
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <NotifyErrorComponent
                isShow={isShowNotify}
                title={titleForBox}
                cancel={cancel}
                handleChangeStatusPost={handleChangeStatusPost}
            />
        </div >
    ) : ''
}

export default ProfileCurrentUserLayout;