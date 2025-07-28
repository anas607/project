import { createSlice ,createAsyncThunk  } from '@reduxjs/toolkit'
import { ALL, BaseUrl, PRESENT, CANDIDATES } from '../../API/api';
import { getData } from '../../API/apiService';


export const fetchMark = createAsyncThunk(
  'program/fetchmark',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getData(`${BaseUrl}${CANDIDATES}${PRESENT}${ALL}`) 
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
          .addCase(fetchMark.pending, (state, action) => {
            state.isloading = true
          })
          .addCase(fetchMark.fulfilled, (state, action) => {
            state.isloading = false
            state.data = action.payload
            
          })
       .addCase(fetchMark.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.payload; 
          })
        }
  })
  
 
  
  export default counterSlice.reducer