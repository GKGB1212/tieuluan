import React, { useState } from "react";
import './profile-edit-main-layout.styles.css';

const ProfileEditMainLayout = () => {
    return (
        <div className="boxContentLeft col-md-9">
            <div className=" row noMargin">
                <div>
                    <div className="row">
                        <h1 className="page-title" id="pageTitle">Thông tin cá nhân</h1>
                    </div>
                    <form className="formEdit">
                        <div className="col-md-12 col-sm-12">
                            <div className="_3hWTTQHIGJUzaTwYs3IRvj">
                                <div className="col-xs-12">
                                    <ul>
                                        <li>
                                            <div className="_127aka-EHteI96Rlw94SeA">
                                                <span>Họ tên</span>
                                            </div>
                                            <div className="_30EYSdf_NK78GgsJAB8_3I">
                                                <input placeholder="Chưa có thông tin" type="text" className="form-control" name="name" value="Khổng Gia Bình" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="_127aka-EHteI96Rlw94SeA">
                                                <span>Email</span>
                                            </div>
                                            <div className="_30EYSdf_NK78GgsJAB8_3I">
                                                <input placeholder="Chưa có thông tin" type="text" className="form-control" readonly="" name="email" value="binhkhongg@gmail.com" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="_127aka-EHteI96Rlw94SeA">
                                                <span>Địa chỉ</span>
                                            </div>
                                            <div className="_30EYSdf_NK78GgsJAB8_3I">
                                                <div className="_4VlWGQVD3acjTLHex2v00 null">
                                                    <input className="form-control" value="" />
                                                </div>
                                                <div className="_19QkQW4ovfYYJpsP7dZbJM">Vui lòng điền địa chỉ</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="_127aka-EHteI96Rlw94SeA"><span>Giới tính</span></div>
                                            <div className="_30EYSdf_NK78GgsJAB8_3I">
                                                <select placeholder="Giới tính" className="form-control" name="gender">
                                                    <option value="">Chưa có thông tin</option>
                                                    <option value="m">Nam</option>
                                                    <option value="f">Nữ</option>
                                                    <option value="u">Giới tính khác</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="_127aka-EHteI96Rlw94SeA">
                                                <span>Danh mục yêu thích</span>
                                            </div>
                                            <div className="_30EYSdf_NK78GgsJAB8_3I">
                                                <input type="button" className="form-control" name="favorite" placeholder="Chưa có thông tin" value="Căn hộ/Chung cư, Đất" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="_127aka-EHteI96Rlw94SeA"><span>Số CMND/Thẻ căn cước</span></div>
                                            <div className="_30EYSdf_NK78GgsJAB8_3I">
                                                <input placeholder="Chưa có thông tin" type="text" className="form-control" name="idNumber" value="" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="clearfix">
                                </div>
                            </div>
                            <div className="_1sBy8udWBON-7rg0Vy9i-6"><div className="col-xs-12"><button type="submit" to="/dashboard/profile/edit">Lưu thay đổi</button></div></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ProfileEditMainLayout;
