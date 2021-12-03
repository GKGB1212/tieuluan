import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

//hàm lấy posts
export const fetchLogin = createAsyncThunk(
    'user/fetchLogin',
    async (objLogin) => {
        console.log(objLogin)
        var res;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "userName": objLogin.phoneNumber,
            "password": objLogin.passWord
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        await fetch("http://localhost:50804/api/Auths/Login", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                res = JSON.parse(result);
            })
            .catch(error => console.log('error', error));
        return res;

    }
)

export const fetchLoginWithToken = createAsyncThunk(
    'user/fetchLoginWithToken',
    async () => {
        var res;
        var accessToken = localStorage.getItem('accessToken');
        var refreshToken = localStorage.getItem('refreshToken');
        if (accessToken && refreshToken) {
            return;
        } else {
            var decoded = jwtDecode(accessToken);
            var decodedRf = jwtDecode(refreshToken);
            //Thời gian hiện tại
            var currentTime = new Date();
            //Thời gian của token
            var tokenTime = new Date(decoded.exp * 1000);
            //Thời gian hết hạn của refresttoken
            var refreshTokentime = new Date(decodedRf.exp * 1000);
        }
    }
)

export const fetchSignIn = createAsyncThunk(
    'user/fetchSignIn',
    async (objSignIn) => {
        var res;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": objSignIn.name,
            "phoneNumber": objSignIn.phoneNumber,
            "password": objSignIn.passWord,
            "confirmPassword": objSignIn.passWord,
            "code": objSignIn.otp
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        await fetch("http://localhost:50804/api/Auths/Register", requestOptions)
            .then(response => response.text())
            .then(result => res = JSON.parse(result))
            .catch(error => console.log('error', error));
        return res;

    }
)


// Cấu hình slice
const userSlice = createSlice({
    name: "user",  // Tên của slice
    initialState: {
        error: '',
        currentUser: null,
        succeeded: false
    },
    // Reducers chứa các hàm xử lý cập nhật state
    reducers: {},
    extraReducers: {
        [fetchLogin.pending]: (state, action) => {
            state.error=null
        },
        [fetchLogin.fulfilled]: (state, action) => {
            if (action.payload.refreshToken) {
                localStorage.setItem('refreshToken', action.payload.refreshToken);
                localStorage.setItem('accessToken', action.payload.accessToken);
                var decoded = jwtDecode(action.payload.accessToken);
                state.currentUser = decoded;
                state.error=null
            } else {
                state.succeeded=false;
                state.error = 'Vui lòng kiểm tra lại số điện thoại và mật khẩu'
                state.currentUser = null
            }
        },
        [fetchLogin.rejected]: (state, action) => {
            console.log('lỗi', action.error)
            state.error = 'Vui lòng kiểm tra lại số điện thoại và mật khẩu'
            state.currentUser = null
        },
        [fetchSignIn.pending]: (state, action) => {
            state.error=null;
            state.succeeded=false;
        },
        [fetchSignIn.fulfilled]: (state, action) => {
            if (action.payload.succeeded == true) {
                state.succeeded=true;
                state.error=null;
                console.log(state.succeeded)
                alert("Đăng kí thành công")
            }else if (action.payload.errors!=null) {
                state.succeeded=false;
                state.error = action.payload.errors;
                alert("Lỗi đăng kí")
            }
        },
        [fetchSignIn.rejected]: (state, action) => {
            state.error = 'Vui lòng kiểm tra lại số điện thoại và mật khẩu'
            state.currentUser = null
            state.succeeded=false;
        }

    }
});


// Export reducer để nhúng vào Store
export default userSlice.reducer;