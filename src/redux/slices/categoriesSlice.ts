import { RootState } from "../store";
import { allCategoriesURL } from "../../helper/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import request from "../../helper/request";
import { selectedCategoryURL } from "./../../helper/api";

export type categoryType = {
  id: "string";
  title: "string";
};
type initialStateType = {
  loading: boolean;
  error: boolean;
  categories: null | categoryType[];
  selectedCategory: null | any;
};
const initialState: initialStateType = {
  loading: false,
  error: false,
  categories: null,
  selectedCategory: null,
};
export const getCategories = createAsyncThunk(
  "categories/getCategoriesasync",
  async (token: string): Promise<any> => {
    return request("GET", allCategoriesURL, null, token).then(
      (resp) => resp.data
    );
  }
);
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
        state.loading = false;
      })
      .addCase(getCategories.rejected, (state) => {
        state.error = true;
      });
  },
});

export default categoriesSlice.reducer;

export const allCategoriesSelector = (state: RootState) =>
  state.categories.categories;
export const selectedCategorySelector = (state: RootState) =>
  state.categories.selectedCategory;
