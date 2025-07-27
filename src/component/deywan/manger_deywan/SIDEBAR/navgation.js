// material-ui
import Button from '@mui/material/Button';
import { Typography} from '@mui/material';

import MailIcon from '@mui/icons-material/Mail';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Box from '@mui/material/Box';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import GroupRemoveOutlinedIcon from '@mui/icons-material/GroupRemoveOutlined';
import Avatar from '@mui/material/Avatar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import Inventory2Icon from '@mui/icons-material/Inventory2';

import CloudIcon from '@mui/icons-material/Cloud';
// react-router
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navgation() {
  const currentPath = window.location.pathname;
const state = useSelector((state) => state.user);
  return (
    <>
      
 <NavLink to="/outer_emdewan" style={{ textDecoration: "none", width: "100%" }}>
         <Button
           sx={{
             justifyContent: "flex-start",
             backgroundColor:
               currentPath === "/outer_emdewan" ? "rgb(14, 74, 35)" : "transparent",
             color: currentPath === "/outer_emdewan" ? "white" : "black",
             fontWeight: "600",
             fontSize: "16px",
             marginBottom: "2%",mt:"13%",
             width: "381px",
             height: "78px",
             transition: "1%",
             position: "relative",
             "&:hover": {
               backgroundColor: "rgb(14, 74, 35)",
               color: "white",
               width: "140%",
               "& .back-icon": {
                 color: "black",
                 opacity: 1,
               },
             },
           }}
         >
           <div className="relative w-fit inline-block">
             {/* أيقونة الرسالة */}
             <MailIcon sx={{ fontSize: 32, marginRight: 7 }} />
 
             {/* الدائرة على يمين الأيقونة مباشرة */}
             <Box
               sx={{
                 position: "absolute",
                 top: "30%",
                 right: 45,
                 width: 22,
                 height: 22,
                 borderRadius: "50%",
                 bgcolor: currentPath === "/outer_emdewan" ? "rgb(14, 74, 35)" : "white",
                 border:
                   currentPath === "/outer_emdewan"
                     ? "2px solid rgb(14, 74, 35)"
                     : "2px solid white",
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "center",
                 zIndex: 10,
                 transition: "all 0.2s ease-in-out",
 
                 "&:hover": {
                   bgcolor: "rgb(14, 74, 35)", // الأخضر عند الهوفر
                   border: "2px solid rgb(14, 74, 35)",
 
                   "& svg": {
                     color: "white", // يخلي السهم أبيض وقت الهوفر
                   },
                 },
               }}
             >
               {/* السهم داخل الدائرة */}
               <KeyboardBackspaceIcon
                 sx={{
                   fontSize: 14,
                   color: currentPath === "/outer_emdewan" ? "white" : "black",
                   opacity: currentPath === "/outer_emdewan" ? 1 : 0.9,
                   transform: "rotate(180deg)", // إذا بدك يوجه يمين
                 }}
               />
             </Box>
           </div>
 
           <h2
             style={{ fontSize: "24px", fontWeight: "700", marginRight: "3%" }}
           >
             {" "}
             البريد الخارجي
           </h2>
         </Button>
       </NavLink>
       <NavLink to="/enter_emdewan" style={{ textDecoration: "none", width: "100%" }}>
         <Button
           sx={{
             justifyContent: "flex-start",
             backgroundColor:
               currentPath === "/enter_emdewan" ? "rgb(14, 74, 35)" : "transparent",
             color: currentPath === "/enter_emdewan" ? "white" : "black",
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
           <div className="relative w-fit inline-block">
             <MailIcon sx={{ marginRight: 7, fontSize: 32 }} />
             <Box
               sx={{
                 position: "absolute",
                 top: "30%",
                 right: 45,
                 width: 22,
                 height: 22,
                 borderRadius: "50%",
                 bgcolor: currentPath === "/enter_emdewan" ? "rgb(14, 74, 35)" : "white",
                 border:
                   currentPath === "/enter_emdewan"
                     ? "2px solid rgb(14, 74, 35)"
                     : "2px solid white",
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "center",
                 zIndex: 10,
                 transition: "all 0.2s ease-in-out",
 
                 "&:hover": {
                   bgcolor: "rgb(14, 74, 35)", // الأخضر عند الهوفر
                   border: "2px solid rgb(14, 74, 35)",
 
                   "& svg": {
                     color: "white", // يخلي السهم أبيض وقت الهوفر
                   },
                 },
               }}
             >
               <KeyboardBackspaceIcon
                 style={{
                   position: "absolute",
                   right: "10",
                   strokeWidth: 0.1,
                   fontSize: "16px",
 
                   opacity: currentPath === "/enter_emdewan" ? 1 : 0.9,
                   color: currentPath === "/enter_emdewan" ? "white" : "black",
                 }}
               />
             </Box>
           </div>
           <h2
             style={{ fontSize: "24px", fontWeight: "700", marginRight: "3%" }}
           >
             {" "}
             البريد الداخلي
           </h2>
         </Button>
       </NavLink>

     

 
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "119%",
          mr: -10,
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
