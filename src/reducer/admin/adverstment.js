import { createSlice ,createAsyncThunk  } from '@reduxjs/toolkit'
import { ALL, BaseUrl, ANNOUNCEMENT } from '../../API/api';
import { getData } from '../../API/apiService';


export const fetchAdverstment = createAsyncThunk(
  'program/fetchadverstment',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getData(`${BaseUrl}${ANNOUNCEMENT}${ALL}`) 
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const counterSlice = createSlice({
    name: 'fetchadversment',
    initialState: {
       isloading:false,
       data:[],
       error:null
    },
    reducers: {
    
    }, extraReducers: builder => {
        builder
          .addCase(fetchAdverstment.pending, (state, action) => {
            state.isloading = true
          })
          .addCase(fetchAdverstment.fulfilled, (state, action) => {
            state.isloading = false
            state.data = action.payload
            
          })
       .addCase(fetchAdverstment.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.payload; 
          })
        }
  })
  
 
  
  export default counterSlice.reducer