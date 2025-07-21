import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;
