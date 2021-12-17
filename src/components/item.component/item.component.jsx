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
    }, [])
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
                <p class="price">{item.price} VNĐ</p>
                <p class="time">{item.createdDate}-{province}</p>
            </div>
        </Link>
    );
}

export default Item;