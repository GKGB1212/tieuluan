import React, { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import './login-signup.styles.css';
import * as helper from '../../common/helper';
import * as toast from '../../common/toast';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignIn } from "../../redux/user/userSlice";
import { useHistory } from "react-router";
import { setUp } from "../../redux/user/userSlice";
import LoadingComponent from "../loader/LoadingComponent";

const LoginSignupForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [passWord, setPassWord] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [textBtn1, setTextBtn1] = useState('Hiện');
    const [textBtn2, setTextBtn2] = useState('Hiện');
    const history = useHistory();
    const dispatch = useDispatch();
    const curentUser = useSelector(state => state.user.curentUser);
    const loading = useSelector(state => state.user.loading);
    const error = useSelector(state => state.user.error)
    const succeeded = useSelector(state => state.user.succeeded);
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
    const signIn = async () => {
        let temp=name;
        if (phoneNumber == '' || passWord == '' || temp.trim() == '' || confirmPassword == '') {
            toast.notifyError("Vui lòng nhập đủ thông tin!")
        } else if (passWord != confirmPassword) {
            toast.notifyError("Mật khẩu xác nhận không khớp!")
        } else {
            let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (regex.test(passWord)) {
                await dispatch(fetchSignIn({ name, passWord, confirmPassword, phoneNumber }));
                if (succeeded == true) {
                    history.push({
                        pathname: "/otp",
                        state: {
                            name, passWord, confirmPassword, phoneNumber
                        }
                    });
                }
            }else{
                toast.notifyError("Mật khẩu yêu cầu: Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt")
            }
        }
    }
    useEffect(() => {
        if(succeeded==true){
            history.push({pathname:"/otp", state:{name,passWord,phoneNumber,confirmPassword}})
            dispatch(setUp());
        }
    }, [succeeded])
    return (
        <main class="mainLoginForm">
            <div class="loginDiv">
                <div class="loginBanner">
                    <div class="wrapperBanner">
                        <div class="titleBanner">
                            <h3>Đăng kí</h3>
                            <p>Tạo tài khoản bất động sản ngay</p>
                        </div>
                        <div class="imageBanner">
                            <img src="https://static.chotot.com/storage/assets/LOGIN/logo.svg" alt="chotot-logo" />
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
                        <input class="i1pbvj0j" placeholder="Nhập tên của bạn" value={name} onChange={(e) => setName(e.target.value.substring(0,50))} autocomplete="nope" />
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
                        <button tabindex="-1" type="button" onClick={() => changeTypePassWord(1)}>
                            {textBtn1}
                        </button>
                    </div>
                    <p class="prswihc">
                    </p>
                </div>
                <div class="inputLoginDiv">
                    <div>
                        <input type="password" id="confirmPass" class="i1pbvj0j" placeholder="Xác nhận mật khẩu" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} autocomplete="nope" />
                        <button tabindex="-1" type="button" onClick={() => changeTypePassWord(2)}>
                            {textBtn2}
                        </button>
                    </div>
                    <p class="prswihc">
                    </p>
                </div>
                <button class="buttonLogin accent r-normal medium w-normal i-left stretch" type="submit" onClick={signIn}>Đăng ký</button>
                <div class="loginDiv2">
                    <p> Bằng việc nhấn đăng ký, bạn đã đồng ý với
                        <a href="/forget-password">Điều khoản sử dụng</a>
                        của trang web bất động sản
                    </p>
                    {/* <small>Hoặc đăng nhập với</small>
                    <ul>
                        <li src="https://static.chotot.com/storage/assets/LOGIN/facebook.svg" class="iconButton fb" ></li>
                        <li src="https://static.chotot.com/storage/assets/LOGIN/google.svg" class="iconButton gg"></li>
                    </ul> */}
                    <p>Bạn đã có tài khoản<br />
                        <Link to="/Login">Đăng nhập</Link>
                    </p>
                </div>
            </div>
            <LoadingComponent isLoading={loading} />
        </main>
    )

}
export default LoginSignupForm;