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
import AssignmentAddIcon from '@mui/icons-material/AssignmentAdd';
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SidBar from "./dachboard/SIDEBAR/sidbar";
import Appar from "./dachboard/SIDEBAR/appar";
import { getData } from "../../API/apiService";
import { BaseUrl, show_import_internal_mails, show_internal_mails_export } from "../../API/api";
import Loading from "../../wrong/mails/loading";
import NoData from "../../wrong/mails/noData";
import EnternalMails from "../mails/form/enternalimportmodal";
import { useSelector } from "react-redux";
import CreatMails from "../mails/form/creatform";




const headStyle = {
  color: "white",
 fontWeight: "700" ,fontSize:'20px',
  py: 1.5,
};
const Enter = () => {
    const [creat, setCreat] = useState(false);
  
   const stateRole=useSelector((state)=>state.user.roles[0])
   const [selectedStatus, setSelectedStatus] = useState(null);

  const isSub_Admin=stateRole.includes("نائب المدير")
      const isAdmin=stateRole.includes(" المدير")

const [selectedUuid, setSelectedUuid] = useState(null);

  const [inboxRows, setInboxRows] = useState([]);
  console.log(inboxRows)
 
const [outboxRows, setOutboxRows] = useState([]);
 console.log(outboxRows)
const [loading, setLoading] = useState(false);

const [error, setError] = useState(null);
   const [anchorEl, setAnchorEl] = useState(null);
  const [selectedType, setSelectedType] = useState("البريد الوارد");
  const [openModal, setOpenModal] = useState(false);
console.log(outboxRows)
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

// const handleOpenModal = (uuid) => {
//   setSelectedUuid(uuid);
//   setOpenModal(true);
// };

const handleOpenModal = (uuid,status) => {
  setSelectedUuid(uuid);
    setSelectedStatus(status);

  setTimeout(() => setOpenModal(true), 0); 
};

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
  {!isInbox &&  (isAdmin||isSub_Admin)&& <>
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

     <TableContainer sx={{ mr: 1, backgroundColor: "transparent", boxShadow: "none",mt:6 }}>
  <Table sx={{width:"2000px", height:'88px'}}>
    <TableHead sx={{width:"2000px", height:'88px'}}>
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
    )  : isSub_Admin ||isAdmin ? (
  <>
    <TableCell align="center" sx={headStyle}>اسم المكتب</TableCell>
        <TableCell align="center" sx={headStyle}>رقم المكتب</TableCell>

    <TableCell align="center" sx={headStyle}>عنوان البريد</TableCell>
    <TableCell align="center" sx={headStyle}>تاريخ الإرسال</TableCell>
  </>
) :(
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
{loading ? (
                <TableRow>
                  <TableCell sx={{color:"green"}}  align="center">
                    <Loading />
                  </TableCell>
                </TableRow>
              ) : ""}
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
      <TableCell align="center" sx={{ py: 1.5 ,fontWeight: "700" ,fontSize:'16px'}}>{index+1}</TableCell>
      {isInbox ? (
        <>
          <TableCell align="center">
            <Avatar src={row.from_avatar} sx={{ width: 56, height: 56, margin: "auto" }} />
          </TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.from_name}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.from_phone}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.subject}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.from_office}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center"> {new Date(row.received_at).toLocaleDateString()}
</TableCell>
        </>
      ) : isSub_Admin?(<> <TableCell align="center" sx={{ fontWeight: "700", fontSize: "16px" }}>
            {row.to.join(", ")}
          </TableCell>
          <TableCell align="center" sx={{ fontWeight: "700", fontSize: "16px" }}>
            {row.to_phones.join(", ")}
          </TableCell>
          <TableCell align="center" sx={{ fontWeight: "700", fontSize: "16px" }}>
            {row.subject}
          </TableCell>
          <TableCell align="center" sx={{ fontWeight: "700", fontSize: "16px" }}>
            {row.received_at}
          </TableCell>
          <TableCell align="center" sx={{ fontWeight: "700", fontSize: "16px" }}>
            {row.sender_at || "—"}
          </TableCell></>) :(
       <>
  <TableCell align="center" sx={{ fontWeight: "700", fontSize: '16px' }}>
    {row.to.join(', ')}
  </TableCell>
  <TableCell align="center" sx={{ fontWeight: "700", fontSize: '16px' }}>
    {row.to_phones.join(', ')}
  </TableCell>
  <TableCell align="center" sx={{ fontWeight: "700", fontSize: '16px' }}>
    {row.subject}
  </TableCell>
  <TableCell align="center" sx={{ fontWeight: "700", fontSize: '16px' ,color: row.status === "مرفوضة"
        ? "red"
        : row.status === "مرسلة"
        ? "green"
        : "black",}}>
    {row.status}
  </TableCell>
  <TableCell align="center" sx={{ fontWeight: "700", fontSize: '16px' }}>
    {row.received_at}
  </TableCell>
  <TableCell align="center" sx={{ fontWeight: "700", fontSize: '16px' }}>
    {row.sender_at || '—'}
  </TableCell>
</>

      )}

      <TableCell align="center">
        <IconButton
          onClick={() => handleOpenModal(row.uuid ,row.status)
            
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
         <AssignmentAddIcon/>
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

export default Enter;
