
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
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import NoteIcon from '@mui/icons-material/Note';import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SidBar from "./dachboard/SIDEBAR/sidbar";
import Appar from "./dachboard/SIDEBAR/appar";
import ArticleIcon from '@mui/icons-material/Article';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
 import {useDispatch,useSelector }  from "react-redux"
import EXPORTMAILS from "../mails/form/exportmails";
import { getData } from "../../API/apiService";
import { fetchexportouter } from "../../reducer/deywan/outer/outer";
import { fetchimportouter } from "../../reducer/deywan/outer/importouter";
import Loading from "../../wrong/mails/loading";
import NoData from "../../wrong/mails/noData";
import ShowReicipet from "../mails/form/showRecipiet";
import { SearchTransction } from "../../reducer/search/transection";
import NOEMPLOYEE from "../../wrong/search/noEmployyesearch";
import NOSERACH from "../../wrong/search/search";
import NoTRANSECTION from "../../wrong/emptydata/notransiction";
// بيانات البريد الوارد (وارد)


const headerStyle = {
  color: "white",
 fontWeight: "700" ,fontSize:'20px',
  py: 1.5,whiteSpace:'nowrap'
};
const headStyle = {
  color: "black",
 fontWeight: "700" ,fontSize:'18px',
  py: 1.5,borderBottom: "3px solid rgb(14, 74, 35)" 
};


const Outer = () => {
  const stateRole=useSelector((state)=>state.user.roles[0])
const isMaleaManager=stateRole.includes("رئيس المالية")
const isSub_Admin=stateRole.includes("نائب المدير")
const isAdmin=stateRole.includes("المدير")

const allowedRoles = ["رئيس الإقامة", "رئيس الشهادات","رئيس المجالس","رئيس المفاضلة"];
const isManager = allowedRoles.some(role => stateRole.includes(role));
  const[uuid,setuuid]=useState(false)

  const stateexport=useSelector((state)=>state.outerexport)
  const dispatch = useDispatch()
    const stateimport=useSelector((state)=>state.outereimport)
console.log(stateexport.data)
console.log(stateimport.data)

const [showrecipit,setShowRecipit]=  useState(false)
     const [id, setid] = useState(null);
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
function handleEditeTransction(uuid,type ){
  setuuid(uuid)
  setOpenModal(true)
}
function handleRecipit(uuid){
setid(uuid)
setShowRecipit(true)
}
  const { data: searchResults, isloading: searchLoading } = useSelector(
      (state) => state.searchtransction
    );
          const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if (searchTerm) {
      dispatch(SearchTransction(searchTerm));
    }
  }, [searchTerm, dispatch]);
  const transctionToDisplay = searchTerm
  ? Array.isArray(searchResults)
    ? Array.isArray(searchResults[0])
      ? searchResults[0]   // حالة nested array مثل اللي عندك
      : searchResults
    : []
  
    
    : rows; 
    const isEmpty = !transctionToDisplay || transctionToDisplay.length === 0;

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
 <Appar onSearch={setSearchTerm}/>
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

     <TableContainer sx={{ mr: 1, backgroundColor: "transparent", boxShadow: "none" ,mt:6, overflowY: 'auto',maxHeight: '700px', }}>
  <Table sx={{width:"2000px", height:'88px'}}>
   <TableHead sx={{width:"2000px", height:'88px'}}>
  <TableRow sx={{ backgroundColor: "rgb(14, 74, 35)" }}>
    {isMaleaManager ? (
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
    ) : isManager ? (
  <>
    <TableCell align="center" sx={headerStyle}>رقم المعاملة</TableCell>
    <TableCell align="center" sx={headerStyle}>صورة طبيب</TableCell>
    <TableCell align="center" sx={headerStyle}>اسم الطبيب</TableCell>
    <TableCell align="center" sx={headerStyle}>رقم الطبيب</TableCell>
    <TableCell align="center" sx={headerStyle}>نوع المعاملة</TableCell>
    <TableCell align="center" sx={headerStyle}>{isInbox ? "المرسل" : "المستقبل"}</TableCell>
            <TableCell align="center" sx={headerStyle}>{isInbox ? "" : "الحالة"} </TableCell>

    <TableCell align="center" sx={headerStyle}>تاريخ التقديم</TableCell>
    <TableCell align="center" sx={headerStyle}>{isInbox ? "تاريخ الاستلام" : "تاريخ الإرسال"}</TableCell>
  </> ): isSub_Admin || isAdmin?(<>
  
  
  <TableCell align="center" sx={headerStyle}>رقم المعاملة</TableCell>
    <TableCell align="center" sx={headerStyle}>صورة طبيب</TableCell>
    <TableCell align="center" sx={headerStyle}>اسم الطبيب</TableCell>
    <TableCell align="center" sx={headerStyle}>رقم الطبيب</TableCell>
    <TableCell align="center" sx={headerStyle}>نوع المعاملة</TableCell>
        <TableCell align="center" sx={headerStyle}>{isInbox ? "" : "الحالة"} </TableCell>

    <TableCell align="center" sx={headerStyle}>{isInbox ? "المرسل" : "المستقبل"}</TableCell>
    <TableCell align="center" sx={headerStyle}>تاريخ التقديم</TableCell>
    <TableCell align="center" sx={headerStyle}>{isInbox ? "تاريخ الاستلام" : "تاريخ الإرسال"}</TableCell>
  
  
  
  </>):(
      <>
        <TableCell align="center" sx={headerStyle}>نوع المعاملة</TableCell>
        <TableCell align="center" sx={headerStyle}>صورة الطبيب</TableCell>
        <TableCell align="center" sx={headerStyle}>اسم الطبيب</TableCell>
        <TableCell align="center" sx={headerStyle}>رقم الطبيب</TableCell>
        <TableCell align="center" sx={headerStyle}>
          {isInbox ? "المرسل" : "المستقبل"}
        </TableCell>
        <TableCell align="center" sx={headerStyle}>تاريخ التقديم</TableCell>
               <TableCell align="center" sx={headerStyle}>{isInbox ? "" : "الحالة"} </TableCell>

        <TableCell align="center" sx={headerStyle}>
          {isInbox ? "تاريخ الاستلام" : "تاريخ الإرسال"}
        </TableCell>
      </>
    )}
    <TableCell align="center" sx={headerStyle}>  </TableCell>
  </TableRow>
  
