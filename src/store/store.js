import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducer/login";
import screenReducer from "../reducer/screenSlice ";
import userReducer from "../reducer/user";
import employeesReducer from "../reducer/employees";
export default configureStore({
  reducer: {
    login: loginReducer,
    screen: screenReducer,
    user: userReducer,
    employees: employeesReducer,
  },
});
