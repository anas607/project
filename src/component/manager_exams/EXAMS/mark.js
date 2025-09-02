
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
   Modal,
  Grid,
  Button,
  Checkbox,
  IconButton,
  TextField,
  Menu,
  MenuItem,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

import ArticleIcon from '@mui/icons-material/Article';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMark } from "../../../reducer/managerexam/mark";
import Loading from "../../../wrong/mails/loading";
import NoData from "../../../wrong/mails/noData";
import NoMARK from "../../../wrong/no_mark";
const outboxRows = [
  {
    id: "#789541",
    mailTitle: "  98989",
    officeName: "قسم الإحصاء",
    receiverName: "د. سامي حسن",
    receiverPhone: "+963993222111",
    type:"شهادة ",
    dateSubmitted: "1/5/2025",
    dateSent: "2/5/2025",
  }
];

export default function Mark({addprogram, setAddProgram }){
  const statemark=useSelector((state)=>state.fetchmark)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchMark())
  },[dispatch])
    return(
        <>
          
  
 

  

    {/*  صف العنوان + البحث + الإشعار */}
  

  

    
  {/* ///////////////////////////////// */}
   
  
   
 
 























          
          
               <TableContainer sx={{ mr: -3, backgroundColor: "transparent", boxShadow: "none" , width: "1583px",mt:2}}>
            <Table  sx={{Width: '100%'}}>
             <TableHead sx={{width:"1503px", height:'88px'}}>
            <TableRow sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                 الرقم الامتحاني
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px' }}>
                 صورة الطبيب
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                 اسم الطبيب
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                 الاختصاص
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                الحالة 
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                 العلامة
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                التقدير 
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                تاريخ التقديم
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                {/* أيقونة */}
              </TableCell>
            </TableRow>
          </TableHead>
          
          
          
          <TableBody>
             {statemark.error ? (<h2 sx={{color:"red"}}>خدث خطا في جلب المعلومات</h2>): 
                         statemark.isloading ?  (<>
                                        <TableRow>
                                          <TableCell sx={{color:"green"}}>
                                            <Loading />
                                          </TableCell>
                                        </TableRow></>) :
                                        !statemark.isloading && statemark.data.length===0 ? 
                                                                                  <TableCell colSpan={8}>

                                        <NoMARK/>                                           </TableCell>

                                        :
            statemark.map((row, index) => (
              <TableRow key={index} sx={{ borderBottom: "3px solid rgb(14, 74, 35)"}}>
          
                <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">{row.exam_number }</TableCell>
                <TableCell align="center">
                  <Avatar  sx={{margin:'auto'}} src={row.receiverImg} />
                </TableCell>
                <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 { row.receiverName}
                </TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 {  row.receiverPhone}
                </TableCell>
                 <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 { row.status}
                </TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }}align="center">
                  {row.degree}
                </TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }}align="center">{row.rating}</TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                  { row.dateSent}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    sx={{
                      border: "1px solid rgba(212, 208, 212, 0.31)",
                      borderRadius: "50px",ml:-3,
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
                       top: 24,
              right: 10,
                        fontSize: 6,
                        backgroundColor: "white",
                        color: "black",
                        transform: "rotate(60deg)",
                        borderRadius: "50%",
                        padding: "2px",border: "3px solid rgb(14, 74, 35)",
                      }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          
          
          
            </Table>
          </TableContainer>
         



    </>)}