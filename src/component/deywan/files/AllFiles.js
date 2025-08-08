
 import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
   Button,
  Modal,
  TextField,
  
  IconButton,
  
} from "@mui/material";

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import ArticleIcon from '@mui/icons-material/Article';

import SidBar from "../dachboard/SIDEBAR/sidbar";
import Appar from "../dachboard/SIDEBAR/appar";
import { useDispatch, useSelector } from "react-redux";
import { fetchForm } from "../../../reducer/admin/forms";
import Loading from "../../../wrong/mails/loading";
import NoData from "../../../wrong/mails/noData";

const headStyle = {
  color: "white",
 fontWeight: "700" ,fontSize:'20px',
  py: 1.5,
};

export default function AllFILES(){
    const state=useSelector((state)=>state.fetchform)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchForm())
    },[dispatch])
    return(
        <>
  






  
     <Box sx={{ display: "flex", height: "100vh", direction: "rtl",backgroundColor:"rgb(233,232,232)" }}>
          <SidBar />
          <Box flex={1} p={2}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={3}
              
            >
            
            </Box>
     <Appar/>
      
          
    
         <TableContainer sx={{ mr: 1, backgroundColor: "transparent", boxShadow: "none" ,mt:6}}>
               <Table sx={{width:"1573px", height:'88px'}}>
                <TableHead sx={{width:"1573px", height:'88px'}}>
               <TableRow sx={{ backgroundColor: "rgb(14, 74, 35)" }}>
        <TableCell align="center" sx={headStyle}> اسم المعاملة</TableCell>
    
       
            <TableCell align="center" sx={headStyle}> الحالة</TableCell>
            <TableCell align="center" sx={headStyle}> تاريخ الاستلام</TableCell>
            <TableCell align="center" sx={headStyle}>تاريخ الاضافة</TableCell>
           
    
        <TableCell align="center" sx={{ color: "white", py: 1.5 }}></TableCell>
      </TableRow>
    </TableHead>
   
      <TableBody>
  {state.error ? (
    <TableRow>
      <TableCell  sx={{color:'red'}} colSpan={5} align="center" >
        حدث خطأ في جلب المعلومات
      </TableCell>
    </TableRow>
  ) : state.isloading ? (
    <TableRow>
      <TableCell sx={{color:'green'}} colSpan={8} align="center">
        <Loading />
      </TableCell>
    </TableRow>
  ) : Array.isArray(state.data?.[0]) && state.data[0].length === 0 ? (
    <NoData />
  ) : Array.isArray(state.data?.[0]) ? (
    state.data[0].map((row, index) => (
      <TableRow
        key={index}
        sx={{
          backgroundColor: "transparent",
          borderBottom: "2px solid #1f4d38",
        }}
      >
        <TableCell align="center" sx={{ fontWeight: "700", fontSize: "16px" }}>
          {row.name ?? "ـ"}
        </TableCell>

        <TableCell
          align="center"
          sx={{
            fontWeight: "700",
            fontSize: "16px",
            color:
              row.status === "فعالة"
                ? "green"
                : row.status === "غير فعالة"
                ? "red"
                : "orange",
          }}
        >
          {row.status ?? "ـ"}
        </TableCell>

        <TableCell align="center" sx={{ fontWeight: "700", fontSize: "16px" }}>
          {row.created_at ?? "ـ"}
        </TableCell>

        <TableCell align="center" sx={{ fontWeight: "700", fontSize: "16px" }}>
          {row.received_at ?? "ـ"}
        </TableCell>

        <TableCell align="center">
          <IconButton
            sx={{
              border: "1px solid rgba(212, 208, 212, 0.31)",
              borderRadius: "50px",
              width: 52,
              height: 52,
              padding: "8px",
              backgroundColor: (theme) => theme.palette.primary.main,
              color: (theme) => theme.palette.secondary.main,
            }}
          >
             <ArticleIcon sx={{ fontSize: 30 }} />
                            <ArrowUpwardIcon
                              sx={{
                                position: "absolute",
                                top: 15,
                                right: 5,
                                fontSize: 10,
                                backgroundColor: "white",
                                color: "black",
                                transform: "rotate(60deg)",
                                borderRadius: "50%",
                                padding: "2px",
                              }}
                            />
          </IconButton>
        </TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={5} align="center">
        <Loading />
      </TableCell>
    </TableRow>
  )}
</TableBody>

      </Table>
    </TableContainer>
    
    
    
          </Box>
   
        </Box>
 
</>)}
