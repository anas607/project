
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
import { fetchprogram } from "../../../reducer/managerexam/showallprograms";
import Loading from "../../../wrong/mails/loading";
import NoData from "../../../wrong/mails/noData";
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

export default function Program({addprogram, setAddProgram ,showprogram,setShowProgram, id, setSelectedUuid }){

const stateprogram=useSelector((state)=>state.fetchprogram)
console.log(stateprogram.data)
 const dispatch = useDispatch();
 useEffect((()=>{
  dispatch(fetchprogram())
 }),[dispatch])

 
function handleOpenModal(id){
  setSelectedUuid(id)
  setShowProgram(true)
}


   if (addprogram) {
    return (
      <Box sx={{ p: 3 }}>
        {/* زر رجوع */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => setAddProgram(false)}
          sx={{
            backgroundColor: "rgb(14,74,35)",
            color: "white",
            mb: 3,
            fontWeight: "bold",
          }}
        >
          الرجوع إلى الجدول
        </Button>

        {/* محتوى النموذج */}
        <Typography variant="h5" fontWeight="bold">
          نموذج إضافة برنامج الامتحان
        </Typography>

        {/* هنا تضيف النموذج أو الحقول التي تريدها */}
      </Box>
    );
  }
    return(
        <>
          
  
 

  

    {/*  صف العنوان + البحث + الإشعار */}
  

  

    
  {/* ///////////////////////////////// */}
   
  
   
 
 























          
          
               <TableContainer sx={{ mr: -3, backgroundColor: "transparent", boxShadow: "none" , width: "1583px",mt:2}}>
            <Table  sx={{Width: '100%'}}>
             <TableHead sx={{width:"1503px", height:'88px'}}>
            <TableRow sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                دورة شهر
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px' }}>
                 السنة
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                 الحالة
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                 الموافقة
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                عدد المواد
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                تاريخ البدء
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                تاريخ الانتهاء
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                تاريخ الإرسال
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                {/* أيقونة */}
              </TableCell>
            </TableRow>
          </TableHead>
          
          
          
          <TableBody>
            {stateprogram.error ? (<h2 sx={{color:"red"}}>خدث خطا في جلب المعلومات</h2>): 
             stateprogram.isloading ?  (<>
                            <TableRow>
                              <TableCell sx={{color:"green"}}>
                                <Loading />
                              </TableCell>
                            </TableRow></>) :
                            !stateprogram.isloading && stateprogram.data.length===0 ? <NoData/> : ( stateprogram.data.map((row, index) => (
              <TableRow key={index} sx={{ borderBottom: "3px solid rgb(14, 74, 35)"}}>
          
                <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">{row.الشهر}</TableCell>
                <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 { row.السنة}
                </TableCell>
                <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 { row["الحالة"] ?? "—" }

                </TableCell>
                <TableCell  sx={{   color:
      row["الموافقة"] === "مقبول"
        ? "green"
        : row["الموافقة"] === "مرفوض"
        ? "red"
        : row["الموافقة"] === "قيد الدراسة"
        ? "orange"
        : "inherit", // اللون الافتراضي إذا مافي تطابق
   fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 {  row.الموافقة}
                </TableCell>
                 <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 {row["عدد المواد"]}
                </TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }}align="center">
                 { row["تاريخ البدء"] }
                </TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }}align="center">{row["تاريخ الانتهاء"]}</TableCell>
                <TableCell sx={{ fontWeight: "700", fontSize: '16px' }} align="center">
  {new Date(row["تاريخ الإرسال"]).toLocaleDateString('EG') }
</TableCell>
                <TableCell align="center">
                  <IconButton
                            onClick={() => handleOpenModal(row.id)}

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
            )))}
                          
           
          </TableBody>
          
          
          
            </Table>
          </TableContainer>
         



    </>)}