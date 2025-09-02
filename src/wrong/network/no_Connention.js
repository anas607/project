import { useEffect, useState } from "react";
import { Snackbar, Alert, Box } from "@mui/material";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import WifiIcon from "@mui/icons-material/Wifi";

export default function NetworkStatus() {
  const [status, setStatus] = useState({
    online: navigator.onLine,
    open: false,
    message: "",
    severity: "info",
  });

  useEffect(() => {
    const handleOnline = () => {
      setStatus({
        online: true,
        open: true,
        message: "تمت استعادة الاتصال بالانترنت",
        severity: "success",
      });
    };

    const handleOffline = () => {
      setStatus({
        online: false,
        open: true,
        message: "انت غير متصل بالانترنت حاليا",
        severity: "error",
      });
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // لإظهار الحالة الحالية عند تحميل الصفحة
    if (!navigator.onLine) handleOffline();

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleClose = () => {
    setStatus((prev) => ({ ...prev, open: false }));
  };

  return (
    <Snackbar
      open={status.open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={status.severity}
        icon={status.online ? <WifiIcon /> : <WifiOffIcon />}
        sx={{
          width: "100%",
          fontSize: "18px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {status.message}
      </Alert>
    </Snackbar>
  );
}
