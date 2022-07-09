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
        <main className="mainLoginForm">
            <div className="loginDiv">
                <div className="loginBanner">
                    <div className="wrapperBanner">
                        <div className="titleBanner">
                            <h3>Xác nhận OTP</h3>
                            <p>Mã OTP đã gửi đến số điện thoại {phoneNumber}</p>
                        </div>
                    </div>{
                        error
                            ? (
                                <div className="e66t3pu error">
                                    {error}
                                </div>
                            )
                            : ''
                    }
                </div>
                <div className="inputLoginDiv">
                    <div>
                        <input value={otp} onChange={(e) => setOTP(e.target.value)} placeholder="Nhập mã OTP" />
                    </div>
                    <p className="prswihc">
                    </p>
                </div>
                <button className="buttonLogin accent r-normal medium w-normal i-left stretch" onClick={otpSubmit}>Tiếp tục</button>
                {/* <a role="button" tabindex="-1" className="resend-code">Gửi lại mã</a> */}
            </div>
        </main>
    )

}
export default OTPForm;