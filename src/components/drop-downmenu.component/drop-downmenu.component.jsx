import React from "react";
import './drop-downmenu.styles.css';
import { setUp, signOut } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import default_avt from '../../assets/images/default_user.png';
import { useHistory } from "react-router-dom";

const DropDownMenu = ({setHidden}) => {
    const dispatch = useDispatch();
    const history=useHistory();
    const currentUser = useSelector(state => state.user.currentUser);
    return (
        <div class="appWrapper-Header-menu">
            {
                currentUser != null
                    ? (
                        <>
                            <div class="appWrapper-Header-menuMore-listItemWrapper " onClick={()=>{history.push('/user');setHidden(true)}}>
                                <div class="appWrapper-UserMenuItem">
                                    <div class="appWrapper-UserMenuItem-left">
                                        {
                                            currentUser.avatar != "empty"
                                                ? (
                                                    <img alt="" class="appWrapper-UserMenuItem-avatar" src={currentUser.avatar} />
                                                ) : (
                                                    <img alt="" class="appWrapper-UserMenuItem-avatar" src={default_avt} />
                                                )
                                        }
                                    </div>
                                    <div class="appWrapper-UserMenuItem-right">
                                        <p class="appWrapper-UserMenuItem-above">{currentUser.name}</p>
                                        <p class="appWrapper-UserMenuItem-below">Xem trang cá nhân của bạn</p>
                                    </div>
                                    <div class="appWrapper-Layout-clearFix">
                                    </div>
                                </div>
                            </div>
                            <div class="appWrapper-Header-menuMore-listItemWrapper " onClick={() => {dispatch(signOut());setHidden(true);history.push('/')}}>
                                <a class="appWrapper-Header-menuListItem" >
                                    <div class="appWrapper-Header-menuLeftItem">
                                        <img class="appWrapper-Header-icon--size30" src="https://st.chotot.com/storage/chotot-icons/svg/sign-out.svg" alt="Đăng xuất" />
                                    </div>
                                    <div class="appWrapper-Header-menuRightItem">Đăng xuất</div>
                                    <div class="clearfix"></div>
                                </a>
                            </div>
                        </>
                    ) : (
                        <div class="appWrapper-Header-menuMore-listItemWrapper " onClick={()=>history.push('/Login')}>
                            <div class="appWrapper-UserMenuItem">
                                <a class="appWrapper-UserMenuItem-left">
                                    <img alt="" class="appWrapper-UserMenuItem-avatar" src={default_avt} />
                                </a>
                                <div class="appWrapper-UserMenuItem-right login-right" style={{ marginTop: "10px" }}>
                                    <a class="appWrapper-UserMenuItem-above">Đăng nhập/ Đăng kí</a>
                                </div>
                                <div class="appWrapper-Layout-clearFix">
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}
export default DropDownMenu;