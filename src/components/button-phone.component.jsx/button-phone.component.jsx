import React from 'react';
import './button-phone.styles.css'

const ButtonPhone = ({ phone }) => {
    return (
        <div className="LeadButton_showPhoneButton">
            <div className="kqqTha">
                <div className="kUpVMB">
                    <div className="ijabWE">
                        <span style={{display:"block"}}>
                            <img src="https://static.chotot.com.vn/storage/chotot-icons/svg/white-phone.svg" className="eiuyCZ" />
                            {phone}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ButtonPhone;