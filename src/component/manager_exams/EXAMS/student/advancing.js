
import {
  
  Typography,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  
  
} from "@mui/material";

import { useEffect, useState } from "react";
import { getData } from "../../../../API/apiService";
import { BaseUrl, CANDIDATES, EXAM, PRESENT } from "../../../../API/api";
import Loading from "../../../../wrong/mails/loading";



export default function Advancing(id){
     const[Message,setMessage]=useState("")
    
     const [deteilas, setDeteilas] = useState([]);
     const[isloading,setisloading]=useState(false)
    
    useEffect(() => {
    console.log("ID:", id, typeof id); if (id !== null) {
      fetchAdvancing();
    }}, [id]);
   const fetchAdvancing = async () => {
     setisloading(true)
     try {
   const res = await getData(`${BaseUrl}${CANDIDATES}${PRESENT
   }${EXAM}${id.id}`);
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
          
  
          
               <TableContainer sx={{ mr: -3, backgroundColor: "transparent", boxShadow: "none" , width: "1093px",mt:2}}>
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
             <TableCell colSpan={8}sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
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
                 <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 { row.type}
                </TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }}align="center">
                  {row.receiverName}
                </TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }}align="center">{row.dateSubmitted}</TableCell>
                
              
              </TableRow>
            ))}
          </TableBody>
          
          
          
            </Table>
          </TableContainer>
         



    </>)}