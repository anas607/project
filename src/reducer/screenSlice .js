// store/screenSlice.js
import { createSlice } from '@reduxjs/toolkit';

const getDeviceType = (width) => {
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

const initialState = {
  width: typeof window !== "undefined" ? window.innerWidth : 1200,
  device: typeof window !== "undefined" ? getDeviceType(window.innerWidth) : "desktop",
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setScreenSize(state, action) {
      state.width = action.payload;
      state.device = getDeviceType(action.payload);
    },
  },
});

export const { setScreenSize } = screenSlice.actions;
export default screenSlice.reducer;
