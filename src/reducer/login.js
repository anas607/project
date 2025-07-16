import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", password: "" };

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { updateField } = loginSlice.actions;
export default loginSlice.reducer;
