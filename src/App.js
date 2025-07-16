import logo from "./logo.svg";
import "./App.css";

//image
import as from "./imageshow/hello.png";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Leader from "./component/deywan/dachboard/leder";
import Enter from "./component/deywan/enter";
import Outer from "./component/deywan/outer";
import Files from "./component/deywan/files/files";
import Archiv from "./component/deywan/archive";
import Employee from "./component/deywan/employy";
import Transaction from "./component/deywan/Transaction";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange, green, white } from "@mui/material/colors";
import Leader_Raees from "./component/reees/dachboard/leder";
import Enter_Raees from "./component/reees/enter";
import Outer_Raees from "./component/reees/outer";
import Employee_Raees from "./component/reees/employy";
import Archiv_Raees from "./component/reees/archive";
import Leader_Shahadat from "./component/shahadat/dachboard/leder";
import Enter_Shahadat from "./component/shahadat/enter";
import Employee_Shahadat from "./component/shahadat/employy";
import Archiv_Shahadat from "./component/shahadat/archive";
import Outer_Shahadat from "./component/shahadat/outer";
import Leader_Malea from "./component/malea/dachboard/leder";
import Enter_Malea from "./component/malea/enter";
import Outer_Malea from "./component/malea/outer";
import Employee_Malea from "./component/malea/employy";
import Archiv_Malea from "./component/malea/archive";
import Leader_Mofadla from "./component/mofadla/dachboard/leder";
import Enter_Mofadla from "./component/mofadla/enter";
import Outer_Mofadla from "./component/mofadla/outer";
import Employee_Mofadla from "./component/mofadla/employy";
import Archiv_Mofadla from "./component/mofadla/archive";
import Leader_Magales from "./component/magales/dachboard/leder";
import Enter_Magales from "./component/magales/enter";
import Outer_Magales from "./component/magales/outer";
import Employee_Magales from "./component/magales/employy";
import Archiv_Magales from "./component/magales/archive";
import Leader_Exam from "./component/exsams/dachboard/leder";
import Outer_Exam from "./component/exsams/outer";
import Enter_Exam from "./component/exsams/enter";
import Archiv_Exam from "./component/exsams/archive";
import Employee_Exam from "./component/exsams/employy";
import Enter_EMagales from "./component/magales/manager_magales/enter";
import Outer_EMagales from "./component/magales/manager_magales/outer";
import Enter_ERaees from "./component/reees/manager_raees/enter";
import Outer_ERaees from "./component/reees/manager_raees/outer";
import Enter_EDeywan from "./component/deywan/manger_deywan/enter";
import Outer_EDeywan from "./component/deywan/manger_deywan/outer";
import Enter_EShahadat from "./component/shahadat/manager_shahadat/enter";
import Outer_EShahadat from "./component/shahadat/manager_shahadat/outer";
import ProtectedRoute from "./component/ProtectedRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setScreenSize } from "./reducer/screenSlice ";

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
  const despath = useDispatch();

  useEffect(() => {
    const handleresize = () => {
      despath(setScreenSize(window.innerWidth));
    };
    window.addEventListener("resize", handleresize);
    handleresize();
    return () => window.removeEventListener("resize", handleresize);
  }, [despath]);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          {/* <Login /> */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          {/* deywan */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dachbord" element={<Leader />} />
            <Route path="/enter" element={<Enter />} />
            <Route path="/outer" element={<Outer />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/files" element={<Files />} />
            <Route path="/archiv" element={<Archiv />} />
          </Route>

          {/* ===============deywan ========================*/}
          {/* manger_dewan */}
          {/* <Route path='/' element={<Enter_EDeywan/>}/>

 <Route path='/enter_emdewan' element={<Enter_EDeywan/>}/>
<Route path='/outer_emdewan' element={<Outer_EDeywan/>}/> */}
          {/* ========manger_deywan ==========*/}

          {/* raees */}
          {/* <Route path='/' element={<Leader_Raees/>}/>
<Route path='/dachbord_raees' element={<Leader_Raees/>}/>
<Route path='/enter_raees' element={<Enter_Raees/>}/>
<Route path='/outer_raees' element={<Outer_Raees/>}/>
<Route path='/employee_raees' element={<Employee_Raees/>}/>

<Route path='/archiv_raees' element={<Archiv_Raees/>}/>  */}
          {/* ===============raees ========================*/}
          {/* manger_raees */}
          {/* <Route path='/' element={<Enter_ERaees/>}/>

 <Route path='/enter_emraees' element={<Enter_ERaees/>}/>
<Route path='/outer_emraees' element={<Outer_ERaees/>}/> */}
          {/* ========manger_magales ==========*/}
          {/* shahadt*/}
          {/* <Route path='/' element={<Leader_Shahadat/>}/>
<Route path='/dachbord_shahadat' element={<Leader_Shahadat/>}/>
<Route path='/enter_shahadat' element={<Enter_Shahadat/>}/>
<Route path='/outer_shahadat' element={<Outer_Shahadat/>}/>
<Route path='/employee_shahadat' element={<Employee_Shahadat/>}/>

<Route path='/archiv_shahadat' element={<Archiv_Shahadat/>}/> */}
          {/* ===============shahadt ========================*/}
          {/* manger_shahdat */}
          {/* <Route path='/' element={<Enter_EShahadat/>}/>

 <Route path='/enter_emshahadat' element={<Enter_EShahadat/>}/>
<Route path='/outer_emshahadat' element={<Outer_EShahadat/>}/> */}
          {/* ========manger_shahadt ==========*/}
          {/* magales */}
          {/* <Route path='/' element={<Leader_Magales/>}/>
<Route path='/dachbord_magales' element={<Leader_Magales/>}/>
<Route path='/enter_magales' element={<Enter_Magales/>}/>
<Route path='/outer_magales' element={<Outer_Magales/>}/>
<Route path='/employee_magales' element={<Employee_Magales/>}/>

<Route path='/archiv_magales' element={<Archiv_Magales/>}/>  */}
          {/* ===============magales ========================*/}

          {/* manger_magales */}
          {/* <Route path='/' element={<Enter_EMagales/>}/>

 <Route path='/enter_emmagales' element={<Enter_EMagales/>}/>
<Route path='/outer_emmagales' element={<Outer_EMagales/>}/> */}
          {/* ========manger_magales ==========*/}
          {/* ===============malea ========================*/}

          {/* <Route path='/' element={<Leader_Malea/>}/>
<Route path='/dachbord_malea' element={<Leader_Malea/>}/>
<Route path='/enter_malea' element={<Enter_Malea/>}/>
<Route path='/outer_malea' element={<Outer_Malea/>}/>
<Route path='/employee_malea' element={<Employee_Malea/>}/>

<Route path='/archiv_malea' element={<Archiv_Malea/>}/> */}
          {/* ===============malea ========================*/}
          {/* <Route path='/' element={<Leader_Mofadla/>}/>
<Route path='/dachbord_mofadla' element={<Leader_Mofadla/>}/>
<Route path='/enter_mofadla' element={<Enter_Mofadla/>}/>
<Route path='/outer_mofadla' element={<Outer_Mofadla/>}/>
<Route path='/employee_mofadla' element={<Employee_Mofadla/>}/>

<Route path='/archiv_mofadla' element={<Archiv_Mofadla/>}/> */}
          {/* exam */}
          {/* <Route path='/' element={<Leader_Exam/>}/>
<Route path='/dachbord_exam' element={<Leader_Exam/>}/>
<Route path='/enter_exam' element={<Enter_Exam/>}/>
<Route path='/outer_exam' element={<Outer_Exam/>}/>
<Route path='/employee_exam' element={<Employee_Exam/>}/>
<Route path='/archiv_exam' element={<Archiv_Exam/>}/> 
<Route path='/bank_exam' element={<Archiv_Exam/>}/> 
<Route path='/quiz_exam' element={<Archiv_Exam/>}/> 
<Route path='/need_exam' element={<Archiv_Exam/>}/>  */}

          {/* exm */}
        </Routes>
        {/* <Transaction/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
