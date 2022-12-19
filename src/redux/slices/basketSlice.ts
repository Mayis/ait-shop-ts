import BasketSlice, { Product } from "../../api/slices/basket";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

type InitialType = {
  products: Product[] | null;
  loading: boolean;
  error: boolean;
};
const initialState: InitialType = {
  products: null,
  loading: false,
  error: false,
};
export const addToBasket = createAsyncThunk(
  "basket/addToBasket",
  async (product_id: string): Promise<any> => {
    return BasketSlice.AddToBasket(product_id).then((resp) => resp.data);
  }
);
export const getBasket = createAsyncThunk(
  "basket/getBasket",
  async (): Promise<any> => {
    return BasketSlice.GetBasket().then((resp) => resp.data);
  }
);

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBasket.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBasket.fulfilled, (state, { payload }) => {
        state.products = payload;
      })
      .addCase(getBasket.rejected, (state) => {
        state.error = true;
      })
      .addCase(addToBasket.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToBasket.rejected, (state) => {
        state.error = true;
      });
  },
});

export default basketSlice.reducer;
export const basketProductsSelector = (state: RootState) =>
  state.basket.products;
