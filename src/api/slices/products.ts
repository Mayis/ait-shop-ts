import ApiSlice from "../slice";

export type Items = {
  dislikes: string;
  id: string;
  likes: string;
  price: number;
  src: string;
  title: string;
};
// main products type with each item typed
export type Products = {
  title: string;
  items: Items[];
};
export default class ProductsSlice extends ApiSlice {
  static defaultAuth: boolean = true;
  static baseURL: string = ApiSlice.baseURL + "/products/";

  static GetProductsByCategory(id: string) {
    return this.request(id);
  }
  static GetTopProducts() {
    return this.request<Products[]>("home");
  }
}
