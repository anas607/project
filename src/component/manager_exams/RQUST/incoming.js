
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

  IconButton,
  
} from "@mui/material";


import ArticleIcon from '@mui/icons-material/Article';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImportExam } from "../../../reducer/managerexam/importingexam";
import Loading from "../../../wrong/mails/loading";

import { SearchRequest } from "../../../reducer/search/requestSearch";
import NOSERACH from "../../../wrong/search/search";
import NoENCOMING from "../../../wrong/emptydata/noencoming";
import Searchincomming from "../../../wrong/loading/incoming";
import NOSearchincomming from "../../../wrong/search/noincommingsearch";
import LoaderExam from "../../../wrong/loading/examloader";

export default function Incoming({setShowRequest,setSelectedUuid, searchTerm }){
   const { data: searchResults, isloading } = useSelector(
      (state) => state.searchrequest
    );
  const stateimport=useSelector((state)=>state.importexam)

  // console.log(stateimport)
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(fetchImportExam())
  },[dispatch
    ])

   function handleEditRequst(uuid){
  

  setSelectedUuid(uuid);
  setShowRequest(true);
}
 useEffect(() => {
  if (searchTerm) {
    dispatch(SearchRequest(searchTerm));
  }
}, [searchTerm, dispatch]);
const specliseToDisplay = searchTerm
  ? Array.isArray(searchResults) ? searchResults : [searchResults]
  : stateimport.data ?? [];
  
const isEmpty = !specliseToDisplay || specliseToDisplay.length === 0;


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
           {stateimport.error ? (
    <TableRow>
      <TableCell colSpan={8} align="center" sx={{color:"red"}}>
        حدث خطأ في جلب المعلومات
      </TableCell>
    </TableRow>
  ) : stateimport.isloading ? (
    <TableRow>
      <TableCell colSpan={8} align="center">
<LoaderExam/>      </TableCell>
    </TableRow>
  )  : searchTerm && isloading ? (
    <TableRow>
      <TableCell colSpan={8} align="center">
        <Searchincomming term={searchTerm}/>
      </TableCell>
    </TableRow>
  ): searchTerm && isEmpty ? (
    <TableRow>
      <TableCell colSpan={8} align="center">
        <NOSearchincomming  />
      </TableCell>
    </TableRow>
  ) : !searchTerm && isEmpty ? (
    <TableRow>
  <TableCell colSpan={8} align="center">
    <NoENCOMING/>
  </TableCell>
</TableRow>
                                                                      
                         ) :specliseToDisplay.length > 0 ? (
  specliseToDisplay.map((row, index) => (
    <TableRow key={index} sx={{ borderBottom: "3px solid rgb(14, 74, 35)" }}>
      <TableCell sx={{ fontWeight: "700", fontSize: "16px" }} align="center">
        {row["رقم الطلب"]}
      </TableCell>
      <TableCell align="center">
        <Avatar sx={{ margin: "auto" }} src={row[" صورة الطبيب"]} />
      </TableCell>
      <TableCell sx={{ fontWeight: "700", fontSize: "16px" }} align="center">
        {row["اسم الطبيب"]}
      </TableCell>
      <TableCell sx={{ fontWeight: "700", fontSize: "16px" }} align="center">
        {row["رقم الطبيب"]}
      </TableCell>
      <TableCell sx={{ fontWeight: "700", fontSize: "16px" }} align="center">
        {row["الاختصاص"]}
      </TableCell>
      <TableCell sx={{ fontWeight: "700", fontSize: "16px" }} align="center">
        {row["اسم الطلب"]}
      </TableCell>
      <TableCell sx={{ fontWeight: "700", fontSize: "16px" }} align="center">
        {new Date(row["تاريخ التقديم"]).toLocaleDateString("EG")}
      </TableCell>
      <TableCell align="center">
        <IconButton
          onClick={() => {
            handleEditRequst(row["رقم الطلب"]);
          }}
          sx={{
            border: "1px solid rgba(212, 208, 212, 0.31)",
            borderRadius: "50px",
            ml: -3,
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
              padding: "2px",
              border: "3px solid rgb(14, 74, 35)",
            }}
          />
        </IconButton>
      </TableCell>
    </TableRow>
  ))
) : (
  <TableRow>
    <TableCell colSpan={8} align="center">
      <NOSERACH />
    </TableCell>
  </TableRow>
)}

          </TableBody>
          
          
          
            </Table>
          </TableContainer>
         
{/* {<EditRequest open={open}
onClose={()=>{setOpen(false)}}

/>
} */}


    </>)}