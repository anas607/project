// slices/searchFormSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../API/apiService";
import { BaseUrl, NAME, SEARCH, Specialization } from "../../API/api";

export const SearchSpeclise = createAsyncThunk(
  "form/searchForms",
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await getData(`${BaseUrl}${SEARCH}${Specialization}${NAME}?search=${searchTerm}`);
                  console.log(response.data) 

      return response.data;

    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

const searchFormSlice = createSlice({
  name: "searchspeclise",
  initialState: {
    data: [],
    isloading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SearchSpeclise.pending, (state) => {
        state.isloading = true;
      })
      .addCase(SearchSpeclise.fulfilled, (state, action) => {
        state.isloading = false;
        state.data = action.payload;
      })
      .addCase(SearchSpeclise.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export default searchFormSlice.reducer;
