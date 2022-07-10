import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    error:null,
    newsResponse: [],
    err: '',
    new: null
};

//hàm lấy danh sách bài báo
export const fetchNews = createAsyncThunk(
    'article/fetchNews',
    async (objFetchNews, thunkAPI) => {
        console.log('obj',objFetchNews)
        var result;
        var myHeaders = new Headers();
        myHeaders.append("accept", "*/*");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        await fetch(`http://localhost:50804/api/News?page=${objFetchNews.page}&size=${objFetchNews.size}&display=true`, requestOptions)
            .then(response => result = response.json())
            // Displaying results to console
            .then(json => { result = json; })
            .catch(error => console.log('error', error));
        return result;
    }
)

export const fetchNewByID = createAsyncThunk(
    'article/fetchNewByID',
    async (id, thunkAPI) => {
        console.log("id truyền vào là",id)
        var result;
        var myHeaders = new Headers();
        myHeaders.append("accept", "*/*");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

       await fetch(`http://localhost:50804/api/News/${id}`, requestOptions)
            .then(response => result = response.json())
            // Displaying results to console
            .then(json => { result = json; })
            .catch(error => console.log('error', error));
        return result;
    }
)
const articleSlice = createSlice({
    name: "article",  // Tên của slice
    initialState,
    // Reducers chứa các hàm xử lý cập nhật state
    reducers: {
    },
    extraReducers: {
        [fetchNews.pending]: (state, action) => {
            state.loading = true
            state.err = ''
        },
        [fetchNews.fulfilled]: (state, action) => {
            console.log("kqua",action.payload);
            state.loading = false;
            state.newsResponse=action.payload;
        },
        [fetchNews.rejected]: (state, action) => {
            state.err = action.err
        },
        [fetchNewByID.pending]: (state, action) => {
            state.loading = true
            state.err = ''
        },
        [fetchNewByID.fulfilled]: (state, action) => {
            state.loading = false
            state.new=action.payload;
        },
        [fetchNewByID.rejected]: (state, action) => {
            state.err = action.err
            state.lstFollowed = []
        }
    }
})

// Export reducer để nhúng vào Store
export default articleSlice.reducer;