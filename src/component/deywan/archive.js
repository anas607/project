
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
 
} from "@mui/material";import {   Select, MenuItem,
  FormControl,
 
  InputLabel,
   } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import SidBar from "./dachboard/SIDEBAR/sidbar";
import Appar from "./dachboard/SIDEBAR/appar";
import ArticleIcon from '@mui/icons-material/Article';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from "react";
import { BaseUrl ,ARCHIV,INTERNAL,MAILS,TRANSACTION,ARCHIVED_EXPORT, IMPORT, FETCHOFFICE, PATH} from "../../API/api";
import { getData } from "../../API/apiService";
import Loading from "../../wrong/mails/loading";
import EXPORTMAILS from "../mails/form/exportmails";
import EnternalMails from "../mails/form/enternalimportmodal";
import NoData from "../../wrong/mails/noData";
import { useSelector } from "react-redux";
import FlashlightOnIcon from '@mui/icons-material/FlashlightOn';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';


  const headStyle = {
  color: "black",
 fontWeight: "700" ,fontSize:'18px',
  py: 1.5,
};

export default function Archiv(){
  const [offices, setOffices] = useState([]);
  const [selectedOfficeId, setSelectedOfficeId] = useState("");
   const state = useSelector((state) => state.user);
  const isSub_Admin=state.roles[0].includes("نائب المدير")
  
  const [loading, setLoading] = useState(false);
  const[setenter,setOpenEnter]=useState(false)
  const [error, setError] = useState(null);
  const[exporintearnalmail,setExportInternalmail]=useState([])
   const[importintearnalmail,setImportInternalmail]=useState([])
    const[exportmail,setExportmail]=useState([])
    const [openModal, setOpenModal] = useState(false);
    
  const mailTypes = ["البريد الصادر الخارجي", "البريد الداخلي الوارد", "البريد الداخلي الصادر"];

const [mailStep, setMailStep] = useState(0);  
const selectedType = mailTypes[mailStep];
useEffect(() => {
 
    fetchOffices();
  
}, []); 
const fetchOffices = async () => {
  try {
    const res = await getData(`${BaseUrl}${FETCHOFFICE}`);
    setOffices(res.data[0]);
// console.log(res.data[0])
    // console.log(setOffices) 
  } catch (err) {
    console.error("فشل في جلب المكاتب:", err);
  }
};
async function fetchArcivePyPath(selectedId) {
   try {
    setLoading(true);
    
    

const response =await getData(`${BaseUrl}${TRANSACTION}${ARCHIV}${PATH}${selectedId}`)
   console.log(response.data);

  } catch (err) {
    console.error(err.response?.data || err.message);
  } finally {
    setLoading(false);
  }
}
  

 
let rows=[]
 
let tableHeaders = [];

switch (selectedType) {
  case "البريد الصادر الخارجي":
    rows = exportmail;
    tableHeaders = ["رقم المعاملة", "صورة الطبيب", "اسم الطبيب", "رقم الطبيب", "نوع المعاملة", "المستقبل", "تاريخ التقديم", "تاريخ الإرسال"];
    break;
  case "البريد الداخلي الوارد":
    rows = importintearnalmail;
    tableHeaders = ["رقم البريد", "صورة المرسل", "اسم المرسل", "رقم المرسل", "عنوان البريد", "اسم المكتب", "تاريخ الاستلام"];
    break;
  case "البريد الداخلي الصادر":
    rows = exporintearnalmail;
    tableHeaders = ["رقم البريد", "اسم المكتب", "رقم المكتب", "عنوان البريد", "حالة البريد", "تاريخ الاستلام", "تاريخ الإرسال"];
    break;
}

useEffect(() => {
  const fetcharcive = async () => {
    setLoading(true);
    setError(null);

    try {
      let response;

      if (selectedType === "البريد الداخلي الصادر") {
        response = await getData(`${BaseUrl}${ARCHIV}${INTERNAL}${MAILS}`);
        const realData = Array.isArray(response.data?.[0]) ? response.data[0] : response.data;
        setExportInternalmail(realData);
      }

      if (selectedType === "البريد الصادر الخارجي") {
        response = await getData(`${BaseUrl}${TRANSACTION}${ARCHIVED_EXPORT}`);
        const realData = Array.isArray(response.data?.[0]) ? response.data[0] : response.data;
        setExportmail(realData);
      }

      if (selectedType === "البريد الداخلي الوارد") {
        response = await getData(`${BaseUrl}${ARCHIV}${IMPORT}${INTERNAL}${MAILS}`);
        const realData = Array.isArray(response.data?.[0]) ? response.data[0] : response.data;
        setImportInternalmail(realData);
      }

      setLoading(false);
    } catch (error) {
      const errorMessage =
    error?.response?.data?.message || error?.message || "حدث خطأ أثناء جلب البيانات";

  setError(errorMessage);
      setLoading(false);
    }
  };

  fetcharcive();
}, [selectedType]);

    return(
        <>
          <Box
  sx={{
    direction: "rtl",
    height: '100vh',
    
    display: "flex"
  }}
>
  
  <SidBar />

  
  <Box sx={{ flexGrow: 1, padding: '2%', display: 'flex', flexDirection: 'column' ,backgroundColor:"rgb(233,232,232)"}}>
    <Appar/>

   
 <Box
  sx={{
   backgroundColor:"rgb(233,232,232)",
    p: 2,
    borderRadius: 5,
    maxWidth: '1000px', 
    width: '100%',
    alignSelf: 'rtl', 
  }}
>
 
  <Box display="flex" justifyContent="space-between" alignItems="center">
  {/* جهة اليمين */}
  <Box display="flex" alignItems="center" gap={1}>
    <MenuIcon />
    <Typography fontWeight="700" sx={{ fontSize: '24px' }}>
      {selectedType}
    </Typography>
    <ArrowDropDownCircleOutlinedIcon
      sx={{ fontSize: '30px' }}
      onClick={() => {
        setMailStep((prev) => (prev + 1) % mailTypes.length);
      }}
    />
  </Box>

 
  {isSub_Admin && (
    <FormControl
      sx={{
        minWidth: 300,
        border: '2px solid rgb(14, 75, 35)',
        borderRadius: '5%',ml:-80
      }}
    >
      <InputLabel
        id="filter-label"
        sx={{
          color: 'rgb(14, 75, 35)',
          fontSize: '18px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          '&.Mui-focused': {
            color: 'rgb(14, 75, 35)',
          },
        }}
      >
        <Box sx={{ display: 'flex', gap: 3 }}>
          تصفية حسب الدائرة
          <Box sx={{ position: 'relative', display: 'inline-block', ml: 1 }}>
            <FlashlightOnIcon sx={{ fontSize: 32, color: 'rgb(14, 75, 35)' }} />
            <FormatAlignRightIcon
              sx={{
                position: 'absolute',
                bottom: 7,
                right: -6,
                fontSize: 24,
                color: 'rgb(14, 75, 35)',
              }}
            />
          </Box>
        </Box>
      </InputLabel>

      <Select
      value={selectedOfficeId}
  onChange={async (e) => {
    const selectedId = e.target.value;
    setSelectedOfficeId(selectedId);

    if (selectedId) {
      await fetchArcivePyPath(selectedId);
    }
  }}
        labelId="filter-label"
        defaultValue=""
        fullWidth
        sx={{
          color: 'rgb(14, 75, 35)',
          borderColor: 'rgb(14, 75, 35)',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgb(14, 75, 35)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgb(14, 75, 35)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgb(14, 75, 35)',
          },
        }}
      >
         
      {offices.map((office) => (
        <MenuItem key={office.id} value={office.id}>
          {office.name}
        </MenuItem>
      ))}
      </Select>
    </FormControl>
  )}
