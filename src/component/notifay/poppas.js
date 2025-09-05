import NotificationsIcon from "@mui/icons-material/Notifications";
import { Button, Box, IconButton, List, ListItem, Paper, Popper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { requestForToken } from "./forToken";
import { onMessage } from "firebase/messaging";
import { messaging } from "./firebaseConfig";
import { useSelector } from "react-redux";
import { patchData } from "../../API/apiService";
import { BaseUrl, Specializations, STATUS } from "../../API/api";




export default function Popaps() {
    const state = useSelector((state) => state.user);
 
    const isAdmin = state.roles?.some(role => role === "المدير")
  const [showNotifications, setShowNotifications] = useState(false);
  
    const [notifications, setNotifications] = useState([]);

  const [hasNew, setHasNew] = useState(false);
const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
 
  const notifBtnRef = useRef(null);

 
  
 useEffect(() => {
  requestForToken();

  onMessage(messaging, (payload) => {
    const { notification, data } = payload;

    setNotifications(prev => [
      {
        id: data?.specialization_id || Date.now(),
         type: data?.type || "general",   //
        title: notification?.title || "إشعار جديد",
        body: notification?.body || "لديك إشعار جديد",
        actionRequired: data?.action_required === "true" || data?.action_required === true
      },
      ...prev
    ]);

    setHasNew(true);
  });
}, []);
 async function UnderReview(notif, decision) {
  try {
    let url = "";
    let body = { status: decision };

    switch (notif.type) {
      case "specialization":
        url = `${BaseUrl}${Specializations}${STATUS}${notif.id}`;
        break;

      case "question":
        url = `${BaseUrl}/questions/status/${notif.id}`;
        break;

      default:
        console.warn("نوع غير معروف:", notif.type);
        return;
    }

    const res = await patchData(url, body);
    console.log("Decision Response:", res);

    // بعد النجاح نشيل الإشعار
    setNotifications(prev => prev.filter(n => n.id !== notif.id));
  } catch (err) {
    console.log(err);
  }
}



  return (
    <>
<IconButton
  ref={notifBtnRef}
  onClick={() => {
    setShowNotifications(prev => !prev);
    setHasNew(false); // لما يفتح الـ Popper، تختفي الدويرة
  }}
  sx={{
    border: "1px solid rgba(212, 208, 212, 0.31)",
    position: "relative",
    borderRadius: "50px",
    width: { xs: 40, sm: 60, md: 70 },
    height: { xs: 40, sm: 60, md: 70 },
    padding: "8px",
    backgroundColor: (theme) => theme.palette.primary.main,
    color: (theme) => theme.palette.secondary.main,
  }}
>
  <NotificationsIcon sx={{ fontSize: { xs: 22, sm: 32, md: 40 } }} />

  {hasNew && (
    <Box
      sx={{
        position: "absolute",
        top: 8,
        right: 8,
        width: 12,
        height: 12,
        bgcolor: "red",
        borderRadius: "50%",
        border: "2px solid white",
      }}
    />
  )}
</IconButton>

<Popper
  open={showNotifications}
  anchorEl={notifBtnRef.current}
  placement="bottom-start"
  sx={{ zIndex: 1300 }}
>
  <Paper sx={{ width: 350, maxHeight: 400, overflowY: "auto", p: 2, borderRadius: 2, direction: "rtl" }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
      الإشعارات
    </Typography>

   <List>
  {notifications.map((notif) => (
    <ListItem 
      key={notif.id} 
      sx={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "flex-start", 
        px: 0, py: 1.5, 
        borderBottom: "1px solid #e0e0e0" 
      }}
    >
      <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
        {notif.title}
      </Typography>
      <Typography sx={{ fontSize: 14, color: "text.secondary", mb: 1 }}>
        {notif.body}
      </Typography>

      {isAdmin && notif.actionRequired && (
        <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
          <Button 
            variant="contained" 
            color="success" 
            size="small"
  onClick={() => UnderReview(notif, "مقبول")}
          >
            قبول
          </Button>
          <Button 
            variant="outlined" 
            color="error" 
            size="small"
  onClick={() => UnderReview(notif, "مرفوض")}
          >
            رفض
          </Button>
        </Box>
      )}
    </ListItem>
  ))}
</List>

  </Paper>
</Popper>

</>)}