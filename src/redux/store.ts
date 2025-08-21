import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./Slices/authSlice";
import { cmsSlice } from "./Slices/cmsSlice";
import { studentSlice } from "./Slices/studentSlice"; 
import userSlice from "./Slices/userSlice";

const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
    [cmsSlice.reducerPath]: cmsSlice.reducer,
    [studentSlice.reducerPath]: studentSlice.reducer, 
    user: userSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(authSlice.middleware)
      .concat(cmsSlice.middleware)
      .concat(studentSlice.middleware), 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
