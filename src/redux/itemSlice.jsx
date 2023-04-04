import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "itemSlice",
  initialState: {
    item: {},
    error: "This is the Item axios ERROR!",
  },
  reducers: {
    actionItem: (state, action) => {
      state.item = action.payload;
    },
  },
});

export default itemSlice.reducer;

export const { actionItem } = itemSlice.actions;

export const itemData = (data) => (dispatch) => {
  dispatch(actionItem(data));
};
