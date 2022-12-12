import { RootState } from "./../store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { productURL } from "./../../helper/api";
import request from "../../helper/request";

type initialType = {
  mainProducts: any;
  selectedProduct: any;
  loading: boolean;
  error: boolean;
};
const initialState: initialType = {
  mainProducts: null,
  selectedProduct: null,
  loading: false,
  error: false,
};
export const getProducts = createAsyncThunk<any, string>(
  "products/getProducts",
  async (token: string): Promise<any> => {
    return request("GET", productURL, null, token).then((resp) => resp.data);
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.mainProducts = payload;
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.error = true;
      });
  },
});

export default productsSlice.reducer;
export const productsSelector = (state: RootState) =>
  state.products.mainProducts;
