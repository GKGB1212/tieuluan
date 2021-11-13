import React, { useState } from "react";
import './profile-edit-main-layout.styles.css';

const ProfileEditMainLayout = () => {
    return (
        <div className="boxContentLeft col-md-9">
            <div className=" row noMargin">
                <div>
                    <div className="row">
                        <h1 class="page-title" id="pageTitle">Thông tin cá nhân</h1>
                    </div>
                    <form className="formEdit">
                        <div className="col-md-12 col-sm-12">
                            <div class="_3hWTTQHIGJUzaTwYs3IRvj">
                                <div class="col-xs-12">
                                    <ul>
                                        <li>
                                            <div class="_127aka-EHteI96Rlw94SeA">
                                                <span>Họ tên</span>
                                            </div>
                                            <div class="_30EYSdf_NK78GgsJAB8_3I">
                                                <input placeholder="Chưa có thông tin" type="text" class="form-control" name="name" value="Khổng Gia Bình" />
                                            </div>
                                        </li>
                                        <li>
                                            <div class="_127aka-EHteI96Rlw94SeA">
                                                <span>Email</span>
                                            </div>
                                            <div class="_30EYSdf_NK78GgsJAB8_3I">
                                                <input placeholder="Chưa có thông tin" type="text" class="form-control" readonly="" name="email" value="binhkhongg@gmail.com" />
                                            </div>
                                        </li>
                                        <li>
                                            <div class="_127aka-EHteI96Rlw94SeA">
                                                <span>Địa chỉ</span>
                                            </div>
                                            <div class="_30EYSdf_NK78GgsJAB8_3I">
                                                <div class="_4VlWGQVD3acjTLHex2v00 null">
                                                    <input class="form-control" value="" />
                                                </div>
                                                <div class="_19QkQW4ovfYYJpsP7dZbJM">Vui lòng điền địa chỉ</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="_127aka-EHteI96Rlw94SeA"><span>Giới tính</span></div>
                                            <div class="_30EYSdf_NK78GgsJAB8_3I">
                                                <select placeholder="Giới tính" class="form-control" name="gender">
                                                    <option value="">Chưa có thông tin</option>
                                                    <option value="m">Nam</option>
                                                    <option value="f">Nữ</option>
                                                    <option value="u">Giới tính khác</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="_127aka-EHteI96Rlw94SeA">
                                                <span>Danh mục yêu thích</span>
                                            </div>
                                            <div class="_30EYSdf_NK78GgsJAB8_3I">
                                                <input type="button" class="form-control" name="favorite" placeholder="Chưa có thông tin" value="Căn hộ/Chung cư, Đất" />
                                            </div>
                                        </li>
                                        <li>
                                            <div class="_127aka-EHteI96Rlw94SeA"><span>Số CMND/Thẻ căn cước</span></div>
                                            <div class="_30EYSdf_NK78GgsJAB8_3I">
                                                <input placeholder="Chưa có thông tin" type="text" class="form-control" name="idNumber" value="" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="clearfix">
                                </div>
                            </div>
                            <div class="_1sBy8udWBON-7rg0Vy9i-6"><div class="col-xs-12"><button type="submit" to="/dashboard/profile/edit">Lưu thay đổi</button></div></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ProfileEditMainLayout;
