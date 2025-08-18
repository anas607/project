import React, { useEffect, useState } from "react";
import {
  
 
  
  Table,
Alert,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,


} from "@mui/material";
import FlashlightOnIcon from '@mui/icons-material/FlashlightOn';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
// import Finished from "./finished";
import { Box, Button, Select, MenuItem, Typography, IconButton,Avatar,
  FormControl,
  TableBody,
  InputLabel,
   } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import ArticleIcon from '@mui/icons-material/Article';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import SidBar from "../../deywan/dachboard/SIDEBAR/sidbar";
import Appar from "../../deywan/dachboard/SIDEBAR/appar";
import { getData } from "../../../API/apiService";
import { ALL_ROLL, BaseUrl, BY, EMPLOYEES, FETCHOFFICE, Show } from "../../../API/api";
import Loading from "../../../wrong/mails/loading";
import ADDEmployees from "./addemployee";
import EditEmployeeModal from "./editemployee";
import { useSelector } from "react-redux";



const headStyle = {
  color: "white",
 fontWeight: "700" ,fontSize:'20px',
  py: 1.5,
};
const Employyes = () => {
  const state = useSelector((state) => state.user);
const isSub_Admin=state.roles[0].includes("نائب المدير")
  const [searchResults, setSearchResults] = useState([]);

const [message, setMessage] = useState(null);
const [error, setError] = useState(null);
const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [showAddEmployee, setShowAddEmployee] = useState(false);
    const [showEditEmployee, setShowEditEmployee] = useState(false);
const [selectedOffice, setSelectedOffice] = useState(null);
  const [offices, setOffices] = useState([]);
 

    const [employees, setEmployees] = useState([]);
    const [loading, setloading] = useState(false);



function handleEditEmployees(employee) {
  console.log("Employee to edit:", employee);
  setSelectedEmployee(employee);
  setShowEditEmployee(true);
}




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

async function fetchEmployeesByOfficeName(officeName) {
  setloading(true);
  try {
    const response = await getData(`${BaseUrl}${Show}${EMPLOYEES}${BY}${officeName}`);
    setEmployees(response.data[0]);
        console.log(response.data);

  } catch (err) {
    console.error(err.response?.data || err.message);
  } finally {
    setloading(false);
  }
}


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
 <Appar setSearchResults={setSearchResults}/>
      <Box
          
            display="flex"
            alignItems="center"
            sx={{ cursor: "pointer", gap: 220 ,}}
           
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


  <FormControl sx={{ minWidth: 300 ,border:'2px solid rgb(14, 75, 35) ',borderRadius:'5%'}}>
 <InputLabel
  id="filter-label"
  sx={{
    color: "rgb(14, 75, 35)",
    fontSize: '18px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: 5, // مسافة بين النص والأيقونة
    '&.Mui-focused': {
      color: "rgb(14, 75, 35)",
    },
  }}
>
  <Box sx={{ display: 'flex',gap: 3  }}>
    تصفية حسب الدائرة

    {/* الكاشف مع الخط */}
    <Box sx={{ position: 'relative', display: 'inline-block', ml: 1 }}>
      <FlashlightOnIcon sx={{ fontSize: 32, color: 'rgb(14, 75, 35)' }} />
      <FormatAlignRightIcon
        sx={{
          position: 'absolute',
          bottom: 7,
          right: -6,
          fontSize: 24,
          color: 'rgb(14, 75, 35)'
        }}
      />
    </Box>
  </Box>
</InputLabel>

  <Select
  value={selectedOffice}
     onChange={(e) => {
  const officeId = e.target.value;
  const office = offices.find((o) => o.id === officeId);
  setSelectedOffice(office);
  if (office) {
    fetchEmployeesByOfficeName(office.name);
  }
}}
      
    labelId="filter-label"
    defaultValue=""
    fullWidth
    // startAdornment={
    //   <TravelExploreIcon sx={{ color: "rgb(14, 75, 35)", mr: 1 }} />
    // }
    sx={{
      color: "rgb(14, 75, 35)",
      borderColor: "rgb(14, 75, 35)",
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: "rgb(14, 75, 35)",
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: "rgb(14, 75, 35)",
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: "rgb(14, 75, 35)",
      }
    }}
  >
    {offices.map((office) => (
  <MenuItem key={office.id} value={office.id}>
    {office.name}
  </MenuItem>
))}
  </Select>
