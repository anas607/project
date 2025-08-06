import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import FlashlightOnIcon from '@mui/icons-material/FlashlightOn';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';import { useState } from "react";
import SidBar from "../../deywan/dachboard/SIDEBAR/sidbar";
import Appar from "../../deywan/dachboard/SIDEBAR/appar";
import TabsRequst from "../bank/tabs/requesttab";
import Incoming from "./incoming";
import Finished from "./finished";
import { Box, Button, Select, MenuItem, Typography, IconButton,Avatar,
  FormControl,
  TableBody,
  InputLabel,
  TableContainer,
  TableHead,
  TableRow, } from "@mui/material";
import { useSelector } from "react-redux";
import { SidBarComponent } from "../../deywan/manger_deywan/SIDEBAR/sidbar";
import DoctorRequestDetails from "./DoctorRequestDetails";


function Bank(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

Bank.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Request() {
  const [selectedUuid, setSelectedUuid] = useState(null);
  
  const [value, setValue] = React.useState(0);
    const[showRequest,setShowRequest]=useState(false)
  
 const state = useSelector((state) => state.user);
const isSub_Admin=state.roles[0].includes("نائب المدير")
const isSub_exam=state.roles[0].includes("رئيس الامتحانات")
const ismanger_exam=state.roles[0].includes("موظف الامتحانات")
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (showRequest) {
  

      return < DoctorRequestDetails  setShowRequest={setShowRequest} uuid={selectedUuid}  />;
    }

  return (
    <Box sx={{ display: "flex", height: "100vh", direction: "rtl", backgroundColor: "rgb(233,232,232)" }}>
      
       {isSub_exam?<SidBar /> :<SidBarComponent /> } 
      

      <Box sx={{ flex: 1, p: 2 }}>
         <Appar/>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",  }}>
         
          {/* التابات */}
<Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 72 }}>
  <TabsRequst value={value} handleChange={handleChange} />












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
  {/* النص والأيقونة جنب بعض */}
  <Box sx={{ display: 'flex',gap: 3  }}>
    تصفية حسب الاختصاص

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
    <MenuItem value="2024">2024</MenuItem>
    <MenuItem value="2025">2025</MenuItem>
    <MenuItem value="2026">2026</MenuItem>
  </Select>
</FormControl>

 </Box>

          

          {/* الزرين */}
         
        </Box>

        {/* محتوى التابات */}
        <Bank value={value} index={0}>
            <Incoming    
             showRequest={showRequest}
    setShowRequest={setShowRequest}
       setSelectedUuid={setSelectedUuid}
       selectedUuid={selectedUuid}
            
            />
      </Bank>
        <Bank value={value} index={1}>
          <Finished/>  
       </Bank>
        
      </Box>
    </Box>
  );
}
