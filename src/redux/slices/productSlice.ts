import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import ProductsSlice from '../../api/slices/products';
import { RootState } from '../store';

type initialType = {
  product: any;
  loading: boolean;
  error: boolean;
};
const initialState: initialType = {
  product: null,
  loading: false,
  error: false
};

export const getSelectedProduct = createAsyncThunk(
  'product/getSelectedProduct',
  async (id: string): Promise<any> => {
    return ProductsSlice.GetCurrentProduct(id).then((resp) => resp.data);
  }
);
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSelectedProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSelectedProduct.fulfilled, (state, { payload }) => {
        state.product = payload;
        state.loading = false;
      })
      .addCase(getSelectedProduct.rejected, (state) => {
        state.error = true;
      });
  }
});

export default productSlice.reducer;
export const selectedProductSelector = (state: RootState) => state.product.product;
