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
  Paper,
   Button,
  Modal,
  TextField,
  
  IconButton,
  Grid,
  Menu,
  MenuItem,
  AppBar,
} from "@mui/material";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import EmailIcon from "@mui/icons-material/MarkEmailUnread";
import CloseIcon from "@mui/icons-material/Close";
import { SidBarComponent } from './SIDEBAR/sidbar';
import Appar from './SIDEBAR/appar'
import ArticleIcon from '@mui/icons-material/Article';
import EnternalMails from "../../mails/form/enternalimportmodal";
import { useDispatch, useSelector } from "react-redux";
import { fetchimportenter } from "../../../reducer/deywan/managerenter/imort";
import { fetchexporttenter } from "../../../reducer/deywan/managerenter/export";
import NoData from "../../../wrong/mails/noData";
import Loading from "../../../wrong/mails/loading";
import CreatMails from "../../mails/form/creatform";
import { getData } from "../../../API/apiService";
import { BaseUrl, show_import_internal_mails, show_internal_mails_export } from "../../../API/api";

const headStyle = {
  color: "white",
 fontWeight: "700" ,fontSize:'20px',
  py: 1.5,
};




const Enter_EDeywan = () => {
  const state = useSelector((state) => state.user);
  const ismanger_exam=state.roles[0].includes("موظف الامتحانات")
const [inboxRows, setInboxRows] = useState([]);
const [outboxRows, setOutboxRows] = useState([]);
const [loading, setLoading] = useState(false);
console.log(outboxRows)
const [error, setError] = useState(null);

const [selectedUuid, setSelectedUuid] = useState(null);
   const [selectedStatus, setSelectedStatus] = useState(null);

   const [anchorEl, setAnchorEl] = useState(null);
  const [selectedType, setSelectedType] = useState("البريد الوارد");
  const [openModal, setOpenModal] = useState(false);
  const [creat, setCreat] = useState(false);

   const handleClick = (event) => setAnchorEl(event.currentTarget);
  const isInbox = selectedType === "البريد الوارد";
  const rows = isInbox ? inboxRows: outboxRows;
  
const handleOpenModal = (uuid,status) => {
  setSelectedUuid(uuid);
    setSelectedStatus(status);

  setTimeout(() => setOpenModal(true), 0); 
};
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      let response;

      if (selectedType === "البريد الوارد") {
        response = await getData(`${BaseUrl}${show_import_internal_mails}`);
        console.log(response)
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
          <SidBarComponent />
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
                  sx={{ cursor: "pointer", gap: 1 ,mb:3 }}
                  onClick={handleClick}
                  style={{marginTop:'3%'}}
                >
                  <MenuIcon sx={{mr:1}} />
                  <Typography fontWeight="700" sx={{fontSize:'24px'}}>{selectedType}</Typography>
                   <ArrowDropDownCircleOutlinedIcon  sx={{fontSize:'30px'}} onClick={() => {
          setSelectedType(prev =>
            prev === "البريد الوارد" ? "البريد الصادر" : "البريد الوارد"
        );
      }}
    />
    {!isInbox && <>
     <Button onClick={()=>{
      setCreat(true)
     }} variant="contained" color="rgb(14,74,35)" sx={{borderRadius:"30px" ,width:"11%",height:"50px",backgroundColor:"rgb(14,74,35)",color:"white",mr:149 ,fontSize:'20px',fontWeight:'700'}}>
            إنشاء بريد
          </Button>
    
    </>}
     {<CreatMails
     open={creat}
      onClose={()=>setCreat(false)}
      
     />
    }
              </Box>
    
         <TableContainer sx={{ mr: 1, backgroundColor: "transparent", boxShadow: "none" ,mt:6}}>
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
                        <TableCell align="center" sx={headStyle}>  {ismanger_exam ? "تاريخ الاستلام" : " "}</TableCell>

           
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
    {loading ?  <TableCell sx={{color:"rgba(29, 216, 94, 1)"}} colSpan={8} align="center">
                        <Loading />
                      </TableCell> : ""}
    {rows.length === 0 && !loading && (
     <NoData/>
    )}
       <TableBody>
      {rows.map((row, index) => (
        <TableRow
          key={index}
          sx={{
            backgroundColor: "transparent",
            borderBottom: "2px solid #1f4d38",
          }}
        >
          <TableCell align="center" sx={{  fontWeight: "700" ,fontSize:'16px' }}>{row.uuid}</TableCell>
    
          {isInbox ? (
            <>
              <TableCell align="center">
                <Avatar src={row.from_avatar} sx={{ width: 56, height: 56, margin: "auto" }} />
              </TableCell>
              <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }}align="center">{row.from_name}</TableCell>
              <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.from_phone}</TableCell>
              <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.subject}</TableCell>
              <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.from_office}</TableCell>
              <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{new Date(row.received_at).toLocaleDateString()}</TableCell>
            </>
          ) : (
            <>
              <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center"> {row.to.join('\n')}</TableCell>
              <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.to_phones.join('\n')}</TableCell>
              <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.subject}</TableCell>
              <TableCell sx={{  fontWeight: "700" ,fontSize:'16px',color: row.status === "مرفوضة"
        ? "red"
        : row.status === "مرسلة"
        ? "green"
        : "black" }} align="center">{row.status}</TableCell>
        <TableCell sx={{ fontWeight: "700", fontSize: '16px' }} align="center">
  {ismanger_exam ? new Date(row.dateReceived).toLocaleDateString() : ""}
</TableCell>
                            <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">
 {new Date(row.sender_at).toLocaleDateString()}                              </TableCell>

            </>
          )}
         

    
          <TableCell align="center">
            <IconButton
         onClick={() => handleOpenModal(row.uuid ,row.status)}
              sx={{
                border: '1px solid rgba(212, 208, 212, 0.31)',
                borderRadius: '50px',
                width: 52,
            height: 52,
                padding: '8px',
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              <ArticleIcon sx={{ fontSize: 30 }} />
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
                  padding: '2px',
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
      onClose={()=>{setOpenModal(false)}}
      uuid={selectedUuid}
      status={selectedStatus}
      />
    }
        </Box>
  );
};

export default Enter_EDeywan;
