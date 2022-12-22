import ApiSlice from '../slice';

export type Category = {
  id: string;
  title: string;
};
export default class CategoriesSlice extends ApiSlice {
  static defaultAuth: boolean = true;
  static baseURL: string = ApiSlice.baseURL + '/categories/';
  static selectedCategoryURL: string = ApiSlice.baseURL + '/products';

  static GetCategories() {
    return this.request<Category[]>();
  }
}
