import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { act } from "react-dom/test-utils";

//hàm lấy posts
export const fetchLogin = createAsyncThunk(
    'user/fetchLogin',
    async (objLogin) => {
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
                res = JSON.parse(result);
            })
            .catch(error => console.log('error', error));
        return res;

    }
)


//hàm lấy thông tin nguười dùng
export const fetchChangePassword = createAsyncThunk(
    'user/fetchChangePassword',
    async (objPassword) => {
        var res;
        var accessToken = localStorage.getItem('accessToken');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + accessToken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "oldPassword": objPassword.oldPassword,
            "password": objPassword.password,
            "confirmPassword": objPassword.confirmPassword
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        await fetch("http://localhost:50804/api/Auths/ChangePassword", requestOptions)
            .then(response => response.text())
            .then(result => {
                res = JSON.parse(result);
            })
            .catch(error => console.log('error', error));
        return res;

    }
)

//hàm lấy thông tin nguười dùng
export const fetchInfoUser = createAsyncThunk(
    'user/fetchInfoUser',
    async () => {
        var res;
        var accessToken = localStorage.getItem('accessToken');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + accessToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        await fetch("http://localhost:50804/api/Auths/Info", requestOptions)
            .then(response => response.text())
            .then(result => {
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

//hàm inset 1 post
export const fetchChangeInfo = createAsyncThunk(
    'user/fetchChangeInfo',
    async (objUser, thunkAPI) => {
        var result;
        var accessToken = localStorage.getItem('accessToken');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + accessToken);

        var formdata = new FormData();
        formdata.append("Name", objUser.name);
        if (objUser.image != null) {
            formdata.append('Image', objUser.image, objUser.image.name);
        }
        if (objUser.imageUrl != '') {
            formdata.append('ImageUrl', objUser.imageUrl);
        }
        formdata.append('Gender', objUser.gender);
        formdata.append('Birthday', objUser.birthday);
        formdata.append('Address', objUser.address);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        await fetch("http://localhost:50804/api/Auths/ChangeInfo", requestOptions)
            // Converting to JSON
            .then(response => result = response.json())

            // Displaying results to console
            .then(json => { console.log(json); })

            .catch(error => console.log('error', error));
        return result;
    }
)


// Cấu hình slice
const userSlice = createSlice({
    name: "user",  // Tên của slice
    initialState: {
        error: '',
        currentUser: null,
        succeeded: false,
        infoUser: null
    },
    // Reducers chứa các hàm xử lý cập nhật state
    reducers: {
        setUp(state) {
            state.succeeded=false
        },
        signOut(state) {
            state.error= '';
            state.currentUser= null;
            state.succeeded= false;
            state.infoUser= null;
        }
    },
    extraReducers: {
        [fetchLogin.pending]: (state, action) => {
            state.error = null
        },
        [fetchLogin.fulfilled]: (state, action) => {
            if (action.payload.refreshToken) {
                localStorage.setItem('refreshToken', action.payload.refreshToken);
                localStorage.setItem('accessToken', action.payload.accessToken);
                var decoded = jwtDecode(action.payload.accessToken);
                state.currentUser = decoded;
                state.error = null
            } else {
                state.succeeded = false;
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
            state.error = null;
            state.succeeded = false;
        },
        [fetchSignIn.fulfilled]: (state, action) => {
            if (action.payload.succeeded == true) {
                state.succeeded = true;
                state.error = null;
            } else if (action.payload.errors != null) {
                state.succeeded = false;
                state.error = action.payload.errors;
            }
        },
        [fetchSignIn.rejected]: (state, action) => {
            state.error = 'Vui lòng kiểm tra lại số điện thoại và mật khẩu'
            state.currentUser = null
            state.succeeded = false;
        },
        [fetchInfoUser.pending]: (state, action) => {
            state.error = null;
            state.succeeded = false;
        },
        [fetchInfoUser.fulfilled]: (state, action) => {
            state.succeeded = true;
            state.error = null;
            state.infoUser = action.payload
        },
        [fetchInfoUser.rejected]: (state, action) => {
            state.error = 'Không thể lấy thông tin người dùng'
            state.infoUser = null
            state.succeeded = false;
        },
        [fetchChangePassword.pending]: (state, action) => {
            state.error = null;
            state.succeeded = false;
        },
        [fetchChangePassword.fulfilled]: (state, action) => {
            if (act.payload.succeeded == false) {
                state.succeeded = false;
                state.error = action.payload.errors;
            } else {
                state.succeeded = true;
                state.error = null;
            }
            console.log("Thành công", action.payload);
            state.succeeded = true;
            state.error = null;
        },
        [fetchChangePassword.rejected]: (state, action) => {
            state.error = 'Không thể đổi mật khẩu'
            state.succeeded = false;
        },
        [fetchChangeInfo.pending]: (state, action) => {
            state.error = null;
            state.succeeded = false;
        },
        [fetchChangeInfo.fulfilled]: (state, action) => {
            // if (act.payload.succeeded == false) {
            //     state.succeeded = false;
            //     state.error = action.payload.errors;
            // }else{
            //     state.succeeded = true;
            //     state.error = null;
            // }
            // console.log("Thành công", action.payload);
            // state.succeeded = true;
            // state.error = null;
        },
        [fetchChangeInfo.rejected]: (state, action) => {
            state.error = 'Không thể đổi mật khẩu'
            state.succeeded = false;
        },


    }
});

export const { setUp, signOut } = userSlice.actions
// Export reducer để nhúng vào Store
export default userSlice.reducer;