import { Card, Drawer, Box } from "@mui/material";
import Navgation from "./navgation";
import { useTheme, useMediaQuery } from "@mui/material";

export default function SidBar({ open, onClose }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // موبايل وتابلت صغيرة
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));  // شاشات أكبر

  const sidebarContent = (
    <Card
      sx={{
        width: { xs: "250px", sm: "300px", md: "320px", lg: "380px" },
        height: "100vh",
        backgroundColor: "white",
        borderRadius: { xs: 0, md: "8px" },
        boxShadow: { xs: "none", md: "0px 4px 12px rgba(0,0,0,0.1)" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: { xs: 2, md: 4 },
      }}
    >
      <img
        src="logo.png"
        style={{
          width: isMobile ? "120px" : "153px",
          height: isMobile ? "120px" : "151px",
          marginTop: isMobile ? "5%" : "10%",
        }}
        alt="logo"
      />

      {/* Navigation Items */}
      <Box sx={{ mt: { xs: 3, md: 5 }, width: "100%" }}>
        <Navgation />
      </Box>
    </Card>
  );

  return (
    <>
      {/* على الموبايل: استخدم Drawer */}
      {isMobile ? (
        <Drawer anchor="left" open={open} onClose={onClose}>
          {sidebarContent}
        </Drawer>
      ) : (
        // على الديسكتوب: Sidebar ثابت
        <Box sx={{ flexShrink: 0 }}>{sidebarContent}</Box>
      )}
    </>
  );
}
