// slices/searchFormSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../API/apiService";
import { BaseUrl, EXAM, REQUEST, SEARCH } from "../../API/api";

export const SearchRequest = createAsyncThunk(
  "form/searchForms",
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await getData(`http://127.0.0.1:8000/api/search/Exam/request?search=${searchTerm}`);
                  console.log(response.data) 

      return response.data;

    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

const searchFormSlice = createSlice({
  name: "searchrequest",
  initialState: {
    data: [],
    isloading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SearchRequest.pending, (state) => {
        state.isloading = true;
      })
      .addCase(SearchRequest.fulfilled, (state, action) => {
        state.isloading = false;
        state.data = action.payload;
      })
      .addCase(SearchRequest.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export default searchFormSlice.reducer;
