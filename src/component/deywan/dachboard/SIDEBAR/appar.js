import Box from "@mui/material/Box";
import NotificationsIcon from "@mui/icons-material/Notifications";
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

const notifications = [
  { id: 1, avatar: "/user1.jpg", message: "تمت إضافة موظف جديد" },
  { id: 2, avatar: "/user2.jpg", message: "تم تحديث البيانات بنجاح" },
  { id: 3, avatar: "/user3.jpg", message: "لديك مهمة جديدة" },
];

export default function Appar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);
  const [search, setsearch] = useState("");
  const [results, setResults] = useState([]);


async function Search(){
try{
  const response =await postData(`${BaseUrl}${SEARCH}${EMPLOYEE}`,{
    search:search
  })
 setResults(response.data);
 console.log(response)
}catch(err){
  console.log(err)
}


}



  const notifBtnRef = useRef(null);
  const navigate = useNavigate();

  function handleLogout() {
    const cookies = new Cookies();
    cookies.remove("access_token", { path: "/" });
    navigate("/login");
  }
  const handleToggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

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
  onChange={(e) => setsearch(e.target.value)}
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
      <IconButton onClick={Search}> {/* هنا ربطنا الضغط بدالة البحث */}
        <SearchIcon sx={{ color: "rgb(44, 44, 44)", fontSize: "45px" }} />
      </IconButton>
    ),
  }}
/>


        {/* زر الإشعارات */}
       <Box sx={{ display: "flex", gap: 3,mt:3 }}>
            <IconButton
              ref={notifBtnRef}
              onClick={handleToggleNotifications}
              sx={{
                border: "1px solid rgba(212, 208, 212, 0.31)",
                borderRadius: "50px",
                width: "64px",
                height: "64px",
                padding: "8px",
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.secondary.main,
                position: "relative",
              }}
            >
              <NotificationsIcon sx={{ fontSize: "30px" }} />
              <Box
                sx={(theme) => ({
                  position: "absolute",
                  top: 18.4,
                  right: 18,
                  width: 7,
                  height: 7,
                  bgcolor: "white",
                  borderRadius: "50%",
                  border: `2px solid ${theme.palette.primary.main}`,
                })}
              />
            </IconButton>

           <LogeOut/>
          </Box>
      </Box>

      {/* بوكس الإشعارات المنبثق */}
      <Popper
        open={showNotifications}
        anchorEl={notifBtnRef.current}
        placement="bottom-start"
        sx={{ zIndex: 1300 }}
      >
        <Paper
          elevation={4}
          sx={{
            width: 678,
            height: 764,
            maxHeight: 900,
            overflowY: "auto",
            borderRadius: 2,
            p: 2,
            direction: "rtl",
          }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 2, mr: 20, fontSize: "24px", fontWeight: "700",alignItems:'center' }}
          >
            الإشعارات
          </Typography>

          <List sx={{ width: "100%" }}>
            {notifications.map((notif, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  px: 0,
                  py: 1.5,
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <Avatar sx={{ height: 50, width: 50 }} src={notif.avatar} />
                <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                  {notif.message}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Popper>

      
    </>
  );
}
