import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useEffect, useState } from "react";
import { postData } from "../../../../API/apiService";
import { ADD, BaseUrl, Specializations } from "../../../../API/api";

import {
  Typography,
  Paper,
  Modal,
  TextField,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

export default function AddSpeclist({ open, onClose, onSuccess }) {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [newOption, setNewOption] = useState("");

  const [name, setName] = useState("");
  const [bachelorsDegree, setBachelorsDegree] = useState("");
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([{ name: "", years: "" }, { name: "", years: "" }]);

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
console.log(response)
      onClose();
      if (onSuccess) onSuccess();

      setSnackbar({
        open: true,
        message: response.message || "تم إنشاء الاختصاص بنجاح",
        severity: "success", color: "green",
      });
    } catch (err) {
      setSnackbar({
        open: true,
        message: err?.message || "حدث خطأ أثناء الإرسال",
        severity: "error", color: "red",
      });
    } finally {
      setLoading(false);    setTimeout(() => setSnackbar((prev) => ({ ...prev, open: false })), 2500);

    }
  }

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
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
          }}
        >
          <HighlightOffIcon
            onClick={onClose}
            sx={{ position: "absolute", top: 20, left: 16, cursor: "pointer", fontSize: "30px" }}
          />
          <Typography fontWeight="700" fontSize="24px" color="rgb(14,74,35)" sx={{ mt: 3 }}>
            اضافة اختصاص
          </Typography>
          <hr
            style={{
              height: "4px",
              width: "90%",
              border: "none",
              margin: "1rem 0",
              background: "linear-gradient(to left, rgb(14,74,35)20%, rgb(163, 168, 165) 80%)",
              borderRadius: "2px",
              marginTop: "0",
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, direction: "rtl", mt: 2, width: "90%" }}>
            <Box sx={{ width: "100%" }}>
              <Typography mb={1} sx={{ textAlign: "right", fontWeight: "700", fontSize: "24px" }}>
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
              <Typography mb={1} sx={{ textAlign: "right", fontWeight: "700", fontSize: "24px" }}>
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
              <Typography mb={1} sx={{ textAlign: "right", fontWeight: "700", fontSize: "24px" }}>
                عدد السنوات المطلوبة
              </Typography>
              {options.map((option, index) => (
                <Box key={index} sx={{ display: "flex", gap: 2, mt: 2, alignItems: "center" }}>
                  <Typography sx={{ mt: 2, fontWeight: "700", fontSize: "20px", whiteSpace: "nowrap" }}>
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
                        "&:hover": { backgroundColor: "rgb(14,74,35)" },
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  )}
                </Box>
              ))}
            </Box>

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
              {loading ? <CircularProgress size={28} sx={{ color: "white" }} /> : "اضافة"}
            </Button>
          </Box>
        </Paper>
      </Modal>

      <Dialog
        open={addDialogOpen}
        onClose={() => setAddDialogOpen(false)}
        PaperProps={{ sx: { width: "540px", direction: "rtl", height: "248px" } }}
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
          <Button sx={{ fontWeight: "700", fontSize: "24px" }} onClick={() => setAddDialogOpen(false)}>
            إلغاء
          </Button>
          <Button sx={{ fontWeight: "700", fontSize: "24px" }} variant="contained" onClick={handleAddOption}>
            حفظ
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
        {snackbar.open && (
        <Box
          sx={{
            position: "fixed",
            top: 50,
            left: "50%",
            transform: "translateX(-50%)",
            p: 2,
            backgroundColor: snackbar.color,
            color: "white",
            borderRadius: 2,
            zIndex: 9999,
            minWidth: 200,
            textAlign: "center",
            fontWeight: "700",
            boxShadow: 3,
          }}
        >
          {snackbar.message}
        </Box>
      )}
    </>
  );
}
