//thông tin chi tiết của 1 sản phẩm
import React from 'react';
import './ad-decription-wrapper.styles.css';

const AdDecriptionWrapper = () => {
    return (
        <div class="AdDecription_adDecriptionWrapper" style={{  width: "600px" }}>
            <h1 class="AdDecription_adTitle" itemprop="name">
                1% HOA HỒNG NHÀ 5 LẦU HẺM XE HƠI THÔNG TIỆN KD
            </h1>
            <div class="AdDecription_priceWrapper">
                <meta itemprop="position" content="1" />
                <div class="AdDecription_adPrice" itemprop="price">
                    <span>
                        <div>
                            <span class="AdDecription_priceWrapper">
                                <span class="AdDecription_price">
                                    <span itemprop="price">7,5 tỷ
                                        <span class="AdDecription_squareMetre">
                                            <sup>2</sup>
                                        </span>
                                    </span>
                                    <span style={{display:"none"}} itemprop="priceCurrency">
                                        đ &nbsp; &nbsp;
                                    </span>
                                </span>
                            </span>
                        </div>
                    </span>
                </div>
                <div class="SaveAd_saveAdWrapper AdDecription_saveAd">
                    <button type="button" class="SaveAd_saveAdViewDetail">
                        <p style={{margin: "0px"}}>Lưu tin </p>
                        <img height="20" width="20" src="https://static.chotot.com/storage/icons/saveAd/save-ad.svg" alt="like" />
                    </button>
                </div>
            </div>
            <div>
                <div class="d-block col-xs-12 no-padding">
                    <div class="kARpok">
                        <div class="announementContent">
                            <img alt="" src="https://static.chotot.com/storage/react-common/bank_icon.svg" />Trả góp <strong>70 triệu/tháng</strong>, trả trước 1.5 tỷ<i style={{color: "rgb(155, 155, 155)"}}> (Gói vay tham khảo từ Chợ Tốt)</i>
                            <div class="infoIcon" role="button" tabindex="0" id="btn_loans_pty_info">
                                <img alt="" src="https://static.chotot.com/storage/react-common/infoIcon2.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-lg-none d-block col-xs-12 no-padding">
            </div>
            <div>
                <div class="col-xs-12 no-padding">
                    <div class="media margin-top-05" style={{display: "flex", alignItems: "center", margin: "10px 0px"}}>
                        <div class="media-left media-middle">
                            <img class="AdParam_adParamIcon" alt="location" src="https://static.chotot.com/storage/icons/logos/ad-param/location.svg" />
                        </div>
                        <div class="media-body media-middle AdParam_address AdParam_addressClickable" role="button" tabindex="0">
                            <span class="fz13">Đường Lê Đức Thọ, Phường 16, Quận Gò Vấp, Tp Hồ Chí Minh</span>
                        </div>
                    </div>
                </div>
            </div>
            <p class="AdDecription_adBody" itemprop="description">
                💥1% HOA HỒNG NHẬN ĐỦ nhờ 5000 Anh em Gò Vấp chạy phụ nhé!
                🍏Chính thức lên sóng căn nhà phố 5 lầu cho Gia đình có Anh em đông tông chủ đạo XANH DƯƠNG NHẸ.
                🍎1 trệt 5 lầu Full Nội Thất cao cấp giá 7,5 tỷ 2 xe hơi né nhau hẻm Thông kinh doanh buôn bán, mở Spa, Công ty...
                🍏Diện tích thực tế 4,6x16m. Gara xe hơi 7 chỗ hẻm thông trước nhà 2 xe hơi né nhau
                👉Địa chỉ 467/126 Lê Đức Thọ, p16, Gò Vấp (rẻ phải hẻm 126 là thấy nhà đẹp nhất xóm ;p )
            </p>
        </div>
    )
}
export default AdDecriptionWrapper;