import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducer/login";
import screenReducer from "../reducer/screenSlice ";
import userReducer from "../reducer/user";
import employeesReducer from "../reducer/employees";
import internalStatisticsReducer from "../reducer/internalStatistics";
import externalStatisticsReducer from "../reducer/externalStatistics";
import employeeRegisterReducer from "../reducer/employeeRegister";
import transactionsReducer from "../reducer/transaction";

export default configureStore({
  reducer: {
    login: loginReducer,
    screen: screenReducer,
    user: userReducer,
    employees: employeesReducer,
    internalStatistics: internalStatisticsReducer,
    externalStatistics: externalStatisticsReducer,
    employeeRegister: employeeRegisterReducer,
    transactions: transactionsReducer,
  },
});
