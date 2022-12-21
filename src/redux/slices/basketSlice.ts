import BasketSlice, { Product } from "../../api/slices/basket";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

type InitialType = {
  products: Product[] | null;
  message: string;
  loading: boolean;
  error: boolean;
};
const initialState: InitialType = {
  products: null,
  message: "",
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
export const delBasket = createAsyncThunk(
  "basket/delBasket",
  async (): Promise<any> => {
    return BasketSlice.DeleteBasket().then((resp) => resp.data);
  }
);
export const updateBasketCount = createAsyncThunk(
  "basket/updateBasketCount",
  async ({
    product_id,
    action,
  }: {
    product_id: string;
    action: string;
  }): Promise<any> => {
    return BasketSlice.UpdateBasketCount({ product_id, action }).then(
      (resp) => ({ message: resp.data, product_id, action })
    );
  }
);
export const purchaseBasket = createAsyncThunk(
  "basket/purchaseBasket",
  async (): Promise<any> => {
    return BasketSlice.PurchaseBasket().then((resp) => resp.data);
  }
);
export const deleteBasket = createAsyncThunk(
  "basket/deleteBasket",
  async (): Promise<any> => {
    return BasketSlice.DeleteBasket().then((resp) => resp.data);
  }
);
const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get basket ---------------
      .addCase(getBasket.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBasket.fulfilled, (state, { payload }) => {
        state.products = payload.length ? payload : null;
      })
      .addCase(getBasket.rejected, (state) => {
        state.error = true;
      })
      // add to basket --------------------
      .addCase(addToBasket.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToBasket.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addToBasket.rejected, (state) => {
        state.error = true;
      })
      // delete basket ----------------
      .addCase(deleteBasket.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBasket.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.message = payload;
        if (state.products) {
          state.products = null;
        }
      })
      .addCase(deleteBasket.rejected, (state) => {
        state.error = true;
      })
      // update basket item count ------------------
      .addCase(updateBasketCount.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBasketCount.fulfilled, (state, { payload }) => {
        if (state.products)
          state.products = state.products.map((item) =>
            item.product.id === payload.product_id
              ? {
                  count:
                    payload.action === "increase"
                      ? item.count + 1
                      : item.count - 1,
                  product: item.product,
                }
              : item
          );
        state.loading = false;
      })
      .addCase(updateBasketCount.rejected, (state) => {
        state.error = true;
      })
      // purchase basket ---------
      .addCase(purchaseBasket.pending, (state) => {
        state.loading = true;
      })
      .addCase(purchaseBasket.fulfilled, (state, { payload }) => {
        state.message = payload;
        if (state.products) {
          state.products = null;
        }
        state.loading = false;
      })
      .addCase(purchaseBasket.rejected, (state) => {
        state.error = true;
      });
  },
});

export default basketSlice.reducer;
export const basketProductsSelector = (state: RootState) =>
  state.basket.products;
export const basketMessageSelector = (state: RootState) => state.basket.message;
