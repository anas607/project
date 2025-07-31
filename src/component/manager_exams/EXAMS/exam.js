import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SidBar from "../../deywan/dachboard/SIDEBAR/sidbar";
import TabsExam from "../bank/tabs/tabsexam";
import Mark from "./mark";
import Program from "./program,";
import Speclist from "./specilise";
import Appar from "../../deywan/dachboard/SIDEBAR/appar";
import { useState } from "react";
import AddProgramForm from "./event/ADDPROGRAM";
import ShowProgram from "./event/showprogram";
import ShowDetials from "./event/showdetials";



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

export default function Exam() {
    const[addprogram,setAddProgram]=useState(false)
        const[showdetials,setShowDetials]=useState(false)
const [selectedUuid, setSelectedUuid] = useState(null);

  const[showprogram,setShowProgram]=useState(false)
  const [value, setValue] = React.useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleToggleNotifications = () => {
    // أي منطق لفتح الإشعارات
  };
 if (addprogram) {
    return <AddProgramForm setAddProgram={setAddProgram} />;
  }
   if (showprogram) {
    return < ShowProgram setShowDetials={setShowDetials} setShowProgram={setShowProgram}  id={selectedUuid} />;
  }
  if (showdetials) {
    return < ShowDetials   showdetials={showdetials}
  setShowDetials={setShowDetials}
  setShowProgram={setShowProgram}
   id={selectedUuid}
  />;
  }
  return (
    <Box sx={{ display: "flex", height: "100vh", direction: "rtl", backgroundColor: "rgb(233,232,232)" }}>
      
      <SidBar />

      <Box sx={{ flex: 1, p: 2 }}>
         <Appar/>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",  }}>
         
          {/* التابات */}
      <TabsExam value={value} handleChange={handleChange} />

{value===2 ?(<Button  onClick={()=>{setAddProgram(true)}}  variant="contained" color="rgb(14,74,35)"  sx={{borderRadius:"30px" ,width:"11%",height:"55px",backgroundColor:"rgb(14,74,35)",color:"white",fontSize:'24px',fontWeight:'700',mr:60, }}>
                      اضافة برنامج 
                      </Button>):""}
          

          {/* الزرين */}
         
        </Box>

        {/* محتوى التابات */}
        <Bank value={value} index={0}>
            <Mark/>
      </Bank>
        <Bank value={value} index={1}>
          <Speclist/>  
       </Bank>
        <Bank value={value} index={2}>
  <Program  addprogram={addprogram}
    setAddProgram={setAddProgram}
    showprogram={showprogram}
    setShowProgram={setShowProgram}
    showdetials={showdetials}
    setShowDetials={setShowDetials}
     id={selectedUuid}
       setSelectedUuid={setSelectedUuid}

  />
</Bank>

      </Box>
    </Box>
  );
}
