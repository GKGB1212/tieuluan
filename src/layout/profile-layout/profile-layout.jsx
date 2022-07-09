import React, { useEffect } from "react";
import './profile-layout.styles.css';
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchPostByIdUser } from "../../redux/product/productSlice";
import { fetchLike } from "../../redux/likePost/likePostSlice";
import { fetchFollow, fetchCheckFollow } from "../../redux/follows/followsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";
import default_avt from '../../assets/images/default_user.png'

const ProfileLayout = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser)
    const loading = useSelector(state => state.product.loading);
    const post = useSelector(state => state.product.lstPostByUser);
    const lstFollow = useSelector(state => state.follow.lstFollow);
    const lstFollowed = useSelector(state => state.follow.lstFollowed);
    const checkFollow = useSelector(state => state.follow.checkFollow);
    const history = useHistory();
    useEffect(() => {
        if (id) {
            if (currentUser != null) {
                dispatch(fetchPostByIdUser({ id, userCurrentID: currentUser.id }));
                dispatch(fetchCheckFollow({ userCurrentID: currentUser.id, id }))
            }
            else {
                dispatch(fetchPostByIdUser({ id, userCurrentID: '' }));
            }
        }
    }, []);
    const handleClickToPost = (itemId) => {
        history.push(`/products/${itemId}`);
    }
    const handleLike = async (idPost) => {
        if (currentUser == null) {
            history.push('/Login');
        } else {
            await dispatch(fetchLike(idPost));
            dispatch(fetchPostByIdUser({ id, userCurrentID: currentUser.id }));
        }
    }
    const handleFollowClick = async () => {
        if (currentUser == null) {
            history.push('/Login');
        }
        else {
            await dispatch(fetchFollow(id));
            dispatch(fetchCheckFollow({ userCurrentID: currentUser.id, id }));
        }
    }
    return (currentUser == null || (currentUser.id != id)) ? (post ? (
        <div className="main-content">
            <div className="container WrapperContainer">
                <div className="PaperContainer contactInfo false" style={{ paddingTop: "10px" }}>
                    <div className="PaperInfoWrapper">
                        <div className="row">
                            <div className="BasicInfo">
                                <div className="AvatarWrapper">
                                    {
                                        post.avatar != null
                                            ? (
                                                <img size="80" alt={post.name} src={post.avatar} className="imgAvt" />
                                            ) : (
                                                <img size="80" alt={post.name} src={default_avt} className="imgAvt" />
                                            )
                                    }
                                </div>
                                <div className="InfoWrapper">
                                    <span className="name">{post.name}</span>
                                    <div className="FollowRow">
                                        <div style={{ marginRight: "10px" }}><Link to={{ pathname: `/follow/${id}`, state: { type: 1 } }}><b>{post.followedCount}</b> Người theo dõi</Link></div>
                                        <div><Link to={{ pathname: `/followed/${id}`, state: { type: 2 } }}><b>{post.followCount}</b> Đang theo dõi</Link></div>
                                    </div>
                                    {
                                        checkFollow
                                            ? (
                                                <div className="UltiRow">
                                                    <button className="MainFunctionButton Followed" onClick={handleFollowClick}> Hủy theo dõi</button>
                                                </div>
                                            )
                                            : (
                                                <div className="UltiRow">
                                                    <button className="MainFunctionButton Follow" onClick={handleFollowClick}> Theo dõi</button>
                                                </div>
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="indexPage PaperContainer">
                    <div className="PaperWrapper">
                        <h4 className="TitleHeading">Tin đang đăng</h4>
                        <div className="row list">
                            <div className="listt">
                                {
                                    post.posts ?
                                        post.posts.map((item, index) => (
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
                                                                                <h3 className="sc-jKJlTe cUQZyp">{item.title}</h3>
                                                                            </div>
                                                                            <div className="sc-kEYyzF EYiyr">
                                                                                <div itemprop="price" content="4650000000" className="sc-kkGfuU dBCFhH"><span>{item.price} đ</span></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="sc-eHgmQL hNtdWe">
                                                                    <div className="sc-cvbbAY knzJMl">
                                                                        <div className="sc-jDwBTQ SWKJx"><span>Đăng ngày {item.createdDate.split('T')[0].split('-')[2]}-{item.createdDate.split('T')[0].split('-')[1]}-{item.createdDate.split('T')[0].split('-')[0]}</span></div>
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
                                        ))
                                        : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : '') : (<Redirect to={"/user"} />)
}

export default ProfileLayout;