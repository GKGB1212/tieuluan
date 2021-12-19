import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './login.styles.css'
import * as helper from '../../common/helper';
import * as toast from '../../common/toast';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin, setUp } from "../../redux/user/userSlice";
import { useHistory } from "react-router";

const LoginForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [passWord, setPassWord] = useState('');
    const currentUser = useSelector(state => state.user.currentUser)
    const error = useSelector(state => state.user.error)
    const dispatch = useDispatch();
    const history = useHistory();
    const [textBtn, setTextBtn] = useState('Hiện')
    const handleChangePhoneNum = (phoneNum) => {
        setPhoneNumber(phoneNum.substring(0, 10));
    }
    const changeTypePassWord = () => {
        if (document.getElementById("pass").type == "text") {
            document.getElementById("pass").type = "password";
            setTextBtn('Hiện')
        } else {
            document.getElementById("pass").type = "text";
            setTextBtn('Ẩn');
        }
    }
    const login = async () => {
        if (phoneNumber == '' || passWord == '') {
            toast.notifyError("Vui lòng nhập đủ thông tin!")
        } else {
            await dispatch(fetchLogin({ phoneNumber, passWord }))
            dispatch(setUp);
        }
    }
    useEffect(() => {
        if (currentUser != null) {
            history.push({
                pathname: "/"
            });
        }
    }, [currentUser])
    return (
        <main class="mainLoginForm">
            <div class="loginDiv">
                <div class="loginBanner">
                    <div class="wrapperBanner">
                        <div class="titleBanner">
                            <h3>Đăng nhập</h3>
                            <p>Chào bạn quay lại</p>
                        </div>
                        <div class="imageBanner">
                            <img src="https://static.chotot.com/storage/assets/LOGIN/logo.svg" alt="chotot-logo" />
                        </div>
                    </div>
                    {
                        error
                            ? (
                                <div class="e66t3pu error">
                                    Số điện thoại hoặc mật khẩu chưa đúng, vui lòng kiểm tra lại.
                                </div>
                            ) : ''
                    }
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
                        <input type="password" id="pass" class="i1pbvj0j" placeholder="Nhập mật khẩu của bạn" value={passWord} onChange={(e) => setPassWord(e.target.value)} autocomplete="nope" maxLength="11" />
                        <button tabindex="-1" type="button" onClick={changeTypePassWord}>
                            {textBtn}
                        </button>
                    </div>
                    <p class="prswihc">
                    </p>
                </div>
                <button class="buttonLogin accent r-normal medium w-normal i-left stretch" onClick={login} type="submit">Đăng nhập</button>
                <div class="loginDiv2">
                    <p>
                        <Link to="/ForgotPassword">Bạn quên mật khẩu?</Link>
                    </p>
                    {/* <small>Hoặc đăng nhập với</small>
                    <ul>
                        <li src="https://static.chotot.com/storage/assets/LOGIN/facebook.svg" class="iconButton fb" ></li>
                        <li src="https://static.chotot.com/storage/assets/LOGIN/google.svg" class="iconButton gg"></li>
                    </ul> */}
                    <p>Chưa có tài khoản?<br/>
                        <Link to="/Signin">Đăng ký ngay</Link>

                    </p>
                </div>
            </div>
        </main>)

}
export default LoginForm;