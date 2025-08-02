import { Box, TextField, IconButton,
 } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SidBar from "../../../deywan/dachboard/SIDEBAR/sidbar";
import LogeOut from "../../../deywan/logout"

import PropTypes from "prop-types";


import { useState } from "react";
import TabsProgram from "../../bank/tabs/programtabs";
import Candidates from "../student/Candidates";
import Advancing from "../student/advancing";









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
export default function ShowDetials({showdetials, setShowDetials, setShowProgram ,id }) {
const [value, setValue] = useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", direction: "rtl", backgroundColor: "rgb(233,232,232)" }}>
         
         <SidBar />
   
         <Box sx={{ flex: 1, p: 2 }}>
           
           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        {/* زر الرجوع */}
        <IconButton 
    onClick={() => {
  setShowDetials(false);
  setShowProgram(true);
}}
 sx={{ backgroundColor: "rgb(71, 59, 68)", color: "rgb(233,232,232)" }}>
          <ArrowBackIcon sx={{fontSize:'50px',                  transform: "rotate(180deg)", // إذا بدك يوجه يمين
}} />
        </IconButton>
    {value===1 ?(






 <TextField
          placeholder="ابحث"
          variant="outlined"
          sx={{
            fontSize: "24px",
            fontWeight: "700",
           
            mr: 0.3,
            width: "400px",
            direction: "rtl",
            "& .MuiOutlinedInput-root": {
              borderRadius: "7px",
              fontSize: "24px",
              fontWeight: "700",
              backgroundColor: "white",
              "& fieldset": { borderColor: "rgb(250,250,250)" },
              "&:hover fieldset": { borderColor: "rgb(250,250,250)" },
              "&.Mui-focused fieldset": { borderColor: "rgb(250,250,250)" },
            },
            "& input": {
              paddingRight: "5px",
              color: "rgb(105, 105, 102)",
              fontSize: "100%",
              height: "34px",
            },
          }}
          InputProps={{
            startAdornment: (
              <SearchIcon sx={{ color: "rgb(44, 44, 44)", fontSize: "45px" }} />
            ),
          }}
        />
):""}
        {/* إشعارات وخروج */}
          {/* الزرين */}
          <Box sx={{ display: "flex", gap: 3 }}>
            <IconButton
            //   ref={notifBtnRef}
            //   onClick={handleToggleNotifications}
              sx={{
                border: "1px solid rgba(212, 208, 212, 0.31)",
                borderRadius: "50px",
                width: "64px",
                height: "64px",
                padding: "8px",
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.secondary.main,
                position: "relative",
              }}
            >
              <NotificationsIcon sx={{ fontSize: "30px" }} />
              <Box
                sx={(theme) => ({
                  position: "absolute",
                  top: 18.4,
                  right: 18,
                  width: 7,
                  height: 7,
                  bgcolor: "white",
                  borderRadius: "50%",
                  border: `2px solid ${theme.palette.primary.main}`,
                })}
              />
            </IconButton>

          <LogeOut/>
          </Box>
      
      </Box>

     <Box sx={{ display: "flex", height: "100vh", direction: "rtl", backgroundColor: "rgb(233,232,232)" }}>
      
     

      <Box sx={{ flex: 1, p: 2 }}>
        
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",  }}>
         
          {/* التابات */}
<Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 72 }}>
  <TabsProgram value={value} handleChange={handleChange} />




 </Box>

          

          {/* الزرين */}
         
        </Box>

        {/* محتوى التابات */}
        <Bank value={value} index={0}>
          <Candidates  id={id}
       />
      </Bank>
        <Bank value={value} index={1}>
         <Advancing  id={id}/>
       </Bank>
        
      </Box>
    </Box>

      
     
    </Box></Box>
  );
}
