// material-ui
import {Box,Button} from "@mui/material";

import CloudIcon from "@mui/icons-material/Cloud"; import Inventory2Icon from "@mui/icons-material/Inventory2";


import { NavLink } from "react-router-dom";

export default function ShowArchive() {
  const currentPath = window.location.pathname;



  return (
   

     <>
      <NavLink to="/archiv" style={{ textDecoration: "none", width: "100%" }}>
        <Button
          sx={{
            justifyContent: "flex-start",
            backgroundColor:
              currentPath === "/archiv" ? "rgb(14, 74, 35)" : "transparent",
            color: currentPath === "/archiv" ? "white" : "black",
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
          <Box
            position="relative"
            display="inline-block"
            width={40}
            height={40}
          >
            {/* أيقونة الغيمة */}
            <Box
              position="absolute"
              bottom={-7}
              right={38}
              sx={{
                zIndex: 2, // أعلى
                pointerEvents: "none",
                backgroundColor: "transparent",
              }}
            >
              <Inventory2Icon sx={{ fontSize: 22, mr: 1 }} />
            </Box>

            {/* الغيمة - خلف السطل */}
            <Box
              position="absolute"
              top={7}
              left={1}
              sx={{
                zIndex: 1,
              }}
            >
              <CloudIcon sx={{ ml: -7, fontSize: 32 }} />
            </Box>
          </Box>

          <h2
            style={{ fontSize: "24px", fontWeight: "700", marginRight: "16%" }}
          >
            {" "}
            الارشيف{" "}
          </h2>
        </Button>
      </NavLink>
      </>
   )}