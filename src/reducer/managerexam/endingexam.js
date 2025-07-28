import { createSlice ,createAsyncThunk  } from '@reduxjs/toolkit'
import { ALL, BaseUrl, PRESENT, CANDIDATES, SHOW_ALL_END_REQUSET_EXAM } from '../../API/api';
import { getData } from '../../API/apiService';


export const fetchEndExam = createAsyncThunk(
  'program/endexam',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getData(`${BaseUrl}${SHOW_ALL_END_REQUSET_EXAM}`) 
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const counterSlice = createSlice({
    name: 'endexam',
    initialState: {
       isloading:false,
       data:[],
       error:null
    },
    reducers: {
    
    }, extraReducers: builder => {
        builder
          .addCase(fetchEndExam.pending, (state, action) => {
            state.isloading = true
          })
          .addCase(fetchEndExam.fulfilled, (state, action) => {
            state.isloading = false
            state.data = action.payload
            
          })
       .addCase(fetchEndExam.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.payload; 
          })
        }
  })
  
 
  
  export default counterSlice.reducer