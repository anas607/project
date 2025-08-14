// EditEmployeeModal.jsx
import React, { useState, useEffect } from "react";
import {
  Modal, Paper, Typography, Grid, Box, Button, TextField
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SatelliteIcon from "@mui/icons-material/Satellite";
import { BaseUrl, EDIT_EMPLOYEE_INFORMATION } from "../../../API/api";
import { postData } from "../../../API/apiService";

export default function EditEmployeeModal({ open, onClose, id, employe, onUpdate }) {
  const [formData, setFormData] = useState({
    employeeName: "",
    email: "",
    phone: "",
    address: "",
    image: null,
  });

  // تحديث البيانات عند تغيير الموظف المختار
  useEffect(() => {
    if (employe) {
      setFormData({
        employeeName: employe.name || "",
        email: employe.email || "",
        phone: employe.phone || "",
        address: employe.address || "",
        image: null,
      });
    }
  }, [employe]);

  // تغيير القيم داخل الحقول
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // تعديل الموظف
  async function EDITEMPLOYEES() {
  try {
    const data = new FormData();
    data.append("id", id || employe.id);
    data.append("employeeName", formData.employeeName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("address", formData.address);
    if (formData.image) {
      data.append("image", formData.image);
    }

    const response = await postData(
      `${BaseUrl}${EDIT_EMPLOYEE_INFORMATION}`,
      data,
      {},
      true // نحدد أنه FormData
    );

    console.log("تم التعديل:", response);
    onUpdate(); // تحديث الجدول
    onClose();  // إغلاق المودال
  } catch (err) {
    console.log("خطأ في التعديل:", err);
  }
}


  return (
    <Modal open={open} onClose={onClose} aria-labelledby="edit-employee-modal"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Paper elevation={4} sx={{ width: "800px", p: 4, borderRadius: 3, direction: "rtl" }}>
        <HighlightOffIcon
          onClick={onClose}
          sx={{ fontSize: "25px", cursor: "pointer", mb: 1, float: "left" }}
        />
        <Typography variant="h6" sx={{
          fontWeight: "700", color: "rgb(14,74,35)", fontSize: "32px",
          mb: 2, borderBottom: "3px solid", display: "inline-block"
        }}>
          تعديل موظف
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth name="employeeName" label="اسم الموظف"
              value={formData.employeeName} onChange={handleChange} size="small" />
            <TextField fullWidth name="email" label="البريد الإلكتروني" type="email"
              value={formData.email} onChange={handleChange} size="small" sx={{ mt: 2 }} />
            <Button variant="outlined" component="label" sx={{ mt: 2 }}>
              تحميل صورة
              <input type="file" name="image" hidden accept="image/*" onChange={handleChange} />
              <SatelliteIcon sx={{ ml: 1 }} />
            </Button>
          </Grid>

          <Grid item xs={6}>
            <TextField fullWidth name="phone" label="رقم الجوال"
              value={formData.phone} onChange={handleChange} size="small" />
            <TextField fullWidth name="address" label="العنوان"
              value={formData.address} onChange={handleChange} size="small" sx={{ mt: 2 }} />
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
          <Button onClick={onClose} variant="contained" sx={{
            borderRadius: "30px", backgroundColor: "gray"
          }}>
            تراجع
          </Button>
          <Button onClick={EDITEMPLOYEES} variant="contained" sx={{
            borderRadius: "30px", backgroundColor: "rgb(14,74,35)"
          }}>
            موافق
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
}
