import { createSlice ,createAsyncThunk  } from '@reduxjs/toolkit'
import { BaseUrl, PROGRAM, Show_All } from '../../API/api';
import { getData } from '../../API/apiService';


export const fetchprogram = createAsyncThunk(
  'program/fetchprogram',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getData(`${BaseUrl}${PROGRAM}${Show_All}`) 
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const counterSlice = createSlice({
    name: 'fetchprogram',
    initialState: {
       isloading:false,
       data:[],
       error:null
    },
    reducers: {
    
    }, extraReducers: builder => {
        builder
          .addCase(fetchprogram.pending, (state, action) => {
            state.isloading = true
          })
          .addCase(fetchprogram.fulfilled, (state, action) => {
            state.isloading = false
            state.data = action.payload
            
          })
       .addCase(fetchprogram.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.payload; 
          })
        }
  })
  
 
  
  export default counterSlice.reducer