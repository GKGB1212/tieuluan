import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './login.styles.css'
import * as helper from '../../common/helper';
import * as toast from '../../common/toast';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin, setUp } from "../../redux/user/userSlice";
import { useHistory, useLocation } from "react-router";
import LoadingComponent from "../loader/LoadingComponent";

const LoginForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [passWord, setPassWord] = useState('');
    const currentUser = useSelector(state => state.user.currentUser)
    const loading = useSelector(state => state.user.loading)
    const error = useSelector(state => state.user.error)
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
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
    const handleChangePass=(e)=>{
        let text=e.target.value
        setPassWord(text);
    }
    const login = async () => {
        if (phoneNumber == '' || passWord == '') {
            toast.notifyError("Vui lòng nhập đủ thông tin!")
        } else {
            await dispatch(fetchLogin({ phoneNumber, passWord }))
            dispatch(setUp);
        }
    }
    return (
        <main className="mainLoginForm">
            <div className="loginDiv">
                <div className="loginBanner">
                    <div className="wrapperBanner">
                        <div className="titleBanner">
                            <h3>Đăng nhập</h3>
                            <p>Chào bạn quay lại</p>
                        </div>
                        <div className="imageBanner">
                            <img src="https://static.chotot.com/storage/assets/LOGIN/logo.svg" alt="chotot-logo" />
                        </div>
                    </div>
                    {
                        error
                            ? (
                                <div className="e66t3pu error">
                                    Số điện thoại hoặc mật khẩu chưa đúng, vui lòng kiểm tra lại.
                                </div>
                            ) : ''
                    }
                </div>
                <div className="inputLoginDiv">
                    <div>
                        <input type="tel" placeholder="Nhập SĐT của bạn" value={phoneNumber} onChange={(e) => handleChangePhoneNum(helper.replaceCharacter(e.target.value, "0123456789"))} autocomplete="nope" maxLength="10"/>
                        <button tabindex="-1" type="button">
                            <span className="clear">
                            </span>
                        </button>
                    </div>
                    <p className="prswihc">
                    </p>
                </div>
                <div className="inputLoginDiv">
                    <div>
                        <input type="password" id="pass" className="i1pbvj0j" placeholder="Nhập mật khẩu của bạn" value={passWord} onChange={(e) => handleChangePass(e)}/>
                        <button tabindex="-1" type="button" onClick={changeTypePassWord}>
                            {textBtn}
                        </button>
                    </div>
                    <p className="prswihc">
                    </p>
                </div>
                <button className="buttonLogin accent r-normal medium w-normal i-left stretch" onClick={login} type="submit">Đăng nhập</button>
                <div className="loginDiv2">
                    <p>
                        <Link to="/ForgotPassword">Bạn quên mật khẩu?</Link>
                    </p>
                    {/* <small>Hoặc đăng nhập với</small>
                    <ul>
                        <li src="https://static.chotot.com/storage/assets/LOGIN/facebook.svg" className="iconButton fb" ></li>
                        <li src="https://static.chotot.com/storage/assets/LOGIN/google.svg" className="iconButton gg"></li>
                    </ul> */}
                    <p>Chưa có tài khoản ?<br/>
                        <Link to="/Signin">Đăng ký ngay</Link>

                    </p>
                </div>
            </div>
            <LoadingComponent isLoading={loading}/>
        </main>)

}
export default LoginForm;