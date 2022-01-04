import React, { useEffect, useRef } from 'react';
import './popup-forgot-password.styles.css'
const PopupForgotPassword = (props) => {
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
        <div className="notify-error-popup-container" style={isShow ? { display: 'block' } : { display: 'none' }}>
            <div className="notify-popup" ref={notifyPopup}>
                <p className="title-header">Đổi mật khẩu</p>
                <div className="body-popup">
                    <div className="forgot-password-container">
                        <div className="forgot-password-content">
                            <input type="tel" placeholder="Nhập mã code" />
                            <input type="tel" placeholder="Nhập mã code" />
                            <input type="tel" placeholder="Nhập mã code" />
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

export default PopupForgotPassword;
