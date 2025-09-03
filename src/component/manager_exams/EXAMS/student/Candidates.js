
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
  
  
} from "@mui/material";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "../../../../API/apiService";
import { BaseUrl, CANDIDATES, EXAM } from "../../../../API/api";
import Loading from "../../../../wrong/mails/loading";


export default function Candidates(id ){
    const stateprogram=useSelector((state)=>state.fetchprogram)
  const[Message,setMessage]=useState("")

 const [deteilas, setDeteilas] = useState([]);
 const[isloading,setisloading]=useState(false)

useEffect(() => {
console.log("ID:", id, typeof id); if (id !== null) {
  fetchCandidtes();
}}, [id]);
const fetchCandidtes = async () => {
  setisloading(true)
  try {
const res = await getData(`${BaseUrl}${CANDIDATES}${EXAM}${id.id}`);
 const result = res.data;
    console.log( result);

    if (Array.isArray(result.data)) {
      setDeteilas(result.data); // مصفوفة مرشحين
      setMessage(null);
    } else {
      setDeteilas([]);
      setMessage(result); 
    }
  setisloading(false)

  } catch (err) {
    console.log( err.response?.data || err.message);
  }finally{
    setisloading(false)
  }
};
    return(
        <>
          
               <TableContainer sx={{ mr: -3, backgroundColor: "transparent", boxShadow: "none" , width: "1003px",mt:2}}>
            <Table  sx={{Width: '100%'}}>
             <TableHead sx={{width:"1003px", height:'88px'}}>
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
                 تاريخ الترشيح
              </TableCell>
             
             
             
               
             
            </TableRow>
          </TableHead>
          
          
          
          <TableBody>
          {isloading ?  (<>
                                                 <TableRow>
                                                   <TableCell sx={{color:"green"}}>
                                                     <Loading />
                                                   </TableCell>
                                                 </TableRow></>) :

                                                 Message ? (
   <TableCell colSpan={7} sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 { Message}
                </TableCell>
):
           deteilas.map((row, index) => (
              <TableRow key={index} sx={{ borderBottom: "3px solid rgb(14, 74, 35)"}}>
          
                <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">{row.mailTitle}</TableCell>
                <TableCell align="center">
                  <Avatar  sx={{margin:'auto'}} src={row.receiverImg} />
                </TableCell>
                <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 { row.receiverName}
                </TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 {  row.receiverPhone}
                </TableCell>
                
                
               
              </TableRow>
            ))}
          </TableBody>
          
          
          
            </Table>
          </TableContainer>
         



    </>)}