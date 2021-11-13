import React from "react";
import './dynamic-filter.styles.css'

const DynamicFilter = () => {
    return (
        <div className="DynamicFilterStyle_dynamicFilterWrapper">
            <div className="WrapperScroll_wrapperOverflow">
                <div className="DynamicFilterStyle_dynamicFilter">
                    <h1 style={{ marginTop: "5px" }}>Lọc bất động sản</h1>
                    <div class="ItemStyles_filterItem ItemStyles_filterItemSelected" role="button" tabindex="0">
                        <select class="form-input">
                            <option value="0">Chọn Tỉnh/ Thành phố</option>
                            <option value="2">TP Hồ Chí Minh</option>
                            <option value="1">Hà Nội</option>
                        </select>
                    </div>
                    <div class="ItemStyles_filterItem ItemStyles_filterItemSelected" role="button" tabindex="0">
                        <select class="form-input">
                            <option value="0">Mua bán</option>
                            <option value="1">Cho thuê</option>
                        </select>
                    </div>
                    <div class="ItemStyles_filterItem ItemStyles_filterItemSelected" role="button" tabindex="0">
                        <select class="form-input">
                            <option value="0">Chọn Loại BĐS</option>
                            <option value="57">Căn hộ</option>
                            <option value="62">Nhà riêng</option>
                            <option value="63">Nhà mặt phố</option>
                            <option value="66">Nhà phố thương mạ</option>
                            <option value="56">Nhà biệt thự, liền kề</option>
                            <option value="58">Đất</option>
                            <option value="79">Đất nền dự án</option>
                            <option value="61">Bất động sản khác</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DynamicFilter;