</FormControl>
 {isSub_Admin &&(<Button 
onClick={()=>{setShowAddEmployee(true)}}
sx={{backgroundColor:"rgb(14,75,35)",color:'white',
  borderRadius:"30px" ,width:"11%",height:"70px",
  fontSize:'24px',fontWeight:'700'}}>اضافة موظف</Button>

)}




          </Box>
          {<ADDEmployees
          open={showAddEmployee}
          onClose={()=>{setShowAddEmployee(false)}}
                  onSuccess={() =>
                  {fetchEmployeesByOfficeName()}
                  }
          
          />}
{message && <Alert severity="success" onClose={() => setMessage(null)}>{message}</Alert>}
{error && <Alert severity="error" onClose={() => setError(null)}>{error}</Alert>}

     <TableContainer sx={{ mr: 1, backgroundColor: "transparent", boxShadow: "none",mt:6 }}>
  <Table sx={{width:"2000px", height:'88px'}}>
    <TableHead sx={{width:"2000px", height:'88px'}}>
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
  {loading ? (
    <TableCell sx={{ color: "green" }} align="center">
      <Loading />
    </TableCell>
  ) : (
    employees.map((row, index) => (
      <TableRow
        key={index}
        sx={{
          backgroundColor: "transparent",
          borderBottom: "3px solid rgb(14, 74, 35)",
        }}
      >
        <TableCell align="center">
          <Avatar
            src={row.avatar.replace("\\", "/")}
            sx={{ width: 56, height: 56, margin: "auto" }}
          />
        </TableCell>
        <TableCell align="center" sx={{ fontWeight: 700, fontSize: "16px" }}>
          {row.name}
        </TableCell>
        <TableCell align="center" sx={{ fontWeight: 700, fontSize: "16px" }}>
          {row.phone}
        </TableCell>
        <TableCell align="center" sx={{ fontWeight: 700, fontSize: "16px" }}>
          {row.office}
        </TableCell>
        <TableCell align="center" sx={{ fontWeight: 700, fontSize: "16px" }}>
          {row.role}
        </TableCell>
        <TableCell align="center" sx={{ fontWeight: 700, fontSize: "16px" }}>
  {row.handled_transactions !== null && row.handled_transactions !== undefined
    ? row.handled_transactions
    : "ـ"}
</TableCell>
        <TableCell align="center" sx={{color:row.status === 1?"green" :"red" ,fontWeight: 700, fontSize: "16px" }}>
          {row.status === 1 ? "فعال" : "غير فعال"}
        </TableCell>
        <TableCell align="center" sx={{ fontWeight: 700, fontSize: "16px" }}>
          {new Date(row["date join"]).toLocaleDateString("ar-EG")}
        </TableCell>
        <TableCell align="center">
          <IconButton
         
  onClick={() => {
  console.log(row.uuid);
  handleEditEmployees(row);
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
  )}
</TableBody>


  </Table>
</TableContainer>



      </Box>




<EditEmployeeModal
  open={showEditEmployee}
  onClose={() => setShowEditEmployee(false)}
  id={selectedEmployee?.id} 
  employe={selectedEmployee}
  onUpdate={(success) => {
    if (success) {
      setMessage("✅ تم تعديل الموظف بنجاح");
      fetchEmployeesByOfficeName(selectedOffice?.name);
    } else {
      setError("❌ فشل تعديل الموظف");
    }
  }}
/>

    </Box>
  );
};

export default Employyes;
