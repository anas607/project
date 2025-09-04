import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import SidBar from "../../deywan/dachboard/SIDEBAR/sidbar";
import TabsComponen from "./tabs/tabs";
import ADDQUSTION from "./add";
import Exel from "./exel";
import Popaps from "../../notifay/poppas";
import LogeOut from "../../deywan/logout";

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [showLogOut, setShowLogOut] = React.useState(false);
  const notifBtnRef = React.useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleToggleNotifications = () => {
    // أي منطق لفتح الإشعارات
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", direction: "rtl", backgroundColor: "rgb(233,232,232)" }}>
      
      <SidBar />

      <Box sx={{ flex: 1, p: 2 }}>
        
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          
          {/* التابات */}
      <TabsComponen value={value} handleChange={handleChange} />


          

          {/* الزرين */}
          <Box sx={{ display: "flex", gap: 3 }}>
           <Popaps/>

           <LogeOut/>
          </Box>
        </Box>

        {/* محتوى التابات */}
        <Bank value={value} index={0}>
<ADDQUSTION/>        </Bank>
        <Bank value={value} index={1}>
<Exel/>        </Bank>
        <Bank value={value} index={2}>
          محتوى تبويب ثالث حسب رغبتك
        </Bank>
      </Box>
    </Box>
  );
}
