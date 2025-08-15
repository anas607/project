import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl, EXPORT, TRANSACTION } from "../../../API/api";
import { getData } from "../../../API/apiService";

export const fetchexportouter = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getData(`${BaseUrl}${TRANSACTION}${EXPORT}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);
export const counterSlice = createSlice({
  name: "outerexport",
  initialState: {
    isloading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchexportouter.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(fetchexportouter.fulfilled, (state, action) => {
        state.isloading = false;
        state.data = action.payload;
      })
      .addCase(fetchexportouter.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload; // رسالة الخطأ القادمة من rejectWithValue
      });
  },
});

// Action creators are generated for each case reducer function

export default counterSlice.reducer;
