import React, { useState } from "react";
import './header.styles.css';
import logo from '../../logo.webp';
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import { fetchPosts } from "../../redux/product/productSlice";
import { fetchFilterPosts } from "../../redux/product/productSlice";
const HeaderM = () => {
    const [Search,setSearch]=useState('');
    const history=useHistory();
    const dispatch=useDispatch();
    const goBackHome=()=>{
        history.push('/')
    }
    const handleClickSearch=()=>{
        dispatch(fetchFilterPosts({
            Search,
            Page:  1 ,
            Size: 24
        }));
        history.push({
            pathname: '/totalItem',
            state: { Search }
        })
    }
    return (
        <>
            <section class="header">
                <div class="nav">
                    <img src={logo} alt="" onClick={goBackHome}/>
                    <div class="nav-links">
                        <ul>
                            <li><Link to='/'><i class="fa fa-home" aria-hidden="true"></i> Trang chủ</Link></li>
                            <li><a href=""><i class="fa fa-user-o" aria-hidden="true"></i> Quản lý tin</a></li>
                            <li><a href=""><i class="fa fa-ellipsis-h" aria-hidden="true"></i> Thêm</a></li>
                        </ul>
                    </div>
                </div>
                <div class="info">
                    <div class="search">
                        <div class="s116vlok">
                            <div value="" class="a1ywrhtc">
                                <button aria-label="Search Button Desktop" class="btnSearch" onClick={handleClickSearch}>
                                    <svg xmlns="http://www.w3.org/2000/svg" data-type="monochrome" viewBox="0 0 16 16" width="1em" height="1em" fill="none">
                                        <path fill="currentColor" d="M6.4 0a6.369 6.369 0 00-4.525 1.873A6.425 6.425 0 00.502 3.906v.002A6.383 6.383 0 000 6.398a6.372 6.372 0 001.875 4.524 6.385 6.385 0 008.428.537l-.006.006 4.295 4.293a.827.827 0 001.166-1.166l-4.295-4.295a6.368 6.368 0 00-.537-8.424A6.372 6.372 0 006.4 0zm0 1.615a4.75 4.75 0 013.383 1.4c.44.44.785.95 1.028 1.522h-.002c.249.59.377 1.214.377 1.861 0 .648-.128 1.27-.377 1.862h.002a4.783 4.783 0 01-2.55 2.545c-.59.25-1.213.377-1.86.377a4.761 4.761 0 01-1.864-.377A4.749 4.749 0 013.016 9.78c-.44-.44-.783-.95-1.024-1.521a4.735 4.735 0 01-.377-1.862c0-.647.127-1.272.377-1.863a4.75 4.75 0 011.024-1.52 4.754 4.754 0 013.384-1.4z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <input autocomplete="off" value={Search} onChange={(e)=>setSearch(e.target.value)} placeholder="Tìm kiếm bất động sản" id="__inputItemProps" type="text" class="t1o0834r"/>
                        </div>
                    </div>
                    <Link to="/Login">
                        <div class="login">
                            <div class="fa fa-user-circle-o" ></div><div><Link to='/Login'>Đăng nhập</Link></div>
                        </div>
                    </Link>
                    <Link to="/PostCreate" className="btn"><i class="fa fa-pencil-square-o" ></i>ĐĂNG TIN</Link>
                </div>
            </section>
        </>
    );
}

export default HeaderM;