import { CircularProgress, Box, Backdrop } from "@mui/material";

export default function LoadingOverlay({ open }) {
  return (
    <Backdrop
      sx={{
        color: "#00e676",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "rgba(0, 0, 0, 0.3)", // شفاف
      }}
      open={open}
    >
      <Box>
        <CircularProgress size={80} thickness={4} sx={{ color: "#00e676" }} />
      </Box>
    </Backdrop>
  );
}
