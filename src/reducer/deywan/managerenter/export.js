import { createSlice ,createAsyncThunk  } from '@reduxjs/toolkit'
import { BaseUrl,  show_internal_mails_export } from '../../../API/api';
import { getData } from '../../../API/apiService';

export const fetchexporttenter = createAsyncThunk(
  'enter/fetchenterexport',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getData(`${BaseUrl}${show_internal_mails_export}`);
      return response.data.data[0];
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const counterSlice = createSlice({
    name: 'enterexport',
    initialState: {
       isloading:false,
       data:[],
       error:null
    },
    reducers: {
    
    }, extraReducers: builder => {
        builder
          .addCase(fetchexporttenter.pending, (state, action) => {
            state.isloading = true
          })
         .addCase(fetchexporttenter.fulfilled, (state, action) => {
  state.isloading = false;
  state.data = Array.isArray(action.payload.data) ? action.payload.data[0] : []; // 🔍 فحص متى ما رجعت [[...]]
})

       .addCase(fetchexporttenter.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.payload; // رسالة الخطأ القادمة من rejectWithValue
          })
        }
  })
  
  // Action creators are generated for each case reducer function
 
  
  export default counterSlice.reducer