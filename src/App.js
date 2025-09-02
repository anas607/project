import logo from "./logo.svg";
import "./App.css";

//image
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Leader from "./component/deywan/dachboard/leder";
import Enter from "./component/deywan/enter";
import Outer from "./component/deywan/outer";
import Files from "./component/deywan/files/files";
import Archiv from "./component/deywan/archive";
import Employee from "./component/deywan/employy";
import Enter_EDeywan from "./component/deywan/manger_deywan/enter"
import Outer_EDeywan from "./component/deywan/manger_deywan/outer"
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange, green, white } from "@mui/material/colors";
import NotFound from "./component/protected/NOTFOUND";
import ProtectedRoute from "./component/protected/ProtectedRoute";
import Employyes from "./component/sub_admin/employee/employees";
import Bank from "./component/manager_exams/bank/exambank";
import Exam from "./component/manager_exams/EXAMS/exam";
import Request from "./component/manager_exams/RQUST/request";
import ExamRequestForm from "./component/manager_exams/RQUST/talab/ExamRequestForm";
import EXPORTMAILS from "./component/mails/form/exportmails";
import AllFILES from "./component/deywan/files/AllFiles";
import Advertisments from "./component/Admin/Advertisments";
import NetworkStatus from "./wrong/network/no_Connention";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(14, 74, 35)", // أو green[500] حسب رغبتك
    },
    secondary: {
      main: "rgb(236, 241, 238)", // اختياري
    },
  },
  status: {
    danger: orange[500], // إذا تحتاج هذا الجزء
  },
  typography: { fontFamily: ["cairo"] },
});

function App() {
 


 
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <ExamRequestForm/> */}
       {/* //wifi// */}
       {/* <NetworkStatus/> */}
    
        {/* //wifi// */}
        <Routes>
          {/* <Login /> */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />

          {/* deywan */}

          <Route element={<ProtectedRoute />}>
                        <Route element={<ProtectedRoute allowedRole={ ["رئيس الديوان", "رئيس الإقامة", "رئيس المجالس","رئيس المالية" ,"رئيس المفاضلة","رئيس الشهادات","رئيس الامتحانات", "المدير","نائب المدير"]} />}>

            <Route path="/dachbord" element={<Leader />} />
            <Route path="/enter" element={<Enter />} />
            <Route path="/outer" element={<Outer />} />
                         

            <Route path="/employee" element={<Employee />} />
            <Route element={<ProtectedRoute allowedRole={"رئيس الديوان"} />}>
              <Route path="/files" element={<Files />} />
            </Route>
            <Route path="/archiv" element={<Archiv />} /></Route> 
             </Route> 
                         <Route element={<ProtectedRoute allowedRole={"رئيس الامتحانات"} />}>
                        
            <Route path="/exam_bank" element={<Bank />} />
                                       </Route> 
                                       <Route element={<ProtectedRoute allowedRole={"المدير"} />}>
                        
            <Route path="/AllFiles" element={<AllFILES />} />
            
                        <Route path="/Advertisements" element={<Advertisments />} />

                                       </Route> 
                                        <Route element={<ProtectedRoute allowedRole={["رئيس الامتحانات" ,"موظف الامتحانات","نائب المدير","المدير"]} />}>

            <Route path="/exams" element={<Exam />} />
               </Route> 
                                                    <Route element={<ProtectedRoute allowedRole={["رئيس الامتحانات" ,"موظف الامتحانات"]} />}>

            <Route path="/Requests" element={<Request />} /> 
          </Route> 
<Route element={<ProtectedRoute allowedRole={["نائب المدير","المدير"]} />}>

                        <Route path="/employees" element={<Employyes />} />
                        </Route>
                        <Route element={<ProtectedRoute allowedRole={["موظف الديوان", "موظف الإقامة", "موظف المجالس", "موظف المالية", "موظف المفاضلة", "موظف الشهادات","موظف الامتحانات"]} />}>

 <Route path='/enter_emdewan' element={<Enter_EDeywan/>}/>
<Route path='/outer_emdewan' element={<Outer_EDeywan/>}/>
          </Route>   

        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
