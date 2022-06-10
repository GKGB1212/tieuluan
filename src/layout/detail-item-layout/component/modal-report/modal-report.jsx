// import React, { useState } from "react";
import "./modal-report.style.css";
import React, { useEffect, useRef } from 'react';
// import './notify.styles.css'
const ModalReport = (props) => {
    const {
        title,
        changeIsShow,
        handleChangeStatusPost,
        isShowModalReport,
        phoneNumber,
        details,
        email,
        setEmail,
        setPhoneNumber,
        setDetails,
        onHandleReportClick
    } = props;
    const notifyPopup = useRef(null);
    useEffect(() => {
        if (!isShowModalReport) return;
        const height = notifyPopup.current.clientHeight;
        notifyPopup.current.style.top = `calc(50% - ${height / 2}px)`;
    }, [isShowModalReport]);
    return (
        <div className="report-popup-container" style={isShowModalReport ? { display: 'block' } : { display: 'none' }}>
            <div className="notify-popup-filter" ref={notifyPopup}>
                <p className="title-header">Báo cáo vi phạm</p>
                <div className="body-popup">
                    <div class="Styles_sectionWrapper">
                        <div class="label">Chi tiết<span class="required">*</span></div>
                        <div class="sc-1ta6px8-0 SQttn">
                            <div class="oneRowWrapper">
                                <div class="inputGroupFullWidth">
                                    <div class="customInput">
                                        <textarea value={details} class="inputText" placeholder="Vui lòng chia sẻ thêm lý do bạn biết tin đăng này không liên lạc được. Ví dụ: Gọi nhiều lần không nghe máy, số điện thoại không có thực, số điện thoại khóa máy,..." rows="6" onChange={(e)=>setDetails(e.target.value)}>
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Styles_sectionWrapper">
                        <div class="label">Thông tin để liên hệ với bạn khi cần thiết</div>
                        <div class="sc-1ta6px8-0 SQttn">
                            <div class="oneRowWrapper">
                                <div class="inputGroupFullWidth">
                                    <div class="customInput">
                                        <input value={phoneNumber} class="inputText" maxlength="10" placeholder="Điện thoại của bạn *" onChange={(e)=>setPhoneNumber(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Styles_sectionWrapper">
                        <div class="sc-1ta6px8-0 SQttn">
                            <div class="oneRowWrapper">
                                <div class="inputGroupFullWidth">
                                    <div class="customInput">
                                        <input value={email} class="inputText" maxlength="50" placeholder="Địa chỉ email của bạn *" onChange={(e)=>setEmail(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-btn">
                    <button className="btn-confirm" onClick={onHandleReportClick}>
                        Báo cáo
                    </button>
                    <button className="btn-confirm" onClick={changeIsShow}>
                        Hủy
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalReport;
