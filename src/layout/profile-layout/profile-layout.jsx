import React from "react";
import './profile-layout.styles.css';
import BoxInfo from "../../components/box-info.component/box-info.component";
import BoxPost from "../../components/posts-posted.component/posts-posted.component";

const ProfileLayout = () => {
    return (
        <div className="container_profile_layout">
            <div class="profile">
                <div class="content_profile_layout">
                    <div class="box-content">
                    <div class="box-left">
                        <BoxInfo/>
                    </div>
                    <div class="box-right">
                        <BoxPost/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileLayout;