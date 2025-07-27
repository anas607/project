import { createSlice ,createAsyncThunk  } from '@reduxjs/toolkit'
import { BaseUrl, PROGRAM, Show_All } from '../../API/api';
import { getData } from '../../API/apiService';


export const fetchmark = createAsyncThunk(
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
    name: 'fetchmark',
    initialState: {
       isloading:false,
       data:[],
       error:null
    },
    reducers: {
    
    }, extraReducers: builder => {
        builder
          .addCase(fetchmark.pending, (state, action) => {
            state.isloading = true
          })
          .addCase(fetchmark.fulfilled, (state, action) => {
            state.isloading = false
            state.data = action.payload
            
          })
       .addCase(fetchmark.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.payload; 
          })
        }
  })
  
 
  
  export default counterSlice.reducer