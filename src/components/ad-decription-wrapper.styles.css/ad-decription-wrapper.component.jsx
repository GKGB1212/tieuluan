//thông tin chi tiết của 1 sản phẩm
import React, { useEffect, useState } from 'react';
import './ad-decription-wrapper.styles.css';
import { fetchLike } from '../../redux/likePost/likePostSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AdDecriptionWrapper = ({ item, handleSavePost }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const [province, setProvince] = useState('');
    const [district, setDistrict] = useState('');
    const [ward, setWard] = useState('');


    useEffect(() => {
        console.log(item);
        fetch(`https://provinces.open-api.vn/api/p/${item.provinceID}?depth=3`)
            .then(function (response) {
                if (response.status !== 200) {
                    return;
                }
                // parse response data
                response.json().then(data => {
                    setProvince(data.name);
                    let indexD = data.districts.findIndex((x) => x.code == item.districtID);
                    if (indexD > -1) {
                        setDistrict(data.districts[indexD].name);
                        let indexW = data.districts[indexD].wards.findIndex((x) => x.code == item.wardID);
                        if (indexW > -1) {
                            setWard(data.districts[indexD].wards[indexW].name);
                        }
                    }
                })
            })
    }, [])
    return item ? (
        <div class="AdDecription_adDecriptionWrapper" style={{ width: "600px" }}>
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
                                    <span itemprop="price">Giá: {item.price}VNĐ - {item.area}m
                                        <span class="AdDecription_squareMetre">
                                            <sup>2</sup>
                                        </span>
                                    </span>
                                    <span style={{ display: "none" }} itemprop="priceCurrency">
                                        đ &nbsp; &nbsp;
                                    </span>
                                </span>
                            </span>
                        </div>
                    </span>
                </div>
                <div class="SaveAd_saveAdWrapper AdDecription_saveAd">
                    {
                        item.like ? (
                            <button type="button" class="SaveAd_saveAdViewDetail SaveAd_saveAdViewDetail_liked" onClick={handleSavePost}>
                                <p style={{ margin: "0px" }}>Hủy lưu tin </p>
                                <img height="20" width="20" src="https://static.chotot.com/storage/icons/saveAd/save-ad.svg" alt="like" />
                            </button>
                        ):(
                            <button type="button" class="SaveAd_saveAdViewDetail" onClick={handleSavePost}>
                                <p style={{ margin: "0px" }}>Lưu tin </p>
                                <img height="20" width="20" src="https://static.chotot.com/storage/icons/saveAd/save-ad.svg" alt="like" />
                            </button>
                        )
                    }
                </div>
            </div>
            <div class="d-lg-none d-block col-xs-12 no-padding">
            </div>
            <div>
                <div class="col-xs-12 no-padding">
                    <div class="media margin-top-05" style={{ display: "flex", alignItems: "center", margin: "10px 0px" }}>
                        <div class="media-left media-middle">
                            <img class="AdParam_adParamIcon" alt="location" src="https://static.chotot.com/storage/icons/logos/ad-param/location.svg" />
                        </div>
                        <div class="media-body media-middle AdParam_address AdParam_addressClickable" role="button" tabindex="0">
                            <span className="fz13">{item.address}, {ward}, {district}, {province}</span>
                        </div>
                    </div>
                </div>
            </div>
            <p class="AdDecription_adBody" itemprop="description">
                {item.details}
            </p>
        </div>
    ) : ''
}
export default AdDecriptionWrapper;