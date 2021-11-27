import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import './item.styles.css';

const Item = ({item}) => {
    useEffect(() => {
        console.log({item});
    }, [])
    //src={item.imageUrls[0]}
    return (
        <Link to={{pathname:`products/${item.id}`}}>
            <div class="box">
                <div class="image">
                    <img alt="" />
                    <div class="icon"><i class="fa fa-heart-o"></i></div>
                </div>
                <div class="title">
                    {item.title}
                </div>
                <p class="details">30 m<sup>2</sup> - 3 PN</p>
                <p class="price">{item.price}</p>
                <p class="time">5 giờ trước . Hà Nội</p>
            </div>
        </Link>
    );
}

export default Item;