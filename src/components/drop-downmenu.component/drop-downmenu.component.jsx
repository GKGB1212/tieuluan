import React from "react";
import './drop-downmenu.styles.css'

const DropDownMenu = () => {
    return (
        <div class="appWrapper-Header-menu">
            <div class="appWrapper-Header-menuMore-listItemWrapper ">
                <div class="appWrapper-UserMenuItem">
                    <a class="appWrapper-UserMenuItem-left" href="https://www.chotot.com/dashboard">
                        <img alt="" class="appWrapper-UserMenuItem-avatar" src="https://cdn.chotot.com/uac2/21119808" />
                    </a>
                    <div class="appWrapper-UserMenuItem-right">
                        <a class="appWrapper-UserMenuItem-above" href="https://www.chotot.com/dashboard">Khổng Gia Bình</a>
                        <a class="appWrapper-UserMenuItem-below" href="https://www.chotot.com/user/90a6a21fd069f1b67b135fdfba508919#xtatc=INT-1-[Profileview]">Xem trang cá nhân của bạn</a>
                    </div>
                    <div class="appWrapper-Layout-clearFix">
                    </div>
                </div>
            </div>
            <div class="appWrapper-Header-menuMore-listItemWrapper ">
                <a class="appWrapper-Header-menuListItem" href="https://accounts.chotot.com/logout">
                    <div class="appWrapper-Header-menuLeftItem">
                        <img class="appWrapper-Header-icon--size30" src="https://st.chotot.com/storage/chotot-icons/svg/sign-out.svg" alt="Đăng xuất" />
                    </div>
                    <div class="appWrapper-Header-menuRightItem">Đăng xuất</div>
                    <div class="clearfix"></div>
                </a>
            </div>
        </div>
    )
}
export default DropDownMenu;