// slices/searchFormSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../API/apiService";
import { ARCHIVED, BaseUrl,  SEARCH, TRANSACTIONN } from "../../API/api";

export const SearchARCHIVE = createAsyncThunk(
  "form/searchForms",
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await getData(`${BaseUrl}search/transactions/arcived?key=${searchTerm}`);
                  console.log(response.data) 

      return response.data;

    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

const searchFormSlice = createSlice({
  name: "searcharchive",
  initialState: {
    data: [],
    isloading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SearchARCHIVE.pending, (state) => {
        state.isloading = true;
      })
      .addCase(SearchARCHIVE.fulfilled, (state, action) => {
        state.isloading = false;
        state.data = action.payload;
      })
      .addCase(SearchARCHIVE.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export default searchFormSlice.reducer;
