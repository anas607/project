import { createSlice } from "@reduxjs/toolkit";

const externalStatisticsSlice = createSlice({
  name: "externalStatistics",
  initialState: {
    total: 0,
    done: 1,
    pending: 0,
    under_review: 0,
  },
  reducers: {
    setExternalStatistics: (state, action) => {
      state.total = action.payload.total;
      state.done = action.payload.done;
      state.pending = action.payload.pending;
      state.under_review = action.payload.under_review;
    },
  },
});

export const { setExternalStatistics } = externalStatisticsSlice.actions;
export default externalStatisticsSlice.reducer;
