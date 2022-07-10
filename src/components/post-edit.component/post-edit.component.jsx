//cái chỗ để đăng bài
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import './post-edit.styles.css'
import * as helper from '../../common/helper';
import * as toast from '../../common/toast'
import { fetchInsertPost } from "../../redux/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { resetSuccess, resetPost } from "../../redux/product/productSlice";
import { fetchPostById, fetchUpdatePost, setUpStateUpdatePost } from "../../redux/product/productSlice";
import LoadingComponent from '../loader/LoadingComponent';


const PostEdit = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.product.loading);
    const history = useHistory();
    const currentUser = useSelector(state => state.user.currentUser);
    const success = useSelector(state => state.product.success);
    const post = useSelector(state => state.product.product);
    const stateUpdatePost = useSelector(state => state.product.stateUpdatePost);

    const [lstTotal, setLstTotal] = useState([]);
    const [lstCity, setLstCity] = useState([]);
    const [lstDistrict, setLstDistrict] = useState([]);
    const [lstWard, setLstWard] = useState([]);
    //loại bất động sản là mua bán hoặc cho thuê
    const [typeRealEstate, setTypeRealEstate] = useState(0);
    //danh mục là chung cư hay gì gì đó
    const [categoryID, setTypeCategory] = useState(0);

    const [address, setAddress] = useState('');
    const [price, setPrice] = useState();
    const [area, setArea] = useState();
    const [directionID, setDirection] = useState(0);
    //tình trạng pháp lý
    const [paperID, setPaperId] = useState(0);
    const [title, setTitle] = useState('');
    //mô tả
    const [details, setDetail] = useState('');
    //hình ảnh
    const [imageList, setImageList] = useState([]);
    //list ảnh
    const [imageToShowList, setImageToShowList] = useState([]);

    //thành phố
    const [provinceID, setProvinceID] = useState(-1);
    //quận
    const [districtID, setDistrictID] = useState(-1);
    //xã phường
    const [wardID, setWardID] = useState(-1);

    //phòng ngủ
    const [bedrooms, setBedrooms] = useState(null);
    //phòng tắm
    const [bathrooms, setBathrooms] = useState(null);

    const [imageUrls, setImageUrls] = useState([]);

    //cờ bật khi load xong dữ liệu api địa chỉ
    const [flag, setFlag] = useState(0);

    useEffect(() => {
        dispatch(resetPost());
        if (currentUser != null && id) {
            dispatch(fetchPostById({ id, userId: currentUser.id }));
        }
        fetch('https://provinces.open-api.vn/api/?depth=3&fbclid=IwAR1OGuDDmUlDdkyoYmh6umuMeiP9PcIGENaOgFsM0vX_6TAju5D8BLUAz9o')
            .then(function (response) {
                if (response.status !== 200) {
                    console.log('Lỗi, mã lỗi ' + response.status);
                    return;
                }
                // parse response data
                response.json().then(data => {
                    setLstTotal(data);
                }).then(() => {
                    setFlag(1)
                })
            })
    }, []);
    useEffect(() => {
        if (flag == 1 && post.creatorID == currentUser.id && post.statusID == 1) {
            setTypeRealEstate(post.postTypeID);
            setTypeCategory(post.categoryID);
            if (post.address != null) {
                setAddress(post.address);
            }
            setPrice(post.price);
            setArea(post.area);
            setDirection(post.directionID);
            setPaperId(post.paperID);
            setTitle(post.title);
            setDetail(post.details);
            setImageUrls(post.imageUrls);
            setProvinceID(post.provinceID);
            setLstDistrict(lstTotal.find((x) => x.code == post.provinceID).districts);
            setDistrictID(post.districtID);
            setBedrooms(post.bedrooms);
            setBathrooms(post.bathrooms);
            setFlag(2);
        }
    }, [post, flag]);
    useEffect(() => {
        if (flag == 2 && id && post && lstDistrict.length > 0) {
            setLstWard(lstDistrict.find((x) => x.code == post.districtID).wards);
            setWardID(post.wardID);
            setFlag(3)
        }
    }, [lstDistrict, flag])
    useEffect(() => {
        var temp = [];
        lstTotal.forEach((item) => {
            temp.push({
                name: item.name,
                code: item.code
            });
        })
        setLstCity(temp);
    }, [lstTotal])
    useEffect(() => {
        if (success == true) {
            dispatch(resetSuccess());
            history.push("/user");
        }
    }, [success])
    useEffect(() => {
        if (id) {
            if (stateUpdatePost == 1) {
                dispatch(setUpStateUpdatePost());
                toast.notifySuccess("Đã cập nhập thành công bài viết!")
                history.push(`/products/${id}`);
            } else if (stateUpdatePost == -1) {
                dispatch(setUpStateUpdatePost());
                toast.notifyError("Đã gặp sự cố, không thể thay đổi thông tin của bài viết!");
            }
        }
    }, [stateUpdatePost])

    //hàm xử lí khi nhấn xóa một bức hình
    const handleDeletePhoto = (index) => {
        var temp = [...imageToShowList];
        var tempimg = [...imageList];
        if (index > -1 || index < temp.length) {
            temp.splice(index, 1);
            tempimg.splice(index, 1);
            setImageToShowList(temp);
            setImageList(tempimg);
        }
    }

    //hàm xử lí khi nhấn xóa một bức hình trên url
    const handleDeletePhotoUrl = (index) => {
        var temp = [...imageUrls];
        if (index > -1 || index < temp.length) {
            temp.splice(index, 1);
            setImageUrls(temp);
        }
    }

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let tempImages = [...imageToShowList];
            let tempImageObjLst = [...imageList];
            let lengthFiles = event.target.files.length;
            let i = 0;
            while (i < lengthFiles) {
                var path = (window.URL || window.webkitURL).createObjectURL(event.target.files[i]);
                tempImages.push(URL.createObjectURL(event.target.files[i]));
                tempImageObjLst.push(event.target.files[i]);
                i++;
            }
            setImageToShowList(tempImages);
            setImageList(tempImageObjLst);
        }
    }
    const handleOnChangeCurrentCity = (codeCity) => {
        var temp = [];
        setProvinceID(codeCity);
        temp = lstTotal.find((x) => x.code == codeCity).districts;
        setLstDistrict(temp);
    }
    const handleOnChangeCurrentDistric = (codeDistrict) => {
        var temp = [];
        setDistrictID(codeDistrict)
        temp = lstDistrict.find((x) => x.code == codeDistrict).wards;
        setLstWard(temp);
    }
    const handleChangeRealEstate = (type) => {
        setTypeRealEstate(type);
    }
    const handleSubmitCreatePost = async () => {
        //dispatch(fetchInsertPost({ title, imageList, provinceID, districtID, wardID, address, area, price, bedrooms, bathrooms, directionID, details, paperID, categoryID }))
        var err = 0;
        let tempDetails = details;
        let tempTitle = details;
        let tempAddress = address;
        if (typeRealEstate == 0 || categoryID == 0 || provinceID == -1 || districtID == -1 || wardID == -1 || !price || !area || tempTitle.trim() == '' || area == 0 || price == 0 || tempDetails.trim() == '') {
            err = 1;
        }
        if (typeRealEstate == 1 || typeRealEstate == 3) {
            if (tempAddress == null) {
                tempAddress = '';
            }
            if (tempAddress.trim() == '' || imageList.length + imageUrls.length < 3) {
                err = 1;
            }
        } else if (typeRealEstate == 2 || typeRealEstate == 4) {
            setAddress(null);
            setImageList([]);
            setImageUrls([]);
            setImageToShowList([]);
            setBathrooms(null);
            setBedrooms(null);
        }
        if (err == 0) {
            let body = {
                'ID': post.id,
                'CreatorPhone': post.creatorPhone,
                'PostTypeName': post.postTypeName,
                'CategoryName': post.categoryName,
                'CreatedDate': post.createdDate,
                'CreatorName': post.creatorName,
                'Like': post.like,
                'ImageUrls': imageUrls,
                typeRealEstate, title, imageList, provinceID, districtID, wardID, address, area, price, bedrooms, bathrooms, directionID, details, paperID, categoryID
            }
            await dispatch(fetchUpdatePost(body));
        }
        else {
            toast.notifyError("Vui lòng nhập đầy đủ thông tin trường *")
        }

    }
    return (
        <div id="product_create_app" className="product-create">
            <div>
                <div className="container">
                    <h1>Đăng tin bất động sản miễn phí </h1>
                    <div className="form">
                        <h2>I. Thông tin cơ bản </h2>
                        <div className="form-info">
                            {/* <div className="left"> */}
                            <div>
                                <div className="form-group">
                                    <label className="flex-center">Loại hình<span>*</span>: </label>
                                    <select className="form-input" value={typeRealEstate} onChange={(e) => { handleChangeRealEstate(e.target.value) }}>
                                        <option value="0">Chọn Loại hình</option>
                                        <option value="1">Cần bán</option>
                                        <option value="2">Cần mua</option>
                                        <option value="3">Cho thuê</option>
                                        <option value="4">Cần thuê</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="flex-center">Loại BĐS<span>*</span>: </label>
                                    {(typeRealEstate == 1 || typeRealEstate == 2)
                                        ? (
                                            <select className="form-input" value={categoryID} onChange={(e) => setTypeCategory(e.target.value)}>
                                                <option value="0">Chọn Loại BĐS</option>
                                                <option value="1">Căn hộ/ Chung cư</option>
                                                <option value="2">Nhà ở</option>
                                                <option value="4">Văn phòng/ Mặt bằng kinh doanh</option>
                                                <option value="3">Đất</option>
                                            </select>
                                        ) :
                                        (
                                            <select className="form-input" value={categoryID} onChange={(e) => setTypeCategory(e.target.value)}>
                                                <option value="0">Chọn Loại BĐS</option>
                                                <option value="1">Căn hộ/ Chung cư</option>
                                                <option value="2">Nhà ở</option>
                                                <option value="4">Văn phòng/ Mặt bằng kinh doanh</option>
                                                <option value="5">Nhà trọ</option>
                                            </select>
                                        )}
                                </div>
                                <div className="form-group">
                                    <label>Tỉnh/ Thành phố<span>*</span>: </label>
                                    <select className="form-input" onChange={(e) => handleOnChangeCurrentCity(e.target.value)} value={provinceID}>
                                        <option value="-1">Chọn Tỉnh/ Thành phố</option>
                                        {lstCity.map((item) => {
                                            return <option key={item.code} value={item.code}>{item.name}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Quận/ Huyện<span>*</span>: </label>
                                    <select className="form-input" onChange={(e) => handleOnChangeCurrentDistric(e.target.value)} value={districtID}>
                                        <option value="0">Chọn quận/ huyện</option>
                                        {lstDistrict.map((item) => {
                                            return <option key={item.code} value={item.code}>{item.name}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Xã/ Phường<span>*</span>: </label>
                                    <select className="form-input" onChange={(e) => setWardID(e.target.value)} value={wardID}>
                                        <option value="0">Chọn Xã/ Phường</option>
                                        {lstWard.map((item) => {
                                            return <option key={item.code} value={item.code}>{item.name}</option>
                                        })}
                                    </select>
                                </div>
                                {
                                    (typeRealEstate == 1 || typeRealEstate == 3) ?
                                        (
                                            <div className="form-group">
                                                <label className="flex-center">Địa chỉ<span>*</span>: </label>
                                                <input type="text" className="form-input" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Nhập địa chỉ chi tiết" />
                                            </div>
                                        ) : ''
                                }
                            </div>
                        </div>
                    </div>

                    <div className="form">
                        <h2>II. Thông tin mô tả </h2>
                        <div className="form-info">
                            <div className="left">
                                <div className="form-group">
                                    <label>Giá (VNĐ)<span>*</span>: </label>
                                    <div className="button-group">
                                        <div className="rs">
                                            <div className="c5">
                                                <input type="tel" className="v-money form-input wide" value={price} onChange={(e) => setPrice(helper.validateNumber(e.target.value))} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Diện tích (m2)<span>*</span>: </label>
                                    <div className="button-group">
                                        <div className="rs">
                                            <div className="c5">
                                                <input onkeypress="validateNumber(event)" value={area} onChange={(e) => setArea(helper.validateNumber(e.target.value))} className="form-input wide" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="rs">
                                    <div className="c8">
                                        <div className="form-group">
                                            <label className="flex-center">Hướng nhà/ đất</label>
                                            <select className="form-input" value={directionID} onChange={(e) => setDirection(e.target.value)} style={{ minWidth: "245px" }}>
                                                <option value="0">Chọn hướng nhà/ đất</option>
                                                <option value="1">Đông</option>
                                                <option value="2">Tây</option>
                                                <option value="3">Nam</option>
                                                <option value="4">Bắc</option>
                                                <option value="5">Đông-Bắc</option>
                                                <option value="6">Tây-Bắc</option>
                                                <option value="7">Đông-Nam</option>
                                                <option value="8">Tây-Nam</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="rs">
                                    <div className="c8">
                                        <div className="form-group">
                                            <label>Tình trạng pháp lý </label>
                                            <select className="form-input" value={paperID} onChange={(e) => setPaperId(e.target.value)}>
                                                <option value="0">Tình trạng pháp lý</option>
                                                <option value="1">Sổ đỏ</option>
                                                <option value="2">Sổ hồng</option>
                                                <option value="3">Sổ trắng</option>
                                                <option value="4">Giấy chứng nhận quyền sở hữu</option>
                                                <option value="5">Giấy tờ hợp lệ</option>
                                                <option value="6">Chưa xác định</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="flex-center">Tên tiêu đề<span>*</span>: </label>
                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nhập tiêu đề tin đăng" maxlength="99" className="form-input txttitle" />
                                <span className="txtcount">{title.length}/99</span>
                            </div>
                            {
                                (typeRealEstate == 1 && (categoryID == 1 || categoryID == 2))
                                    ? (
                                        <div>
                                            <div className="form-group">
                                                <label className="flex-center">Số phòng ngủ: </label>
                                                <input type="text" value={bedrooms} onChange={(e) => setBedrooms(helper.validateNumber(e.target.value))} placeholder="Nhập số phòng ngủ" className="form-input" />
                                            </div>
                                            <div className="form-group">
                                                <label className="flex-center">Số phòng tắm: </label>
                                                <input type="text" value={bathrooms} onChange={(e) => setBathrooms(helper.validateNumber(e.target.value))} placeholder="Nhập số phòng tắm" className="form-input" />
                                            </div>
                                        </div>
                                    ) : ''
                            }
                            <div className="form-group">
                                <label>Mô tả<span>*</span>: </label>
                                <textarea style={{ resize: "none" }} className="ck-blurred form-input active ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline" value={details} onChange={(e) => setDetail(e.target.value)} />
                            </div>

                        </div>
                    </div>
                    {
                        (typeRealEstate == 1 || typeRealEstate == 3)
                            ? (
                                <div className="form">
                                    <h2>III. Thông tin hình ảnh </h2>
                                    <div className="form-info">
                                        <p className="tips">* Up ít nhất 3 ảnh cho bài đăng để đạt hiệu quả tốt hơn.</p>
                                        <div className="form-images">
                                            <p className="alert alert-info">
                                                Tin đăng có hình ảnh thường hiệu quả hơn 59% tin đăng không có hình ảnh.
                                            </p>
                                            <label className="btn-add-image">
                                                <img src="https://static.homedy.com/src/images/explore/upload.svg" width="32" />
                                                <input type="file" multiple="multiple" accept="image/*" onChange={onImageChange} />
                                                Thêm ảnh
                                            </label>
                                            <div className="image-list">
                                                <div dense="" className="rs">
                                                    {
                                                        id && post && post.id == id && post.creatorID == currentUser.id
                                                            ? imageUrls.map((item, index) => (
                                                                <div className="c3 image-item" key={index}>
                                                                    <img src={item} />
                                                                    <button onClick={() => handleDeletePhotoUrl(index)} type="button" className="md-button md-icon-button md-dense btn-close md-theme-default">
                                                                        <div className="md-ripple">
                                                                            <div className="md-button-content">
                                                                                <img src="https://static.homedy.com/src/images/icon/close.svg" />
                                                                            </div>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            )) : (null)
                                                    }
                                                    {imageToShowList.length > 0
                                                        ? imageToShowList.map((item, index) => (
                                                            <div className="c3 image-item" key={index}>
                                                                <img src={item} />
                                                                <button onClick={() => handleDeletePhoto(index)} type="button" className="md-button md-icon-button md-dense btn-close md-theme-default">
                                                                    <div className="md-ripple">
                                                                        <div className="md-button-content">
                                                                            <img src="https://static.homedy.com/src/images/icon/close.svg" />
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        )) : ''}
                                                </div>
                                            </div>
                                            <div className="alert alert-warning" style={{ height: '80px' }}></div>
                                        </div>
                                    </div>
                                </div>
                            ) : ''
                    }
                    {
                        post.id == id && post.creatorID == currentUser.id
                            ? (<button id="cmd_post" onClick={handleSubmitCreatePost} className="btn-submit">CẬP NHẬP</button>) : ('')
                    }

                </div>
            </div>
            <LoadingComponent isLoading={loading} />
        </div >)
}
export default PostEdit;