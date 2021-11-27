import React, { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import './login-signup.styles.css';
import * as helper from '../../common/helper';
import * as toast from '../../common/toast';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignIn } from "../../redux/user/userSlice";

const LoginSignupForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('0386863521');
    const [passWord, setPassWord] = useState('Binholala@123');
    const [confirmPassword, setConfirmPassword] = useState('Binholala@123');
    const [name, setName] = useState('Bình');
    const dispatch = useDispatch();
    const curentUser = useSelector(state => state.user.curentUser);

    const handleChangePhoneNum = (phoneNum) => {
        setPhoneNumber(phoneNum);
    }
    const changeTypePassWord = (type) => {
        var idChange;
        type==1?idChange="pass":idChange="confirmPass"
        document.getElementById(idChange).type == "text" ? document.getElementById(idChange).type = "password" : document.getElementById(idChange).type = "text";
    }
    const signIn = () => {
        if (phoneNumber == '' || passWord == '' || name == '' || confirmPassword == '') {
            toast.notifyError("Vui lòng nhập đủ thông tin!")
        } else if (passWord != confirmPassword) {
            toast.notifyError("Mật khẩu xác nhận không khớp!")
        } else{
            dispatch(fetchSignIn({name,passWord,confirmPassword,phoneNumber}))
        }
    }
    useEffect(() => {
        console.log(curentUser)
    }, [curentUser])
    return (
        <main class="mainLoginForm">
            <div class="loginDiv">
                    <div class="loginBanner">
                        <div class="wrapperBanner">
                            <div class="titleBanner">
                                <h3>Đăng kí</h3>
                                <p>Tạo tài khoản Chợ Tốt ngay</p>
                            </div>
                            <div class="imageBanner">
                                <img src="https://static.chotot.com/storage/assets/LOGIN/logo.svg" alt="chotot-logo" />
                            </div>
                        </div>
                    </div>
                    <div class="inputLoginDiv">
                        <div>
                            <input class="i1pbvj0j" placeholder="Nhập tên của bạn" value={name} onChange={(e) => setName(e.target.value)} autocomplete="nope" />
                        </div>
                        <p class="prswihc">
                        </p>
                    </div>
                    <div class="inputLoginDiv">
                        <div>
                            <input type="tel" placeholder="Nhập SĐT của bạn" value={phoneNumber} onChange={(e) => handleChangePhoneNum(helper.replaceCharacter(e.target.value, "0123456789"))} autocomplete="nope" />
                            <button tabindex="-1" type="button">
                                <span class="clear">
                                </span>
                            </button>
                        </div>
                        <p class="prswihc">
                        </p>
                    </div>
                    <div class="inputLoginDiv">
                        <div>
                            <input type="password" id="pass" class="i1pbvj0j" placeholder="Nhập mật khẩu của bạn" value={passWord} onChange={(e) => setPassWord(e.target.value)} autocomplete="nope" />
                            <button tabindex="-1" type="button" onClick={()=>changeTypePassWord(1)}>
                                Hiện
                            </button>
                        </div>
                        <p class="prswihc">
                        </p>
                    </div>
                    <div class="inputLoginDiv">
                        <div>
                            <input type="password" id="confirmPass" class="i1pbvj0j" placeholder="Xác nhận mật khẩu" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} autocomplete="nope" />
                            <button tabindex="-1" type="button" onClick={()=>changeTypePassWord(2)}>
                                Hiện
                            </button>
                        </div>
                        <p class="prswihc">
                        </p>
                    </div>
                    <button class="buttonLogin accent r-normal medium w-normal i-left stretch" type="submit" onClick={signIn}>Đăng ký</button>
                <div class="loginDiv2">
                    <p> Bằng việc nhấn đăng ký, bạn đã đồng ý với
                        <a href="/forget-password">Điều khoản sử dụng</a>
                        của trang web XXX
                    </p>
                    <small>Hoặc đăng nhập với</small>
                    <ul>
                        <li src="https://static.chotot.com/storage/assets/LOGIN/facebook.svg" class="iconButton fb" ></li>
                        <li src="https://static.chotot.com/storage/assets/LOGIN/google.svg" class="iconButton gg"></li>
                    </ul>
                    <p>Bạn đã có tài khoản
                        <Link to="/Login">Đăng nhập</Link>
                    </p>
                </div>
            </div>
        </main>
    )

}
export default LoginSignupForm;