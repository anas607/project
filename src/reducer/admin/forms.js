import { createSlice ,createAsyncThunk  } from '@reduxjs/toolkit'
import { ALL, BaseUrl, PRESENT, CANDIDATES, FORM, SHOW_ALL } from '../../API/api';
import { getData } from '../../API/apiService';


export const fetchForm = createAsyncThunk(
  'program/fetchmark',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getData(`${BaseUrl}${FORM}${SHOW_ALL}`) 
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const counterSlice = createSlice({
    name: 'fetchform',
    initialState: {
       isloading:false,
       data:[],
       error:null
    },
    reducers: {
    
    }, extraReducers: builder => {
        builder
          .addCase(fetchForm.pending, (state, action) => {
            state.isloading = true
          })
          .addCase(fetchForm.fulfilled, (state, action) => {
            state.isloading = false
            state.data = action.payload
            
          })
       .addCase(fetchForm.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.payload; 
          })
        }
  })
  
 
  
  export default counterSlice.reducer