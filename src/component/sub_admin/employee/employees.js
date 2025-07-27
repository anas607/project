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
  IconButton,
 Button
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import ArticleIcon from '@mui/icons-material/Article';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import SidBar from "../../deywan/dachboard/SIDEBAR/sidbar";
import Appar from "../../deywan/dachboard/SIDEBAR/appar";


const inboxRows = [
  {
    id: "#896643",
    mailTitle: "استلام شهادة",
    officeName: "مكتب المدير العام",
    senderName: "محمد الأسد",
    senderPhone: "+963987432196",
    senderImg: "https://randomuser.me/api/portraits/men/75.jpg",
    dateReceived: "2/5/2025",
  },
];

const headStyle = {
  color: "white",
 fontWeight: "700" ,fontSize:'20px',
  py: 1.5,
};
const Employyes = () => {
  



  return (
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
      <Box
          
            display="flex"
            alignItems="center"
            sx={{ cursor: "pointer", gap: 1  ,}}
           
          style={{marginTop:'3%'}}
          >
            {/* <MenuIcon  />
<Typography fontWeight="700"  sx={{fontSize:'24px'}}>{selectedType}</Typography>
            <ArrowDropDownCircleOutlinedIcon   sx={{fontSize:'30px'}} onClick={() => {
    setSelectedType(prev =>
      prev === "البريد الوارد" ? "البريد الصادر" : "البريد الوارد"
    );
  }}
/> */}
 
          </Box>

     <TableContainer sx={{ mr: 1, backgroundColor: "transparent", boxShadow: "none",mt:6 }}>
  <Table sx={{width:"1573px", height:'88px'}}>
    <TableHead sx={{width:"1573px", height:'88px'}}>
  <TableRow sx={{ backgroundColor: "rgb(14, 74, 35)" }}>
    <TableCell align="center" sx={headStyle}>صورة الموظف </TableCell>

   
      
        <TableCell align="center" sx={headStyle}>اسم الموظف</TableCell>
        <TableCell align="center" sx={headStyle}>رقم الموظف</TableCell>
        <TableCell align="center" sx={headStyle}>الدائرة </TableCell>
        <TableCell align="center" sx={headStyle}> الدور</TableCell>
        <TableCell align="center" sx={headStyle}>عدد المعاملات</TableCell>
        <TableCell align="center" sx={headStyle}> الحالة</TableCell>
                <TableCell align="center" sx={headStyle}> تاريخ الانضمام</TableCell>

  

    <TableCell align="center" sx={{ color: "white", py: 1.5 }}></TableCell>
  </TableRow>
</TableHead>

   <TableBody>
{inboxRows.map((row, index) => (
    <TableRow
      key={index}
      sx={{
        backgroundColor: "transparent",
        borderBottom: "3px solid rgb(14, 74, 35)",
      }}
    >
      <TableCell align="center" sx={{ py: 1.5 ,fontWeight: "700" ,fontSize:'16px'}}>{row.uuid}</TableCell>

     
          <TableCell align="center">
            <Avatar src={row.from_avatar} sx={{ width: 56, height: 56, margin: "auto" }} />
          </TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.from_name}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.from_phone}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.from_office}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.subject}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.received_at}</TableCell>
       
       
      <TableCell align="center">
        <IconButton
        //   onClick={() => handleOpenModal(row.uuid)
            
        //   }
          
          sx={{
            border: '1px solid rgba(212, 208, 212, 0.31)',
            borderRadius: '50px',ml:-4,
            width: 52,
            height: 52,
            padding: '8px',
            backgroundColor: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.secondary.main,
          }}
        >
          <ArticleIcon sx={{ fontSize: 30}} />
          <ArrowUpwardIcon
            sx={{
              position: 'absolute',
               top: 24,
              right: 10,
              fontSize: 6,
              backgroundColor: 'white',
              color: 'black',
              transform: 'rotate(60deg)',
              borderRadius: '50%',
              padding: '2px',border: "3px solid rgb(14, 74, 35)",
            }}
          />
        </IconButton>
      </TableCell>
    </TableRow>
))}
</TableBody>

  </Table>
</TableContainer>



      </Box>




  {/* {<EnternalMails
  open={openModal}
  onClose={()=>{setOpenModal(false)}}
  uuid={selectedUuid}
  />
} */}
    </Box>
  );
};

export default Employyes;
