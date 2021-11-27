//thông tin chi tiết của 1 sản phẩm
import React,{useEffect} from 'react';
import './ad-decription-wrapper.styles.css';

const AdDecriptionWrapper = ({item}) => {
    useEffect(()=>{
        console.log("1111",item)
    },[item])
    return item?(
        <div class="AdDecription_adDecriptionWrapper" style={{  width: "600px" }}>
            <h1 class="AdDecription_adTitle" itemprop="name">
               {item.title}
            </h1>
            <div class="AdDecription_priceWrapper">
                <meta itemprop="position" content="1" />
                <div class="AdDecription_adPrice" itemprop="price">
                    <span>
                        <div>
                            <span class="AdDecription_priceWrapper">
                                <span class="AdDecription_price">
                                    <span itemprop="price">{item.price}
                                        <span class="AdDecription_squareMetre">
                                            <sup>2</sup>
                                        </span>
                                    </span>
                                    <span style={{display:"none"}} itemprop="priceCurrency">
                                        đ &nbsp; &nbsp;
                                    </span>
                                </span>
                            </span>
                        </div>
                    </span>
                </div>
                <div class="SaveAd_saveAdWrapper AdDecription_saveAd">
                    <button type="button" class="SaveAd_saveAdViewDetail">
                        <p style={{margin: "0px"}}>Lưu tin </p>
                        <img height="20" width="20" src="https://static.chotot.com/storage/icons/saveAd/save-ad.svg" alt="like" />
                    </button>
                </div>
            </div>
            <div class="d-lg-none d-block col-xs-12 no-padding">
            </div>
            <div>
                <div class="col-xs-12 no-padding">
                    <div class="media margin-top-05" style={{display: "flex", alignItems: "center", margin: "10px 0px"}}>
                        <div class="media-left media-middle">
                            <img class="AdParam_adParamIcon" alt="location" src="https://static.chotot.com/storage/icons/logos/ad-param/location.svg" />
                        </div>
                        <div class="media-body media-middle AdParam_address AdParam_addressClickable" role="button" tabindex="0">
                            <span class="fz13">Đường Lê Đức Thọ, Phường 16, Quận Gò Vấp, Tp Hồ Chí Minh</span>
                        </div>
                    </div>
                </div>
            </div>
            <p class="AdDecription_adBody" itemprop="description">
                {item.details}
            </p>
        </div>
    ):''
}
export default AdDecriptionWrapper;