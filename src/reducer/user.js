import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  roles: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action) {
      state.user = action.payload.user;
      state.roles = action.payload.roles;
    },
    clearUserData(state) {
      state.user = null;
      state.roles = [];
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
