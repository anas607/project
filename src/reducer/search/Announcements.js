import { createSlice ,createAsyncThunk  } from '@reduxjs/toolkit'
import { BaseUrl, SEARCH, EMPLOYEE, Announcements } from '../../API/api';
import { getData } from '../../API/apiService';


export const SearchAnnouncements = createAsyncThunk(
  'program/searchEmployees',
  async (searchTerm, { rejectWithValue }) => {
    try {
      // مرر الـ searchTerm كـ params بالـ API
      const response = await getData(`${BaseUrl}${SEARCH}${Announcements}?search=${searchTerm}`);
                        console.log(response.data) 

      return response.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);


export const counterSlice = createSlice({
    name: 'SearchAnnouncements',
    initialState: {
       isloading:false,
       data:[],
       error:null
    },
    reducers: {
    
    }, extraReducers: builder => {
        builder
          .addCase(SearchAnnouncements.pending, (state, action) => {
            state.isloading = true
          })
          .addCase(SearchAnnouncements.fulfilled, (state, action) => {
            state.isloading = false
            state.data = action.payload
            
          })
       .addCase(SearchAnnouncements.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.payload; 
          })
        }
  })
  
 
  
  export default counterSlice.reducer