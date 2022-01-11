import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './item.styles.css';

const Item = ({ item }) => {
    const [province, setProvince] = useState('');
    useEffect(() => {
        fetch(`https://provinces.open-api.vn/api/p/${item.provinceID}?depth=1`)
            .then(function (response) {
                if (response.status !== 200) {
                    console.log('Lỗi, mã lỗi ' + response.status);
                    return;
                }
                // parse response data
                response.json().then(data => {
                    setProvince(data.name);
                })
            })
    }, []);
    const handleConvertPrice = (n) => {
        if (n < 1000) {
            return `${(n - n%100)/100} trăm đồng`
        }
        if (n < 1000000) {
            return `${(n - n%1000)/1000} nghìn đồng`;
        }
        if (n < 1000000000) {
            return `${(n - n%1000000)/ 1000000} triệu đồng`;
        }
        if (n >= 1000000000) {
            return `${(n - n%1000000000)/ 1000000000} tỷ đồng`;
        }
        return '';
    }
    return (
        <Link to={{ pathname: `products/${item.id}` }}>
            <div class="box">
                <div class="image">{
                    item.imageUrls.length > 0
                        ? (
                            <img alt="" src={item.imageUrls[0]} />
                        ) : (
                            <img alt="" src="https://www.ad4travel.com/wp-content/uploads/2017/01/Real-Estate-SEO.jpg" />
                        )
                }
                </div>
                <div class="title">
                    {item.title}
                </div>
                <p class="details">{item.area} m²</p>
                <p class="price">{handleConvertPrice(item.price)}</p>
                <p class="time">Đăng ngày {item.createdDate.split('T')[0].split('-')[2]}-{item.createdDate.split('T')[0].split('-')[1]}-{item.createdDate.split('T')[0].split('-')[0]} ({province})</p>
            </div>
        </Link>
    );
}

export default Item;