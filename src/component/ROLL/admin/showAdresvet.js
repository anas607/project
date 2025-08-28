// material-ui
import {Typography,Button} from "@mui/material";

          import FiveKIcon from '@mui/icons-material/FiveK';


import { NavLink } from "react-router-dom";

export default function AdminAdv() {
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
   

     <><NavLink to="/Advertisements" style={{ textDecoration: "none", width: "100%" }}>
         <Button sx={buttonStyles("/Advertisements")}>
          <FiveKIcon sx={iconStyles} />
          <Typography component="span" sx={textStyles}>
الاعلانات          </Typography>
        </Button>
      </NavLink></>
   )}