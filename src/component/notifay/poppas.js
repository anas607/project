import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar, Box, IconButton, List, ListItem, Paper, Popper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { requestForToken } from "./forToken";
import { onMessage } from "firebase/messaging";
import { messaging } from "./firebaseConfig";




export default function Popaps() {
  const [showNotifications, setShowNotifications] = useState(false);
  
    const [notifications, setNotifications] = useState([]);

  const [hasNew, setHasNew] = useState(false);
const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
 
  const notifBtnRef = useRef(null);

 
  const handleToggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  useEffect(() => {
  requestForToken(); // تسجيل الجهاز

  onMessage(messaging, (payload) => {
    const { notification, data } = payload;

    setNotifications(prev => [
      {
        id: data?.announcement_id || Date.now(),
        avatar: "/default-avatar.jpg", // أو avatar من data
        message: notification?.body || "لديك إشعار جديد"
      },
      ...prev
    ]);

    setHasNew(true); // إشعار جديد → الدويرة الحمراء تظهر
  });
}, []);

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
        <ListItem key={notif.id} sx={{ display: "flex", alignItems: "center", gap: 2, px: 0, py: 1.5, borderBottom: "1px solid #e0e0e0" }}>
          <Avatar src={notif.avatar} sx={{ width: 40, height: 40 }} />
          <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
            {notif.message}
          </Typography>
        </ListItem>
      ))}
    </List>
  </Paper>
</Popper>

</>)}