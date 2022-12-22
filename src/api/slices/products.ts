import ApiSlice from '../slice';

export type Items = {
  dislikes?: string;
  id: string;
  likes?: string;
  price: number;
  src: string;
  title: string;
};
// main products type with each item typed
export type Products = {
  title: string;
  items: Items[];
};
export type CategoryProds = {
  pagesCount: number;
  items: Items[];
};
export default class ProductsSlice extends ApiSlice {
  static defaultAuth: boolean = true;
  static baseURL: string = ApiSlice.baseURL + '/products/';

  static GetProductsByCategory(id: string) {
    return this.request<CategoryProds>(id);
  }
  static GetTopProducts() {
    return this.request<Products[]>('home');
  }
  static GetCurrentProduct(id: string) {
    return this.request('current/' + id);
  }
  static PostProductComment({ product_id, body }: { product_id: string; body: string }) {
    return this.request('comment', 'POST', { product_id, body });
  }
  static PostProductReact({
    product_id,
    type,
    action
  }: {
    product_id: string;
    type: string;
    action: string;
  }) {
    return this.request('react', 'POST', { product_id, type, action });
  }
}
