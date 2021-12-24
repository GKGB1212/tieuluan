import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './followed-follow-layout.styles.css';
import { useHistory, useLocation, useParams } from "react-router-dom";
import { fetchGetFollow, fetchGetFollowed } from "../../redux/follows/followsSlice";
import default_avt from '../../assets/images/default_user.png'

const FollowLayout = () => {
    const { userId } = useParams();
    const currentUser = useSelector(state => state.user.currentUser);
    const lstFollow = useSelector(state => state.follow.lstFollow);
    const lstFollowed = useSelector(state => state.follow.lstFollowed);
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [title, setTitle] = useState('');
    const [type, setType] = useState(0);
    useEffect(async() => {
        try {
            await setType(location.state.type)
            if (location.state.type == 1) {
                setTitle('Người theo dõi');
                if (userId) {
                    dispatch(fetchGetFollow(userId));
                } else {
                    dispatch(fetchGetFollow(currentUser.id));
                }
            }
            else {
                setTitle('Đang theo dõi');
                if (userId) {
                    dispatch(fetchGetFollowed(userId));
                } else {
                    dispatch(fetchGetFollowed(currentUser.id));
                }
            }
        } catch (ex) {
        }
    }, []);
    return (
        <div className="main-content">
            <div className="container WrapperContainer">
                <div className="indexPage PaperContainer">
                    <div className="PaperWrapper">
                        <h4 class="TitleHeading">{title}</h4>
                        <div className="row list">
                            <div className="listt">
                                {
                                    type == 1
                                        ? (
                                            lstFollow.map((user, index) => (
                                                <div class="user-container" onClick={()=>history.push(`user/${user.id}`)}>
                                                    {
                                                        user.imageUrl != navigator
                                                            ? (
                                                                <img class="user-avt" src={user.imageUrl} height="50" width="50" />
                                                            ) : (
                                                                <img class="user-avt" src='https://static.chotot.com/storage/chotot-icons/png/user.png' height="50" width="50" />
                                                            )
                                                    }
                                                    <div class="user-info">
                                                        <div class="user-info-name">{user.name}</div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            lstFollowed.map((user, index) => (

                                                <div class="user-container"  onClick={()=>history.push(`user/${user.id}`)}>
                                                   {
                                                        user.imageUrl != navigator
                                                            ? (
                                                                <img class="user-avt" src={user.imageUrl} height="50" width="50" />
                                                            ) : (
                                                                <img class="user-avt" src='https://static.chotot.com/storage/chotot-icons/png/user.png' height="50" width="50" />
                                                            )
                                                    }
                                                    <div class="user-info">
                                                        <div class="user-info-name">{user.name}</div>
                                                    </div>
                                                </div>
                                            ))
                                        )
                                }











                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FollowLayout;