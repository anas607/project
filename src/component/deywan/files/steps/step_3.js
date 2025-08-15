import { useDispatch } from "react-redux";
import { addElement } from "../../../../reducer/form";
import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Step_3() {
  const dispatch = useDispatch();

  const [imageLabel, setImageLabel] = useState("");
  const [fileLabel, setFileLabel] = useState("");

  const handleAddAttachments = () => {
    if (imageLabel) {
      dispatch(addElement({ label: imageLabel, type: 4 }));
    }
    if (fileLabel) {
      dispatch(addElement({ label: fileLabel, type: 5 }));
    }

    setImageLabel("");
    setFileLabel("");
  };

  return (
    <Box sx={{ flex: 1, mt: 1 }}>
      {/* أزرار الرفع (بدون تخزين الملف حالياً) */}
      <Box sx={{ display: "flex", gap: 4 }}>
        <Button component="label" sx={buttonStyle}>
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              const file = e.target.files[0];
              console.log("صورة مرفوعة:", file);
            }}
          />
          صورة
        </Button>

        <Button component="label" sx={buttonStyle}>
          <input
            type="file"
            accept=".xlsx,.xls"
            hidden
            onChange={(e) => {
              const file = e.target.files[0];
              console.log("ملف إكسل مرفوع:", file);
            }}
          />
          ملف Excel
        </Button>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography sx={titleStyle}>صورة:</Typography>
        <Box sx={inputRowStyle}>
          <Typography sx={labelStyle}>العنوان</Typography>
          <input
            value={imageLabel}
            onChange={(e) => setImageLabel(e.target.value)}
            style={inputStyle}
          />
        </Box>
        <hr />

        <Typography sx={titleStyle}>ملف Excel:</Typography>
        <Box sx={inputRowStyle}>
          <Typography sx={labelStyle}>العنوان</Typography>
          <input
            value={fileLabel}
            onChange={(e) => setFileLabel(e.target.value)}
            style={inputStyle}
          />
        </Box>
        <hr />

        <Button
          onClick={handleAddAttachments}
          variant="contained"
          color="success"
          sx={{ mt: 2 }}
        >
          إضافة المرفقات
        </Button>
      </Box>
    </Box>
  );
}

// أنماط مساعدة
const buttonStyle = {
  backgroundColor: "rgb(14,74,35)",
  color: "white",
  borderRadius: "5px",
  mt: 2,
  minWidth: "70px",
  width: "20%",
  height: "69px",
  fontSize: "24px",
  fontWeight: 700,
};

const titleStyle = {
  fontSize: "24px",
  mb: 1,
  fontWeight: 700,
};

const labelStyle = {
  color: "rgb(30,30,30)",
  fontSize: "24px",
  fontWeight: 700,
  mt: 0.5,
};

const inputRowStyle = {
  display: "flex",
  gap: 2,
};

const inputStyle = {
  height: "40px",
  width: "65%",
  border: "2px solid rgba(71, 59, 68, 1)",
  borderRadius: "5px",
};
