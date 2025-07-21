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
 
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import ArticleIcon from '@mui/icons-material/Article';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SidBar from "./dachboard/SIDEBAR/sidbar";
import Appar from "./dachboard/SIDEBAR/appar";
import { getData } from "../../API/apiService";
import { BaseUrl, show_import_internal_mails, show_internal_mails_export } from "../../API/api";
import Loading from "../../wrong/mails/loading";
import NoData from "../../wrong/mails/noData";
import EnternalMails from "../mails/form/enternalimportmodal";




const headStyle = {
  color: "white",
 fontWeight: "700" ,fontSize:'20px',
  py: 1.5,
};
const Enter = () => {
  const [inboxRows, setInboxRows] = useState([]);
const [outboxRows, setOutboxRows] = useState([]);
const [loading, setLoading] = useState(false);

const [error, setError] = useState(null);
   const [anchorEl, setAnchorEl] = useState(null);
  const [selectedType, setSelectedType] = useState("البريد الوارد");
  const [openModal, setOpenModal] = useState(false);

   const handleClick = (event) => setAnchorEl(event.currentTarget);
  const isInbox = selectedType === "البريد الوارد";
const rows = selectedType === "البريد الوارد" ? inboxRows : outboxRows;
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      let response;

      if (selectedType === "البريد الوارد") {
        response = await getData(`${BaseUrl}${show_import_internal_mails}`);
      } else {
        response = await getData(`${BaseUrl}${show_internal_mails_export}`);
      }

      const realData = Array.isArray(response.data?.[0]) ? response.data[0] : response.data;

      if (selectedType === "البريد الوارد") {
        setInboxRows(realData);
      } else {
        setOutboxRows(realData);
      }

    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || err?.message || "حدث خطأ غير متوقع";

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [selectedType]);

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
            onClick={handleClick}
          style={{marginTop:'3%'}}
          >
            <MenuIcon  />
<Typography fontWeight="700"  sx={{fontSize:'24px'}}>{selectedType}</Typography>
            <ArrowDropDownCircleOutlinedIcon   sx={{fontSize:'30px'}} onClick={() => {
    setSelectedType(prev =>
      prev === "البريد الوارد" ? "البريد الصادر" : "البريد الوارد"
    );
  }}
/>
          </Box>

     <TableContainer sx={{ mr: 1, backgroundColor: "transparent", boxShadow: "none",mt:6 }}>
  <Table sx={{width:"1573px", height:'88px'}}>
    <TableHead sx={{width:"1573px", height:'88px'}}>
  <TableRow sx={{ backgroundColor: "rgb(14, 74, 35)" }}>
    <TableCell align="center" sx={headStyle}>رقم البريد</TableCell>

    {isInbox ? (
      <>
        <TableCell align="center" sx={headStyle}>صورة المرسل</TableCell>
        <TableCell align="center" sx={headStyle}>اسم المرسل</TableCell>
        <TableCell align="center" sx={headStyle}>رقم المرسل</TableCell>
        <TableCell align="center" sx={headStyle}>عنوان البريد</TableCell>
        <TableCell align="center" sx={headStyle}>اسم المكتب</TableCell>
        <TableCell align="center" sx={headStyle}>تاريخ الاستلام</TableCell>
      </>
    ) : (
      <>
        <TableCell align="center" sx={headStyle}>اسم المكتب</TableCell>
        <TableCell align="center" sx={headStyle}>رقم المكتب</TableCell>
        <TableCell align="center" sx={headStyle}>عنوان البريد</TableCell>
        <TableCell align="center" sx={headStyle}>حالة البريد</TableCell>
        <TableCell align="center" sx={headStyle}>تاريخ الاستلام</TableCell>
        <TableCell align="center" sx={headStyle}>تاريخ الإرسال</TableCell>
      </>
    )}

    <TableCell align="center" sx={{ color: "white", py: 1.5 }}></TableCell>
  </TableRow>
</TableHead>
{error && (
  <Typography sx={{ color: "red", mt: 2, fontWeight: "bold" }}>
    ⚠️ {error}
  </Typography>
)}
{loading ? <Loading/> : ""}
{rows.length === 0 && !loading && (
 <NoData/>
)}
   <TableBody>
  {rows.map((row, index) => (
    <TableRow
      key={index}
      sx={{
        backgroundColor: "transparent",
        borderBottom: "3px solid rgb(14, 74, 35)",
      }}
    >
      <TableCell align="center" sx={{ py: 1.5 ,fontWeight: "700" ,fontSize:'16px'}}>{row.id}</TableCell>

      {isInbox ? (
        <>
          <TableCell align="center">
            <Avatar src={row.senderImg} sx={{ width: 56, height: 56, margin: "auto" }} />
          </TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.senderName}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.senderPhone}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.mailTitle}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.officeName}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.dateReceived}</TableCell>
        </>
      ) : (
        <>
          <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.officeName}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.officePhone}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.mailTitle}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.status}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.dateReceived}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.dateSent}</TableCell>
        </>
      )}

      <TableCell align="center">
        <IconButton
          onClick={() => setOpenModal(true)
            
          }
          
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




  {<EnternalMails
  open={openModal}
  onclose={()=>{setOpenModal(false)}}
  />
}
    </Box>
  );
};

export default Enter;
