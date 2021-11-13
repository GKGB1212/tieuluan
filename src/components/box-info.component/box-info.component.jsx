// cái box chưa thông tin người dùng ở trang thông tin cá nhân
import React from "react";
import './box-info.styles.css';

const BoxInfo = () => {
    return (
        <div class="box-info-personal">
            <div>
                <div class="box-avatar">
                    <div class="box-avatar-content">
                        <a title="ảnh" href="javascript:void(0)" class="avatar"></a>
                        <p class="camera">
                            <input type="file" title="chỉnh sửa ảnh đại diện" class="upload-avatarr" />
                        </p>
                    </div>
                </div>
                <a href="/posts/settings" class="">
                    <img src="https://static.homedy.com/src/images/explore/setting.svg" alt="chỉnh sửa thông tin" title="chỉnh sửa thông tin " class="icon-setting" />
                </a>
                <h1 class="title-name icon-user title-fullname">Tên người dùng</h1>
                <div class="box-info-total">
                    <ul>
                        <li title="lượt xem">
                            <span class="total-info">1</span>
                            <span class="txt-info-total">Lượt xem</span>
                        </li>
                        <li title="người theo dõi">
                            <a href="/me/anh-minh-ag288278/follow" class="">
                                <span class="total-info">0</span> <span class="txt-info-total">Người theo dõi</span>
                            </a>
                        </li>
                        <li title="đang theo dõi">
                            <a href="/me/anh-minh-ag288278/follow/dang-theo-doi" class="">
                                <span class="total-info">0</span>
                                <span class="txt-info-total">Đang theo dõi</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="box-option follow-profile">
                    <div class="follow">
                        <button type="button" class="md-button md-button-blue md-theme-default md-ripple-off">
                            <div class="md-ripple md-disabled">
                                <div class="md-button-content">
                                    <img src="https://static.homedy.com/src/images/social/follow-1.svg" width="16" alt="follow" style={{ position: "relative", top: "-2px" }} /> Theo dõi
                                </div>
                            </div>
                        </button>
                        <button type="button" class="md-button md-button-white md-theme-default md-ripple-off">
                            <div class="md-ripple md-disabled">
                                <div class="md-button-content">
                                    <img src="https://static.homedy.com/src/images/social/following.svg" width="16" alt="follow" style={{position: "relative", top: "-2px", marginRight: "5px"}} />Đang theo dõi
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoxInfo;