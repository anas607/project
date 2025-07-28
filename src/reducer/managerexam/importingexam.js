import { createSlice ,createAsyncThunk  } from '@reduxjs/toolkit'
import { ALL, BaseUrl, PRESENT, CANDIDATES, SHOW_ALL_END_REQUSET_EXAM, SHOW_ALL_IMPORT_REQUSET_EXAM } from '../../API/api';
import { getData } from '../../API/apiService';


export const fetchImportExam = createAsyncThunk(
  'program/importexam',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getData(`${BaseUrl}${SHOW_ALL_IMPORT_REQUSET_EXAM}`) 
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const counterSlice = createSlice({
    name: 'importexam',
    initialState: {
       isloading:false,
       data:[],
       error:null
    },
    reducers: {
    
    }, extraReducers: builder => {
        builder
          .addCase(fetchImportExam.pending, (state, action) => {
            state.isloading = true
          })
          .addCase(fetchImportExam.fulfilled, (state, action) => {
            state.isloading = false
            state.data = action.payload
            
          })
       .addCase(fetchImportExam.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.payload; 
          })
        }
  })
  
 
  
  export default counterSlice.reducer