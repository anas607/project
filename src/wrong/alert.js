// ErrorAlert.jsx
import React from "react";
import { Backdrop, Alert, Box } from "@mui/material";

export default function ErrorAlert({ open, message, onClose }) {
  return (
    <Backdrop
      open={open}
      onClick={onClose}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "rgba(0,0,0,0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        fontSize: "32px",
      }}
    >
      <Box onClick={(e) => e.stopPropagation()}>
        <Alert
          variant="outlined"
          severity="error"
          sx={{ fontSize: "1.5rem", fontWeight: "700" }}
        >
          {message}
        </Alert>
      </Box>
    </Backdrop>
  );
}
