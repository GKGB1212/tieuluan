import React,{useEffect} from "react";
import { useParams } from "react-router";
import './detail-item-layout.styles.css';
import SliderImages from "../../components/slider-images.component/slider-images.component";
import AdDecriptionWrapper from "../../components/ad-decription-wrapper.styles.css/ad-decription-wrapper.component";
import SellerProfileMini from '../../components/seller-profile-mini.component/seller-profile-mini.component'
import ButtonPhone from "../../components/button-phone.component.jsx/button-phone.component";
import ButtonChat from "../../components/button-chat.component/button-chat.component";
import SafeTip from "../../components/safe-tip.component/safe-tip.component";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostById } from "../../redux/product/productSlice";

const DetailItemLayout = () => {
    const { id } = useParams();
    const dispatch=useDispatch();
    const loading=useSelector(state=>state.product.loading)
    const post=useSelector(state=>state.product.product)
    useEffect(() => {
        dispatch(fetchPostById(id));
    },[])
    useEffect(()=>{
        console.log(post)
    },[post])
    return !loading?(
        <div class="container">
            {/* <div class="ct-detail adview"> */}
                <div class="row base">
                    <div style={{ margin: "10px 0px" }}><div></div></div>
                    <div class="col-md-8">
                        <div class="AdImage_adImageWrapper">
                            <SliderImages imageUrls={post.imageUrls}/>
                            <AdDecriptionWrapper item={post} />
                            <div style={{ margin: "5px 0px 15px 0px" }}></div>
                            <div class="col-xs-12 no-padding">
                                <div class="col-md-6 no-padding AdParam_adParamItem__1o-dd" data-testid="param-item">
                                    <div class="AdParam_adMediaParam__3bzmC"><div class="media-left media-top">
                                        <img class="AdParam_adParamIcon__1W6qJ" alt="" src="https://static.chotot.com/storage/icons/logos/ad-param/ad_type.png" />
                                    </div>
                                        <div class="media-body media-middle">
                                            <span>
                                                <span>
                                                </span>
                                                <span itemprop="ad_type" class="AdParam_adParamValue__1ayWO">Cho thuê</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Phần chia sẻ tin cho ba nj bè */}
                            <div class="IntersectBox col-xs-12 margin-top-10 no-padding">
                                <br /><br />
                                <div class="col-xs-12 margin-top-10 no-padding">
                                    <strong class="" style={{ color: "rgb(119, 119, 119)" }}>
                                        Chia sẻ tin đăng này cho bạn bè:
                                    </strong>
                                    <div style={{ margin: "5px 0px 0px", borderTop: "1px solid rgb(238, 238, 238)" }}>
                                    </div>
                                    <div style={{ marginBottom: "10px" }}>
                                        <a class="sc-jzJRlG fjPyzM">
                                            <img alt="facebook" src="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-facebook.svg" loading="lazy" height="40" width="40" />
                                        </a>
                                        <a class="sc-jzJRlG fjPyzM">
                                            <img alt="messenger" src="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-messenger.svg" loading="lazy" height="40" width="40" />
                                        </a>
                                        <a class="sc-jzJRlG fjPyzM zalo-share-button" data-href="">
                                            <img alt="zalo" src="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-zalo.svg" loading="lazy" height="40" width="40" /><iframe frameborder="0" allowfullscreen="" scrolling="no" width="0px" height="0px" src="https://sp.zalo.me/plugins/share?dev=null&amp;color=blue&amp;oaid=570044068386186227&amp;href=https%3A%2F%2Fwww.chotot.com%2Ftp-ho-chi-minh%2Fquan-go-vap%2Fthue-nha-dat%2F88300561.htm%3Futm_source%3Dad_view%26utm_medium%3Dshare_buttons%26utm_campaign%3Dshare_ad_via_zalo&amp;layout=2&amp;customize=true&amp;callback=null&amp;id=97c489cf-9fdd-4598-861f-1033bf1e227c&amp;domain=nha.chotot.com&amp;android=false&amp;ios=false" style={{ position: "absolute" }}>
                                            </iframe>
                                        </a>
                                        <span class="sc-kAzzGY jJHHdE">
                                            <a class="sc-jzJRlG fjPyzM">
                                                <img alt="copy" src="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-copylink.svg" loading="lazy" height="40" width="40" />
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* báo cáo */}
                            <div class="IntersectBox col-xs-12 no-padding">
                                <div class="Styles_reportWrapper">
                                    <div class="Styles_buyerProtect">
                                        <div class="sc-chPdSV fEKhQX">
                                            <img src="https://static.chotot.com.vn/storage/marketplace/shield-iconx4.png" alt="mua bán an toàn" class="sc-kgoBCf cXqYJC" />
                                            <div class="sc-kGXeez iSIcRE">
                                                <em>Tin đăng này đã được kiểm duyệt. Nếu gặp vấn đề, vui lòng báo cáo tin đăng hoặc liên hệ CSKH để được trợ giúp.&nbsp;
                                                </em>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-4 no-padding dtView">
                        <div class="d-lg-block d-none">
                            <SellerProfileMini name={post.creatorName} id={post.creatorID}/>
                        </div>
                        <ButtonPhone phone={post.creatorPhone}/>
                        <SafeTip />
                    </div>
                </div>
            {/* </div> */}
        </div>
    ):''
}
export default DetailItemLayout;