// slices/searchFormSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../API/apiService";
import { BaseUrl, EXAM, REQUEST, SEARCH } from "../../API/api";

export const SearchMarks = createAsyncThunk(
  "form/searchForms",
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await getData(`${BaseUrl}search/degree?search=${searchTerm}`);
                  console.log(response.data) 

      return response.data;

    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

const searchFormSlice = createSlice({
  name: "searchmark",
  initialState: {
    data: [],
    isloading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SearchMarks.pending, (state) => {
        state.isloading = true;
      })
      .addCase(SearchMarks.fulfilled, (state, action) => {
        state.isloading = false;
        state.data = action.payload;
      })
      .addCase(SearchMarks.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export default searchFormSlice.reducer;
