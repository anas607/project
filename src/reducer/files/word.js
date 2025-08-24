// formSlice.js
import { createSlice } from '@reduxjs/toolkit';
export const FIELD_TYPES = {
  TEXT: 1,
  NUMBER: 2,
  DATE: 3,
  IMAGE: 4,     // صورة
  EXCEL: 5,     // ملف
  CHECKBOX: 6
};

const initialState = {

  transactionCost: '',
  selectedOfficeId: [], // مصفوفة IDs للمكاتب

  
};

const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
   

    setTransactionCost: (state, action) => {
      state.transactionCost = action.payload;
    },
  setSelectedOfficeId: (state, action) => {
  state.selectedOfficeId = action.payload; // array of office IDs
},
  
        resetForm: () => initialState,

  }
});

export const {
  setTransactionCost,
  setSelectedOfficeId,
     resetForm

} = wordSlice.actions;

export default wordSlice.reducer;
