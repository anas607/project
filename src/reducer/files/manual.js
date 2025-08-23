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
  name: '',
  transactionCost: '',
  selectedOfficeId: [], // مصفوفة IDs للمكاتب
  elements: [],
  imageFile: null,
  excelFile: null,
  trainingInfo: {
    firstName: '',
    lastName: '',
    fatherName: '',
    specialization: ''
  }
};

const formSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
   setTransactionName: (state, action) => {
  state.name = action.payload;  // صح
},

    setTransactionCost: (state, action) => {
      state.transactionCost = action.payload;
    },
  setSelectedOfficeId: (state, action) => {
  state.selectedOfficeId = action.payload; // array of office IDs
},
    setElements: (state, action) => {
      state.elements = action.payload;
    },
    setImageFile: (state, action) => {
      state.imageFile = action.payload;
    },
    setExcelFile: (state, action) => {
      state.excelFile = action.payload;
    },
    setTrainingInfo: (state, action) => {
      state.trainingInfo = { ...state.trainingInfo, ...action.payload };
    },
        resetForm: () => initialState,

  }
});

export const {
  setTransactionName,
  setTransactionCost,
  setSelectedOfficeId,
  setElements,
  setImageFile,
  setExcelFile,
  setTrainingInfo,    resetForm

} = formSlice.actions;

export default formSlice.reducer;
