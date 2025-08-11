// material-ui
import Button from "@mui/material/Button";

import AssignmentIcon from '@mui/icons-material/Assignment';import CloudIcon from "@mui/icons-material/Cloud";
import Box from "@mui/material/Box";

import DashboardIcon from "@mui/icons-material/Dashboard";

import { NavLink } from "react-router-dom";

export default function SubAndManager() {
  const currentPath = window.location.pathname;



  return (
     <> <NavLink to="/Requests" style={{ textDecoration: "none", width: "100%" }}>
        <Button
          sx={{
            justifyContent: "flex-start",
            backgroundColor:
              currentPath === "/Requests" ? "rgb(14, 74, 35)" : "transparent",
            color: currentPath === "/Requests" ? "white" : "black",
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
         
<AssignmentIcon sx={{ marginRight: 7, fontSize: 32 }} />
          <h2
            style={{ fontSize: "24px", fontWeight: "700", marginRight: "3%" }}>
            {" "}
            طلبات الامتحان{" "}
          </h2>
        </Button>
      </NavLink></>)}