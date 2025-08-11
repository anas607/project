import React, { useState } from "react";
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
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SatelliteIcon from "@mui/icons-material/Satellite";

export default function EditEmployeeModal({ open, onClose ,id}) {
  const [formData, setFormData] = useState({
    employeeName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    role: "",
    department: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="add-employee-modal"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
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

        {/* النموذج: العمودين */}
        <Grid
          container
          spacing={2}
          sx={{ mt: 1, flexGrow: 1, columnGap: 6 }} // زيادة المسافة بين العمودين
        >
          {/* العمود الأيمن */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 0.7, fontSize: "18px", fontWeight: "700" }}
              >
                اسم الموظف
              </Typography>
              <TextField
                fullWidth
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
                size="small"
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 0.7, fontSize: "18px", fontWeight: "700" }}
              >
                البريد الإلكتروني
              </Typography>
              <TextField
                fullWidth
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                size="small"
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 0.7, fontSize: "18px", fontWeight: "700" }}
              >
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
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  color: "#333",
                  backgroundColor: "#fff",
                }}
              >
                تحميل صورة
                <input
                  type="file"
                  name="image"
                  hidden
                  accept="image/*"
                  onChange={handleChange}
                />
                <SatelliteIcon sx={{ mr: 1, color: "gray" }} />
              </Button>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 0.7, fontSize: "18px", fontWeight: "700" }}
              >
                الدور
              </Typography>
              <Select
                fullWidth={false}
                name="role"
                value={formData.role}
                onChange={handleChange}
                sx={{ height: 35, width: "90%" }}
                displayEmpty
                inputProps={{ "aria-label": "الدور" }}
                size="small"
              >
                <MenuItem value="">
                  <em>اختر الدور</em>
                </MenuItem>
                <MenuItem value="مدير">مدير</MenuItem>
                <MenuItem value="موظف">موظف</MenuItem>
                <MenuItem value="محاسب">محاسب</MenuItem>
              </Select>
            </Box>
          </Grid>

          {/* العمود الأيسر */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 0.7, fontSize: "18px", fontWeight: "700" }}
              >
                رقم الجوال
              </Typography>
              <TextField
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                size="small"
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 0.7, fontSize: "18px", fontWeight: "700" }}
              >
                العنوان
              </Typography>
              <TextField
                fullWidth
                name="address"
                value={formData.address}
                onChange={handleChange}
                size="small"
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 0.7, fontSize: "18px", fontWeight: "700" }}
              >
                كلمة السر
              </Typography>
              <TextField
                fullWidth
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                size="small"
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 0.7, fontSize: "18px", fontWeight: "700" }}
              >
                الدائرة
              </Typography>
              <Select
                fullWidth
                name="department"
                value={formData.department}
                onChange={handleChange}
                sx={{ height: 35, width: "100%" }}
                displayEmpty
                inputProps={{ "aria-label": "دائرة" }}
                size="small"
              >
                <MenuItem value="">
                  <em>اختر الدائرة</em>
                </MenuItem>
                <MenuItem value={1}>دائرة 1</MenuItem>
                <MenuItem value={2}>دائرة 2</MenuItem>
                <MenuItem value={3}>دائرة 3</MenuItem>
              </Select>
            </Box>
          </Grid>
        </Grid>

        {/* <Box sx={{ mt: 3, textAlign: "left", mt: "auto" }}> */}
                  
          <Box sx={{display:"flex",gap:3 ,mr:58,width:'300',mt: "auto",position:'fixed'}}>
                    
                      <Button
                 onClick={onClose}
                        variant="contained"
                        sx={{
                          borderRadius: "30px",
                          width: "70%",
                          height: "55px",
                          backgroundColor: "rgba(189, 165, 165, 1)",
                          color: "white",
                          fontSize: "24px",
                          fontWeight: "700",
                         
                          mt: 10,
                        }}
                      >
                         
            تراجع
                      </Button>  <Button
                        variant="contained"
                        sx={{
                          borderRadius: "30px",
                          width: "280px",
                          height: "55px",
                          backgroundColor: "rgb(14,74,35)",
                          color: "white",
                          fontSize: "24px",
                          fontWeight: "700",
                          
                          mt: 10,
                        }}
                      >
                        موافق
            
                      </Button></Box>
      </Paper>
    </Modal>
  );
}
