import React, { useEffect, useRef } from 'react';
import './notify.styles.css'
const NotifyErrorComponent = (props) => {
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
                <p className="title-header">Vui lòng xác nhận</p>
                <div className="body-popup">
                    <div className="message-container">
                        <div className="message-content">
                            <div className="waring-mess">
                                Thao tác này nếu đã xác nhận không thể hoàn tác!
                            </div>
                            <div className="mess">
                                <span >Chuyển trạng thái bài viết "{title}" sang đã bán</span>
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

export default NotifyErrorComponent
