import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SidBar from "../../deywan/dachboard/SIDEBAR/sidbar";
import TabsComponen from "./tabs/tabs";
import ADDQUSTION from "./add";
import Exel from "./exel";

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
            <IconButton
              ref={notifBtnRef}
              onClick={handleToggleNotifications}
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

            <IconButton
              onClick={() => setShowLogOut(true)}
              sx={{
                border: "1px solid rgba(212, 208, 212, 0.31)",
                borderRadius: "50px",
                padding: "8px",
                width: "64px",
                height: "64px",
                backgroundColor: "rgb(71, 59, 68)",
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              <PowerSettingsNewIcon sx={{ fontSize: "30px" }} />
            </IconButton>
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
