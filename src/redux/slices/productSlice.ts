import { RootState } from "./../store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { productURL } from "./../../helper/api";
import request from "../../helper/request";

//  typed each items in porducts
export type Items = {
  dislikes: string;
  id: string;
  likes: string;
  price: number;
  src: string;
  title: string;
};
// main products type with each item typed
type MainProduct = {
  title: string;
  items: Items[];
};
// slice initial type
type InitialType = {
  mainProducts: null | MainProduct[];
  selectedProduct: any;
  loading: boolean;
  error: boolean;
};
const initialState: InitialType = {
  mainProducts: null,
  selectedProduct: null,
  loading: false,
  error: false,
};
// getting all products ,include top and etc
export const getProducts = createAsyncThunk(
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
