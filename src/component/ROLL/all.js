// material-ui
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import OutgoingMailIcon from '@mui/icons-material/OutgoingMail';
import MailIcon from "@mui/icons-material/Mail";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Box from "@mui/material/Box";

import DashboardIcon from "@mui/icons-material/Dashboard";

import { NavLink } from "react-router-dom";

export default function ALL() {
  const currentPath = window.location.pathname;



  return (
    <>
      <NavLink to="/dachbord" style={{ textDecoration: "none", width: "100%" }}>
        <Button
          sx={{
            justifyContent: "flex-start",
            backgroundColor:
              currentPath === "/dachbord" ? "rgb(14, 74, 35)" : "transparent",
            color: currentPath === "/dachbord" ? "white" : "black",
            fontWeight: "600",
            fontSize: "16px",
            mt: "-1%",
            transition: "1%",
            marginBottom: "2%",
            marginTop: "13%",
            width: "381px",
            height: "78px",
            "&:hover": {
              backgroundColor: "rgb(14, 74, 35)",
              color: "white",
              width: "140%",
            },
          }}
        >
          <DashboardIcon sx={{ marginRight: 7, fontSize: 32 }} />
          <h2
            style={{ fontSize: "24px", fontWeight: "700", marginRight: "3%" }}
          >
            {" "}
            لوحة التحكم
          </h2>
        </Button>
      </NavLink>
      <NavLink to="/outer" style={{ textDecoration: "none", width: "100%" }}>
        <Button
          sx={{
            justifyContent: "flex-start",
            backgroundColor:
              currentPath === "/outer" ? "rgb(14, 74, 35)" : "transparent",
            color: currentPath === "/outer" ? "white" : "black",
            fontWeight: "600",
            fontSize: "16px",
            marginBottom: "2%",
            width: "381px",
            height: "78px",
            transition: "1%",
            position: "relative",
            "&:hover": {
              backgroundColor: "rgb(14, 74, 35)",
              color: "white",
              width: "140%",
              "& .back-icon": {
                color: "black",
                opacity: 1,
              },
            },
          }}
        >
         

            {/* الدائرة على يمين الأيقونة مباشرة */}
           <OutgoingMailIcon sx={{ marginRight: 7, fontSize: 35 }}/>
         

          <h2
            style={{ fontSize: "24px", fontWeight: "700", marginRight: "3%" }}
          >
            {" "}
            البريد الخارجي
          </h2>
        </Button>
      </NavLink>
      <NavLink to="/enter" style={{ textDecoration: "none", width: "100%" }}>
        <Button
          sx={{
            justifyContent: "flex-start", 
            backgroundColor:
              currentPath === "/enter" ? "rgb(14, 74, 35)" : "transparent",
            color: currentPath === "/enter" ? "white" : "black",
            fontWeight: "600",
            fontSize: "16px",
            marginBottom: "2%",
            transition: "1%",
            width: "381px",
            height: "78px",
            "&:hover": {
              backgroundColor: "rgb(14, 74, 35)",
              color: "white",
              width: "140%",
            },
          }}
        >
          <div className="relative w-fit inline-block">
            <MailIcon sx={{ marginRight: 7, fontSize: 32 }} />
            <Box
              sx={{
                position: "absolute",
                top: "30%",
                right: 45,
                width: 22,
                height: 22,
                borderRadius: "50%",
                bgcolor: currentPath === "/enter" ? "rgb(14, 74, 35)" : "white",
                border:
                  currentPath === "/enter"
                    ? "2px solid rgb(14, 74, 35)"
                    : "2px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
                transition: "all 0.2s ease-in-out",

                "&:hover": {
                  bgcolor: "rgb(14, 74, 35)", // الأخضر عند الهوفر
                  border: "2px solid rgb(14, 74, 35)",

                  "& svg": {
                    color: "white", // يخلي السهم أبيض وقت الهوفر
                  },
                },
              }}
            >
              <KeyboardBackspaceIcon
                style={{
                  position: "absolute",
                  right: "10",
                  strokeWidth: 0.1,
                  fontSize: "16px",

                  opacity: currentPath === "/enter" ? 1 : 0.9,
                  color: currentPath === "/enter" ? "white" : "black",
                }}
              />
            </Box>
          </div>
          <h2
            style={{ fontSize: "24px", fontWeight: "700", marginRight: "3%" }}
          >
            {" "}
            البريد الداخلي
          </h2>
        </Button>
      </NavLink></>)}