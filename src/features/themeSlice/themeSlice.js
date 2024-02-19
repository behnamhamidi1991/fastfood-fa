import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.dark = action.payload;
    },
  },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
