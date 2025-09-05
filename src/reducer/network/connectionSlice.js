// connectionSlice.js
import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: { isOnline: navigator.onLine },
  reducers: {
    setOnline: (state) => { state.isOnline = true; },
    setOffline: (state) => { state.isOnline = false; },
  },
});

export const { setOnline, setOffline } = connectionSlice.actions;
export default connectionSlice.reducer;
