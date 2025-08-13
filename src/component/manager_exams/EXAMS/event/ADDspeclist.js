import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { Backdrop, Alert } from "@mui/material";

import {
  Typography,
  Grid,
  Paper,
  Modal,
  TextField,
} from "@mui/material";
import {
  
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useEffect, useState } from "react";
import { postData } from "../../../../API/apiService";
import { ADD, BaseUrl, Specializations } from "../../../../API/api";

export default function AddSpeclist({ open, onClose ,onSuccess }) {
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [newOption, setNewOption] = useState("");
  const[errorMessage,seterrorMessage]=useState("")
   const [snackbar, setSnackbar] = useState({
      open: false,
      message: "",
      color: "",
    });
const [name, setName] = useState("");
const [bachelorsDegree, setBachelorsDegree] = useState("");
const [loading, setLoading] = useState(false);
const [options, setOptions] = useState([
  { name: "", years: "" }, // الخيار 1
  { name: "", years: "" }, // الخيار 2
]);
  const handleAddOption = () => {
  if (newOption.trim() !== "") {
    setOptions((prev) => [...prev, { name: newOption, years: "" }]);
    setNewOption("");
    setAddDialogOpen(false);
  }
};


async function handladd() {
    setLoading(true);

  try {
    const experienceYearsObject = {};
    options.forEach((option) => {
      if (option.name && option.years) {
        experienceYearsObject[option.name] = Number(option.years);
      }
    });

    const payload = {
      name,
      bachelors_degree: bachelorsDegree,
      experience_years: experienceYearsObject,
    };

    const response = await postData(`${BaseUrl}${Specializations}${ADD}`, payload);
    console.log("Response:", response);
     setSnackbar({
        open: true,
        message: response?.data?.message || "تم تنفيذ العملية بنجاح",
        color: "rgb(14,75,35)",
      });
    // alert(response?.message || "تم إنشاء الاختصاص بنجاح");
    onClose();
        if (onSuccess) onSuccess();

  } catch (err) {
    const errorMessage = err?.message || err?.errors?.[0] || "حدث خطأ أثناء الإرسال";
    // alert(errorMessage);
    setSnackbar({
        open: true,
        message:
          err?.response?.data?.message || "حدث خطأ أثناء تعديل الحالة",
        color: "red",
      });
seterrorMessage(errorMessage)
  } finally {
    setLoading(false); 
        setTimeout(() => setSnackbar((prev) => ({ ...prev, open: false })), 2500);

  }
}

  return (
    <>
     {snackbar.open && (
            <Box
              sx={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: snackbar.color,
                color: "white",
                padding: "24px 36px",
                borderRadius: "10px",
                fontSize: "22px",
                fontWeight: "bold",
                textAlign: "center",
                zIndex: 2000,
                boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                minWidth: "300px",
              }}
            >
              {snackbar.message}
            </Box>
          )}
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="add-employee-modal"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Paper
          elevation={4}
          sx={{
            width: "824px",
            height: "800px",
            p: 4,
            borderRadius: 5,
            direction: "rtl",
            position: "relative",
            backgroundColor: "#fff",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "10%",
              left: "40%",
              transform: "translate(-50%, -50%)",
              width: 400,
              height: 400,
              zIndex: 0,
            },
          }}
        >
          <HighlightOffIcon
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 20,
              left: 16,
              cursor: "pointer",
              fontSize: "30px",
              mb: "4%",
            }}
          />

          <Typography
            fontWeight="700"
            fontSize="24px"
            color="rgb(14,74,35)"
            sx={{ mt: 3 }}
          >
            اضافة اختصاص
          </Typography>

          <hr
            style={{
              height: "4px",
              width: "90%",
              border: "none",
              margin: "1rem 0",
              background:
                "linear-gradient(to left, rgb(14,74,35)20%, rgb(163, 168, 165) 80%)",
              borderRadius: "2px",
              marginTop: "0",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              direction: "rtl",
              alignItems: "flex-start",
              mt: 2,
              width: "90%",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                mb={1}
                sx={{ textAlign: "right", fontWeight: "700", fontSize: "24px" }}
              >
                اسم الاختصاص
              </Typography>
              <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
                fullWidth
                variant="outlined"
                inputProps={{ dir: "rtl" }}
              />
            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography
                mb={1}
                sx={{ textAlign: "right", fontWeight: "700", fontSize: "24px" }}
              >
                الاجازة الجامعية
              </Typography>
              <TextField
              value={bachelorsDegree}
onChange={(e) => setBachelorsDegree(e.target.value)}
                fullWidth
                variant="outlined"
                inputProps={{ dir: "rtl" }}
              />

            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography
                mb={1}
                sx={{ textAlign: "right", fontWeight: "700", fontSize: "24px" }}
              >
                عدد السنوات المطلوبة
              </Typography>

            {options.map((option, index) => (
  <Box key={index} sx={{ display: "flex", gap: 2, mt: 2, alignItems: "center" }}>
    <Typography
      sx={{
        mt: 2,
        fontWeight: "700",
        fontSize: "20px",
        whiteSpace: "nowrap",
      }}
    >
      الخيار {index + 1}
    </Typography>
    <TextField
      fullWidth
      variant="outlined"
      placeholder="اسم الاختصاص الفرعي"
      value={option.name}
      onChange={(e) => {
        const updated = [...options];
        updated[index].name = e.target.value;
        setOptions(updated);
      }}
      inputProps={{ dir: "rtl" }}
    />
    <TextField
      sx={{ maxWidth: 100 }}
      variant="outlined"
      placeholder="عدد السنوات"
      value={option.years}
      onChange={(e) => {
        const updated = [...options];
        updated[index].years = e.target.value;
        setOptions(updated);
      }}
      inputProps={{ dir: "rtl", type: "number" }}
    />

    {index === options.length - 1 && (
      <IconButton
        onClick={() => setAddDialogOpen(true)}
        sx={{
          backgroundColor: "rgb(14,74,35)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgb(14,74,35)",
          },
        }}
      >
        <AddIcon />
      </IconButton>
    )}
  </Box>
))}

             














            </Box>
            {errorMessage? (
             
        <Alert
          variant="outlined"
          severity="error"
          sx={{ fontSize: "1.5rem", fontWeight: "700" }}
        >
          {errorMessage}
        </Alert>
            ):""}
 
            <Button
            onClick={handladd}
              variant="contained"
              sx={{
                borderRadius: "30px",
                width: "50%",
                height: "55px",
                backgroundColor: "rgb(14,74,35)",
                color: "white",
                fontSize: "24px",
                fontWeight: "700",
                mr: "auto",
                mt: 10,
              }}
            >
                {loading ? (
    <CircularProgress size={28} sx={{ color: "white" }} />
  ) : (
    "اضافة"
  )}
            </Button>
          </Box>
        </Paper>
      </Modal>
       <Dialog  open={addDialogOpen} onClose={() => setAddDialogOpen(false)}
        
          PaperProps={{
    sx: { width: "540px", direction: "rtl",height:'248px' }, // زيادة العرض واتجاه RTL
  }}

        >
        <DialogTitle sx={{ textAlign: "right", fontWeight: "700", fontSize: "24px" }}>إضافة خيار جديد</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label="اسم الخيار"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            inputProps={{ dir: "rtl" }}
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{fontWeight: "700", fontSize: "24px" }} onClick={() => setAddDialogOpen(false)}>إلغاء</Button>
          <Button sx={{fontWeight: "700", fontSize: "24px" }} variant="contained" onClick={handleAddOption}>
            حفظ
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
