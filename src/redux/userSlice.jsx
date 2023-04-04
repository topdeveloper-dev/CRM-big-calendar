import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser:  null,
    isFetching: false,
    successSnackbar:false,
    errorSnackbar:false,
    error: "",
    logout:false
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error="";
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error="";
      state.successSnackbar = true;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
      state.errorSnackbar=true;
    },
    logOut: (state) => {
      state.currentUser = null;
      localStorage.setItem("userInfo", null);
      sessionStorage.clear();
      state.logout=true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logOut } =
  userSlice.actions;
export default userSlice.reducer;
