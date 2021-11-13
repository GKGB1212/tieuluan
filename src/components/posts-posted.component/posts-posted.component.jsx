//cái box chưa các bài đã đăng
import React from "react";
import './posts-posted.styles.css';

const BoxPost = () => {
    return (
        <div class="box-discuss">
            <div class="item item-add box-part">
                <p class="title">Cộng đồng</p>
                <div class="item-content">
                    <img src="https://static.homedy.com/src/images/explore/thao-luan.svg" alt="post" class="icon" />
                    <a href="" class="title-add">
                        Thêm bài viết
                    </a>
                </div>
            </div>
        </div>
    )
}
export default BoxPost;