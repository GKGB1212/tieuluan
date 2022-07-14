import React, { useEffect, useState } from "react";
import './profile-edit.layout.styles.css';
import { useSelector, useDispatch } from "react-redux";
import { fetchInfoUser } from "../../redux/user/userSlice";
import { useHistory } from "react-router";
import imgAvt from '../../assets/images/avatar.png';
import { fetchChangeInfo, setUp, setUpStateChangeInfoUser } from "../../redux/user/userSlice";
import * as toast from '../../common/toast';
import LoadingComponent from '../../components/loader/LoadingComponent';
const ProfileEditLayout = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const infoUser = useSelector(state => state.user.infoUser);
    const succeeded = useSelector(state => state.user.succeeded);
    const loading = useSelector(state => state.user.loading);
    const stateChangeInfoUser = useSelector(state => state.user.stateChangeInfoUser);
    const [name, setName] = useState('');
    const [imageUrltemp, setImageUrltemp] = useState(null);
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [gender, setGender] = useState(null);
    const [birthday, setBirthday] = useState(new Date());
    const [address, setAddress] = useState('');
    useEffect(() => {
        dispatch(fetchInfoUser());
    }, [])
    useEffect(() => {
        if (stateChangeInfoUser == 1) {
            dispatch(setUpStateChangeInfoUser());
            toast.notifySuccess("Đã thay đổi thông tin người dùng!");
        } else if (stateChangeInfoUser == -1) {
            dispatch(setUpStateChangeInfoUser());
            toast.notifyError("Đã xảy ra lỗi, không thể thay đổi thông tin người dùng!")
        }
    }, [stateChangeInfoUser])
    useEffect(() => {
        if (infoUser != null) {
            setName(infoUser.name);
            setGender(infoUser.gender);
            //xử lý ngày sinh
            var arrBirthday = ((new Date(infoUser.birthday)).toLocaleDateString()).split("/");
            setBirthday(arrBirthday[2] + "-" + arrBirthday[1] + "-" + arrBirthday[0]);
            setAddress(infoUser.address);
            if (infoUser.imageUrl != null) {
                setImageUrltemp(infoUser.imageUrl);
            } else {
                setImageUrltemp(imgAvt);
            }
            setImageUrl(infoUser.imageUrl);
        }
    }, [infoUser]);
    const handleChangeAVT = (e) => {
        let img = URL.createObjectURL(e.target.files[0]);
        setImageUrltemp(img);
        setImage(e.target.files[0]);
    }
    const handleUpdateInfo = () => {
        dispatch(fetchChangeInfo({ name, gender, birthday, address, image, imageUrl }));
    }
    return (
        <div className="main-content">
            <div className="container WrapperContainer">
                <div className="indexPage PaperContainer">
                    <div className="PaperWrapper">
                        <h4 className="TitleHeading">Thông tin cá nhân</h4>
                        <div className="row">
                            <div className="listt">
                            <div className="_3wam_fc0n3F8W2D-BvqYNK">
                                <div className="be-Hqc5uEkMmHJf3ZA2Rw col-md-3 col-sm-12">
                                    <div className="T8j5wxsOm0H3gemUZxWlK">
                                        <img src={imageUrltemp} />
                                        <label className="btnChangeAvt" for="upload-photo">Chọn ảnh</label>
                                        <input type="file" name="photo" id="upload-photo" onChange={(e) => handleChangeAVT(e)} />
                                    </div>
                                </div>
                                <div className="_2Gk5p4qAwMuLpxIDlMdkCv col-md-9 col-sm-12">
                                    <div className="_3hWTTQHIGJUzaTwYs3IRvj">
                                        <div className="col-xs-12">
                                            <ul>
                                                <li>
                                                    <div className="_127aka-EHteI96Rlw94SeA">
                                                        <span>Họ và tên</span>
                                                    </div>
                                                    <div className="_30EYSdf_NK78GgsJAB8_3I">
                                                        <input value={name} onChange={(e) => setName(e.target.value)} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="_127aka-EHteI96Rlw94SeA"><span>Địa chỉ</span>
                                                    </div>
                                                    <div className="_30EYSdf_NK78GgsJAB8_3I">
                                                        <input value={address} onChange={(e) => setAddress(e.target.value)} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="_127aka-EHteI96Rlw94SeA">
                                                        <span>Giới tính</span>
                                                    </div>
                                                    <div className="_30EYSdf_NK78GgsJAB8_3I">
                                                        <select className="selectEditProfile" value={gender} onChange={(e) => setGender(e.target.value)}>
                                                            <option value='empty'>Vui lòng chọn giới tính</option>
                                                            <option value={false}>Nam</option>
                                                            <option value={true}>Nữ</option>
                                                        </select>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="_127aka-EHteI96Rlw94SeA"><span>Ngày sinh</span></div>
                                                    <div className="_30EYSdf_NK78GgsJAB8_3I">
                                                        <input type="date" value={birthday} onChange={(e) => { setBirthday(e.target.value) }} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="_30EYSdf_NK78GgsJAB8_3I">
                                                        <button onClick={() => {
                                                            dispatch(setUp());
                                                            history.push("/profile/password")
                                                        }}>Đổi mật khẩu</button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="_30EYSdf_NK78GgsJAB8_3I">
                                                        <button>Yêu cầu chấm dứt tài khoản</button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="_30EYSdf_NK78GgsJAB8_3I">
                                                        <button onClick={handleUpdateInfo}>Cập nhật thông tin</button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="clearfix">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LoadingComponent isLoading={loading} />
        </div>
    )
}
export default ProfileEditLayout;