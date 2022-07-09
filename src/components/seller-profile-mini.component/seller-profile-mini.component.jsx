//hiển thị bên trong các trang chi tiết sản phẩm á
import React from "react";
import './seller-profile-mini.styles.css';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const SellerProfileMini = ({name, id}) => {
    const dispatch=useDispatch();
    const currentUser=useSelector(state=>state.user.currentUser);
    const history=useHistory();
    const handleClickToUser=()=>{
        if(currentUser!=null&&currentUser.id==id){
            history.push(`/user`);
        }else{
            history.push(`/user/${id}`);
        }
    }
    return (
        <div className="SellerProfile_profileWrapper" itemprop="seller" itemscope="" itemtype="http://schema.org/Person">
            <a className="SellerProfile_sellerWrapper">
                <div className="img-thumbnail img-circle Avatar_imageWrapper Avatar_defaultSize">
                </div>
                <div className="SellerProfile_nameBounder" role="button" tabindex="0">
                    <div className="SellerProfile_flexDiv">
                        <div className="SellerProfile_nameDiv">
                            <b style={{marginRight: "5px"}}>{name}</b>
                        </div>
                        <button type="button" className="SellerProfile_secondaryButton" onClick={handleClickToUser}>
                            Xem trang
                        </button>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default SellerProfileMini;