import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl, TRANSACTIONIMPORT } from "../../../API/api";
import { getData } from "../../../API/apiService";

export const fetchimportouter = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getData(`${BaseUrl}${TRANSACTIONIMPORT}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const counterSlice = createSlice({
  name: "outereimport",
  initialState: {
    isloading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchimportouter.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(fetchimportouter.fulfilled, (state, action) => {
        state.isloading = false;
        state.data = action.payload;
      })
      .addCase(fetchimportouter.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload; // رسالة الخطأ القادمة من rejectWithValue
      });
  },
});

// Action creators are generated for each case reducer function

export default counterSlice.reducer;
