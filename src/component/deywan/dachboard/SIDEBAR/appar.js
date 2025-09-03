import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import { useNavigate } from "react-router-dom";

import {
  IconButton,
  Typography,
  Avatar,
  List,
  ListItem,
  Button,
  Popper,
  Paper,
} from "@mui/material";
import { useState, useRef } from "react";
import Cookies from "universal-cookie";
import LogeOut from "../../logout";
import { postData } from "../../../../API/apiService";
import { BaseUrl, EMPLOYEE, SEARCH } from "../../../../API/api";
import { useTheme, useMediaQuery } from "@mui/material";
import Popaps from "../../../notifay/poppas";



export default function Appar({ onSearch }) {
  const [search, setsearch] = useState("");

  return (
    <>
      {/* الشريط العلوي */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          marginBottom: "2%",
          height: "60px",
        }}
      >
        {/* البحث */}
      <TextField
 value={search}
      onChange={(e) => {
        setsearch(e.target.value);
        onSearch(e.target.value); // ارفع القيمة للأب
      }}
  placeholder="ابحث"
  variant="outlined"
  sx={{
    fontSize: "24px",
    fontWeight: "700",
    marginTop: "1.9%",
    mr: 0.3,
    width: "100%", // اضبط حسب احتياجك
    direction: "rtl",
    "& .MuiOutlinedInput-root": {
      borderRadius: "7px",
      fontSize: "24px",
      fontWeight: "700",
      backgroundColor: "white",
      "& fieldset": { borderColor: "rgb(250,250,250)" },
      "&:hover fieldset": { borderColor: "rgb(250,250,250)" },
      "&.Mui-focused fieldset": { borderColor: "rgb(250,250,250)" },
    },
    "& input": {
      paddingRight: "5px",
      color: "rgb(105, 105, 102)",
      fontSize: "100%",
      height: "64px",
    },
  }}
  InputProps={{
    startAdornment: (
      <IconButton> 
        <SearchIcon sx={{ color: "rgb(44, 44, 44)", fontSize: "45px" }} />
      </IconButton>
    ),
  }}
/>

        {/* زر الإشعارات */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            ml: 7,
            mt: 3,
            gap: 9,
          }}
        >
          <Popaps/>
        <LogeOut/>
        </Box>
      </Box>

      {/* بوكس الإشعارات المنبثق */}
      
      {
        // <Dialog
        //   open={showLogOut}
        //   aria-labelledby="alert-dialog-title"
        //   aria-describedby="alert-dialog-description"
        // >
        //   <DialogTitle
        //     id="alert-dialog-title"
        //     sx={{ direction: "rtl", fontSize: "24px", fontWeight: "700" }}
        //   >
        //     {"هل ترغب حقا بتسجيل الخروج؟"}
        //   </DialogTitle>
        //   <DialogContent>
        //     <DialogContentText
        //       sx={{ fontSize: "24px", fontWeight: "700" }}
        //       id="alert-dialog-description"
        //     >
        //       لن تستطبع التراجع اذا قمت بالضغط على موافق
        //     </DialogContentText>
        //   </DialogContent>
        //   <DialogActions sx={{ mr: 39 }}>
        //     <Button
        //       sx={{ color: "red", fontSize: "24px", fontWeight: "700" }}
        //       autoFocus
        //       // onClick={handleLogout}
        //     >
        //       موافق
        //     </Button>
        //     <Button
        //       onClick={() => {
        //         // setShowLogOut(false);
        //       }}
        //       sx={{
        //         color: "rgb(14,74,35)",
        //         fontSize: "24px",
        //         fontWeight: "700",
        //       }}
        //     >
        //       تراجع
        //     </Button>
        //   </DialogActions>
        // </Dialog>
      }
    </>
  );
}
