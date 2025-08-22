// formSlice.js
import { createSlice } from '@reduxjs/toolkit';
export const FIELD_TYPES = {
  TEXT: 1,
  NUMBER: 2,
  DATE: 3,
  MULTI_CHOICE: 4,
  IMAGE: 5,
  CHECKBOX: 6,
  EXCEL: 7
};
const initialState = {
  name: '',
  transactionCost: '',
  selectedOfficeId: [], // مصفوفة أسماء المكاتب
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
      state.transactionName = action.payload;
    },
    setTransactionCost: (state, action) => {
      state.transactionCost = action.payload;
    },
    setSelectedOfficeId: (state, action) => {
  state.selectedOfficeId = action.payload; // array of office names
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
    }
  }
});

export const {
  setTransactionName,
  setTransactionCost,
  setSelectedOfficeId,
  setElements,
  setImageFile,
  setExcelFile,
  setTrainingInfo
} = formSlice.actions;

export default formSlice.reducer;
