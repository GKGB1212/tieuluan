import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    lstNotification: [],
    err: '',
};

//hàm filter post
export const fetchNotification = createAsyncThunk(
    'report/fetchNotification',
    async (thunkAPI) => {
        var result;
        var accessToken = localStorage.getItem('accessToken');
        var refreshToken = localStorage.getItem('refreshToken');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + accessToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        await fetch("https://realestateute.azurewebsites.net/api/Notifications/GetNotificationsByUser", requestOptions)
            .then(response => result = response.json())
            // Displaying results to console
            .then(json => { result = json; })
            .catch(error => console.log('error', error));
        return result;
    }
)

export const fetchCreateNotification = createAsyncThunk(
    'report/fetchCreateNotification',
    async (postID, userID, content, thunkAPI) => {
        var result;
        var accessToken = localStorage.getItem('accessToken');
        var refreshToken = localStorage.getItem('refreshToken');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + accessToken);
        myHeaders.append("accept", "*/*");
        myHeaders.append("Content-Type", "application/json-patch+json");

        var raw = JSON.stringify({
            "postID": postID,
            "userID": userID,
            "content": content
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        await fetch("https://realestateute.azurewebsites.net/api/Notifications", requestOptions)
            .then(response => result = response.json())
            // Displaying results to console
            .then(json => { result = json; })
            .catch(error => console.log('error', error));
        return result;
    }
)

export const fetchUpdateStatusNotifications = createAsyncThunk(
    'report/fetchUpdateStatusNotifications',
    async (thunkAPI) => {
        var result;
        var accessToken = localStorage.getItem('accessToken');
        var refreshToken = localStorage.getItem('refreshToken');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + accessToken);
        myHeaders.append("accept", "*/*");

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            redirect: 'follow'
          };
        await fetch("https://realestateute.azurewebsites.net/api/Notifications/UpdateStatusNotifications", requestOptions)
            .then(response => result = response.json())
            // Displaying results to console
            .then(json => { result = json; })
            .catch(error => console.log('error', error));
        return result;
    }
)

//hàm filter post
export const fetchCreateReport = createAsyncThunk(
    'report/fetchCreateReport',
    async (objRequest, thunkAPI) => {
        var result;
        var accessToken = localStorage.getItem('accessToken');
        var refreshToken = localStorage.getItem('refreshToken');
        var myHeaders = new Headers();
myHeaders.append("accept", "*/*");
myHeaders.append("Content-Type", "application/json-patch+json");
        myHeaders.append("Authorization", "Bearer " + accessToken);
        console.log("gia bifnh ddax vao", accessToken);
        var raw = JSON.stringify({
            "postID": objRequest.postID,
            "userID": objRequest.userID,
            "details": objRequest.details,
            "email": objRequest.email,
            "phoneNumber": objRequest.phoneNumber
          });
          
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          
        await fetch("https://realestateute.azurewebsites.net/api/Reports", requestOptions)
            .then(response => result = response.json())
            // Displaying results to console
            .then(json => { console.log('result', json); result = json; objRequest.callback(result) })
            .catch(error => console.log('error', error));
        return result;
    }
)




const reportSlice = createSlice({
    name: "report",  // Tên của slice
    initialState,
    // Reducers chứa các hàm xử lý cập nhật state
    reducers: {
    },
    extraReducers: {
        [fetchNotification.pending]: (state, action) => {
            state.loading = true
        },
        [fetchNotification.fulfilled]: (state, action) => {
            state.loading = false;
            state.lstNotification=action.payload;
        },
        [fetchNotification.rejected]: (state, action) => {
            state.err = action.err;
            state.loading = false;
        },
        [fetchUpdateStatusNotifications.pending]: (state, action) => {
            state.loading = true
        },
        [fetchUpdateStatusNotifications.fulfilled]: (state, action) => {
            state.loading = false
            state.lstPostLike = action.payload;
        },
        [fetchUpdateStatusNotifications.rejected]: (state, action) => {
            state.err = action.err;
            state.loading = false;
        },
        [fetchCreateReport.pending]: (state, action) => {
            state.loading = true
        },
        [fetchCreateReport.fulfilled]: (state, action) => {
            state.loading = false
            state.lstPostLike = action.payload;
        },
        [fetchCreateReport.rejected]: (state, action) => {
            state.err = action.err;
            state.loading = false;
        }
    }
})

// Export reducer để nhúng vào Store
export default reportSlice.reducer;