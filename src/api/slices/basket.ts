import ApiSlice from '../slice';

export type BasketProd = {
  id: string;
  price: number;
  src: string;
  title: string;
};
export type Product = {
  count: number;
  product: BasketProd;
};
export default class BasketSlice extends ApiSlice {
  static defaultAuth = true;
  static baseURL: string = ApiSlice.baseURL + '/basket';

  static GetBasket() {
    return this.request<Product[]>();
  }
  static AddToBasket(product_id: string) {
    return this.request('', 'POST', { product_id });
  }
  static UpdateBasketCount({ product_id, action }: { product_id: string; action: string }) {
    return this.request('/update_count', 'PUT', { product_id, action });
  }
  static PurchaseBasket() {
    return this.request('/purchase', 'POST');
  }
  static DeleteBasket() {
    return this.request('', 'DELETE');
  }
}
