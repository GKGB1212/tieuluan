import React, {useState} from "react";
import { Link } from "react-router-dom";
import './login.styles.css'
import * as helper from '../../common/helper';

const LoginForm = () => {
    const [phoneNumber,setPhoneNumber]=useState('');
    const [passWord, setPassWord]=useState('');

    const handleChangePhoneNum=(phoneNum)=>{
        setPhoneNumber(phoneNum);
    }
    const changeTypePassWord=()=>{
        document.getElementById("pass").type=="text"?document.getElementById("pass").type="password":document.getElementById("pass").type="text";
    }
    const login=()=>{
        if(phoneNumber==''||passWord==''){
            alert("Vui lòng nhập đủ ha")
        }else{
            alert("đủ rùi đóa")
        }
    }
    return (
        <main class="mainLoginForm">
            <div class="loginDiv">
                <form class="loginForm">
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
                    </div>
                    <div class="inputLoginDiv">
                        <div>
                            <input type="tel" placeholder="Nhập SĐT của bạn" value={phoneNumber} onChange={(e)=>handleChangePhoneNum(helper.replaceCharacter(e.target.value, "0123456789"))} autocomplete="nope" />
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
                            <input type="password" id="pass" class="i1pbvj0j" placeholder="Nhập mật khẩu của bạn" value={passWord} onChange={(e)=>setPassWord(e.target.value)} autocomplete="nope" maxLength="11"/>
                            <button tabindex="-1" type="button" onClick={changeTypePassWord}>
                                Hiện
                            </button>
                        </div>
                        <p class="prswihc">
                        </p>
                    </div>
                    <button class="buttonLogin accent r-normal medium w-normal i-left stretch" onClick={login} type="submit">Đăng nhập</button>
                </form>
                <div class="loginDiv2">
                    <p>
                        <Link to="/ForgotPassword">Bạn quên mật khẩu?</Link>
                    </p>
                    <small>Hoặc đăng nhập với</small>
                    <ul>
                        <li src="https://static.chotot.com/storage/assets/LOGIN/facebook.svg" class="iconButton fb" ></li>
                        <li src="https://static.chotot.com/storage/assets/LOGIN/google.svg" class="iconButton gg"></li>
                    </ul>
                    <p>Chưa có tài khoản?
                        <Link to="/Signin">Đăng ký ngay</Link>

                    </p>
                </div>
            </div>
        </main>
    )

}
export default LoginForm;