import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './followed-follow-layout.styles.css';
import { useHistory } from "react-router-dom";

const FollowLayout = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector(state => state.user.currentUser);
    return (
        <div className="main-content">
            <div className="container WrapperContainer">
                <div className="indexPage PaperContainer">
                    <div className="PaperWrapper">
                        <h4 class="TitleHeading">Đang theo dõi</h4>
                        <div className="row list">
                            <div className="listt">





                                <div class="user-container">
                                    <img class="user-avt" src="https://cdn.chotot.com/xmWcCLuZLyZateWjb5WqQoT2_pfuJqUsneySOncn8QQ/preset:shopava/plain/fa1ee49db4403ea0679355ecada30edf-2740979296440308507.jpg" height="50" width="50" />
                                    <div class="user-info">
                                        <div class="user-info-name">Tên người dùng</div>
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
export default FollowLayout;