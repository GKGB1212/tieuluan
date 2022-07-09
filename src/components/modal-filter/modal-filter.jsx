// import React, { useState } from "react";
import "./modal-filter.style.css";
import SelectCustom from '../../components/select-custom/select-custom';
import RadioButtonCustom from "../radio-button-custom/radio-button-custom";
import React, { useEffect, useRef } from 'react';
// import './notify.styles.css'
const ModalFilter = (props) => {
    const {
        title,
        changeIsShow,
        handleChangeStatusPost,
        isShowModalFilter
    } = props;
    const notifyPopup = useRef(null);
    useEffect(() => {
        if (!isShowModalFilter) return;
        const height = notifyPopup.current.clientHeight;
        notifyPopup.current.style.top = `calc(50% - ${height / 2}px)`;
    }, [isShowModalFilter]);
    return (
        <div className="notify-error-popup-container" style={isShowModalFilter ? { display: 'block' } : { display: 'none' }}>
            <div className="notify-popup-filter" ref={notifyPopup}>
                <p className="title-header">Lọc chi tiết</p>
                <div className="body-popup">
                    <div className="Styles_sectionWrapper">
                        <div className="Styles_priceFromTo">
                            <div>Giá từ <b><input className="input-price" /></b> đến <b><input className="input-price" /></b></div>
                        </div>
                    </div>
                    <div className="Styles_sectionWrapper">
                        <SelectCustom title="Thành phố" />
                    </div>
                    <div className="Styles_sectionWrapper">
                        <SelectCustom title="Quận huyện" />
                    </div>
                    <div className="Styles_sectionWrapper">
                        <SelectCustom title="Danh mục" />
                    </div>
                    <div className="Styles_sectionWrapper">
                        <SelectCustom title="Loại bất động sản" />
                    </div>
                    <div className="Styles_sectionWrapper">
                        <RadioButtonCustom title="Loại bài đăng" />
                    </div>
                    <div className="Styles_sectionWrapper">
                        <RadioButtonCustom title="Sắp xếp theo" />
                    </div>
                </div>
                <div className="message-btn">
                    <button className="btn-confirm" onClick={handleChangeStatusPost}>
                        Lọc
                    </button>
                    <button className="btn-confirm" onClick={changeIsShow}>
                        Hủy
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalFilter
