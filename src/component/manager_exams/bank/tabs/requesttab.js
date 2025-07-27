import { Tabs, Tab, Box } from "@mui/material";

export default function TabsRequst({ value, handleChange }) {
  return (
    <Box
      sx={{
        width: "fit-content",
        minWidth: "700px",
        position: "relative",
      }}
    >
      {/* الخط الرمادي الأساسي */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "6px",
          backgroundColor: "#ccc",
          zIndex: 0,
          borderRadius: 2,
        }}
      />

      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          gap: 6,
          zIndex: 1,
          position: "relative",
          "& .MuiTabs-indicator": {
            backgroundColor: "rgb(14,75,35)",
            height: "8px",
            bottom: -3,
            borderRadius: 2,
            zIndex: 2,
          },
        }}
      >
        <Tab
          label=" الطلبات الواردة"
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            minWidth: "auto",
            mx: 2,
            px: 2,
            pb: 2,
            color: value === 0 ? "rgb(14,75,35)" : "#888",
            position: "relative",
            zIndex: 2,
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -3,
              left: 0,
              right: 0,
              height: "8px",
              backgroundColor: "#999",
              borderRadius: 2,
              display: value === 0 ? "none" : "block",
            },
          }}
        />
        <Tab
          label="  الطلبات المنتهية"
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            minWidth: "auto",
            mx: 2,
            px: 2,
            pb: 2,
            color: value === 1 ? "rgb(14,75,35)" : "#888",
            position: "relative",
            zIndex: 2,
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -3,
              left: 0,
              right: 0,
              height: "8px",
              backgroundColor: "#999",
              borderRadius: 2,
              display: value === 1 ? "none" : "block",
            },
          }}
        />
      </Tabs>
    </Box>
  );
}
