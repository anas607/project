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

 const buttonStyles = (path) => ({
    justifyContent: "flex-start",
    backgroundColor: currentPath === path ? "rgb(14, 74, 35)" : "transparent",
    color: currentPath === path ? "white" : "black",
    fontWeight: "600",
    fontSize: { xs: "12px", sm: "14px", md: "16px" }, // ✅ Responsive
    marginBottom: "2%",
    width: { xs: "100%", sm: "300px", md: "381px" },  // ✅ Responsive
    height: { xs: "50px", sm: "65px", md: "78px" },   // ✅ Responsive
    "&:hover": {
      backgroundColor: "rgb(14, 74, 35)",
      color: "white",
      width: { xs: "100%", sm: "110%", md: "140%" },
    },
  });
  const iconStyles = {
    marginRight: { xs: 2, sm: 4, md: 7 },
    fontSize: { xs: 20, sm: 26, md: 32 }, // ✅ Responsive
  };

  const textStyles = {
    fontSize: { xs: "14px", sm: "18px", md: "24px" }, // ✅ Responsive
    fontWeight: "700",
    marginRight: "3%",
  };

  return (
    <>
      <NavLink to="/dachbord" style={{ textDecoration: "none", width: "100%" }}>
        <Button sx={buttonStyles("/dachbord")}>
          <DashboardIcon sx={iconStyles} />
          <Typography component="span" sx={textStyles}>
            لوحة التحكم
          </Typography>
        </Button>
      </NavLink>
       <NavLink to="/outer" style={{ textDecoration: "none", width: "100%" }}>
        <Button sx={buttonStyles("/outer")}>
          <OutgoingMailIcon sx={{ ...iconStyles, fontSize: { xs: 22, sm: 28, md: 35 } }} />
          <Typography component="span" sx={textStyles}>
            البريد الخارجي
          </Typography>
        </Button>
      </NavLink>
     <NavLink to="/enter" style={{ textDecoration: "none", width: "100%" }}>
        <Button sx={buttonStyles("/enter")}>
          <Box className="relative w-fit inline-block">
            <MailIcon sx={iconStyles} />
            <Box
              sx={{
                position: "absolute",
                top: "30%",
                right: 35,
                width: { xs: 16, sm: 20, md: 22 }, // ✅ Responsive
                height: { xs: 16, sm: 20, md: 22 }, // ✅ Responsive
                borderRadius: "50%",
                bgcolor: currentPath === "/enter" ? "rgb(14, 74, 35)" : "white",
                border:
                  currentPath === "/enter"
                    ? "2px solid rgb(14, 74, 35)"
                    : "2px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <KeyboardBackspaceIcon
                sx={{
                  fontSize: { xs: "10px", sm: "12px", md: "16px" }, // ✅ Responsive
                  opacity: currentPath === "/enter" ? 1 : 0.9,
                  color: currentPath === "/enter" ? "white" : "black",
                }}
              />
            </Box>
          </Box>
          <Typography component="span" sx={textStyles}>
            البريد الداخلي
          </Typography>
        </Button>
      </NavLink></>)}