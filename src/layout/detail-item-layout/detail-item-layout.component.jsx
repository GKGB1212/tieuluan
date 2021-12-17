import React, { useEffect } from "react";
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
import ButtonChat from "../../components/button-chat.component/button-chat.component";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchLike } from "../../redux/likePost/likePostSlice";

const DetailItemLayout = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history=useHistory();
    const loading = useSelector(state => state.product.loading)
    const post = useSelector(state => state.product.product)
    const currentUser=useSelector(state=>state.user.currentUser);
    useEffect(() => {
        if(currentUser!=null){
            dispatch(fetchPostById({id,userId:currentUser.id}));
        }else{
            dispatch(fetchPostById({id,userId:''}));
        }
    }, [])

    const handleSavePost = async() => {
        if (currentUser == null) {
            history.push('/Login')
        } else {
            await dispatch(fetchLike(post.id));
            if(currentUser!=null){
                dispatch(fetchPostById({id,userId:currentUser.id}));
            }else{
                dispatch(fetchPostById({id,userId:''}));
            }
        }
    }

    const lstPaper = [
        {
            id: 1,
            value: "Sổ đỏ"
        },
        {
            id: 2,
            value: "Sổ hồng"
        },
        {
            id: 3,
            value: "Sổ trắng"
        },
        {
            id: 4,
            value: "Giấy chứng nhận quyền sở hữu"
        },
        {
            id: 5,
            value: "Giấy tờ hợp lệ"
        },
        {
            id: 6,
            value: "Chưa xác định"
        }
    ];
    const lstCategory = [
        "Căn hộ/ Chung cư",
        "Nhà ở ",
        "Đất",
        "Văn phòng/ Mặt bằng kinh doanh",
        "Nhà trọ"
    ]

    return !loading ? (
        <div class="container">
            {/* <div class="ct-detail adview"> */}
            <div class="row base">
                <div style={{ margin: "10px 0px" }}><div></div></div>
                <div class="col-md-8">
                    <div class="AdImage_adImageWrapper">
                        <SliderImages imageUrls={post.imageUrls} />
                        <AdDecriptionWrapper item={post} handleSavePost={handleSavePost}/>
                        <div style={{ margin: "5px 0px 15px 0px" }}></div>
                        <div class="col-xs-12 no-padding">
                            <SmallDetail img="https://cdn-icons.flaticon.com/png/512/5736/premium/5736652.png?token=exp=1638518555~hmac=bb67ec8fd1aa82ae9d5277443cf3c70e" title="Loại bất động sản: " value={lstCategory[post.categoryID - 1]} />
                            <SmallDetail img="https://cdn-icons-png.flaticon.com/512/639/639365.png" title="Giá tiền: " value={post.price} />
                            <SmallDetail img="https://cdn-icons-png.flaticon.com/512/1295/1295160.png" title="Diện tích: " value={post.area} />
                            {
                                post.paperID
                                    ? (
                                        <SmallDetail img="https://cdn-icons-png.flaticon.com/512/888/888071.png" title="Tình trạng giấy tờ: " value={lstPaper[post.paperID - 1].value} />
                                    ) : ''
                            }
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
                        <SellerProfileMini name={post.creatorName} id={post.creatorID} />
                    </div>
                    <ButtonPhone phone={post.creatorPhone} />
                    {
                        currentUser!=null&&currentUser.id==post.creatorID
                        ?(<ButtonChat/>):('')
                    }
                    <SafeTip />
                </div>
            </div>
            {/* </div> */}
        </div>
    ) : ''
}
export default DetailItemLayout;