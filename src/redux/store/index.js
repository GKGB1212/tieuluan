import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../product/productSlice";
import userSlice from "../user/userSlice";

export const store = configureStore({
    reducer: {
      product:productSlice,
      user:userSlice
    }
  });