// slices/searchFormSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../API/apiService";
import { ARCHIVED, BaseUrl,  SEARCH, TRANSACTIONN } from "../../API/api";

export const SearchTransction = createAsyncThunk(
  "form/searchForms",
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await getData(`${BaseUrl}search/transactions?key=${searchTerm}`);
                  console.log(response.data) 

      return response.data;

    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

const searchFormSlice = createSlice({
  name: "searchtransction",
  initialState: {
    data: [],
    isloading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SearchTransction.pending, (state) => {
        state.isloading = true;
      })
      .addCase(SearchTransction.fulfilled, (state, action) => {
        state.isloading = false;
        state.data = action.payload;
      })
      .addCase(SearchTransction.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export default searchFormSlice.reducer;
