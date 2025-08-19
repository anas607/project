import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setExcelFile, setImageFile } from "../../../../reducer/files/manual";

export default function Step_3() {
  const dispatch = useDispatch();
  const imageFile = useSelector((state) => state.step.imageFile);
  const excelFile = useSelector((state) => state.step.excelFile);

  return (
    <Box sx={{ flex: 1, mt: 1 }}>
      <Box sx={{ display: "flex", gap: 4 }}>
        <Button
          component="label"
          sx={{
            backgroundColor: "rgb(14,74,35)",
            color: "white",
            borderRadius: "5px",
            mt: 2,
            minWidth: "70px",
            width: "20%",
            height: "69px",
            fontSize: "24px",
            fontWeight: 700,
          }}
        >
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              const file = e.target.files[0];
              dispatch(setImageFile(file));
            }}
          />
          صورة
        </Button>

        <Button
          component="label"
          sx={{
            backgroundColor: "rgb(14,74,35)",
            color: "white",
            borderRadius: "5px",
            mt: 2,
            mr: -2,
            minWidth: "70px",
            width: "20%",
            height: "69px",
            fontSize: "24px",
            fontWeight: 700,
            textTransform: "none",
          }}
        >
          ملف excel
          <input
            type="file"
            accept=".xlsx, .xls"
            hidden
            onChange={(e) => {
              const file = e.target.files[0];
              dispatch(setExcelFile(file));
            }}
          />
        </Button>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography sx={{ fontSize: "24px", mb: 1, fontWeight: 700 }}>
          صورة:
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography
            sx={{
              color: "rgb(30,30,30)",
              fontSize: "24px",
              fontWeight: 700,
              mt: 0.5,
            }}
          >
            العنوان
          </Typography>
          <input
            style={{
              height: "40px",
              width: "65%",
              border: "2px solid rgba(71, 59, 68, 1)",
              borderRadius: "5px",
            }}
            value={imageFile ? imageFile.name : ""}
            readOnly
          />
        </Box>
        <hr
          style={{
            height: "2px",
            border: "none",
            marginRight: -9,
            width: "100%",
            background: "rgba(206, 199, 199, 0.43)",
          }}
        />

        <Typography sx={{ fontSize: "24px", mb: 1, fontWeight: 700 }}>
          ملف excel:
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography
            sx={{
              color: "rgb(30,30,30)",
              fontSize: "24px",
              fontWeight: 700,
              mt: 0.5,
            }}
          >
            العنوان
          </Typography>
          <input
            style={{
              height: "40px",
              width: "65%",
              border: "2px solid rgba(71, 59, 68, 1)",
              borderRadius: "5px",
            }}
            value={excelFile ? excelFile.name : ""}
            readOnly
          />
        </Box>
        <hr
          style={{
            height: "2px",
            border: "none",
            marginRight: -9,
            width: "100%",
            background: "rgba(206, 199, 199, 0.43)",
          }}
        />
      </Box>
    </Box>
  );
}
