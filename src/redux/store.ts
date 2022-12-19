import basketSlice from "./slices/basketSlice";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    basket: basketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
