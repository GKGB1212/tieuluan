import React from "react";
import './footer.styles.css'

const Footer = () => {
    return (
        <div class="footer-clean col-xs-12">
            <footer>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-4 col-md-3 item">
                            <h3>Hỗ trợ khách hàng</h3>
                            <ul>
                                <li><a href="#">Trung tâm trợ giúp</a></li>
                                <li><a href="#">An toàn mua bán</a></li>
                                <li><a href="#">Quy định cần biết</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-4 col-md-3 item">
                            <h3>Về Atlanta</h3>
                            <ul>
                                <li><a href="#">Công ty</a></li>
                                <li><a href="#">Giới thiệu</a></li>
                                <li><a href="#">Liên hệ</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-3 item social">
                            <a href="https://www.facebook.com/AtlantaBatDongSan/" style={{ backgroundColor: "#3B5998", color: "white" }}><i class="fa fa-facebook"></i></a>
                            <a href="https://www.facebook.com/AtlantaBatDongSan/" style={{ backgroundColor: "#55ACEE", color: "white" }}><i class="fa fa-twitter" ></i></a>
                            <a href="https://www.facebook.com/AtlantaBatDongSan/" style={{ backgroundColor: "#0976B4", color: "white" }}><i class="fa fa-linkedin"></i></a>
                            <a href="https://www.facebook.com/AtlantaBatDongSan/" style={{ backgroundColor: "#B7242A", color: "white" }}><i class="fa fa-instagram"></i></a>
                            <p class="copyright">Atlanta © Gia Bình & Thủy Tiên</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;