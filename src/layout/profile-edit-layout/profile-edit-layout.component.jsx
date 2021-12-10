import React, { useEffect, useState } from "react";
import './profile-edit.layout.styles.css';
import { useSelector, useDispatch } from "react-redux";
import { fetchInfoUser } from "../../redux/user/userSlice";
import { useHistory } from "react-router";
const ProfileEditLayout = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const infoUser = useSelector(state => state.user.infoUser);
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    const [gender, setGender] = useState(0);
    const [birthday, setBirthday] = useState(new Date());
    const [address, setAddress] = useState('');
    useEffect(() => {
        dispatch(fetchInfoUser());
    }, [])
    useEffect(() => {
        if (infoUser != null) {
            setName(infoUser.name);
            setImageUrl(infoUser.imageUrl);
            setGender(infoUser.gender);
            //xử lý ngày sinh
            var arrBirthday = ((new Date(infoUser.birthday)).toLocaleDateString()).split("/");
            console.log(arrBirthday);
            setBirthday(arrBirthday[2] + "-" + arrBirthday[1] + "-" + arrBirthday[0]);
            setAddress(infoUser.address);
            console.log(infoUser)
        }
    }, [infoUser]);
    return (
        <div className="container">
            <div className="row">
                <div class="white-box row noMargin">
                    <div class="row">
                        <h1 class="page-title" id="pageTitle">Thông tin cá nhân</h1>
                    </div>
                    <div class="_3wam_fc0n3F8W2D-BvqYNK">
                        <div class="be-Hqc5uEkMmHJf3ZA2Rw col-md-3 col-sm-12">
                            <div class="T8j5wxsOm0H3gemUZxWlK">
                                {
                                    imageUrl!=null
                                    ?(<img src="https://cdn.chotot.com/uac2/21119808"/>)
                                    :(<img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Real-Estate-Logo-Design-PNG-Transparent.png"/>)
                                }
                                <div class="_1pmT8qcvx0jh6SDXWZ2jsw"><i class="_14Aqs4U4nJSw2OoFWbQwDl">
                                </i>
                                    <input type="file" multiple="" accept="image/jpeg, image/png" />
                                </div>
                            </div>
                        </div>
                        <div class="_2Gk5p4qAwMuLpxIDlMdkCv col-md-9 col-sm-12">
                            <div class="_3hWTTQHIGJUzaTwYs3IRvj">
                                <div class="col-xs-12">
                                    <ul>
                                        <li>
                                            <div class="_127aka-EHteI96Rlw94SeA">
                                                <span>Họ và tên</span>
                                            </div>
                                            <div class="_30EYSdf_NK78GgsJAB8_3I">
                                                <input value={name} onChange={(e) => setName(e.target.value)} />
                                            </div>
                                        </li>
                                        <li>
                                            <div class="_127aka-EHteI96Rlw94SeA"><span>Địa chỉ</span>
                                            </div>
                                            <div class="_30EYSdf_NK78GgsJAB8_3I">
                                                <input value={address} onChange={(e) => setAddress(e.target.value)} />
                                            </div>
                                        </li>
                                        <li>
                                            <div class="_127aka-EHteI96Rlw94SeA">
                                                <span>Giới tính</span>
                                            </div>
                                            <div class="_30EYSdf_NK78GgsJAB8_3I">
                                                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                                                    <option>Nam</option>
                                                    <option>Nữ</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="_127aka-EHteI96Rlw94SeA"><span>Ngày sinh</span></div>
                                            <div class="_30EYSdf_NK78GgsJAB8_3I">
                                                <input type="date" value={birthday} onChange={(e) => { setBirthday(e.target.value); console.log(e.target.value) }} />
                                            </div>
                                        </li>
                                        <li>
                                            <div class="_30EYSdf_NK78GgsJAB8_3I">
                                                <button onClick={() => {
                                                    history.push("/profile/password")
                                                }}>Đổi mật khẩu</button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="_30EYSdf_NK78GgsJAB8_3I">
                                                <button>Yêu cầu chấm dứt tài khoản</button>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="_30EYSdf_NK78GgsJAB8_3I">
                                                <button>Cập nhật thông tin</button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="clearfix">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileEditLayout;