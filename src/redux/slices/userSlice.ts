import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import AuthSlice from "../../api/slices/auth";
import { RootState } from "./../store";

type Info = {
  fullname?: string;
  email?: string;
  token: string;
  id: string;
};
type UserType = {
  loading: boolean;
  user: null | Info;
  error: boolean;
};
export type LoginType =
  | {
      email: string;
      password: string;
    }
  | { [key: string]: string | object };
export type RegisterType =
  | {
      fullname: string;
      email: string;
      password: string;
    }
  | { [key: string]: string | object };
const initialState: UserType = {
  loading: false,
  user: null,
  error: false,
};
export const getUser = createAsyncThunk<Info, LoginType>(
  "user/getUser",
  async (info: LoginType): Promise<any> => {
    return AuthSlice.Login(info).then((resp) => resp.data);
  }
);
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (info: RegisterType): Promise<any> => {
    return AuthSlice.Register(info).then((resp) => resp.data);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout(state) {
      state.user = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<Info>) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("accessToken", action.payload.token);
      })
      .addCase(getUser.rejected, (state) => {
        state.error = true;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<Info>) => {
        state.loading = false;
        localStorage.setItem("accessToken", action.payload.token);
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state) => {
        state.error = true;
      });
  },
});

export default userSlice.reducer;
export const { userLogout } = userSlice.actions;
export const userSelector = (state: RootState) => state.user.user;
export const tokenSelector = (state: RootState) => state.user.user?.token;
