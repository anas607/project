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
import { postData } from "../../API/apiService";
import { BaseUrl, registerEmployee } from "../../API/api";
import { setEmployees } from "../../reducer/employees";
import { resetEmployeeForm } from "../../reducer/employeeRegister";


export default function Employee() {
  const employees = useSelector((state) => state.employees.data);
  





  

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
           
              {employees.map((seleectedEditEmployee) => (
                <Grid item xs={12} sm={6} md={3} key={seleectedEditEmployee.id}>
                  <Paper
                    elevation={3}
                    sx={{
                      height: 178,
                      width: "270px",
                      p: 2,
                      backgroundColor: "rgba(255, 255, 255, 0.02)",
                      border:
                        seleectedEditEmployee.is_acitve === "1"
                          ? "3px solid rgb(1, 53, 19)"
                          : seleectedEditEmployee.is_acitve === "غير 1"
                          ? "3px solid rgba(139, 2, 2, 1)"
                          : "gray",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "5%",
                    }}
                  >
                    {/* الأيقونة - في الأعلى اليسار */}
                    <Avatar
                      sx={{
                        width: 64,
                        height: 64,
                        position: "absolute",
                        top: 17,
                        left: 8,
                      }}
                      src={seleectedEditEmployee.avatar}
                    />
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
                          color:
                            seleectedEditEmployee.is_acitve === 1
                              ? "rgb(14, 74, 35)"
                              : "rgba(139, 2, 2, 1)",
                          fontSize: "14px",
                          fontWeight: "700",
                          mt: 1,
                        }}
                      >
                        {seleectedEditEmployee.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color:
                            seleectedEditEmployee.is_acitve === 1
                              ? "rgb(14, 74, 35)"
                              : "rgba(139, 2, 2, 1)",
                          fontSize: "14px",
                          fontWeight: "700",
                          mt: 1,
                        }}
                      >
                        {seleectedEditEmployee.phone}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "700",
                          mt: 1,
                          color:
                            seleectedEditEmployee.is_acitve === 1
                              ? "rgb(14, 74, 35)"
                              : "rgba(139, 2, 2, 1)",
                        }}
                        variant="body2"
                      >
                        {seleectedEditEmployee.home}
                      </Typography>

                      {/* الحالة */}
                      <Typography
                        variant="body2"
                        sx={{
                          color:
                            seleectedEditEmployee.is_acitve === 1
                              ? "rgb(14, 74, 35)"
                              : "rgba(139, 2, 2, 1)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        {seleectedEditEmployee.is_acitve}
                      </Typography>
                    </Box>
                   
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                     
                     
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
