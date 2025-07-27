import { createSlice ,createAsyncThunk  } from '@reduxjs/toolkit'
import { BaseUrl, show_import_internal_mails } from '../../../API/api';
import { getData } from '../../../API/apiService';

export const fetchimportenter = createAsyncThunk(
  'enter/fetchenter',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getData(`${BaseUrl}${show_import_internal_mails}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const counterSlice = createSlice({
    name: 'enterimport',
    initialState: {
       isloading:false,
       data:[],
       error:null
    },
    reducers: {
    
    }, extraReducers: builder => {
        builder
          .addCase(fetchimportenter.pending, (state, action) => {
            state.isloading = true
          })
          .addCase(fetchimportenter.fulfilled, (state, action) => {
            state.isloading = false
            state.data = action.payload
            
          })
       .addCase(fetchimportenter.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.payload; // رسالة الخطأ القادمة من rejectWithValue
          })
        }
  })
  
  // Action creators are generated for each case reducer function
 
  
  export default counterSlice.reducer