import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../product/productSlice";
import userSlice from "../user/userSlice";
import likePostSlice from "../likePost/likePostSlice";
import followsSlice from "../follows/followsSlice";
import reportSlice from "../report/reportSlice";
import articleSlice from "../article/articleSlice";

export const store = configureStore({
    reducer: {
      product:productSlice,
      user:userSlice,
      likePost:likePostSlice,
      follow:followsSlice,
      report:reportSlice,
      article:articleSlice
    }
  });