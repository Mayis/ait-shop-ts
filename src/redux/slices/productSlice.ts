import ProductsSlice, { CurrentProductType } from '../../api/slices/products';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

type initialType = {
  product: CurrentProductType | null;
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
export const postComment = createAsyncThunk(
  'product/postComment',
  async ({ product_id, body }: { product_id: string; body: string }): Promise<any> => {
    return ProductsSlice.PostProductComment({ product_id, body }).then((resp) => resp.data);
  }
);
export const postReaction = createAsyncThunk(
  'product/postRreaction',
  async ({
    product_id,
    action,
    type
  }: {
    product_id: string;
    action: string;
    type: string;
  }): Promise<any> => {
    return ProductsSlice.PostProductReact({ product_id, action, type }).then((resp) => ({
      action,
      type
    }));
  }
);
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get product case
      .addCase(getSelectedProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSelectedProduct.fulfilled, (state, { payload }) => {
        state.product = payload;
        state.loading = false;
      })
      .addCase(getSelectedProduct.rejected, (state) => {
        state.error = true;
      })
      // comment case
      .addCase(postComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(postComment.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(postComment.rejected, (state) => {
        state.error = true;
      })
      // reaction case
      .addCase(postReaction.pending, (state) => {
        state.loading = true;
      })
      .addCase(postReaction.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(postReaction.rejected, (state) => {
        state.error = true;
      });
  }
});

export default productSlice.reducer;
export const selectedProductSelector = (state: RootState) => state.product.product;
