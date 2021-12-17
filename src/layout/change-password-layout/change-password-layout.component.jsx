import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import './change-password-layout.styles.css';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchChangePassword } from "../../redux/user/userSlice";
import { notifyError, notifySuccess } from "../../common/toast";
const ChangePasswordLayout = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const error = useSelector(state => state.user.error);
    const succeeded = useSelector(state => state.user.succeeded);
    const handleClickChangePassword = () => {
        if (oldPassword == '' || password == '' || confirmPassword == '') {
            notifyError("Vui lòng nhập đủ 3 trường!");
        }
        else
            dispatch(fetchChangePassword({ oldPassword, password, confirmPassword }))
    }
    useEffect(() => {
        if (succeeded == true) {
            notifySuccess("Đổi mật khẩu thành công")
        } else {
            console.log("flasw")
            notifyError(error)
        }
    }, [error])
    return (
        <div className="container">
            <div className="row">
                <div className="boxContentLeft">
                    <div className="white-box row noMargin">
                        <div className="col-md-12">
                            <div class="row">
                                <h1 class="page-title" id="pageTitle">Thay đổi mật khẩu</h1>
                            </div>
                            <div className="">
                                <div>
                                    <div className="_3wam">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="_3hWTTQHIGJUzaTwYs3IRvj">
                                                <div class="col-xs-12">
                                                    <ul>
                                                        <li>
                                                            <div class="_127aka-EHteI96Rlw94SeA"><span>Mật khẩu hiện tại</span></div>
                                                            <div class="_30EYSdf_NK78GgsJAB8_3I"><input placeholder="Mật khẩu hiện tại" onChange={(e) => setOldPassword(e.target.value)} type="password" class="form-control" name="oldPassword" value={oldPassword} /></div>
                                                        </li>
                                                        <li>
                                                            <div class="_127aka-EHteI96Rlw94SeA"><span>Mật khẩu</span></div>
                                                            <div class="_30EYSdf_NK78GgsJAB8_3I"><input placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" name="newPassword" value={password} /></div>
                                                        </li>
                                                        <li>
                                                            <div class="_127aka-EHteI96Rlw94SeA"><span>Xác nhận mật khẩu</span></div>
                                                            <div class="_30EYSdf_NK78GgsJAB8_3I"><input placeholder="Xác nhận mật khẩu" onChange={(e) => setConfirmPassword(e.target.value)} type="password" class="form-control" name="rePassword" value={confirmPassword} /></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="_1sBy8udWBON-7rg0Vy9i-6">
                                                <div class="col-xs-12">
                                                    <button type="submit" onClick={handleClickChangePassword}>Đổi mật khẩu</button>
                                                </div>
                                            </div>
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

export default ChangePasswordLayout;