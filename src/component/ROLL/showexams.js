// material-ui
import {Box,Button} from "@mui/material";

import ThirteenMpIcon from '@mui/icons-material/ThirteenMp';


import { NavLink } from "react-router-dom";

export default function ShowExams() {
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
  sx={{
    display: 'flex',
    alignItems: 'center',
    gap: -1,
    marginRight: "13%" // مسافة بين الأيقونتين
  }}
>
  {/* <EditIcon sx={{ fontSize: 28, cursor: 'pointer' }} /> */}
  <ThirteenMpIcon sx={{ fontSize: 28,marginRight: "3%" }} />
</Box>          <h2
            style={{ fontSize: "24px", fontWeight: "700", marginRight: "3%" }}>
          
            {" "}
            الامتحانات{" "}
          </h2>
        </Button>


      </NavLink>
      </>
   )}