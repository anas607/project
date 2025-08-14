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
import NoteIcon from '@mui/icons-material/Note';import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { SidBarComponent } from './SIDEBAR/sidbar';
import Appar from './SIDEBAR/appar'
import ArticleIcon from '@mui/icons-material/Article';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
 import {useDispatch,useSelector }  from "react-redux"
import { fetchimportouter } from "../../../reducer/deywan/outer/importouter";
import { fetchexportouter } from "../../../reducer/deywan/outer/outer";
import Loading from "../../../wrong/mails/loading";
import NoData from "../../../wrong/mails/noData";
import EXPORTMAILS from "../../mails/form/exportmails";
import ShowReicipet from "../../mails/form/showRecipiet";


// بيانات البريد الوارد (وارد)
const headerStyle = {
  color: "white",
 fontWeight: "700" ,fontSize:'20px',
  py: 1.5,whiteSpace:'nowrap'
};

// بيانات البريد الصادر (صادر)


const headofStyle = {
  color: "black",
 fontWeight: "700" ,fontSize:'20px',
  py: 1.5,whiteSpace:'nowrap'
};

const headStyle = {
  color: "white",
 fontWeight: "700" ,fontSize:'20px',
  py: 1.5,
};

const Outer_EDeywan = () => {
  const[uuid,setuuid]=useState(false)
  const [showrecipit,setShowRecipit]=  useState(false)
     const [id, setid] = useState(null);

  const stateexport=useSelector((state)=>state.outerexport)
console.log(stateexport.data)
    const dispatch = useDispatch()
      const stateimport=useSelector((state)=>state.outereimport)

      const stateMalea=useSelector((state)=>state.user.roles[0])
      const isMaleaManager=stateMalea.includes("موظف المالية")
  // const out=useSelector((state)=>state.dewan_outer)
  // console.log(out)
   const [anchorEl, setAnchorEl] = useState(null);
  const [selectedType, setSelectedType] = useState("البريد الوارد");
  const [openModal, setOpenModal] = useState(false);
   const handleClick = (event) => setAnchorEl(event.currentTarget);
  const isInbox = selectedType === "البريد الوارد";
  const rows = isInbox ? stateimport.data : stateexport.data;
useEffect(() => {
  if (selectedType === "البريد الوارد") {
    dispatch(fetchimportouter());
  } else {
    dispatch(fetchexportouter());
  }
}, [selectedType, dispatch]);

function handleRecipit(uuid){
setid(uuid)
setShowRecipit(true)
}
function handleEditeTransction(uuid,type ){
  setuuid(uuid)
  setOpenModal(true)
}
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
                </Box>

      <TableContainer sx={{ mr: 1, backgroundColor: "transparent", boxShadow: "none" ,mt:6 ,overflowY: 'auto',maxHeight: '700px', }}>
       <Table sx={{width:"2000px", height:'88px'}}>
        <TableHead sx={{width:"2000px", height:'88px'}}>
       <TableRow sx={{ backgroundColor: "rgb(14, 74, 35)" }}>
         {isMaleaManager ? <>
         
         
          <>
                 <TableCell align="center" sx={headerStyle}>رقم المعاملة</TableCell>
                 <TableCell align="center" sx={headerStyle}>اسم الطبيب</TableCell>
                 <TableCell align="center" sx={headerStyle}>رقم الإيصال</TableCell>
                 <TableCell align="center" sx={headerStyle}>نوع المعاملة</TableCell>
                 <TableCell align="center" sx={headerStyle}>رسوم المعاملة</TableCell>
                                 <TableCell align="center" sx={headerStyle}>{isInbox ? "" : "الحالة"} </TableCell>
                 
                 <TableCell align="center" sx={headerStyle}>تاريخ التقديم</TableCell>
                 <TableCell align="center" sx={headerStyle}>
                   {isInbox ? "تاريخ الاستلام" : "تاريخ الإرسال"}
                 </TableCell>
               </>
         
         
         </>:<><TableCell align="center" sx={headStyle}>
      رقم  المعاملة
    </TableCell>
    <TableCell align="center" sx={headStyle}>
      صورة الطبيب
    </TableCell>
    <TableCell align="center" sx={headStyle}>
      اسم الطبيب
    </TableCell>
    <TableCell align="center" sx={headStyle}>
      رقم الطبيب
    </TableCell>
    <TableCell align="center" sx={headStyle}>
      نوع المعاملة
    </TableCell>
    <TableCell align="center"sx={headStyle}>
      {isInbox ? "المرسل" : "المستقبل"}
    </TableCell>
    <TableCell align="center" sx={headStyle}>
  الحالة
</TableCell>
    <TableCell align="center" sx={headStyle}>
      تاريخ التقديم
    </TableCell>
    <TableCell align="center" sx={headStyle}>
      {isInbox ? "تاريخ الاستلام" : "تاريخ الإرسال"}
    </TableCell></>}
               
    <TableCell align="center" sx={headStyle}>
      
      {/* أيقونة */}
    </TableCell>
    
  </TableRow>
</TableHead>



<TableBody> {(isInbox ? stateimport.isloading : stateexport.isloading) ? (
                <TableRow>
                  <TableCell sx={{color:"rgba(29, 216, 94, 1)"}} colSpan={8} align="center">
                    <Loading />
                  </TableCell>
                </TableRow>
              ) : (isInbox ? stateimport.error : stateexport.error) ? (
                <TableRow>
                  <TableCell colSpan={8} align="center" sx={{ color: 'red', fontWeight: 'bold' }}>
                    {(isInbox ? stateimport.error : stateexport.error)}
                  </TableCell>
                </TableRow>
              ) : rows.length === 0 ? (
                
<NoData/>                 
              ) :( isMaleaManager ? (
                rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell sx={headofStyle} align="center">{index+1}</TableCell>
                    <TableCell sx={headofStyle} align="center">{row.doctor_name}</TableCell>
                    <TableCell sx={headofStyle}align="center">{row.receipt_number}</TableCell>
                    <TableCell sx={headofStyle}align="center">{row.form_name}</TableCell>
                    <TableCell sx={headofStyle} align="center">{row.form_cost} ل.س</TableCell>
                      <TableCell sx={{color: row.status ==='محول'? 'green': row.status ==='مرفوض'?"red":"black",
                                         fontWeight: "700" ,fontSize:'20px',
                                          py: 1.5,whiteSpace:'nowrap'}}  align="center">
                                               {row.status} 
                                              </TableCell>

                    <TableCell sx={headofStyle} align="center">
        {new Date(row.submitted_at).toLocaleDateString()}
                      </TableCell>
                    <TableCell sx={headofStyle} align="center">
                     {isInbox ? new Date(row.received_at).toLocaleDateString()
: 
new Date(row.sent_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                             onClick={()=>{
                     
                              handleRecipit(row.uuid)}}        
                                      sx={{
                                        border: "1px solid rgba(212, 208, 212, 0.31)",
                                        borderRadius: "50px",
                                        ml: -4,
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
              ):(
  rows.map((row, index) => (
    <TableRow key={index} sx={{ borderBottom: "2px solid #1f4d38" }}>

      <TableCell sx={headofStyle} align="center">{index+1}</TableCell>
      <TableCell align="center">
        <Avatar  sx={{ width: 56, height: 56, margin: "auto" }}  src={row.doctor_image || row.doctor_image} />
      </TableCell>
      <TableCell sx={headofStyle} align="center">
        {isInbox ? row.doctor_name : row.doctor_name}
      </TableCell>
      <TableCell sx={headofStyle} align="center">
        {isInbox ? row.doctor_phone : row.doctor_phone}
      </TableCell>
            <TableCell sx={headofStyle} align="center">{row.form_name}</TableCell>

      <TableCell sx={headofStyle} align="center">
        {isInbox ? row.from_path : row.to_path?? '--'}
      </TableCell>
        <TableCell sx={{color: row.status ==='محول'? 'green': row.status ==='مرفوض'?"red":"black",
 fontWeight: "700" ,fontSize:'20px',
  py: 1.5,whiteSpace:'nowrap'}}  align="center">
       {row.status} 
      </TableCell>
      <TableCell sx={headofStyle} align="center">
  {isInbox 
    ? new Date(row.received_at).toLocaleDateString() 
    : new Date(row.submitted_at).toLocaleDateString()
  }
</TableCell>
      <TableCell sx={headofStyle} align="center">
  {isInbox ? new Date(row.submitted_at).toLocaleDateString() :new Date(row.sent_at).toLocaleDateString() 
}
</TableCell>

      <TableCell align="center">
        <IconButton

onClick={() => { 
  handleEditeTransction({ id: row.uuid, type: isInbox ? 'inbox' : 'outbox' }) 
}}
          sx={{
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
             top: 24,
              right: 10,
              fontSize: 6,
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
  ))}
</TableBody>



  </Table>
</TableContainer>

{<ShowReicipet   open={showrecipit}
onClose={()=>{setShowRecipit(false)}}
uuid={id}


/>}

      </Box>

      {<EXPORTMAILS
         open={openModal}
         onClose={()=>setOpenModal(false)}
         uuid={uuid}
  type={isInbox ? 'inbox' : 'outbox'}
         />}
    </Box>
  );
};

export default Outer_EDeywan;
