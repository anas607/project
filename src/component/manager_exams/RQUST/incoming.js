
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import ArticleIcon from '@mui/icons-material/Article';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImportExam } from "../../../reducer/managerexam/importingexam";
import Loading from "../../../wrong/mails/loading";
import NoData from "../../../wrong/mails/noData";
import EditRequest from "../EXAMS/event/edieRequest"

export default function Incoming({setShowRequest,setSelectedUuid}){
  const stateimport=useSelector((state)=>state.importexam)
  const [open,setOpen]=useState(false)

  // console.log(stateimport)
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(fetchImportExam())
  },[dispatch
    ])
//     function handleEditRequst(){
// setOpen(true)
//     }
   function handleEditRequst(uuid){
  

  setSelectedUuid(uuid);
  setShowRequest(true);
}

    return(
        <>
      
          
               <TableContainer sx={{ mr: -3, backgroundColor: "transparent", boxShadow: "none" , width: "1583px",mt:2}}>
            <Table  sx={{Width: '100%'}}>
             <TableHead sx={{width:"1503px", height:'88px'}}>
            <TableRow sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                رقم الطلب
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px' }}>
                 صورة الطبيب
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                 اسم الطبيب
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                 رقم الطبيب
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                الاختصاص 
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                اسم الطلب
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
             {stateimport.data.error ? (<h2 sx={{color:"red"}}>خدث خطا في جلب المعلومات</h2>): 
                                                 stateimport.isloading ?  (<>
                                                                <TableRow>
                                                                  <TableCell sx={{color:"green"}}>
                                                                    <Loading />
                                                                  </TableCell>
                                                                </TableRow></>) : Array.isArray(stateimport.data?.[0]) && stateimport.data[0].length === 0 ? (
                                                                    <NoData />):
            stateimport.data.map((row, index) => (
              <TableRow key={index} sx={{ borderBottom: "3px solid rgb(14, 74, 35)"}}>
          
                <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">                 {row["رقم الطلب"]}
</TableCell>
                <TableCell align="center">
                  <Avatar  sx={{margin:'auto'}} src={row[" صورة الطبيب"]} />
                </TableCell>
                <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 {row["اسم الطبيب"]}
                </TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 {row["رقم الطبيب"]}
                </TableCell>
                 <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 { row["الاختصاص"]}
                </TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }}align="center">
                 { row["اسم الطلب"]}
                </TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }}align="center">                  {new Date(row["تاريخ التقديم"]).toLocaleDateString('EG') }
</TableCell>

                <TableCell align="center">
                  <IconButton
       onClick={() => { handleEditRequst(row["رقم الطلب"]); }}

                  
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
         
{<EditRequest open={open}
onClose={()=>{setOpen(false)}}

/>
}


    </>)}