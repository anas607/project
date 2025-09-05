// ConnectionBanner.jsx
import { useSelector } from "react-redux";
import { Box, Button, Typography, Slide } from "@mui/material";
import WifiOffIcon from "@mui/icons-material/WifiOff";

export default function ConnectionBanner() {
  const isOnline = useSelector((state) => state.connection.isOnline);

  const handleRetry = () => {
    // مجرد محاولة لإعادة تحميل الصفحة أو إعادة الطلبات
    window.location.reload();
  };

  return (
    <Slide direction="down" in={!isOnline} mountOnEnter unmountOnExit>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          bgcolor: "error.main",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 3,
          py: 1.5,
          zIndex: 2000,
          boxShadow: 3,
        }}
      >
        {/* أيقونة ورسالة */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <WifiOffIcon />
          <Typography sx={{ fontWeight: "bold" }}>
            🚫 لا يوجد اتصال بالشابكة حالياً
          </Typography>
        </Box>

        {/* زر المحاولة */}
        <Button
          onClick={handleRetry}
          variant="contained"
          sx={{
            bgcolor: "white",
            color: "error.main",
            fontWeight: "bold",
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
        >
          معاودة الاتصال
        </Button>
      </Box>
    </Slide>
  );
}
