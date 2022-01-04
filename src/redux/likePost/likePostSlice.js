import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    lstPostLike: [],
    err: '',
};

//hàm filter post
export const fetchLike = createAsyncThunk(
    'likePost/fetchLike',
    async (id, thunkAPI) => {
        console.log('like',id)
        var result;
        var accessToken = localStorage.getItem('accessToken');
        var refreshToken = localStorage.getItem('refreshToken');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + accessToken);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };
        await fetch(`http://localhost:50804/api/Likes?id=${id}`, requestOptions)
            .then(response => result = response.json())
            // Displaying results to console
            .then(json => { result = json; })
            .catch(error => console.log('error', error));
        return result;
    }
)

export const fetchGetPostLiked = createAsyncThunk(
    'likePost/fetchGetPostLiked',
    async (id, thunkAPI) => {
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
        await fetch("http://localhost:50804/api/Likes", requestOptions)
            .then(response => result = response.json())
            // Displaying results to console
            .then(json => { result = json; })
            .catch(error => console.log('error', error));
        return result;
    }
)

const likePostSlice = createSlice({
    name: "likePost",  // Tên của slice
    initialState,
    // Reducers chứa các hàm xử lý cập nhật state
    reducers: {
    },
    extraReducers: {
        [fetchLike.pending]: (state, action) => {
            state.loading = true
        },
        [fetchLike.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [fetchLike.rejected]: (state, action) => {
            state.err = action.err
        },
        [fetchGetPostLiked.pending]: (state, action) => {
            state.loading = true
        },
        [fetchGetPostLiked.fulfilled]: (state, action) => {
            state.loading = false
            state.lstPostLike = action.payload;
            console.log(action.payload);
        },
        [fetchGetPostLiked.rejected]: (state, action) => {
            state.err = action.err
        }
    }
})

// Export reducer để nhúng vào Store
export default likePostSlice.reducer;