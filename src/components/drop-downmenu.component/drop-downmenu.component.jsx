import React from "react";
import './drop-downmenu.styles.css';
import { setUp, signOut } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import * as toast from '../../common/toast';
import { Link } from "react-router-dom";
import default_avt from '../../assets/images/default_user.png';
import { useHistory } from "react-router-dom";

const DropDownMenu = ({setHidden}) => {
    const dispatch = useDispatch();
    const history=useHistory();
    const currentUser = useSelector(state => state.user.currentUser);
    return (
        <div className="appWrapper-Header-menu">
            {
                currentUser != null
                    ? (
                        <>
                            <div className="appWrapper-Header-menuMore-listItemWrapper " onClick={()=>{history.push('/user');setHidden(true)}}>
                                <div className="appWrapper-UserMenuItem">
                                    <div className="appWrapper-UserMenuItem-left">
                                        {
                                            currentUser.avatar != "empty"
                                                ? (
                                                    <img alt="" className="appWrapper-UserMenuItem-avatar" src={currentUser.avatar} />
                                                ) : (
                                                    <img alt="" className="appWrapper-UserMenuItem-avatar" src={default_avt} />
                                                )
                                        }
                                    </div>
                                    <div className="appWrapper-UserMenuItem-right">
                                        <p className="appWrapper-UserMenuItem-above">{currentUser.name}</p>
                                        <p className="appWrapper-UserMenuItem-below">Xem trang cá nhân của bạn</p>
                                    </div>
                                    <div className="appWrapper-Layout-clearFix">
                                    </div>
                                </div>
                            </div>
                            <div className="appWrapper-Header-menuMore-listItemWrapper " onClick={() => {toast.notifySuccess("Đăng xuất thành công!");dispatch(signOut());setHidden(true);history.push('/')}}>
                                <a className="appWrapper-Header-menuListItem" >
                                    <div className="appWrapper-Header-menuLeftItem">
                                        <img className="appWrapper-Header-icon--size30" src="https://st.chotot.com/storage/chotot-icons/svg/sign-out.svg" alt="Đăng xuất" />
                                    </div>
                                    <div className="appWrapper-Header-menuRightItem">Đăng xuất</div>
                                    <div className="clearfix"></div>
                                </a>
                            </div>
                        </>
                    ) : (
                        <div className="appWrapper-Header-menuMore-listItemWrapper " onClick={()=>history.push('/Login')}>
                            <div className="appWrapper-UserMenuItem">
                                <a className="appWrapper-UserMenuItem-left">
                                    <img alt="" className="appWrapper-UserMenuItem-avatar" src={default_avt} />
                                </a>
                                <div className="appWrapper-UserMenuItem-right login-right" style={{ marginTop: "10px" }}>
                                    <a className="appWrapper-UserMenuItem-above">Đăng nhập/ Đăng kí</a>
                                </div>
                                <div className="appWrapper-Layout-clearFix">
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}
export default DropDownMenu;