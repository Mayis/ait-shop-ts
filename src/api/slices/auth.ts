import { LoginType, RegisterType } from '../../redux/slices/userSlice';

import ApiSlice from '../slice';

export default class AuthSlice extends ApiSlice {
  static defaultAuth = true;
  static baseURL: string = ApiSlice.baseURL + '/auth';

  static Register(info: RegisterType) {
    return this.request('/register', 'POST', info);
  }
  static Login(info: LoginType) {
    return this.request('/login', 'POST', info);
  }
}
