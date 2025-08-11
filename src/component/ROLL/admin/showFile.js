// material-ui
import {Box,Button} from "@mui/material";

import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";


import { NavLink } from "react-router-dom";

export default function AdminFile() {
  const currentPath = window.location.pathname;



  return (
   

     <><NavLink to="/AllFiles" style={{ textDecoration: "none", width: "100%" }}>
        <Button
          sx={{
            justifyContent: "flex-start",
            backgroundColor:
              currentPath === "/AllFiles" ? "rgb(14, 74, 35)" : "transparent",
            color: currentPath === "/AllFiles" ? "white" : "black",
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
          <InsertDriveFileIcon sx={{ marginRight: 7, fontSize: 32 }} />
          <h2
            style={{ fontSize: "24px", fontWeight: "700", marginRight: "3%" }}
          >
            {" "}
            المعاملات{" "}
          </h2>
        </Button>
      </NavLink></>
   )}