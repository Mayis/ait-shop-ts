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
// cateogry prdoucts type
export type CategoryProds = {
  pagesCount: number;
  items: Items[];
};
// current product and its features types
type CommentsType = { author: { fullname: string }; body: string };
type ReactionType = { likes: null | number; dislikes: null | number; yourReaction: null | number };

export type CurrentProductType = {
  comments: CommentsType[];
  description: string;
  id: string;
  price: number;
  reaction: ReactionType;
  src: string;
  title: string;
};
export default class ProductsSlice extends ApiSlice {
  static defaultAuth = true;
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