</Box>


               <TableContainer sx={{ mr: 1, backgroundColor: "transparent", boxShadow: "none" ,width:"1560px", mt:1 ,overflowX: "hidden",}}>
            <Table  sx={{ width: "100%" }}>
            <TableHead  sx={{ height: "88px" }} >
  <TableRow sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
    {tableHeaders.map((header, index) => (
      <TableCell key={index} align="center" sx={{ color: "white", fontWeight: "700", fontSize: '20px' }}>
        {header}
      </TableCell>
    ))}
    <TableCell align="center" sx={{ color: "white" }} />
  </TableRow>
</TableHead>

        <TableBody>
{error && (
  <Typography sx={{ color: "red", mt: 2, fontWeight: "bold" }}>
    ⚠️ {error}
  </Typography>
)}
{loading ?(
                <TableRow>
                  <TableCell sx={{color:"green"}} colSpan={8} align="center">
                    <Loading />
                  </TableCell>
                </TableRow>
              ) : ""}
{rows.length === 0 && !loading && (
  <NoData/>
)}
  {rows.map((row, index) => (
    <TableRow key={index} sx={{ borderBottom: "3px solid rgb(14, 74, 35)" }}>
      {selectedType === "البريد الصادر الخارجي" && (
        <>
          <TableCell  sx={headStyle}align="center">{row.mailTitle}</TableCell>
          <TableCell sx={headStyle} align="center"><Avatar  sx={{margin:'auto',width: 56, height: 56}} src={row.receiverImg} /></TableCell>
          <TableCell sx={headStyle} align="center">{row.receiverName}</TableCell>
          <TableCell sx={headStyle} align="center">{row.receiverPhone}</TableCell>
          <TableCell sx={headStyle} align="center">{row.type}</TableCell>
          <TableCell sx={headStyle} align="center">{row.receiverName}</TableCell>
          <TableCell sx={headStyle} align="center">{row.dateSubmitted}</TableCell>
          <TableCell  sx={headStyle}align="center">{row.dateSent}</TableCell>
        </>
      )}
      {selectedType === "البريد الداخلي الوارد" && (
        <>
          <TableCell  sx={headStyle}align="center">{row.uuid}</TableCell>
          <TableCell sx={headStyle} align="center"><Avatar sx={{margin:'auto',width: 56, height: 56}}src={row.from_avatar} /></TableCell>
          <TableCell sx={headStyle} align="center">{row.from_name}</TableCell>
          <TableCell sx={headStyle} align="center">{row.from_phone}</TableCell>
          <TableCell  sx={headStyle}align="center">{row.subject}</TableCell>
          <TableCell  sx={headStyle}align="center">{row.from_office}</TableCell>
          <TableCell sx={headStyle} align="center">{row.received_at}</TableCell>
        </>
      )}
      {selectedType === "البريد الداخلي الصادر" && (
        <>
          <TableCell  sx={headStyle} align="center">{row.uuid}</TableCell>
          <TableCell  sx={headStyle} align="center">{row.from_office}</TableCell>
          <TableCell  sx={headStyle} align="center">{row.from_phone}</TableCell>
          <TableCell sx={headStyle}  align="center">{row.subject}</TableCell>
          <TableCell  sx={headStyle} align="center">مُرسل</TableCell>
          <TableCell  sx={headStyle} align="center">{row.received_at}</TableCell>
          <TableCell  sx={headStyle} align="center">{row.sender_at}</TableCell>
        </>
      )}

      <TableCell align="center">
        <IconButton
          
             onClick={
            
            selectedType === "البريد الصادرالخارجي " ?
            () => setOpenModal(true) : ()=>setOpenEnter(true)}
            
        
          sx={{
            border: "1px solid rgba(212, 208, 212, 0.31)",
            borderRadius: "50px",ml:-4,
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
              padding: "2px",            border: "3px solid rgb(14, 74, 35)",

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
        </Box>
{<EXPORTMAILS
open={openModal}
onClose={()=>setOpenModal(false)}


/>}
{<EnternalMails
open={setenter}
onclose={()=>setOpenEnter(false)}

/>}
</Box>

    </>)}