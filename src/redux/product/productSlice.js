import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jsonServer from "../../api/jsonServer";

const initialState = {
    loading: false,
    products: {},
    err: '',
    product:{}
};


//hàm lấy posts
export const fetchPosts = createAsyncThunk(
    'product/fetchPosts',
    async () => {
        var result;
        await fetch('https://localhost:44376/api/Posts')
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
        await fetch(`https://localhost:44376/api/Posts/${id}`)
            .then(res => res.json())
            .then((data) => {
                result = data;
            })
        return result;
    }
)

//hàm inset 1 post
export const fetchInsertPost = createAsyncThunk(
    'product/fetchInsertPost',
    async (objPost, thunkAPI) => {
        var result;
        var formData = new FormData();
        var images=objPost.imageList;
        console.log("độ dài",objPost);
        formData.append('title', objPost.title);
        images.forEach(element => {console.log("2222222222");formData.append('imageList',element,element.name)});
        // formData.append('imageList', objPost.imageList);
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
        formData.append('creatorID', 'c20f2181-f439-444f-ba4e-31eb207605a5');
        formData.append('postTypeID', 1);
        formData.append('categoryID', objPost.categoryID);

        console.log(formData.values);
        var requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow'
        };

       await fetch("https://localhost:44376/api/Posts", requestOptions)
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
            state.product=action.payload;
        },
        [fetchInsertPost.rejected]: (state, action) => {
            console.log("thất bại", action.error)
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