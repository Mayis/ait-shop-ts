import ApiSlice from "../slice";

export default class BasketSlice extends ApiSlice {
  static defaultAuth: boolean = true;
  static baseURL: string = ApiSlice.baseURL + "/basket";

  static GetBasket() {
    return this.request();
  }
  static AddToBasket(product_id: string) {
    return this.request("", "POST", { product_id });
  }
}
