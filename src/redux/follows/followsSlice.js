import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    err: '',
    lstFollow:[],
    lstFollowed:[]
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
          
        await fetch(`http://localhost:50804/api/Follows?id=${id}`, requestOptions)
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
        await fetch(`http://localhost:50804/api/Follows/GetFollowed?id=${id}`, requestOptions)
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
        await fetch(`http://localhost:50804/api/Follows/GetFollow?id=${id}`, requestOptions)
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
        },
        [fetchGetFollowed.fulfilled]: (state, action) => {
            state.loading = false
            state.lstFollowed=action.payload
            console.log(action.payload);
        },
        [fetchGetFollowed.rejected]: (state, action) => {
            state.err = action.err
            state.lstFollowed=[]
        },
        [fetchGetFollow.pending]: (state, action) => {
            state.loading = true
        },
        [fetchGetFollow.fulfilled]: (state, action) => {
            state.loading = false
            state.lstFollow=action.payload
            console.log(action.payload);
        },
        [fetchGetFollow.rejected]: (state, action) => {
            state.err = action.err
            state.lstFollow=[]
        }
    }
})

// Export reducer để nhúng vào Store
export default followSlice.reducer;