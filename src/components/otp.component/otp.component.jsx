import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './otp.style.css'
import * as helper from '../../common/helper';
import * as toast from '../../common/toast';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchSignIn, setUp } from "../../redux/user/userSlice";
import { useHistory } from "react-router";

const OTPForm = () => {
    const [otp, setOTP] = useState('');
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const succeeded = useSelector(state => state.user.succeeded);
    const name = location.state.name;
    const phoneNumber = location.state.phoneNumber;
    const passWord = location.state.passWord;
    const confirmPassword = location.state.confirmPassword;
    const error = useSelector(state => state.user.error);

    const otpSubmit = () => {
        if (otp == '') {
            toast.notifyError("Vui lòng nhập OTP");
        } else {
            dispatch(fetchSignIn({ name, phoneNumber, passWord, confirmPassword, otp }));
        }
    }
    useEffect(()=>{
        console.log(name,passWord, confirmPassword,phoneNumber)
        if(succeeded==true){
            toast.notifySuccess("Đăng kí tài khoản thành công!")
            history.push('/Login');
            dispatch(setUp());
        }
    },[succeeded])
    return (
        <main class="mainLoginForm">
            <div class="loginDiv">
                <div class="loginBanner">
                    <div class="wrapperBanner">
                        <div class="titleBanner">
                            <h3>Xác nhận OTP</h3>
                            <p>Mã OTP đã gửi đến số điện thoại {phoneNumber}</p>
                        </div>
                    </div>{
                        error
                            ? (
                                <div class="e66t3pu error">
                                    {error}
                                </div>
                            )
                            : ''
                    }
                </div>
                <div class="inputLoginDiv">
                    <div>
                        <input value={otp} onChange={(e) => setOTP(e.target.value)} placeholder="Nhập mã OTP" />
                    </div>
                    <p class="prswihc">
                    </p>
                </div>
                <button class="buttonLogin accent r-normal medium w-normal i-left stretch" onClick={otpSubmit}>Tiếp tục</button>
                <a role="button" tabindex="-1" class="resend-code">Gửi lại mã</a>
            </div>
        </main>
    )

}
export default OTPForm;