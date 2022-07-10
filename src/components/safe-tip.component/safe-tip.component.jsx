import React from "react";
import './safe-tip.styles.css'

const SafeTip = () => {
    return (
        <div >
            <div>
                <div className="SafeTips_SafeTipsWrapper">
                    <img alt="safe tips" className="pull-left" width="100" height="auto" src="https://st.chotot.com/storage/images/tips/1_PTY.png" />
                    <div className="SafeTips_TipText">
                        <p style={{fontSize:"13px"}}>
                            Bạn ơi để tránh bị lừa đảo thì đừng đặt cọc nếu chưa xác định được chủ nhà nhé
                        </p>
                    </div>
                </div>
            </div>
            <div className="Styles_rightHandSiteAdView__1H9cH">
                <div>
                </div>
            </div>
            <div>
                <div className="SafeTips_SafeTipsWrapper">
                    <img alt="safe tips" className="pull-left" width="100" height="auto" src="https://static.chotot.com/storage/images/tips/1_mobile.png" />
                    <div className="SafeTips_TipText">
                        <p style={{fontSize:"13px"}}>
                        Giao dịch, đừng giao ‘dịch’. Mua bán trong thời điểm này, bạn nhớ làm theo khuyến cáo 5k của Bộ Y Tế: “Khẩu trang – Khử khuẩn – Khoảng cách – Không tập trung – Khai báo y tế” để đảm bảo an toàn cho bản thân, gia đình và cộng đồng nhé! ❤️
                        </p>
                    </div>
                </div>
            </div>
            <div className="Styles_rightHandSiteAdView__1H9cH">
                <div>
                </div>
            </div>
        </div>
    )
}
export default SafeTip;