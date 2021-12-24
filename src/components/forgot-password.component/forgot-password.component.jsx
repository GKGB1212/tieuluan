import React, { useState } from "react";
import './forgot-password.styles.css';
import * as helper from '../../common/helper';
import { fetchSendCodeResetPassword } from "../../redux/user/userSlice";
import { useDispatch,useSelector } from "react-redux";

const ForgotPasswordForm = () => {
    const dangki = 1;
    const [currentError, setCurrentError] = useState()
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleChangePhoneNum = (phoneNum) => {
        setPhoneNumber(phoneNum.substring(0, 10));
    }
    const handleSendCode = () => {
        if (phoneNumber == '') {
            setCurrentError('Không được để trống trường điện thoại');
        }
    }
    return (
        <main class="mainLoginForm">
            <div class="loginDiv">
                <form class="loginForm">
                    <div class="inputLoginDiv">
                        {
                            currentError!=null
                                ? (
                                    <div class="e66t3pu error">
                                        {currentError}
                                    </div>
                                )
                                : ''
                        }
                        <div>
                            <input type="tel" placeholder="Nhập SĐT của bạn" autocomplete="nope" value={phoneNumber} onChange={(e) => handleChangePhoneNum(helper.replaceCharacter(e.target.value, "0123456789"))} />
                            <button tabindex="-1" type="button">
                                <span class="clear">
                                </span>
                            </button>
                        </div>
                        <p class="prswihc">
                        </p>
                    </div>
                    <button class="buttonLogin accent r-normal medium w-normal i-left stretch" onClick={handleSendCode}>Lấy lại mật khẩu</button>
                </form>
            </div>
        </main>
    )

}
export default ForgotPasswordForm;