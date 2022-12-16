import ApiSlice from "./slice";
import CategoriesSlice from "./slices/categories";
import ProductsSlice from "./slices/products";

export default class Api extends ApiSlice {
  static categories = CategoriesSlice;
  static products = ProductsSlice;
}
