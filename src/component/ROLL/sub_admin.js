// material-ui
import Button from "@mui/material/Button";

import GroupIcon from "@mui/icons-material/Group";


import { NavLink } from "react-router-dom";

export default function Sub_Admin() {
  const currentPath = window.location.pathname;



  return (
   

       <><NavLink to="/employees" style={{ textDecoration: "none", width: "100%" }}>
        <Button
          sx={{
            justifyContent: "flex-start",
            backgroundColor:
              currentPath === "/employees" ? "rgb(14, 74, 35)" : "transparent",
            color: currentPath === "/employees" ? "white" : "black",
            fontWeight: "600",
            fontSize: "16px",
            width: "381px",
            height: "78px",
            transition: "1%",
            "&:hover": {
              backgroundColor: "rgb(14, 74, 35)",
              color: "white",
              width: "140%",
            },
          }}
        >
          <GroupIcon sx={{ marginRight: 7, fontSize: 32 }} />
          <h2
            style={{ fontSize: "24px", fontWeight: "700", marginRight: "3%" }}
          >
            {" "}
            الموظفين 
          </h2>
        </Button>
      </NavLink></>
   )}