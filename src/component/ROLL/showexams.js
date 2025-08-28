// material-ui
import {Box,Button} from "@mui/material";

import ThirteenMpIcon from '@mui/icons-material/ThirteenMp';


import { NavLink } from "react-router-dom";

export default function ShowExams({ device}) {
  const currentPath = window.location.pathname;



  return (
   

    <> <NavLink to="/exams" style={{ textDecoration: "none", width: "100%" }}>
        <Button
          sx={{
            justifyContent: "flex-start",
            backgroundColor:
              currentPath === "/exams" ? "rgb(14, 74, 35)" : "transparent",
            color: currentPath === "/exams" ? "white" : "black",
            fontWeight: "600",
          fontSize: device.isMobile ? "14px" : "16px",
            marginBottom: "2%",
            transition: "1%",
            width: "381px",
height: device.isMobile ? "60px" : "78px",
          padding: device.isMobile ? "8px" : "16px",            "&:hover": {
              backgroundColor: "rgb(14, 74, 35)",
              color: "white",
              width: "140%",
            },
          }}
        >
         
<Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    gap: -1,
    marginRight: "13%" // مسافة بين الأيقونتين
  }}
>
  {/* <EditIcon sx={{ fontSize: 28, cursor: 'pointer' }} /> */}
  <ThirteenMpIcon sx={{   marginRight: device.isMobile ? 2 : 7, 
          fontSize: device.isMobile ? 24 : 32  }} />
</Box>          <h2
            
 style={{ fontSize: device.isMobile ? "18px" : "24px", 
          fontWeight: "700", 
          marginRight: device.isMobile ? "2%" : "3%", whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'              }}>
          
            {" "}
            الامتحانات{" "}
          </h2>
        </Button>


      </NavLink>
      </>
   )}