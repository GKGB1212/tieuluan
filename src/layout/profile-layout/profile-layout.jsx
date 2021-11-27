import React from "react";
import './profile-layout.styles.css';
import { Link } from "react-router-dom";

const ProfileLayout = () => {
    return (
        <div className="main-content">
            <div className="container WrapperContainer">
                <div className="PaperContainer contactInfo false" style={{paddingTop:"10px"}}>
                    <div className="PaperInfoWrapper">
                        <div className="row">
                            <div className="BasicInfo">
                                <div className="AvatarWrapper">
                                    <img size="80" alt="Minh Tùng" src="https://cdn.chotot.com/uac2/2839754" className="imgAvt" />
                                </div>
                                <div className="InfoWrapper">
                                    <span class="name">Minh Tùng</span>
                                    <div className="FollowRow">
                                        <div style={{ marginRight: "10px" }}><b>1</b> Người theo dõi</div>
                                        <div><b>1</b> Đang theo dõi</div>
                                    </div>
                                    <div class="UltiRow">
                                        <button class="MainFunctionButton Follow"> Theo dõi</button>
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
                                {/* kkkkk */}
                                <div>
                                    <div className="listItem">
                                        <div style={{marginLeft:"10px"}}>
                                            <ul className="sc-csuQGl jdmbsx">
                                                <li>
                                                    <Link>
                                                        <div className="ctAdItemContainer">
                                                            <div className="sc-Rmtcm jYrOeG">
                                                                <div className="sc-kgoBCf dPyyiW">
                                                                    <div className="sc-kGXeez hDgMYM">
                                                                        <img src="https://cdn.chotot.com/Co44ZpDTg0YavWFAA8Vwgrakcok0kgk0tTHNDhddYWA/preset:listing/plain/7c6d6ca20a78cce0c6ff10fd1e899f37-2744579936221485423.jpg" alt="" height="106" loading="lazy" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sc-bRBYWo enrfhw">
                                                                <div className="sc-ckVGcZ hXRBzs">
                                                                    <h3 class="sc-jKJlTe cUQZyp">Nhà trung tâm phường Tăng Nhơn Phú B, Q9</h3>
                                                                </div>
                                                                <div className="sc-kEYyzF EYiyr">
                                                                    <div itemprop="price" content="4650000000" class="sc-kkGfuU dBCFhH"><span>4.650.000.000 đ</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className="sc-eHgmQL hNtdWe">
                                                        <div className="sc-cvbbAY knzJMl">
                                                            <div class="sc-jDwBTQ SWKJx"><span title="26 phút trước">26 phút trước</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="divLike" style={{marginRight:"20px"}}>
                                                        <button className="sc-cHGsZl bwQGTK">
                                                        <img width="20" src="https://static.chotot.com.vn/storage/adType/adItem/heart.png" alt="like"/>
                                                        {/* khi đã nhấn like */}
                                                        <img width="20" src="https://static.chotot.com.vn/storage/adType/adItem/heart-active.png" alt="unlike"/>
                                                        </button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileLayout;