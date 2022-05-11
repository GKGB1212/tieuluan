// import React, { useState } from "react";
import "./modal-filter.style.css";
import SelectCustom from '../../components/select-custom/select-custom';

// const ModalFilter = () => {
//      return (
//     //         <div class="ReactModal__Overlay ReactModal__Overlay--after-open styles_modal" style="background-color: rgba(0, 0, 0, 0.5); z-index: 1001;">
//     //             <div class="ReactModal__Content ReactModal__Content--after-open  styles_modal-dialog undefined" tabindex="-1" role="dialog" aria-label="ChoTot Modal" style="top: 0%;">
//                     <div class=" styles_modal-content ">
//                         <div class="styles_headerCustom">
//                             <div class="pull-left" role="button" tabindex="0">
//                                 <span class="styles_closeButton" role="button" tabindex="0">×</span>
//                             </div>
//                             <button type="button" class="cancel">
//                                 <span class="styles_cancelFilterEnable" role="button" tabindex="0">Bỏ lọc</span>
//                             </button>
//                             <h4 class="text-center styles_titleCustom "> Lọc Kết Quả</h4>
//                         </div>
//                         <div class="styles_modal-body undefined">
//                             <div role="button" tabindex="0" class="Styles_optionsFieldWrapper">
//                                 <div class="Styles_sectionWrapper">
//                                     <a class="Styles_itemLabel">
//                                         <span class="Styles_title">Danh mục</span>
//                                         <span class="Styles_subTitle"> Tất cả bất động sản </span>
//                                         <img class="Styles_rightIcon" src="https://static.chotot.com/storage/XE_CDN_STAGING/c301c743e129ea23b89868cba27ca6c8.svg" alt="arrow" />
//                                     </a>
//                                 </div>
//                             </div>
//                             <div>
//                                 <div class="Styles_rangerWrapper">
//                                     <div class="Styles_priceFromTo">
//                                         <div>Giá từ <b>0 ₫</b> đến <b>30.000.000.000+ ₫</b></div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="Styles_sectionFilter">
//                                 <div class="Styles_checkField">
//                                     <div class="Styles_h2Label">Sắp xếp theo</div>
//                                     <div class="Styles_withoutModalGroup">
//                                         <div class="Styles_layoutGroup">
//                                             <div class="Styles_wrapper">
//                                                 <div role="button" tabindex="0" class="Styles_item">
//                                                     <div class="Styles_labelItem"><div class="Styles_icon">
//                                                         <img src="https://static.chotot.com/storage/chotot-icons/svg/relevancy.svg" class="Styles_left-icon" alt="label-icon" />
//                                                     </div>Tin liên quan trước<div class="Styles_pulseIcon" id="pulse-icon">
//                                                             <span class="styles_pulse"></span>
//                                                         </div>
//                                                         <div>
//                                                         </div>
//                                                     </div>
//                                                     <div class="Styles_radioButton">
//                                                         <label class="Styles_labelButton Styles_labelButtonChecked" for="radio-4">
//                                                             <input type="radio" name="4" id="radio-4" value="4" checked="" />
//                                                         </label>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div class="Styles_layoutGroup">
//                                             <div class="Styles_wrapper">
//                                                 <div role="button" tabindex="0" class="Styles_item">
//                                                     <div class="Styles_labelItem"><div class="Styles_icon">
//                                                         <img src="https://static.chotot.com/storage/chotot-icons/svg/order-by-price.svg" class="Styles_left-icon__3q29C" alt="label-icon" />
//                                                     </div>Giá thấp trước</div>
//                                                     <div class="Styles_radioButton__1t8vV">
//                                                         <label class="Styles_labelButton__H4jOu" for="radio-1">
//                                                             <input type="radio" name="1" id="radio-1" value="1" />
//                                                         </label>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <h2 class="Styles_h2Label"> Bạn muốn</h2>
//                                     <div class="Styles_withoutModalGroup">
//                                         <div class="Styles_layoutGroup">
//                                             <div class="Styles_wrapper">
//                                                 <div class="Styles_item">
//                                                     <div class="Styles_labelItem">
//                                                         <div class="Styles_icon">
//                                                             <img src="https://static.chotot.com/storage/chotot-icons/svg/want-to-buy.svg" class="Styles_left-icon" alt="label-icon" />
//                                                         </div>
//                                                         <span>Mua</span>
//                                                     </div>
//                                                     <span class="rc-checkbox">
//                                                         <input name="s" type="checkbox" class="rc-checkbox-input" value="s" />
//                                                         <span class="rc-checkbox-inner">
//                                                         </span>
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div class="Styles_layoutGroup">
//                                             <div class="Styles_wrapper">
//                                                 <div class="Styles_item">
//                                                     <div class="Styles_labelItem">
//                                                         <div class="Styles_icon">
//                                                             <img src="https://static.chotot.com/storage/chotot-icons/svg/want-to-sell.svg" class="Styles_left-icon" alt="label-icon" />
//                                                         </div>
//                                                         <span>Bán</span>
//                                                     </div>
//                                                     <span class="rc-checkbox">
//                                                         <input name="k" type="checkbox" class="rc-checkbox-input" value="k" />
//                                                         <span class="rc-checkbox-inner"></span>
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <h2 class="Styles_h2Label">Đăng bởi</h2>
//                                     <div class="Styles_withoutModalGroup">
//                                         <div class="Styles_layoutGroup">
//                                             <div class="Styles_wrapper">
//                                                 <div class="Styles_item">
//                                                     <div class="Styles_labelItem">
//                                                         <div class="Styles_icon">
//                                                             <img src="https://static.chotot.com/storage/chotot-icons/svg/dam-bao-icon.svg" class="Styles_left-icon__3q29C" alt="label-icon" />
//                                                         </div>
//                                                         <span>Đối tác Chợ Tốt</span>
//                                                     </div>
//                                                     <span class="rc-checkbox">
//                                                         <input name="shop_entitlement" type="checkbox" class="rc-checkbox-input" value="shop_entitlement" />
//                                                         <span class="rc-checkbox-inner">
//                                                         </span>
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div class="Styles_layoutGroup">
//                                             <div class="Styles_wrapper">
//                                                 <div class="Styles_item">
//                                                     <div class="Styles_labelItem">
//                                                         <div class="Styles_icon">
//                                                             <img src="https://static.chotot.com/storage/chotot-icons/svg/individual-seller.svg" class="Styles_left-icon" alt="label-icon" />
//                                                         </div>
//                                                         <span>Cá nhân</span>
//                                                     </div>
//                                                     <span class="rc-checkbox">
//                                                         <input name="p" type="checkbox" class="rc-checkbox-input" value="p" />
//                                                         <span class="rc-checkbox-inner"></span>
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div class="Styles_layoutGroup">
//                                             <div class="Styles_wrapper">
//                                                 <div class="Styles_item">
//                                                     <div class="Styles_labelItem">
//                                                         <div class="Styles_icon">
//                                                             <img src="https://static.chotot.com/storage/chotot-icons/svg/pro-seller.svg" class="Styles_left-icon" alt="label-icon" />
//                                                         </div><span>Môi giới</span>
//                                                     </div>
//                                                     <span class="rc-checkbox">
//                                                         <input name="c" type="checkbox" class="rc-checkbox-input" value="c" />
//                                                         <span class="rc-checkbox-inner"></span>
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="Styles_h2Label">Hiển thị dạng</div>
//                                     <div class="Styles_withoutModalGroup">
//                                         <div class="Styles_layoutGroup">
//                                             <div class="Styles_wrapper">
//                                                 <div role="button" tabindex="0" class="Styles_item">
//                                                     <div class="Styles_labelItem"><div class="Styles_icon">
//                                                         <img src="https://static.chotot.com/storage/chotot-icons/svg/list.svg" class="Styles_left-icon" alt="label-icon" />
//                                                     </div>Hình và Chữ</div>
//                                                     <div class="Styles_radioButton">
//                                                         <label class="Styles_labelButton Styles_labelButtonChecked" for="radio-0">
//                                                             <input type="radio" name="0" id="radio-0" value="0" checked="" />
//                                                         </label>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div class="Styles_layoutGroup">
//                                             <div class="Styles_wrapper">
//                                                 <div role="button" tabindex="0" class="Styles_item">
//                                                     <div class="Styles_labelItem">
//                                                         <div class="Styles_icon">
//                                                             <img src="https://static.chotot.com/storage/chotot-icons/svg/grid.svg" class="Styles_left-icon" alt="label-icon" />
//                                                         </div>Lưới</div>
//                                                     <div class="Styles_radioButton">
//                                                         <label class="Styles_labelButton" for="radio-1">
//                                                             <input type="radio" name="1" id="radio-1" value="1" />
//                                                         </label>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="styles_footerCustom">
//                             <button type="button" class="styles_close">
//                                 <span aria-hidden="true">Áp dụng (1)</span>
//                             </button>
//                         </div>
//                     </div>
//             //     </div>
//             // </div>
//     )
// }
// export default ModalFilter;



