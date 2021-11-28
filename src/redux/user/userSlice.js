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

        await fetch("https://localhost:44376/api/Auths/Login", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                res = JSON.parse(result);
            })
            .catch(error => console.log('error', error));
        return res;

    }
)

export const fetchSignIn = createAsyncThunk(
    'user/fetchSignIn',
    async (objSignIn) => {
        var res;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", ".AspNetCore.Identity.Application=CfDJ8LgnmN1SLg9HjyHc7IgqFIpwIj5hvdBegXLceCA1X-OYypVDwjtF0FGlwb3VM3ddpyO3dwz_u-PTv32Yv5qpfNfRrVO8UjurTVCsQOwl9xGQgmR0T7j2p5I2oQ_LWhI7npbs3LR0AQnA2MSP2ufJ3QZwJ-BZHs7plK9Qnyb2dv-kFPoY2Tce8KFBjIjL5OgkJlAkMH9GgrsKLyzqvFqKQwBSGjZ8WB2vAMAhNBZtivI4TEXzqmZ5k3Bd-x5qilf85N4CxuOu-EBB4-JWgzoQfBAXuBCHXPlzmIZvtVL3ehswURS09SfJGT9MieJWTxPIJa-_cy7fpXsxOgNuhaOG4sNX5Jo0hTe9i06ultleEFd0tOya1cfL9NzHwCq9wdNmSwZJEVQb7pi4-27zdyykkg3iAkWNJBNvP3YDO5CJYIQh8VD6EybkWENUhdD6Q7xL1smKyVXHblDGzxNO3yYu12UY4vJNG1fAL8ngamcCb0NWj2M-EP6CtOmJbSImokHZGcTbS07A6pDNWXpVUr3_zbfTc8RgC5sWvs-hu4mDI1bVknhI5OiWtRPHcYRzuZVKLJM-UXCfvWXSoqpKVePLBCo");

        var raw = JSON.stringify({
            "name": objSignIn.name,
            "phoneNumber": objSignIn.phoneNumber,
            "password": objSignIn.passWord,
            "confirmPassword": objSignIn.passWord
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        await fetch("https://localhost:44376/api/Auths/Register", requestOptions)
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
        succeeded:false
    },
    // Reducers chứa các hàm xử lý cập nhật state
    reducers: {},
    extraReducers: {
        [fetchLogin.pending]: (state, action) => {
            console.log('vào')
        },
        [fetchLogin.fulfilled]: (state, action) => {
            console.log('vàoo')
            console.log(action.payload)
            if (action.payload.refreshToken) {
                localStorage.setItem('refreshToken', action.payload.refreshToken);
                localStorage.setItem('accessToken', action.payload.accessToken);
                var decoded = jwtDecode(action.payload.accessToken);
                state.currentUser = decoded;
            } else {
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
            console.log('Bắt đầu');
        },
        [fetchSignIn.fulfilled]: (state, action) => {
            console.log(action.payload)
            if (action.payload.errors) {
                state.error = action.payload.errors;
            } else if (action.payload.succeeded == true) {
                state.succeeded = action.payload.succeeded;
            }
        },
        [fetchSignIn.rejected]: (state, action) => {
            state.error = 'Vui lòng kiểm tra lại số điện thoại và mật khẩu'
            state.currentUser = null
        }

    }
});


// Export reducer để nhúng vào Store
export default userSlice.reducer;