
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
import { fetchMark } from "../../../reducer/managerexam/mark";

import NoMARK from "../../../wrong/emptydata/no_mark";
import { SearchMarks } from "../../../reducer/search/marks";

import Searchinmark from "../../../wrong/loading/marks";
import NOSearchingMark from "../../../wrong/search/noSearchMark";
import LoaderExam from "../../../wrong/loading/examloader";

export default function Mark({addprogram, setAddProgram ,searchTerm}){
  const { data: searchResults, isloading } = useSelector(
        (state) => state.searchrequest
      );
        const statemark=useSelector((state)=>state.fetchmark)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchMark())
  },[dispatch])
      useEffect(() => {
        if (searchTerm) {
          dispatch(SearchMarks(searchTerm));
        }
      }, [searchTerm, dispatch]);
      const normalizedResults = Array.isArray(searchResults)
  ? searchResults.flat() // بيفتح أي arrays جوه بعض
  : (searchResults ? [searchResults] : []);

const markToDisplay = searchTerm
  ? normalizedResults
  : statemark.data ?? [];

const isEmpty = !markToDisplay || markToDisplay.length === 0;

        

    return(
        <>
          
  
  
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
                                          <TableCell  sx={{color:"green"}}>
<LoaderExam />                                       </TableCell>
                                        </TableRow></>) 
                                

                                        : searchTerm && isloading ? (
                                            <TableRow>
                                              <TableCell colSpan={8} align="center">
                                                <Searchinmark term={searchTerm}/>
                                              </TableCell>
                                            </TableRow>
                                          ): searchTerm && isEmpty ? (
                                            <TableRow>
                                              <TableCell colSpan={8} align="center">
                                                <NOSearchingMark  />
                                              </TableCell>
                                            </TableRow>
                                          ) :!searchTerm && isEmpty ? (
                                            <TableRow>
                                              <TableCell colSpan={8} align="center">
                                                <NoMARK  />
                                              </TableCell>
                                            </TableRow>):

            markToDisplay.map((row, index) => (
              <TableRow key={index} sx={{ borderBottom: "3px solid rgb(14, 74, 35)"}}>
          
                <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">                                                    {row["الرقم الامتحاني"]}
</TableCell>
                <TableCell align="center">
                  <Avatar  sx={{margin:'auto'}} src={row.receiverImg} />
                </TableCell>
                <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 { row["اسم الطبيب"]}
                </TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 { row["صورة الطبيب"]}
                </TableCell>
                 <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 { row["الاختصاص"]}
                </TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }}align="center">
                 { row["الحالة"]}
                </TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }}align="center">
                 { row["العلامة"]}
                  </TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 { row["التقدير"]}
                </TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                  {new Date(row["تاريخ التقديم"]).toLocaleDateString('EG') }
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