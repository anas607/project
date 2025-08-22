import { createSlice ,createAsyncThunk  } from '@reduxjs/toolkit'
import { BaseUrl, SEARCH, EMPLOYEE } from '../../API/api';
import { getData } from '../../API/apiService';


export const SearchEmployees = createAsyncThunk(
  'program/searchEmployees',
  async (searchTerm, { rejectWithValue }) => {
    try {
      // مرر الـ searchTerm كـ params بالـ API
      const response = await getData(`${BaseUrl}${SEARCH}${EMPLOYEE}?search=${searchTerm}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);


export const counterSlice = createSlice({
    name: 'search',
    initialState: {
       isloading:false,
       data:[],
       error:null
    },
    reducers: {
    
    }, extraReducers: builder => {
        builder
          .addCase(SearchEmployees.pending, (state, action) => {
            state.isloading = true
          })
          .addCase(SearchEmployees.fulfilled, (state, action) => {
            state.isloading = false
            state.data = action.payload
            
          })
       .addCase(SearchEmployees.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.payload; 
          })
        }
  })
  
 
  
  export default counterSlice.reducer