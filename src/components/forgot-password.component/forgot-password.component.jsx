import React, { useState, useEffect } from "react";
import './forgot-password.styles.css';
import * as helper from '../../common/helper';
import * as toast from '../../common/toast';
import { fetchSendCodeResetPassword, fetchResetPassword } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import PopupForgotPassword from "../popup-forgot-password.component/popup-forgot-password.component";
import { resetStateForgot } from "../../redux/user/userSlice";
import { useHistory } from "react-router-dom";
import forgot_password_img from '../../assets/images/forgot-password.png'

const ForgotPasswordForm = () => {
    const history = useHistory();
    const [currentError, setCurrentError] = useState()
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [code, setCode] = useState('');
    const [isShow, setIsShow] = useState(false);
    const stateOfForgotPassword = useSelector(state => state.user.stateOfForgotPassword);
    const [textBtn1, setTextBtn1] = useState('Hiện');
    const [textBtn2, setTextBtn2] = useState('Hiện');
    const dispatch = useDispatch();
    const handleChangePhoneNum = (phoneNum) => {
        setPhoneNumber(phoneNum.substring(0, 10));
    }
    const changeTypePassWord = (type) => {
        var idChange;
        type == 1 ? idChange = "pass" : idChange = "confirmPass"
        if (document.getElementById(idChange).type == "text") {
            document.getElementById(idChange).type = "password";
            type == 1 ? setTextBtn1('Hiện') : setTextBtn2('Hiện');
        } else {
            document.getElementById(idChange).type = "text";
            type == 1 ? setTextBtn1('Ẩn') : setTextBtn2('Ẩn')
        }
    }
    useEffect(() => {
        if (stateOfForgotPassword == 1) {
            setIsShow(true);
            dispatch(resetStateForgot());
        } else if (stateOfForgotPassword == -1) {
            setCurrentError("Số điện thoại chưa được đăng ký tài khoản!")
        } else if (stateOfForgotPassword == 2) {
            toast.notifySuccess("Đổi mật khẩu thành công!")
            history.push('/login');
            dispatch(resetStateForgot());
        } else if (stateOfForgotPassword == -2) {
            setCurrentError("Không thể thay đổi mật khẩu!")
        }
    }, [stateOfForgotPassword]);
    const handleSendCode = () => {
        if (isShow == false) {
            let regexPhone = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
            if (regexPhone.test(phoneNumber) == false) {
                setCurrentError('Số điện thoại không hợp lệ!');
            } else {
                setCurrentError();
                dispatch(fetchSendCodeResetPassword(phoneNumber));
            }
        } else {
            if (password == '' || confirmPassword == '' || code == "") {
                setCurrentError('Không được để trống 1 trong 3 trường!');
            } else if (password != confirmPassword) {
                setCurrentError('Mật khẩu không khớp nhau!');
            } else {
                let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                if (regex.test(password)) {
                    dispatch(fetchResetPassword({ phoneNumber, password, confirmPassword, code }))
                } else {
                    setCurrentError("Mật khẩu yêu cầu: Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt")
                }
            }
        }
    }
    return (
        <main class="mainLoginForm">
            <div class="loginDiv">
            <div class="loginBanner">
                    <div class="wrapperBanner">
                        <div class="titleBanner">
                            <h3>Quên mật khẩu</h3>
                            <p>Lấy lại mật khẩu!</p>
                        </div>
                        <div class="imageBanner">
                            <img src={forgot_password_img} alt="logo" />
                        </div>
                    </div>
                </div>
                <div class="inputLoginDiv">
                    {
                        currentError != null
                            ? (
                                <div class="e66t3pu error" style={{ marginBottom: "10px", padding: "10px" }}>
                                    {currentError}
                                </div>
                            )
                            : ''
                    }
                    {
                        isShow == false ? (
                            <div>
                                <input type="tel" placeholder="Nhập SĐT của bạn" value={phoneNumber} onChange={(e) => handleChangePhoneNum(helper.replaceCharacter(e.target.value, "0123456789"))} />
                            </div>
                        ) : ('')
                    }
                    {
                        isShow ? (
                            <div>
                                <div className="inputLoginDiv">
                                    <div>
                                    <input type="password" id="pass" placeholder="Nhập mật khẩu mới" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: "10px" }} />
                                    <button tabindex="-1" type="button" onClick={() => changeTypePassWord(1)}>
                                        {textBtn1}
                                    </button>
                                    </div>
                                </div>
                                <div className="inputLoginDiv">
                                    <div>
                                    <input type="password" id="confirmPass" placeholder="Nhập lại mật khẩu mới" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ marginBottom: "10px" }} />
                                    <button tabindex="-1" type="button" onClick={() => changeTypePassWord(2)}>
                                        {textBtn2}
                                    </button>
                                    </div>
                                </div>
                                <input type="tel" placeholder="Nhập mã code" value={code} onChange={(e) => setCode(e.target.value)} />
                            </div>
                        ) : ('')
                    }
                    <p class="prswihc">
                    </p>
                </div>
                <button class="buttonLogin accent r-normal medium w-normal i-left stretch" onClick={handleSendCode}>
                    {
                        isShow?('Đổi mật khẩu'):('Gửi mã code')
                    }
                    </button>
            </div>
            <PopupForgotPassword />
        </main>
    )

}
export default ForgotPasswordForm;