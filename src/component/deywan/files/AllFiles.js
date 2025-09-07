
 import React, { use, useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
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
import NOSearchTransection from "../../../wrong/search/noTransectionSearch";

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import ArticleIcon from '@mui/icons-material/Article';

import SidBar from "../dachboard/SIDEBAR/sidbar";
import Appar from "../dachboard/SIDEBAR/appar";
import { useDispatch, useSelector } from "react-redux";
import { fetchForm } from "../../../reducer/admin/forms";
import Loading from "../../../wrong/mails/loading";
import NoData from "../../../wrong/mails/noData";
import DeatilsForm from "../../mails/form/detealsform";
import { SearchForms } from "../../../reducer/search/formSearch";

const headStyle = {
  color: "white",
 fontWeight: "700" ,fontSize:'20px',
  py: 1.5,
};

export default function AllFILES(){
  const [selectedStatus, setSelectedStatus] = useState("");

    const[selectedid,setselectedid]=useState("")
 
  const[shoeDeatils,setShoeDeatils]=useState(false)
    const state=useSelector((state)=>state.fetchform)
    console.log(state)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchForm())
    },[dispatch])
     function handleShowDeatiels(id ,status){
      setselectedid(id)
      setSelectedStatus(status)
setShoeDeatils(true)
    }

  const { data: searchResults, isloading } = useSelector(
      (state) => state.searchForms
    );
      const [searchTerm, setSearchTerm] = useState("");  
const formsToDisplay = searchTerm 
  ? searchResults?.[0] ?? []   // فك المصفوفة الداخلية أو fallback لمصفوفة فارغة
  : state.data?.[0] ?? [];
        useEffect(() => {
        if (searchTerm) {
          dispatch(SearchForms(searchTerm));
        }
      }, [searchTerm, dispatch]);
    
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
     <Appar onSearch={setSearchTerm}/>
      
          
    
         <TableContainer sx={{ mr: 1, backgroundColor: "transparent", boxShadow: "none" ,mt:9,  maxHeight: "1000px",   // 👈 أقصى ارتفاع
    overflowY: "auto",}}>
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
  
  ) : Array.isArray(state.data?.[0]) && state.data[0].length === 0 ? (
    <NoData />
  ) :
  
  state.isloading ?  <Box
      sx={{
        position: "fixed", // تثبيت اللودر بالنسبة للشاشة
        top: "50%",        // منتصف ارتفاع الشاشة
        left: "50%",       // منتصف عرض الشاشة
        transform: "translate(-50%, -50%)", // تحريك العنصر إلى الوسط بالضبط
        zIndex: 9999,      // ليكون فوق كل العناصر الأخرى
      }}
    >
      <CircularProgress />
    </Box> 
   : formsToDisplay.length > 0 ? (
  
    formsToDisplay.map((row, index) => (
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
  row.status === "فعالة" ? "green" :
  row.status === "مرفوضة" ? "red" :
  row.status === "غير فعالة" ? "red" :
  "orange" // قيمة افتراضية لو ما انطبق أي شرط

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
 onClick={() => handleShowDeatiels(row.id ,row.status)}            sx={{
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
  )  : (
  <NOSearchTransection/>
      )}
</TableBody>

      </Table>
    </TableContainer>
    
    {<DeatilsForm  open={shoeDeatils}
    onClose={()=>{setShoeDeatils(false)}}
   id= {selectedid}
        onSuccess={() => dispatch(fetchForm())}
        status={selectedStatus}
   
   /> }
    
          </Box>
   
        </Box>
 
</>)}