import React, { useEffect, useRef } from 'react';
// import './notify.styles.css'
const ModalFilter = (props) => {
    const {
        title,
        isShow,
        cancel,
        handleChangeStatusPost
    } = props;
    const notifyPopup = useRef(null);
    useEffect(() => {
        if (!isShow) return;
        const height = notifyPopup.current.clientHeight;
        notifyPopup.current.style.top = `calc(50% - ${height / 2}px)`;
    }, [isShow]);
    return (
        <div className="notify-error-popup-container" >
            <div className="notify-popup" ref={notifyPopup}>
                <p className="title-header">Lọc chi tiết</p>
                <div className="body-popup">
                    <div class="Styles_optionsFieldWrapper" role="button" tabindex="0">
                    <SelectCustom/>
                    </div>
                    <div role="button" tabindex="0" class="Styles_optionsFieldWrapper">
                        <div class="Styles_sectionWrapper">
                            <a class="Styles_itemLabel">
                                <span class="Styles_title">Danh mục</span>
                                <select>
                                    <option>ffffffffffff</option>
                                    <option>ffffffffffff</option>
                                    <option>ffffffffffff</option>
                                </select>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div class="Styles_rangerWrapper">
                            <div class="Styles_priceFromTo">
                                <div>Giá từ <b><input /></b><b><input /></b></div>
                            </div>
                        </div>
                    </div>
                    <div class="Styles_sectionFilter">
                        <div class="Styles_checkField">
                            <div class="Styles_h2Label">Sắp xếp theo</div>
                            <div class="Styles_withoutModalGroup">
                                <div class="Styles_layoutGroup">
                                    <div class="Styles_wrapper">
                                        <div role="button" tabindex="0" class="Styles_item">
                                            <div class="Styles_labelItem"><div class="Styles_icon">
                                                <img src="https://static.chotot.com/storage/chotot-icons/svg/relevancy.svg" class="Styles_left-icon" alt="label-icon" />
                                            </div>Tin liên quan trước<div class="Styles_pulseIcon" id="pulse-icon">
                                                    <span class="styles_pulse"></span>
                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                            <div class="Styles_radioButton">
                                                <label class="Styles_labelButton Styles_labelButtonChecked" for="radio-4">
                                                    <input type="radio" name="4" id="radio-4" value="4" checked="" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="Styles_layoutGroup">
                                    <div class="Styles_wrapper">
                                        <div role="button" tabindex="0" class="Styles_item">
                                            <div class="Styles_labelItem"><div class="Styles_icon">
                                                <img src="https://static.chotot.com/storage/chotot-icons/svg/order-by-price.svg" class="Styles_left-icon__3q29C" alt="label-icon" />
                                            </div>Giá thấp trước</div>
                                            <div class="Styles_radioButton__1t8vV">
                                                <label class="Styles_labelButton__H4jOu" for="radio-1">
                                                    <input type="radio" name="1" id="radio-1" value="1" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2 class="Styles_h2Label"> Bạn muốn</h2>
                            <div class="Styles_withoutModalGroup">
                                <div class="Styles_layoutGroup">
                                    <div class="Styles_wrapper">
                                        <div class="Styles_item">
                                            <div class="Styles_labelItem">
                                                <div class="Styles_icon">
                                                    <img src="https://static.chotot.com/storage/chotot-icons/svg/want-to-buy.svg" class="Styles_left-icon" alt="label-icon" />
                                                </div>
                                                <span>Mua</span>
                                            </div>
                                            <span class="rc-checkbox">
                                                <input name="s" type="checkbox" class="rc-checkbox-input" value="s" />
                                                <span class="rc-checkbox-inner">
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="Styles_layoutGroup">
                                    <div class="Styles_wrapper">
                                        <div class="Styles_item">
                                            <div class="Styles_labelItem">
                                                <div class="Styles_icon">
                                                    <img src="https://static.chotot.com/storage/chotot-icons/svg/want-to-sell.svg" class="Styles_left-icon" alt="label-icon" />
                                                </div>
                                                <span>Bán</span>
                                            </div>
                                            <span class="rc-checkbox">
                                                <input name="k" type="checkbox" class="rc-checkbox-input" value="k" />
                                                <span class="rc-checkbox-inner"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="Styles_h2Label">Hiển thị dạng</div>
                            <div class="Styles_withoutModalGroup">
                                <div class="Styles_layoutGroup">
                                    <div class="Styles_wrapper">
                                        <div role="button" tabindex="0" class="Styles_item">
                                            <div class="Styles_labelItem"><div class="Styles_icon">
                                                <img src="https://static.chotot.com/storage/chotot-icons/svg/list.svg" class="Styles_left-icon" alt="label-icon" />
                                            </div>Hình và Chữ</div>
                                            <div class="Styles_radioButton">
                                                <label class="Styles_labelButton Styles_labelButtonChecked" for="radio-0">
                                                    <input type="radio" name="0" id="radio-0" value="0" checked="" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="Styles_layoutGroup">
                                    <div class="Styles_wrapper">
                                        <div role="button" tabindex="0" class="Styles_item">
                                            <div class="Styles_labelItem">
                                                <div class="Styles_icon">
                                                    <img src="https://static.chotot.com/storage/chotot-icons/svg/grid.svg" class="Styles_left-icon" alt="label-icon" />
                                                </div>Lưới</div>
                                            <div class="Styles_radioButton">
                                                <label class="Styles_labelButton" for="radio-1">
                                                    <input type="radio" name="1" id="radio-1" value="1" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="message-btn">
                    <button className="btn-confirm" onClick={handleChangeStatusPost}>
                        Xác nhận
                    </button>
                    <button className="btn-confirm" onClick={cancel}>
                        Hủy
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalFilter
