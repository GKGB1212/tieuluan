import React, { useEffect, useState } from "react";
import './header.styles.css';
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilterPosts } from "../../redux/product/productSlice";
import { setUp, signOut } from "../../redux/user/userSlice";
import DropDownMenu from '../drop-downmenu.component/drop-downmenu.component';
import LikeAndShare from "../likeAndShare.component/likeAndShare.component";
import $ from 'jquery';
const HeaderM = () => {
    const [Search, setSearch] = useState('');
    const [hidden, sethHidden] = useState(true);
    const [isShowNotification, setIsShowNotification] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const lstNotification = useSelector(state => state.report.lstNotification);
    const goBackHome = () => {
        history.push('/')
    }
    const handleClickSearch = () => {
        dispatch(fetchFilterPosts({
            Search,
            Page: 1,
            Size: 12
        }));
        history.push({
            pathname: `/tim-kiem-bds`,
            search: Search
        })
    }

    $(document).ready(function () {
        $("#notification_Link").on(function () {
            $("#notification_Wrapper").fadeToggle(300, 'swing', function () {
                $(this).css('background-color', 'red');
            });
            $("#notification_Count").fadeOut("slow");
            return false;
        });

        //Document Click
        $(document).on(function () {
            $("#notification_Wrapper").show();
        });
        //Popup Click
        $("#notification_Wrapper").on(function () {
            return false
        });

    });


    const loadScript = () => {
        let script = document.createElement("script");
        script.setAttribute("crossOrigin", "anonymous");
        script.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v14.0&appId=751765995874748&autoLogAppEvents=1";
        script.setAttribute("nonce", "EvjOQPuH");
        script.type = "text/javascript";
        document.body.append(script);
    }

    useEffect(loadScript, [])



    return (
        <>

            <section className="header">
                <div className="nav">
                    <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Real-Estate-Logo-Design-PNG-Transparent.png" alt="" onClick={goBackHome} />
                    <div className="nav-links">
                        <ul>
                            <li><Link to='/'><i className="fa fa-home" aria-hidden="true"></i> Trang chủ</Link></li>
                            {currentUser != null
                                ? (<li><Link to="/postssaved"><i className="fa fa-user-o" aria-hidden="true"></i> Tin yêu thích</Link></li>)
                                : (<li><Link to="/Login"><i className="fa fa-user-o" aria-hidden="true"></i> Tin yêu thích</Link></li>)}
                            <li onClick={() => sethHidden(!hidden)}><i className="fa fa-ellipsis-h" aria-hidden="true"></i> Thêm</li>
                            {currentUser != null
                                ? (<li id="notification_li" className="li-notification"><i className="fa"></i>
                                    <span id="notification_Count">3</span>
                                    <a href="#" id="notification_Link" onClick={() => setIsShowNotification(!isShowNotification)}>Thông báo</a>
                                    <div id="notification_Wrapper" style={isShowNotification ? { display: 'block' } : { display: 'none' }}>
                                        <div id="notificationTitle">THÔNG BÁO</div>
                                        <div id="notificationsBody style-2" className="notifications scrollbar">
                                            <div className="label_type"><div className="">Chưa xem</div></div>
                                            {
                                                lstNotification.filter((item) => !item.status).map((notify) => (
                                                    <Link to={{ to: `products/${notify.postID}` }} onClick={() => setIsShowNotification(false)}>
                                                        <div className="notification_container" role="button" tabindex="-1">
                                                            <div className="notification_img_container">
                                                                <div className="RR-M- " aria-disabled="true" role="button" tabindex="-1">
                                                                    <canvas className="CfWVH" height="68" width="68">
                                                                    </canvas>
                                                                    <img alt="notifi" className="img_notification" src="data:image/png;base64,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" />
                                                                </div>
                                                            </div>
                                                            <div className="notification_detail_container">
                                                                <div className="vy6Bb">Bài viết của bạn bị báo cáo với nội dung '{notify.content}'</div>
                                                                <time className="HsXaJ" datetime={notify.createdDate}>{notify.createdDate}</time>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))
                                            }
                                            <hr className="W4P49"></hr>
                                            <div className="label_type"><div className="">Đã xem</div></div>
                                            {
                                                lstNotification.filter((item) => item.status).map((notify) => (
                                                    <Link to={{ pathname: `products/${notify.postID}` }} onClick={() => setIsShowNotification(false)}>
                                                        <div className="notification_container" role="button" tabindex="-1">
                                                            <div className="notification_img_container">
                                                                <div className="RR-M- " aria-disabled="true" role="button" tabindex="-1">
                                                                    <canvas className="CfWVH" height="68" width="68">
                                                                    </canvas>
                                                                    <img alt="notifi" className="img_notification" src="data:image/png;base64,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" />
                                                                </div>
                                                            </div>
                                                            <div className="notification_detail_container">
                                                                <div className="vy6Bb">Bài viết của bạn bị báo cáo với nội dung '{notify.content}'</div>
                                                                <time className="HsXaJ" datetime={notify.createdDate}>{notify.createdDate}</time>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                        <div id="notificationFooter"><a href="#">Hiển thị tất cả</a></div>
                                    </div>

                                </li>)
                                : ('')}
                        </ul>
                    </div>
                </div>
                <div className="info">
                    <div className="search">
                        <div className="search-container">

                            <input type="text" placeholder="Tìm kiếm bất động sản" name="search" className="inputSearch" value={Search} onChange={(e) => setSearch(e.target.value)} />
                            <button type="submit" onClick={handleClickSearch}><i className="fa fa-search"></i></button>
                        </div>
                        {/* <div className="s116vlok">
                            <div value="" className="a1ywrhtc">
                                <button aria-label="Search Button Desktop" className="btnSearch" onClick={handleClickSearch}>
                                    <svg xmlns="http://www.w3.org/2000/svg" data-type="monochrome" viewBox="0 0 16 16" width="1em" height="1em" fill="none">
                                        <path fill="currentColor" d="M6.4 0a6.369 6.369 0 00-4.525 1.873A6.425 6.425 0 00.502 3.906v.002A6.383 6.383 0 000 6.398a6.372 6.372 0 001.875 4.524 6.385 6.385 0 008.428.537l-.006.006 4.295 4.293a.827.827 0 001.166-1.166l-4.295-4.295a6.368 6.368 0 00-.537-8.424A6.372 6.372 0 006.4 0zm0 1.615a4.75 4.75 0 013.383 1.4c.44.44.785.95 1.028 1.522h-.002c.249.59.377 1.214.377 1.861 0 .648-.128 1.27-.377 1.862h.002a4.783 4.783 0 01-2.55 2.545c-.59.25-1.213.377-1.86.377a4.761 4.761 0 01-1.864-.377A4.749 4.749 0 013.016 9.78c-.44-.44-.783-.95-1.024-1.521a4.735 4.735 0 01-.377-1.862c0-.647.127-1.272.377-1.863a4.75 4.75 0 011.024-1.52 4.754 4.754 0 013.384-1.4z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <input autocomplete="off" value={Search} onChange={(e) => setSearch(e.target.value)} placeholder="Tìm kiếm bất động sản" id="__inputItemProps" type="text" className="t1o0834r" />
                        </div> */}
                    </div>
                    {
                        currentUser != null
                            ? (
                                <Link to="/user">
                                    <div className="login">
                                        {
                                            currentUser.avatar != "empty" ? (
                                                <img className="appWrapper-Header-icon-circle appWrapper-Header-icon-circle-avatar" src={currentUser.avatar} alt={currentUser.name} />
                                            ) : (
                                                <img className="appWrapper-Header-icon-circle appWrapper-Header-icon-circle-avatar" src="http://365.chotot.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" alt={currentUser.name} />
                                            )
                                        }
                                        <div><Link to='/user'>{currentUser.name}</Link></div>
                                    </div>
                                </Link>
                            ) : (
                                <Link to="/Login">
                                    <div className="login">
                                        <div className="fa fa-user-circle-o" ></div><div><Link to='/Login'>Đăng nhập</Link></div>
                                    </div>
                                </Link>
                            )
                    }
                    <Link to="/PostCreate" className="btn"><i className="fa fa-pencil-square-o" ></i>ĐĂNG TIN</Link>
                </div>
                {
                    hidden ?
                        null :
                        <DropDownMenu setHidden={sethHidden} />
                }
            </section>
        </>
    );
}

export default HeaderM;