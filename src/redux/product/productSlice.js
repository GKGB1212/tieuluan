import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { act } from "react-dom/test-utils";

const initialState = {
    loading: false,
    products: {},
    err: '',
    success: false,
    product: {},
    //hiển thi số bài viết mỗi laoij(mua bán,cho thuê)
    postTypeNumber: {
        muaBan: 0,
        thue: 0
    },
    //Lấy danh sách tin đã được duyệt
    lstPostByUser: {},
    //danh sách sản phẩm tìm kiếm
    lstPostSearch: {},
    //danh sách sp mua bán
    lstPostPurchase: [],
    //danh sách sp cho thuê
    lstPostLease: [],
    successChangeSoldPost:false
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
            .then(json => { result = json; })
            .catch(error => console.log('error', error));
        return result;
    }
)

export const fetchFilterPostsForMainLayout = createAsyncThunk(
    'product/fetchFilterPostsForMainLayout',
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
            .then(json => { result = json; })
            .catch(error => console.log('error', error));
        return { result, objSearch };
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
    async (objRequest) => {
        var result;
        var res = '';
        if (objRequest.userId != null) {
            res = `http://localhost:50804/api/Posts/${objRequest.id}?userID=${objRequest.userId}`
        } else {
            res = `http://localhost:50804/api/Posts/${objRequest.id}`
        }
        await fetch(res)
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
    async (objRequest, thunkAPI) => {
        var result;

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        await fetch(`http://localhost:50804/api/Posts/GetPostsByUser?id=${objRequest.id}&userCurrentID=${objRequest.userCurrentID}`, requestOptions)
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
    async () => {
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

        await fetch('http://localhost:50804/api/Posts/GetPostsByUserCurrent', requestOptions)
            .then(response => result = response.json())
            // Displaying results to console
            .then(json => { result = json })
            .catch(error => console.log('error', error));

        return result;
    }
)

//hàm đổi trangj thái sang đã bán/ đã tìm đươck
export const fetchSoldPost = createAsyncThunk(
    'product/fetchSoldPost',
    async (idPost) => {
        var result;
        var accessToken = localStorage.getItem('accessToken');
        var refreshToken = localStorage.getItem('refreshToken');
        var myHeaders = new Headers();
        myHeaders.append("accept", "*/*");
        myHeaders.append("Authorization", "Bearer " + accessToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        await fetch(`http://localhost:50804/api/Posts/Sold?id=${idPost}`, requestOptions)
            .then(response => result = response.json())
            // Displaying results to console
            .then(json => { result = json })
            .catch(error => console.log('error', error));

        return result;
    }
)


export const fetchGetPostTypeNumber = createAsyncThunk(
    'product/fetchGetPostTypeNumber',
    async (thunkAPI) => {
        var res;
        var myHeaders = new Headers();
        myHeaders.append("accept", "*/*");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        await fetch("http://localhost:50804/api/Posts/GetPostTypeNumber", requestOptions)
            .then(response => response.text())
            .then(result => res = JSON.parse(result))
            .catch(error => console.log('error', error));
        return res;
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
        if (objPost.typeRealEstate == 1 && (objPost.categoryID == 1 || objPost.categoryID == 2)) {
            if (objPost.bedrooms != null) {
                formData.append('bedrooms', objPost.bedrooms);
            }
            if (objPost.bathrooms != null) {
                formData.append('bathrooms', objPost.bathrooms);
            }
        }
        formData.append('directionID', objPost.directionID);
        formData.append('details', objPost.details);
        formData.append('paperID', objPost.paperID);
        formData.append('creatorID', decoded.id);
        formData.append('postTypeID', objPost.typeRealEstate);
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
    reducers: {
        resetSuccess(state) {
            state.success = false;
        },
        setUpSoldPost(state){
            state.successChangeSoldPost=false;
        }
    },
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.loading = true
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.loading = false
            state.products = action.payload
        },
        [fetchPosts.rejected]: (state, action) => {
            state.err = action.err
        },
        [fetchInsertPost.pending]: (state, action) => {
            state.loading = true
        },
        [fetchInsertPost.fulfilled]: (state, action) => {
            state.loading = false;
            state.success = action.payload
        },
        [fetchInsertPost.rejected]: (state, action) => {
            state.loading = false
            state.err = action.error
        },
        [fetchPostById.pending]: (state, action) => {
            state.loading = true
        },
        [fetchPostById.fulfilled]: (state, action) => {
            state.loading = false;
            state.product = action.payload;
        },
        [fetchPostById.rejected]: (state, action) => {
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
            state.loading = false
            state.err = action.err
        },
        [fetchFilterPosts.pending]: (state, action) => {
            state.loading = true
        },
        [fetchFilterPosts.fulfilled]: (state, action) => {
            console.log("connn", action.payload)
            state.loading = false;
            state.lstPostSearch = action.payload;
        },
        [fetchFilterPosts.rejected]: (state, action) => {
            state.loading = false
            state.err = action.err
        },
        [fetchPostByCurrentUser.pending]: (state, action) => {
            state.loading = true
        },
        [fetchPostByCurrentUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.lstPostByUser = action.payload;
        },
        [fetchPostByCurrentUser.rejected]: (state, action) => {
            state.loading = false
            state.err = action.err
        },
        [fetchFilterPostsForMainLayout.pending]: (state, action) => {
            state.loading = true
        },
        [fetchFilterPostsForMainLayout.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.loading = false;
            if (action.payload.objSearch.PostTypeID == 1) {
                state.lstPostPurchase = action.payload.result.posts;
            } else if (action.payload.objSearch.PostTypeID == 2) {
                state.lstPostLease = action.payload.result.posts;
            }
        },
        [fetchFilterPostsForMainLayout.rejected]: (state, action) => {
            state.loading = false
            state.err = action.err
        },
        [fetchGetPostTypeNumber.pending]: (state, action) => {
            state.loading = true;
            state.postTypeNumber = {
                muaBan: 0,
                thue: 0
            };
        },
        [fetchGetPostTypeNumber.fulfilled]: (state, action) => {
            state.postTypeNumber = action.payload;
        },
        [fetchGetPostTypeNumber.rejected]: (state, action) => {
            state.loading = false
            state.err = action.err
        },
        [fetchSoldPost.pending]: (state, action) => {
            state.loading = true;
            state.successChangeSoldPost=false;
        },
        [fetchSoldPost.fulfilled]: (state, action) => {
            console.log(action.payload);
            if(action.payload.succeeded){
                state.successChangeSoldPost=true;
            }else{
                state.successChangeSoldPost=false;
            }
        },
        [fetchSoldPost.rejected]: (state, action) => {
            state.loading = false;
            state.err = action.err;
            state.successChangeSoldPost=false;
        },
    }
});

// Hàm giúp lấy ra state mong muốn.
// Hàm này có 1 tham số là root state là toàn bộ state trong store, chạy thử console.log(state) trong nội dung hàm để xem chi tiết
export const selectProducts = state => state.product.products;

export const { resetSuccess, setUpSoldPost } = productSlice.actions

// Export reducer để nhúng vào Store
export default productSlice.reducer;