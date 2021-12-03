import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jsonServer from "../../api/jsonServer";
import jwtDecode from "jwt-decode";

const initialState = {
    loading: false,
    products: {},
    err: '',
    product: {},
    //Lấy danh sách tin đã được duyệt
    lstPostByUser: {},
    //danh sách sản phẩm tìm kiếm
    lstPostSearch: {}
};

//hàm filter post
export const fetchFilterPosts = createAsyncThunk(
    'product/fetchFilterPosts',
    async (objSearch, thunkAPI) => {
        var result;
        console.log(objSearch)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        var query = "http://localhost:50804/api/Posts/Search?"
        for (var key in objSearch) {
            var temp = `${key}=${objSearch[key]}&`;
            query = query + temp
        }
        console.log(query)
        await fetch(query, requestOptions)
            .then(response => result = response.json())
            // Displaying results to console
            .then(json => { result = json ;})
            .catch(error => console.log('error', error));
        return result;
    }
)


//hàm lấy posts
export const fetchPosts = createAsyncThunk(
    'product/fetchPosts',
    async () => {
        var result;
        await fetch('http://localhost:50804/api/Posts')
            .then(res => res.json())
            .then((data) => {
                result = data;
            })
        return result;
    }
)

//hàm lấy posts
export const fetchPostById = createAsyncThunk(
    'product/fetchPostById',
    async (id) => {
        var result;
        await fetch(`http://localhost:50804/api/Posts/${id}`)
            .then(res => res.json())
            .then((data) => {
                result = data;
            })
        return result;
    }
)

//hàm lấy post theo id user
export const fetchPostByIdUser = createAsyncThunk(
    'product/fetchPostByIdUser',
    async (id, thunkAPI) => {
        var result;

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        await fetch(`http://localhost:50804/api/Posts/GetPostsByUser?id=${id}`, requestOptions)
            .then(response => result = response.json())
            // Displaying results to console
            .then(json => { result = json })
            .catch(error => console.log('error', error));

        return result;
    }
)


//hàm lấy post theo user hiện tại
export const fetchPostByCurrentUser = createAsyncThunk(
    'product/fetchPostByCurrentUser',
    async (id, thunkAPI) => {
        var result;

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ2YWYzNzk1LWVkY2QtNDVjYi05NGQxLWRmOTM3MzBmYjRmZiIsInVzZXJuYW1lIjoiMDM4Njg2MzUyMSIsIm5hbWUiOiJhYWFhYWFhYWFhYWFhYWFhYWFhYSIsIm5iZiI6MTYzODIwODE3OCwiZXhwIjoxNjM4MjA5OTc4LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM3NiIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0Mzc2In0.v2_LTslwI7RJteOerr_ARCQLmfj__PnUVGtMOhRiL5Y");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        await fetch('http://localhost:50804/api/Posts/GetPostsByUserCurrent', requestOptions)
            .then(response => result = response.json())
            // Displaying results to console
            .then(json => { result = json })
            .catch(error => console.log('error', error));

        return result;
    }
)

//hàm inset 1 post
export const fetchInsertPost = createAsyncThunk(
    'product/fetchInsertPost',
    async (objPost, thunkAPI) => {
        var result;

        var accessToken = localStorage.getItem('accessToken');
        var refreshToken = localStorage.getItem('refreshToken');
        var decoded = jwtDecode(accessToken);
        var decodedRf = jwtDecode(refreshToken)
        console.log(decoded)
        //Thời gian hiện tại
        var currentTime = new Date();
        //Thời gian của token
        var tokenTime = new Date(decoded.exp * 1000)
        //Thời gian hết hạn của refresttoken
        var refreshTokentime = new Date(decodedRf.exp * 1000);

        if (refreshTokentime > currentTime && tokenTime < currentTime) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "refreshToken": refreshToken
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            await fetch("http://localhost:50804/api/Auths/Refresh", requestOptions)
                // Converting to JSON
                .then(response => result = response.json())
                // Displaying results to console
                .then(json => {
                    localStorage.setItem('refreshToken', json.refreshToken);
                    localStorage.setItem('accessToken', json.accessToken);
                    accessToken = localStorage.getItem('accessToken');
                })
                .catch(error => console.log('error', error));
        }

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + accessToken);

        var formData = new FormData();
        var images = objPost.imageList;
        console.log("độ dài", objPost);
        formData.append('title', objPost.title);
        images.forEach(element => { formData.append('imageList', element, element.name) });
        formData.append('provinceID', objPost.provinceID);
        formData.append('districtID', objPost.districtID);
        formData.append('wardID', objPost.wardID);
        formData.append('address', objPost.address);
        formData.append('area', objPost.area);
        formData.append('price', objPost.price);
        formData.append('bedrooms', objPost.bedrooms);
        formData.append('bathrooms', objPost.bathrooms);
        formData.append('directionID', objPost.directionID);
        formData.append('details', objPost.details);
        formData.append('paperID', objPost.paperID);
        formData.append('creatorID', '5f1a8115-4744-4a9d-8385-1e2eba684aac');
        formData.append('postTypeID', 1);
        formData.append('categoryID', objPost.categoryID);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formData,
            redirect: 'follow'
        };


        await fetch("http://localhost:50804/api/Posts", requestOptions)
            // Converting to JSON
            .then(response => result = response.json())

            // Displaying results to console
            .then(json => { console.log(json); })

            .catch(error => console.log('error', error));
        return result;
    }
)



// Cấu hình slice
const productSlice = createSlice({
    name: "product",  // Tên của slice
    initialState,
    // Reducers chứa các hàm xử lý cập nhật state
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            console.log("đã vàooo")
            state.loading = true
        },
        [fetchPosts.fulfilled]: (state, action) => {
            console.log("thành công", action.payload)
            state.loading = false
            state.products = action.payload
        },
        [fetchPosts.rejected]: (state, action) => {
            console.log("thất bại")
            state.err = action.err
        },
        [fetchInsertPost.pending]: (state, action) => {
            console.log("đã vàooo")
            state.loading = true
        },
        [fetchInsertPost.fulfilled]: (state, action) => {
            console.log("thành công", action.payload)
            state.loading = false
        },
        [fetchInsertPost.rejected]: (state, action) => {
            console.log("thất bại", action.error)
            state.loading = false
            state.err = action.err
        },
        [fetchPostById.pending]: (state, action) => {
            console.log("đã vàooo")
            state.loading = true
        },
        [fetchPostById.fulfilled]: (state, action) => {
            console.log("Sản phẩm", action.payload)
            state.loading = false;
            state.product = action.payload;
        },
        [fetchPostById.rejected]: (state, action) => {
            console.log("thất bại", action.error)
            state.loading = false
            state.err = action.err
        },
        [fetchPostByIdUser.pending]: (state, action) => {
            state.loading = true
        },
        [fetchPostByIdUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.lstPostByUser = action.payload;
        },
        [fetchPostByIdUser.rejected]: (state, action) => {
            console.log("thất bại", action.error)
            state.loading = false
            state.err = action.err
        },
        [fetchFilterPosts.pending]: (state, action) => {
            console.log('đã ào')
            state.loading = true
        },
        [fetchFilterPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.lstPostSearch = action.payload;
        },
        [fetchFilterPosts.rejected]: (state, action) => {
            state.loading = false
            state.err = action.err
        }
    }
});

// Hàm giúp lấy ra state mong muốn.
// Hàm này có 1 tham số là root state là toàn bộ state trong store, chạy thử console.log(state) trong nội dung hàm để xem chi tiết
export const selectProducts = state => state.product.products;

// Export reducer để nhúng vào Store
export default productSlice.reducer;