import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './otp.style.css'
import * as helper from '../../common/helper';
import * as toast from '../../common/toast';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchSignIn } from "../../redux/user/userSlice";

const OTPForm = () => {
    const [otp, setOTP] = useState('');
    const dispatch = useDispatch();
    const location = useLocation();
    const name=location.state.name;
    const phoneNumber=location.state.phoneNumber;
    const passWord=location.state.passWord;
    const confirmPassword=location.state.confirmPassword;

    const otpSubmit = () => {
        if(otp==''){
            toast.notifyError("Vui lòng nhập OTP");
        }else{
            dispatch(fetchSignIn({name}))
        }
    }
    return (
        <div className="ovz7pbq">
        <main class="mainLoginForm">
            <div class="ovz7pbq">
                <div class="o1un9kvi">
                    <p>Bạn hãy nhập mã OTP duce gửi đến số điện thoại:
                        <b>{phoneNumber}</b>&nbsp;&nbsp;
                    </p>
                    <div class="ofix8cq">
                        <input type="tel" value="" style={{"caretColor": "transparent"}} />
                        <p class="error">Mã OTP bạn vừa nhập không đúng</p>
                    </div>
                    <button class="buttonLogin accent r-normal medium w-normal i-left stretch" onClick={otpSubmit}>Tiếp tục</button>
                    <a role="button" tabindex="-1" class="resend-code">Gửi lại mã</a>
                </div>
            </div>
        </main>
        </div>
    )

}
export default OTPForm;