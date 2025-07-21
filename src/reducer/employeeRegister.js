import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  address: "",
  phone: "",
};

const employeeRegisterSlice = createSlice({
  name: "employeeRegister",
  initialState,
  reducers: {
    updateEmployeeField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetEmployeeForm: () => initialState,
  },
});

export const { updateEmployeeField, resetEmployeeForm } =
  employeeRegisterSlice.actions;
export default employeeRegisterSlice.reducer;
