// material-ui
import { Typography } from "@mui/material";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";


// react-router
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ALL from "../../../ROLL/all";
import HeadDeywan from "../../../ROLL/headofdeywan";
import Sub_Admin from "../../../ROLL/sub_admin";
import Sub_Sxam from "../../../ROLL/Sub_Exam";
import ShowExams from "../../../ROLL/showexams";
import AdminFile from "../../../ROLL/admin/showFile";
import AdminAdv from "../../../ROLL/admin/showAdresvet";
import SubAndManager from "../../../ROLL/exams/manager&sub";
import ShowEmployees from "../../../ROLL/showemployyess";
import ShowArchive from "../../../ROLL/showArchive";

export default function Navgation() {
  const currentPath = window.location.pathname;
  const state = useSelector((state) => state.user);
const isdeywan=state.roles[0].includes("رئيس الديوان")
const isSub_Admin=state.roles[0].includes("نائب المدير")
const isSub_exam=state.roles?.some(role => role ==="رئيس الامتحانات")
const ismanger_exam=state.roles?.some(role => role ==="موظف الامتحانات")
  const isAdmin = state.roles?.some(role => role === "المدير")


  return (
    <>
      <ALL/>
{isdeywan ? (
 <HeadDeywan/>
    
    ): ""}

      {isSub_Admin || isAdmin? (
       <Sub_Admin/>
    
    ) : (
   <ShowEmployees/>)}
     
     <ShowArchive/>
      {isSub_exam? (
       <Sub_Sxam/>
      
      ):""}
      { isSub_exam ||ismanger_exam || isSub_Admin ||isAdmin? (
       <ShowExams/>) :"" }
    
      {isAdmin?
    <AdminFile/>
      :""}
      {isSub_exam ||ismanger_exam ? (
       <SubAndManager/>
    ):""}
     
       {isAdmin?
      <AdminAdv/>
      :""}
      
     
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // marginTop: isSub_exam ? "3%" :isdeywan? "35%":isSub_Admin? "40%" :isAdmin? "5%":"65%",
          position: 'absolute',
  bottom: 0,
        }}
      >
        <Avatar
          sx={{
            width: 72,
            height: 72,
            color: "black",
            fontWeight: "900",
            fontSize: "22px",
            borderBottom: "3px solid transparent",
            mr: 6,
          }}
          src={state.user.Avatar}
        />

        <Box sx={{ mr: 1 }}>
          <Typography
            variant="body2"
            color="black"
            sx={{ fontSize: "24px", fontWeight: "700" }}
          >
            {state.user.name}
          </Typography>

          <Typography
            sx={{ fontSize: "18px", fontWeight: "700" }}
            variant="body2"
            color="black"
          >
            {state.roles[0]}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
