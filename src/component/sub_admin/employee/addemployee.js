import React, { useEffect, useState } from "react";
import {
  Modal,
  Paper,
  Typography,
  Grid,
  Box,
  Button,
  Select,
  MenuItem,
  TextField,
  FormControl,
  InputLabel,CircularProgress
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SatelliteIcon from "@mui/icons-material/Satellite";
import { getData, postData } from "../../../API/apiService";
import { ALL_ROLL, BaseUrl, registerEmployee } from "../../../API/api";

export default function AddEmployeeModal({ open, onClose }) {
  const [Rolls, setRolls] = useState([]);
    const [editLoading, seteditLoading] = useState(false);

  
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    avatar: null,
    role_id: "",
    office_name: "", // الدائرة
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    color: "",
  });

  // جلب الرولات
  const fetchRolles = async () => {
    try {
      const res = await getData(`${BaseUrl}${ALL_ROLL}`);
      if (Array.isArray(res?.data)) {
        setRolls(res.data);
      }
    } catch (error) {
      console.error("فشل في جلب الرولات:", error);
    }
  };

  useEffect(() => {
    fetchRolles();
  }, []);

  // تغيير قيمة أي حقل
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar") {
      setFormValues({ ...formValues, avatar: files[0] });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  // اختيار الرول
  const handleRoleChange = (roleId) => {
    const role = Rolls.find((r) => r.id === roleId);
    setFormValues((prev) => ({
      ...prev,
      role_id: roleId,
      office_name: role?.path?.name || "",
    }));
  };

  // إرسال البيانات
  const handleAddEmployee = async () => {
   

    const formData = new FormData();
    Object.keys(formValues).forEach((key) => {
      if (formValues[key] !== null) {
        formData.append(key, formValues[key]);
      }
    });
seteditLoading(true)
    try {
      const res = await postData(`${BaseUrl}${registerEmployee}`, formData);
      setSnackbar({
        open: true,
        message: res?.data?.message || "تم تنفيذ العملية بنجاح",
        color: "rgb(14,75,35)",
      });
      console.log("تمت الإضافة بنجاح:", res.data);
      setTimeout(() => {
        onClose();
        setSnackbar((prev) => ({ ...prev, open: false }));
      }, 2000);
    } catch (err) {
      setSnackbar({
        open: true,
        message: err.message,
        color: "red",
      });
    } finally {
      seteditLoading(false)
      setTimeout(() => setSnackbar((prev) => ({ ...prev, open: false })), 2500);
    }
  };

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
            width: "800px",
            height: "700px",
            p: 4,
            borderRadius: 3,
            direction: "rtl",
            outline: "none",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* زر الإغلاق */}
          <HighlightOffIcon
            onClick={onClose}
            sx={{ fontSize: "25px", cursor: "pointer", mb: 1, float: "left" }}
          />

          {/* العنوان */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "700",
              color: "rgb(14,74,35)",
              fontSize: "22px",
              mb: 1,
              borderBottom: "3px solid",
              borderImage:
                "linear-gradient(to left, rgb(14,74,35) 20%, gray 80%) 1",
              display: "inline-block",
              pb: 0.5,
            }}
          >
            إضافة موظف
          </Typography>

          <Grid container spacing={2} sx={{ mt: 1, flexGrow: 1, columnGap: 6 }}>
            {/* العمود الأيمن */}
            <Grid item xs={12} sm={6}>
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ mb: 0.7, fontWeight: "700" }}>
                  اسم الموظف
                </Typography>
                <TextField
                  fullWidth
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  size="small"
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ mb: 0.7, fontWeight: "700" }}>
                  البريد الإلكتروني
                </Typography>
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  size="small"
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ mb: 0.7, fontWeight: "700" }}>
                  صورة الموظف
                </Typography>
                <Button
                  variant="outlined"
                  component="label"
                  sx={{
                    width: "90%",
                    justifyContent: "flex-start",
                    textTransform: "none",
                    padding: "6px 8px",
                    border: "1px solid #ccc",
                    color: "#333",
                    backgroundColor: "#fff",
                  }}
                >
                  تحميل صورة
                  <input
                    type="file"
                    name="avatar"
                    hidden
                    accept="image/*"
                    onChange={handleChange}
                  />
                  <SatelliteIcon sx={{ mr: 1, color: "gray" }} />
                </Button>
              </Box>

              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel>اختر الدور</InputLabel>
                <Select
                  value={formValues.role_id}
                  onChange={(e) => handleRoleChange(e.target.value)}
                >
                  {Rolls.map((roll) => (
                    <MenuItem key={roll.id} value={roll.id}>
                      {roll.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* العمود الأيسر */}
            <Grid item xs={12} sm={6}>
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ mb: 0.7, fontWeight: "700" }}>
                  رقم الجوال
                </Typography>
                <TextField
                  fullWidth
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  size="small"
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ mb: 0.7, fontWeight: "700" }}>العنوان</Typography>
                <TextField
                  fullWidth
                  name="address"
                  value={formValues.address}
                  onChange={handleChange}
                  size="small"
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ mb: 0.7, fontWeight: "700" }}>
                  كلمة السر
                </Typography>
                <TextField
                  fullWidth
                  name="password"
                  type="text"
                  value={formValues.password}
                  onChange={handleChange}
                  size="small"
                />
              </Box>

              {/* حقل اسم الدائرة */}
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ mb: 0.7, fontWeight: "700" }}>الدائرة</Typography>
                <TextField
                  fullWidth
                  name="office_name"
                  value={formValues.office_name || ""}
                  size="small"
                  InputProps={{ readOnly: true }}
                />
              </Box>
            </Grid>
          </Grid>

          {/* زر الإضافة */}
          <Box sx={{ mt: 3, textAlign: "left", mt: "auto" }}>
            <Button
              onClick={handleAddEmployee}
              variant="contained"
              sx={{
                borderRadius: "20px",
                width: "100px",
                backgroundColor: "rgb(14,74,35)",
                color: "white",
                fontSize: "18px",
                fontWeight: "700",
                textTransform: "none",
              }}
            >
               {editLoading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                "إضافة"
              )}
            </Button>
          </Box>
        </Paper>
      </Modal>
    </>
  );
}
