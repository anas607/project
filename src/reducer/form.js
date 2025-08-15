import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  cost: "",
  path_ids: [],
  elements: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setGeneralInfo: (state, action) => {
      state.name = action.payload.name;
      state.cost = action.payload.cost;
    },
    addPath: (state, action) => {
      if (!state.path_ids.includes(action.payload)) {
        state.path_ids.push(action.payload);
      }
    },
    removePath: (state, action) => {
      state.path_ids = state.path_ids.filter((id) => id !== action.payload);
    },

    addElement: (state, action) => {
      state.elements.push(action.payload);
    },
    removeElement: (state, action) => {
      state.elements = state.elements.filter(
        (el, idx) => idx !== action.payload
      );
    },

    resetForm: () => initialState,
  },
});

export const {
  setGeneralInfo,
  addPath,
  removePath,
  addElement,
  removeElement,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;
