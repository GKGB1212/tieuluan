import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    err: '',
    lstFollow: [],
    lstFollowed: [],
    checkFollow: false
};

//hàm follow
export const fetchFollow = createAsyncThunk(
    'follow/fetchFollow',
    async (id, thunkAPI) => {
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
        await fetch(`https://realestateute.azurewebsites.net/api/Follows?id=${id}`, requestOptions)
            .then(response => result = response.json())
            // Displaying results to console
            .then(json => { result = json; })
            .catch(error => console.log('error', error));
        return result;
    }
)

//kéo những người mình follow
export const fetchGetFollowed = createAsyncThunk(
    'follow/fetchGetFollowed',
    async (id, thunkAPI) => {
        var result;
        var myHeaders = new Headers();
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        await fetch(`https://realestateute.azurewebsites.net/api/Follows/GetFollowed?id=${id}`, requestOptions)
            .then(response => result = response.json())
            // Displaying results to console
            .then(json => { result = json; })
            .catch(error => console.log('error', error));
        return result;
    }
)
//kéo  những người follow mình
export const fetchGetFollow = createAsyncThunk(
    'follow/fetchGetFollow',
    async (id, thunkAPI) => {
        var result;
        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        await fetch(`https://realestateute.azurewebsites.net/api/Follows/GetFollow?id=${id}`, requestOptions)
            .then(response => result = response.json())
            .then(json => { result = json; })
            .catch(error => console.log('error', error));
        return result;
    }
)
//Kiểm tra thử người dùng 1 có theo dõi người dùng 2 không
export const fetchCheckFollow = createAsyncThunk(
    'follow/fetchCheckFollow',
    async (objSearch, thunkAPI) => {
        var result;
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        await fetch(`https://realestateute.azurewebsites.net/api/Follows/CheckFollow?idUser1=${objSearch.userCurrentID}&idUser2=${objSearch.id}`, requestOptions)
            .then(response => result = response.json())
            .then(json => { result = json; })
            .catch(error => console.log('error', error));
        return result;
    }
)
const followSlice = createSlice({
    name: "follow",  // Tên của slice
    initialState,
    // Reducers chứa các hàm xử lý cập nhật state
    reducers: {
    },
    extraReducers: {
        [fetchFollow.pending]: (state, action) => {
            state.loading = true
            state.err = ''
        },
        [fetchFollow.fulfilled]: (state, action) => {
            state.loading = false;
            console.log(action.payload);
        },
        [fetchFollow.rejected]: (state, action) => {
            state.err = action.err
        },
        [fetchGetFollowed.pending]: (state, action) => {
            state.loading = true
            state.err = ''
        },
        [fetchGetFollowed.fulfilled]: (state, action) => {
            state.loading = false
            state.lstFollowed = action.payload
            console.log(action.payload);
        },
        [fetchGetFollowed.rejected]: (state, action) => {
            state.err = action.err
            state.lstFollowed = []
        },
        [fetchGetFollow.pending]: (state, action) => {
            state.loading = true
            state.err = ''
        },
        [fetchGetFollow.fulfilled]: (state, action) => {
            state.loading = false
            state.lstFollow = action.payload
            console.log(action.payload);
        },
        [fetchGetFollow.rejected]: (state, action) => {
            state.err = action.err
            state.lstFollow = []
        },
        [fetchCheckFollow.pending]: (state, action) => {
            state.loading = true;
            state.err = ''
            state.checkFollow = false
        },
        [fetchCheckFollow.fulfilled]: (state, action) => {
            state.loading = false
            state.checkFollow = action.payload
        },
        [fetchCheckFollow.rejected]: (state, action) => {
            state.err = action.err
            state.checkFollow = false
        }
    }
})

// Export reducer để nhúng vào Store
export default followSlice.reducer;