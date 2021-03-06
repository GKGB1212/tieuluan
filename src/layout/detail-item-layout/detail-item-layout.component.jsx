import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import './detail-item-layout.styles.css';
import SliderImages from "../../components/slider-images.component/slider-images.component";
import AdDecriptionWrapper from "../../components/ad-decription-wrapper.styles.css/ad-decription-wrapper.component";
import SellerProfileMini from '../../components/seller-profile-mini.component/seller-profile-mini.component'
import ButtonPhone from "../../components/button-phone.component.jsx/button-phone.component";
import SmallDetail from "./item-detail.component";
import SafeTip from "../../components/safe-tip.component/safe-tip.component";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostById } from "../../redux/product/productSlice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchLike } from "../../redux/likePost/likePostSlice";
import { fetchCreateReport } from "../../redux/report/reportSlice";
import ModalReport from "./component/modal-report/modal-report";
import * as toast from '../../common/toast';
import Map from "../../components/map.component/Map";
import axios from 'axios';
import LikeAndShare from "../../components/likeAndShare.component/likeAndShare.component";
import { MetaTags } from "react-meta-tags";
import default_real_estate from '../../assets/images/tin-khong-co-hinh.jpg'


const DetailItemLayout = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const loading = useSelector(state => state.product.loading)
    const post = useSelector(state => state.product.product)
    const currentUser = useSelector(state => state.user.currentUser);
    const [isShowModalReport, setIsShowModalReport] = useState(false);
    const [details, setDetails] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [provinces, setProvinces] = useState([]);
    useEffect(() => {
        if (currentUser != null) {
            dispatch(fetchPostById({ id, userId: currentUser.id }));
        } else {
            dispatch(fetchPostById({ id, userId: '' }));
        }
    }, []);

    const [center, setCenter] = useState({ lat: 21.0465058, lng: 105.8443304 });
    useEffect(() => {
        console.log("center", center)
    }, [center])
    useEffect(() => {
        fetch('https://provinces.open-api.vn/api/?depth=3&fbclid=IwAR1OGuDDmUlDdkyoYmh6umuMeiP9PcIGENaOgFsM0vX_6TAju5D8BLUAz9o')
            .then(function (response) {
                if (response.status !== 200) {
                    console.log('L???i, m?? l???i ' + response.status);
                    return;
                }
                // parse response data
                response.json().then(data => {
                    setProvinces(data);
                })
            })
    }, [])
    useEffect(() => {
        const fetchLocation = async (address) => {
            if (address) {
                try {
                    const response = await getLocation(address);
                    if (response.data.results.length > 0) {
                        console.log("response", response)
                        setCenter(response.data.results[0].geometry.location);
                    }
                }
                catch (error) {
                    console.log(error)
                }
            }
        }
        if (post && provinces.length > 0) {
            fetchLocation(updateLocation(provinces, post.address, post.provinceID, post.districtID, post.wardID).join(', '))
        }
    }, [post, provinces]);

    const getLocation = async (address) => {
        var a = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBcCtiQjJ-Km0TVopYGNjYRGY6_VOBlhmU`);
        console.log("a", a);
        return a;
    }
    const changeIsShow = () => {
        setIsShowModalReport(!isShowModalReport);
    }

    const updateLocation = (provinces, address, provinceID, districtID, wardID) => {
        let data = []
        if (!Array.isArray(provinces)) return data;

        let province = provinces.find(x => x.code === provinceID);
        if (address)
            data.push(address);

        if (province) {
            let district = province.districts.find(x => x.code === districtID);
            if (district) {
                let ward = district.wards.find(x => x.code === wardID);
                if (ward) {
                    data.push(ward.name);
                }
                data.push(district.name);
            }
            data.push(province.name);
        }
        return data
    }
    const handleSavePost = async () => {
        if (currentUser == null) {
            history.push('/Login')
        } else {
            await dispatch(fetchLike(post.id));
            if (currentUser != null) {
                dispatch(fetchPostById({ id, userId: currentUser.id }));
            } else {
                dispatch(fetchPostById({ id, userId: '' }));
            }
        }
    }
    const onHandleReportClick = () => {
        if (currentUser) {
            if (details != '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && phoneNumber != '') {
                dispatch(fetchCreateReport({
                    postID: id, userID: currentUser.id, details, email, phoneNumber, callback: function (response) {
                        if (response) {
                            toast.notifySuccess("???? g???i b??o c??o c???a b???n v??? b??i vi???t.");
                            setIsShowModalReport(false)
                        }
                    }
                }));
            } else {
                toast.notifyWarning("Vui l??ng nh???p email, s??? ??i???n tho???i v?? n???i dung b??o c??o!");
            }

        } else {
            toast.notifyWarning("Vui l??ng ????ng nh???p tr?????c khi b??o c??o b??i vi???t!");
        }

    }

    const lstPaper = [
        {
            id: 1,
            value: "S??? ?????"
        },
        {
            id: 2,
            value: "S??? h???ng"
        },
        {
            id: 3,
            value: "S??? tr???ng"
        },
        {
            id: 4,
            value: "Gi???y ch???ng nh???n quy???n s??? h???u"
        },
        {
            id: 5,
            value: "Gi???y t??? h???p l???"
        },
        {
            id: 6,
            value: "Ch??a x??c ?????nh"
        }
    ];
    const lstCategory = [
        "C??n h???/ Chung c??",
        "Nh?? ??? ",
        "?????t",
        "V??n ph??ng/ M???t b???ng kinh doanh",
        "Nh?? tr???"
    ]


    return !loading && ((post.statusID == 2) || (currentUser && (post.statusID == 1 && post.creatorID == currentUser.id))) ? (
        <div className="container">
            <MetaTags>
                <title>{post.title}</title>
                <meta name="description" content={post.details} />
                <meta property="og:image" content="path/to/image.jpg" />

                {
                    post.imageUrls && post.imageUrls.length > 0
                        ? (
                            <meta property="og:image" content={post.imageUrls[0]} />
                        ) : (
                            <meta property="og:image" content={default_real_estate} />
                        )
                }
            </MetaTags>
            <ModalReport changeIsShow={changeIsShow} isShowModalReport={isShowModalReport} details={details} setDetails={setDetails} email={email} setEmail={setEmail} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} onHandleReportClick={onHandleReportClick} />
            <div className="row base">
                <div style={{ margin: "10px 0px" }}><div></div></div>
                <div className="col-md-8" style={{marginBottom:"20px"}}>
                    <div className="AdImage_adImageWrapper">
                        <SliderImages imageUrls={post.imageUrls} />
                        <AdDecriptionWrapper item={post} handleSavePost={handleSavePost} />
                        <div style={{ margin: "5px 0px 15px 0px" }}></div>
                        <div className="col-xs-12 no-padding">
                            <SmallDetail img="https://cdn-icons-png.flaticon.com/512/602/602225.png" title="Lo???i b???t ?????ng s???n: " value={lstCategory[post.categoryID - 1]} />
                            <SmallDetail img="https://cdn-icons-png.flaticon.com/512/639/639365.png" title="Gi?? ti???n: " value={post.price} />
                            <SmallDetail img="https://cdn-icons-png.flaticon.com/512/1295/1295160.png" title="Di???n t??ch: " value={post.area} />
                            {
                                post.paperID
                                    ? (
                                        <SmallDetail img="https://cdn-icons-png.flaticon.com/512/888/888071.png" title="T??nh tr???ng gi???y t???: " value={lstPaper[post.paperID - 1].value} />
                                    ) : ''
                            }
                        </div>
                        <div className="IntersectBox col-xs-12 margin-top-10 no-padding">
                            ?????a ch??? c???a b???t ?????ng s???n tr??n b???n ?????
                            {
                                center && (<Map
                                    location={center}
                                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${"AIzaSyCrnPGVa-Lyddf7HRe_jNVqsUiMDAdudfU"}&v=3.exp&libraries=geometry,drawing,places`}
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `50vh`, margin: `auto` }} />}
                                    mapElement={<div style={{ height: `100%` }}
                                    />}
                                />)
                            }

                        </div>
                        <div className="IntersectBox col-xs-12 margin-top-10 no-padding">
                            <br /><br />
                            <div className="col-xs-12 margin-top-10 no-padding">
                                <strong className="" style={{ color: "rgb(119, 119, 119)" }}>
                                    Chia s??? tin ????ng n??y cho b???n b??:
                                </strong>
                                <div style={{ margin: "5px 0px 0px", borderTop: "1px solid rgb(238, 238, 238)" }}>
                                </div>
                                <div style={{ marginBottom: "10px" }}>
                                    <LikeAndShare title='Chia s??? tin ????ng' url={window.location.href} />
                                </div>
                            </div>
                        </div>
                        <div className="IntersectBox col-xs-12 no-padding">
                            <div className="Styles_reportWrapper">
                                <div className="Styles_buyerProtect">
                                    <div className="sc-chPdSV fEKhQX">
                                        <img src="https://static.chotot.com.vn/storage/marketplace/shield-iconx4.png" alt="mua b??n an to??n" className="sc-kgoBCf cXqYJC" />
                                        <div className="sc-kGXeez iSIcRE">
                                            <em>Tin ????ng n??y ???? ???????c ki???m duy???t. N???u g???p v???n ?????, vui l??ng b??o c??o tin ????ng ho???c li??n h??? CSKH ????? ???????c tr??? gi??p.&nbsp;
                                            </em>
                                        </div>
                                    </div>
                                </div>
                                <div className="Styles_reportBtn__3jZBf">
                                    <button type="button" id="report-bad-ad-btn" onClick={changeIsShow} className="btn btn-default btn-xs">B??o tin kh??ng h???p l???</button>
                                </div>
                            </div>
                        </div>
                    
                    </div>

                </div>
                <div className="col-md-4 no-padding dtView">
                    {/* <div className="d-lg-block d-none">
                        <SellerProfileMini name={post.creatorName} id={post.creatorID} />
                    </div> */}
                    <SellerProfileMini name={post.creatorName} id={post.creatorID} />
                    <ButtonPhone phone={post.creatorPhone} />
                    <SafeTip />
                </div>
            </div>
        </div>
    ) : ''
}
export default DetailItemLayout;