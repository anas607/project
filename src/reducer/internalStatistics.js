// reducer/internalStatistics.js
import { createSlice } from "@reduxjs/toolkit";

const internalStatisticsSlice = createSlice({
  name: "internalStatistics",
  initialState: {
    approved: 1,
    pending: 0,
    rejected: 0,
  },
  reducers: {
    setInternalStatistics: (state, action) => {
      state.approved = action.payload.approved;
      state.pending = action.payload.pending;
      state.rejected = action.payload.rejected;
    },
  },
});

export const { setInternalStatistics } = internalStatisticsSlice.actions;
export default internalStatisticsSlice.reducer;
