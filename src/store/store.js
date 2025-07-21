import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducer/login";
import screenReducer from "../reducer/screenSlice ";
import userReducer from "../reducer/user";
import employeesReducer from "../reducer/employees";
// <<<<<<< HEAD
import internalStatisticsReducer from "../reducer/internalStatistics";
import externalStatisticsReducer from "../reducer/externalStatistics";
import employeeRegisterReducer from "../reducer/employeeRegister";
import transactionsReducer from "../reducer/transaction";

import outerexportReducer from "../reducer/deywan/outer/outer";
import outereimportReducer from "../reducer/deywan/outer/importouter";
export default configureStore({
  reducer: {
    login: loginReducer,
    screen: screenReducer,
    user: userReducer,
    employees: employeesReducer,
    // <<<<<<< HEAD
    internalStatistics: internalStatisticsReducer,
    externalStatistics: externalStatisticsReducer,
    employeeRegister: employeeRegisterReducer,
    transactions: transactionsReducer,
    // =======
    outerexport: outerexportReducer,
    outereimport: outereimportReducer,
    // >>>>>>> c7fac3a5599716c02cd1acfc89ab64a433305015
  },
});
