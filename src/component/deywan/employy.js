import Button from "@mui/material/Button";
import {
  Typography,
  Grid,
  Paper,
  Avatar,
  Box,
  Popper,
  Modal,
  ListItem,
} from "@mui/material";
import SidBar from "./dachboard/SIDEBAR/sidbar";
import SatelliteIcon from "@mui/icons-material/Satellite";
import Appar from "./dachboard/SIDEBAR/appar";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../API/apiService";
import { BaseUrl, showEmployees } from "../../API/api";



export default function Employee() {
const [employee,setEmployee] =useState([]) 
const[loading,setLoading]=useState(false)

useEffect(()=>{
  fetchEmployee()
},[])
async  function fetchEmployee(){
  setLoading(true)
  try{
    const response = await getData (`${BaseUrl}${showEmployees}`)
    console.log(response)
    setEmployee(response.data)
  }catch(err){
    console.log(err)
  }finally{
  setLoading(false)
  }
} 

  

  return (
    <>
      <Box
        sx={{
          direction: "rtl",
          height: "100vh",

          display: "flex",
        }}
      >
        <SidBar />

        <Box
          sx={{
            flexGrow: 1,
            padding: "2%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgb(233,232,232)",
          }}
        >
          {/*  صف العنوان + البحث + الإشعار */}
          <Appar />

          {/* ///////////////////////////////// */}

          <Box
            sx={{
              backgroundColor: "rgb(233,232,232)",
              p: 2,
              borderRadius: 5,
              maxWidth: "3000px",
              width: "1600px",
              alignSelf: "rtl",
            }}
          >
            <Grid container spacing={2}>
           
             {employee.map((emp) => (
  <Grid item xs={12} sm={6} md={3} key={emp.id}>
    <Paper
      elevation={3}
      sx={{
        height: 178,
        width: "270px",
        p: 2,
        backgroundColor: "rgba(255, 255, 255, 0.02)",
        border:
          emp.is_active === 1
            ? "3px solid rgb(14, 75, 35)" // أخضر لو فعال
            : "3px solid rgba(139, 2, 2, 1)", // أحمر لو غير فعال
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "5%",
      }}
    >
      {/* صورة الموظف */}
      <Avatar
        sx={{
          width: 64,
          height: 64,
          position: "absolute",
          top: 17,
          left: 8,
        }}
        src={emp.avatar}
      />

      {/* معلومات الموظف */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "black",
            fontSize: "14px",
            fontWeight: "700",
            mt: 1,
          }}
        >
          {emp.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "black",
            fontSize: "14px",
            fontWeight: "700",
            mt: 1,
          }}
        >
          {emp.phone}
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            mt: 1,
            color: "black",
          }}
          variant="body2"
        >
          {emp.address}
        </Typography>

        {/* الحالة */}
        <Typography
          variant="body2"
          sx={{
            color: emp.is_active === 1 ? "rgb(14, 75, 35)" : "rgba(139, 2, 2, 1)",
            fontWeight: 700,
            fontSize: "14px",
            mt: 1,
          }}
        >
          {emp.is_active === 1 ? "فعال" : "غير فعال"}
        </Typography>
      </Box>
    </Paper>
  </Grid>
))}

            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
