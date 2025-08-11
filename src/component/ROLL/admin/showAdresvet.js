// material-ui
import {Box,Button} from "@mui/material";

          import FiveKIcon from '@mui/icons-material/FiveK';


import { NavLink } from "react-router-dom";

export default function AdminAdv() {
  const currentPath = window.location.pathname;



  return (
   

     <><NavLink to="/Advertisements" style={{ textDecoration: "none", width: "100%" }}>
        <Button
          sx={{
            justifyContent: "flex-start",
            backgroundColor:
              currentPath === "/Advertisements" ? "rgb(14, 74, 35)" : "transparent",
            color: currentPath === "/Advertisements" ? "white" : "black",
            fontWeight: "600",
            fontSize: "16px",
            transition: "1%",
            marginBottom: "2%",
            width: "381px",
            height: "78px",
            "&:hover": {
              backgroundColor: "rgb(14, 74, 35)",
              color: "white",
              width: "140%",
            },
          }}
        >
          <FiveKIcon sx={{ marginRight: 7, fontSize: 32 }} />
          <h2
            style={{ fontSize: "24px", fontWeight: "700", marginRight: "3%" }}
          >
            {" "}
            الاعلانات{" "}
          </h2>
        </Button>
      </NavLink></>
   )}