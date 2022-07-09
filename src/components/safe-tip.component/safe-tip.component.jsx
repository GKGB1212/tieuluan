import React from "react";
import './safe-tip.styles.css'

const SafeTip = () => {
    return (
        <div className="d-lg-block d-none">
            <div>
                <div className="SafeTips_SafeTipsWrapper">
                    <img alt="safe tips" className="pull-left" width="100" height="auto" src="https://st.chotot.com/storage/images/tips/1_PTY.png" />
                    <div className="SafeTips_TipText">
                        <p style={{fontSize:"13px"}}>
                            Bạn ơi để tránh bị lừa đảo thì đừng đặt cọc nếu chưa xác định được chủ nhà nhé
                        </p>
                        <a href="https://trogiup.chotot.com/mua-hang-tai-chotot-vn/meo-mua-hang-tim-viec/meo-khi-thue-phong/?utm_source=chotot&amp;utm_medium=ad_view&amp;utm_campaign=safety_tip_adview" target="blank">
                            Tìm hiểu thêm »
                        </a>
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