</TableHead>


 <TableBody>
              {(isInbox ? stateimport.isloading : stateexport.isloading) ? (
                <TableRow>
                  <TableCell sx={{color:"green"}} colSpan={8} align="center">
                    <Loading />
                  </TableCell>
                </TableRow>
              ) : (isInbox ? stateimport.error : stateexport.error) ? (
                <TableRow>
                  <TableCell colSpan={8} align="center" sx={{ color: 'red', fontWeight: 'bold' }}>
                    {(isInbox ? stateimport.error : stateexport.error)}
                  </TableCell>
                </TableRow>
              )
: searchTerm && isEmpty ? (
    <TableRow>
      <TableCell colSpan={8} align="center">
        <NOSERACH />
      </TableCell>
    </TableRow>
  ) : !searchTerm && isEmpty ? (
    <TableRow>
  <TableCell colSpan={8} align="center">
    <NoTRANSECTION/>
  </TableCell>
</TableRow>
                                                                      
                         ) :(






              isMaleaManager ? (
  transctionToDisplay.map((row, index) => (
    <TableRow key={index}>
      <TableCell sx={headStyle} align="center">{index+1}</TableCell>
      <TableCell sx={headStyle} align="center">{row.doctor_name}</TableCell>
      <TableCell sx={headStyle}align="center">{row.receipt_number}</TableCell>
      <TableCell sx={headStyle}align="center">{row.form_name}</TableCell>
      <TableCell sx={headStyle} align="center">{row.form_cost} ل.س</TableCell>
      <TableCell sx={{color: row.status ==='محول'? 'green': row.status ==='مرفوض'?"red":"black",
                     fontWeight: "700" ,fontSize:'20px',
                      py: 1.5,whiteSpace:'nowrap'}}  align="center">
                           {row.status} 
                          </TableCell>
      <TableCell sx={headStyle} align="center"> 
        {new Date(row.submitted_at).toLocaleDateString()}
        </TableCell>
      <TableCell sx={headStyle} align="center">
         
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
) :





isManager ? (
  rows.map((row, index) => (
    <TableRow key={index}>
      <TableCell sx={headStyle} align="center">{row.transactionNumber}</TableCell>
      <TableCell align="center">
        <Avatar
          sx={{ width: 56, height: 56, margin: 'auto' }}
          src={row.doctorImage}
        />
      </TableCell>
      <TableCell sx={headStyle} align="center">{row.doctorName}</TableCell>
      <TableCell sx={headStyle} align="center">{row.doctorNumber}</TableCell>
      <TableCell sx={headStyle} align="center">{row.transactionType}</TableCell>
      <TableCell sx={headStyle} align="center">{isInbox ? row.senderName : row.receiverName}</TableCell>
      <TableCell sx={headStyle} align="center">{row.dateSubmitted}</TableCell>
      <TableCell sx={headStyle} align="center">{isInbox ? row.dateReceived : row.dateSent}</TableCell>
      <TableCell align="center">
 <IconButton
                        onClick={() => setOpenModal(true)}
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
                      </IconButton>      </TableCell>
    </TableRow>
  ))



  
):isSub_Admin?(

(
  rows.map((row, index) => (
    <TableRow key={index}>
      <TableCell sx={headStyle} align="center">{row.transactionNumber}</TableCell>
      <TableCell align="center">
        <Avatar
          sx={{ width: 56, height: 56, margin: 'auto' }}
          src={row.from_avatar}
        />
      </TableCell>
      <TableCell sx={headStyle} align="center">{row.from_name}</TableCell>
      <TableCell sx={headStyle} align="center">{row.from_phone}</TableCell>
      <TableCell sx={headStyle} align="center">{row.transactionType}</TableCell>
            <TableCell sx={headStyle} align="center">{isInbox ? "" : row.status}</TableCell>

      <TableCell sx={headStyle} align="center">{isInbox ? row.senderName : row.to}</TableCell>
      <TableCell sx={headStyle} align="center">{row.dateSubmitted}</TableCell>
      <TableCell sx={headStyle} align="center">{isInbox ? row.received_at : row.sender_at}</TableCell>
      <TableCell align="center">
 <IconButton
                        // onClick={() => setOpenModal(true)}
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
                      </IconButton>      </TableCell>
    </TableRow>
  ))


)


):(
                rows.map((row, index) => (
                  <TableRow key={index} sx={{ borderBottom: "3px solid rgb(14, 74, 35)" }}>
                    <TableCell sx={{ fontWeight: "700", fontSize: '16px' }} align="center">{row.form_name}</TableCell>
                    <TableCell align="center">
                      <Avatar
                        sx={{ width: 56, height: 56, margin: 'auto' }}
                        src={row.doctor_image || row.doctor_image}
                      />
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700", fontSize: '16px' }} align="center">
                      {isInbox ? row.doctor_name : row.doctor_name}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700", fontSize: '16px' }} align="center">
                      {isInbox ? row.doctor_phone : row.doctor_phone}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700", fontSize: '16px' }} align="center">
                      {isInbox ? row.from_path : row.to_path?? '--'}
                    </TableCell>
                 
                    <TableCell sx={{ fontWeight: "700", fontSize: '16px' }} align="center">
                       {new Date(row.submitted_at).toLocaleDateString()}
                    </TableCell>
                      <TableCell sx={{color: row.status ==='محول'? 'green': row.status ==='مرفوض'?"red":"black",
                     fontWeight: "700" ,fontSize:'20px',
                      py: 1.5,whiteSpace:'nowrap'}}  align="center">
                           {row.status} 
                          </TableCell>
                    <TableCell sx={{ fontWeight: "700", fontSize: '16px' }} align="center">
                      {isInbox ? row.dateReceived :new Date(row.sent_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        onClick={()=>{  handleEditeTransction({ id: row.uuid, type: isInbox ? 'inbox' : 'outbox' }) 
}}
          
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
              ))}
            </TableBody>



  </Table>
</TableContainer>



      </Box>
 {<EXPORTMAILS
         open={openModal}
         onClose={()=>setOpenModal(false)}
         uuid={uuid}
           type={isInbox ? 'inbox' : 'outbox'}

         
         />}
         {<ShowReicipet   open={showrecipit}
         onClose={()=>{setShowRecipit(false)}}
         uuid={id}
         
         
         />}
    </Box>
  );
};

export default Outer;