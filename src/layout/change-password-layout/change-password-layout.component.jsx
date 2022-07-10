import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import './change-password-layout.styles.css';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchChangePassword } from "../../redux/user/userSlice";
import { notifyError, notifySuccess } from "../../common/toast";
import { setUp } from "../../redux/user/userSlice";
import LoadingComponent from "../../components/loader/LoadingComponent";
const ChangePasswordLayout = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const loading=useSelector(state=>state.user.loading)
    const error = useSelector(state => state.user.error);
    const succeeded = useSelector(state => state.user.succeeded);
    const history = useHistory();
    const [currentError,setCurrentError]=useState(null);
    const handleClickChangePassword = () => {
        let regex = /^(?=.*[0-9])(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
        if (oldPassword == '' || password == '' || confirmPassword == '') {
            setCurrentError("Vui lòng nhập đủ 3 trường!");
        } else if (regex.test(password) == false) {
            setCurrentError("Mật khẩu yêu cầu: Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt");
        }
        else if (confirmPassword != password) {
            setCurrentError("Vui lòng kiểm tra lại, mật khẩu xác nhận không khớp!");
        } else if (password == oldPassword) {
            setCurrentError("Mật khẩu mới phải khác mật khẩu cũ!");
        }
        else
            dispatch(fetchChangePassword({ oldPassword, password, confirmPassword }))
    }
    useEffect(() => {
        if (succeeded == true) {
            dispatch(setUp());
            notifySuccess("Đổi mật khẩu thành công");
            history.push("/dashboard/profile");

        }
    }, [succeeded])
    useEffect(()=>{
        setCurrentError(error)
    },[error]);
    return (
        <div className="container">
            <div className="row">
                <div className="boxContentLeft">
                    <div className="white-box row noMargin">
                        <div className="col-md-12">
                            <div className="row">
                                <h1 className="page-title" id="pageTitle">Thay đổi mật khẩu</h1>
                            </div>
                            <div className="">
                                <div>
                                    <div className="_3wam">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="_3hWTTQHIGJUzaTwYs3IRvj">
                                                <div className="col-xs-12">
                                                    <ul>
                                                        <li>
                                                            {
                                                                currentError!=null
                                                                ?(
                                                                    <div className="e66t3pu error">
                                                                            {currentError}
                                                                        </div>
                                                                ):('')
                                                            }
                                                        </li>
                                                        <li>
                                                            <div className="_127aka-EHteI96Rlw94SeA"><span>Mật khẩu hiện tại</span></div>
                                                            <div className="_30EYSdf_NK78GgsJAB8_3I"><input placeholder="Mật khẩu hiện tại" onChange={(e) => setOldPassword(e.target.value)} type="password" className="form-control" name="oldPassword" value={oldPassword} /></div>
                                                        </li>
                                                        <li>
                                                            <div className="_127aka-EHteI96Rlw94SeA"><span>Mật khẩu</span></div>
                                                            <div className="_30EYSdf_NK78GgsJAB8_3I"><input placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" name="newPassword" value={password} /></div>
                                                        </li>
                                                        <li>
                                                            <div className="_127aka-EHteI96Rlw94SeA"><span>Xác nhận mật khẩu</span></div>
                                                            <div className="_30EYSdf_NK78GgsJAB8_3I"><input placeholder="Xác nhận mật khẩu" onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="form-control" name="rePassword" value={confirmPassword} /></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="_1sBy8udWBON-7rg0Vy9i-6">
                                                <div className="col-xs-12">
                                                    <button type="submit" onClick={handleClickChangePassword}>Đổi mật khẩu</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LoadingComponent isLoading={loading}/>
        </div>
    )
}

export default ChangePasswordLayout;