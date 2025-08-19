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
import enterimportReducer from "../reducer/deywan/managerenter/imort"
import enterexportReducer from "../reducer/deywan/managerenter/export"
import fetchallReducer from "../reducer/managerexam/showspeclice"
import fetchprogramReducer from "../reducer/managerexam/showallprograms"
import fetchmarkReducer from "../reducer/managerexam/mark"
import endexamReducer from "../reducer/managerexam/endingexam"
import importexamReducer from "../reducer/managerexam/importingexam"
import fetchformReducer from "../reducer/admin/forms"
import fetchadversmentReducer from "../reducer/admin/adverstment"
import stepReducer from "../reducer/files/manual"
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
    enterimport:enterimportReducer,
    enterexport:enterexportReducer,
    fetchall:fetchallReducer,
    fetchprogram:fetchprogramReducer
    ,fetchmark:fetchmarkReducer,
    endexam:endexamReducer,
    importexam:importexamReducer,
    fetchform:fetchformReducer,
    fetchadversment:fetchadversmentReducer,
    step:stepReducer
    // >>>>>>> c7fac3a5599716c02cd1acfc89ab64a433305015
  },
});
