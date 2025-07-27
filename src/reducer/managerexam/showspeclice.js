import { createSlice ,createAsyncThunk  } from '@reduxjs/toolkit'
import { BaseUrl, Show_All, Specializations } from '../../API/api';
import { getData } from '../../API/apiService';


export const fetchspeclise = createAsyncThunk(
  'specilse/fetchTodos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getData(`${BaseUrl}${Specializations}${Show_All}`) 
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const counterSlice = createSlice({
    name: 'fetchall',
    initialState: {
       isloading:false,
       data:[],
       error:null
    },
    reducers: {
    
    }, extraReducers: builder => {
        builder
          .addCase(fetchspeclise.pending, (state, action) => {
            state.isloading = true
          })
          .addCase(fetchspeclise.fulfilled, (state, action) => {
            state.isloading = false
            state.data = action.payload
            
          })
       .addCase(fetchspeclise.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.payload; // رسالة الخطأ القادمة من rejectWithValue
          })
        }
  })
  
  // Action creators are generated for each case reducer function
 
  
  export default counterSlice.reducer