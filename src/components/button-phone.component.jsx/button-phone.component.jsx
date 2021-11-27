import React from 'react';
import './button-phone.styles.css'

const ButtonPhone = ({ phone }) => {
    return (
        <div class="LeadButton_showPhoneButton">
            <div class="kqqTha">
                <div class="kUpVMB">
                    <div class="ijabWE">
                        <span style={{display:"block"}}>
                            <img src="https://static.chotot.com.vn/storage/chotot-icons/svg/white-phone.svg" class="eiuyCZ" />
                            {phone}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ButtonPhone;