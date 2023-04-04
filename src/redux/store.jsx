import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    userSlice: userReducer,
    itemSlice: itemReducer,
  },
});
