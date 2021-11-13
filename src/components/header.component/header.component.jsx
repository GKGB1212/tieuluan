import React from "react";
import './header.styles.css';
import logo from '../../logo.webp';
import { Link } from "react-router-dom";
const HeaderM = () => {
    return (
        <>
            <section class="header">
                <div class="nav">
                    <img src={logo} alt="" />
                    <div class="nav-links">
                        <ul>
                            <li><a href=""><i class="fa fa-home" aria-hidden="true"></i> Trang chủ</a></li>
                            <li><a href=""><i class="fa fa-user-o" aria-hidden="true"></i> Quản lý tin</a></li>
                            <li><a href=""><i class="fa fa-commenting-o" aria-hidden="true"></i> Chat</a></li>
                            <li><a href=""><i class="fa fa-bell-o" aria-hidden="true"></i> Thông báo</a> </li>
                            <li><a href=""><i class="fa fa-ellipsis-h" aria-hidden="true"></i> Thêm</a></li>
                        </ul>
                    </div>
                </div>
                <div class="info">
                    <div class="search">
                        <input type="text" placeholder="Bất động sản" />
                    </div>
                    <a href="">
                        <div class="login">
                            <div class="fa fa-user-circle-o" ></div><div><Link to='/Login'>Đăng nhập</Link></div>
                        </div>
                    </a>
                    <Link to="/PostCreate" className="btn"><i class="fa fa-pencil-square-o" ></i>ĐĂNG TIN</Link>
                </div>
            </section>
        </>
    );
}

export default HeaderM;