import React, { useEffect, useState } from "react";
import {
  Modal,
  Paper,
  Typography,
  Grid,
  Box,
  Button,
  Select,
CircularProgress,  TextField,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SatelliteIcon from "@mui/icons-material/Satellite";
import { getData, postData } from "../../../API/apiService";
import { BaseUrl, CONVERT_STATUS, EDIT_EMPLOYEE_INFORMATION, EMPLOYEES } from "../../../API/api";

export default function EditEmployeeModal({ open, onClose ,id,employe, onUpdate}) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      address: "",
      image: null,
    });
     const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        color: "",
      });
 useEffect(() => {
     if (employe) {

       setFormData({
         name: employe.name || "",
         email: employe.email || "",
         phone: employe.phone || "",
         address: employe.address || "",
         image: null,
       });
     }
   }, [employe]);

   const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

 async function EDITEMPLOYEES() {
 try {
  setLoading(true);

  const data = new FormData();
data.append("employee_id", employe?.employee_id || id);
  data.append("name", formData.name);
  data.append("email", formData.email);
  data.append("phone", formData.phone);
  data.append("address", formData.address);

  if (formData.image) {
    data.append("image", formData.image);
  }

  const res = await postData(
    `${BaseUrl}${EDIT_EMPLOYEE_INFORMATION}`,
    data,
    {},
    true
  );
  setSnackbar({
        open: true,
        message: res?.data?.message || "تم تنفيذ العملية بنجاح",
        color: "rgb(14,75,35)",
      });
setTimeout(() => {
        onClose();
        setSnackbar((prev) => ({ ...prev, open: false }));
      }, 2000);
  onUpdate(true);   // ✅ نجاح
  onClose();
} catch (err) {
  onUpdate(false); 
 setSnackbar({
        open: true,
        message: err.message,
        color: "red",
      });
        
} finally {
  setLoading(false);      setTimeout(() => setSnackbar((prev) => ({ ...prev, open: false })), 2500);

}

}

async function handleEditeStatus(){
  try{
    const response = await getData(`${BaseUrl}${CONVERT_STATUS}?id=${employe?.employee_id}`)
    console.log(response)
  }catch(err){
    console.log(err)
  }finally{
    setLoading(false)
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
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "1057px",
          height: "1016px",
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
          sx={{ fontSize: "25px", cursor: "pointer",  float: "left" ,mr:'94%'}}
        />
        {/* العنوان */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "700",
            color: "rgb(14,74,35)",
            fontSize: "32px",
            mb: 1,
            borderBottom: "3px solid",
            borderImage:
              "linear-gradient(to left, rgb(14,74,35) 20%, gray 80%) 1",
            display: "inline-block",
            pb: 0.5,
          }}
        >
          تعديل موظف
        </Typography>

        {/* النموذج: العمودين */}
        <Grid
          container
           rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} // مسافة بين الصفوف
          sx={{ mt: 1, flexGrow: 1, columnGap: 6 }} // زيادة المسافة بين العمودين
        >
          {/* العمود الأيمن */}
          <Grid item  size={4}>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 0.7, fontSize: "24px", fontWeight: "700" }}
              >
                اسم الموظف
              </Typography>
              <TextField
                fullWidth
                name="name"
                value={formData.name} onChange={handleChange}
                size="small"
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 0.7, fontSize: "24px", fontWeight: "700" }}
              >
                البريد الإلكتروني
              </Typography>
              <TextField
                fullWidth
                name="email"
                type="email"
                 value={formData.email} onChange={handleChange}
                size="small"
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 0.7, fontSize: "24px", fontWeight: "700" }}
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

          
          </Grid>

          {/* العمود الأيسر */}
         <Grid item  size={4}> 
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 0.7, fontSize: "24px", fontWeight: "700" }}
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
                sx={{ mb: 0.7, fontSize: "24px", fontWeight: "700" }}
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

          

         
          </Grid>
        </Grid>

        {/* <Box sx={{  textAlign: "left", mt: "-10%" }}> */}
                  
          <Box sx={{display:"flex",gap:3 ,mr:70,width:'300', mt: "33%",position:'fixed'}}>
                    
                       <Button
                      onClick={EDITEMPLOYEES}
                        variant="contained"
                        sx={{
                          borderRadius: "30px",
                          width: "200px",
                          height: "55px",
                          backgroundColor: "rgb(14,74,35)",
                          color: "white",
                          fontSize: "24px",
                          fontWeight: "700",
                          
                          mt: 10,
                        }}
                      >
                         {loading ? (
    <CircularProgress size={28} sx={{ color: "white" }} />
  ) : (
    "موافق"
  )}
            
                      </Button>
                       <Button
                      onClick={handleEditeStatus}
                        variant="contained"
                        sx={{
                          borderRadius: "30px",
                          width: "200px",
                          height: "55px",
                          backgroundColor: "rgba(121, 8, 8, 1)",
                          color: "white",
                          fontSize: "24px",
                          fontWeight: "700",
                          
                          mt: 10,
                        }}
                      >
                         {loading ? (
    <CircularProgress size={28} sx={{ color: "white" }} />
  ) : (
    "الغاء التفعيل"
  )}
            
                      </Button>
                       <Button
                 onClick={onClose}
                        variant="contained"
                        sx={{
                          borderRadius: "30px",
                          width: "35%",
                          height: "55px",
                          backgroundColor: "rgba(189, 165, 165, 1)",
                          color: "white",
                          fontSize: "24px",
                          fontWeight: "700",
                         
                          mt: 10,
                        }}
                      >
                         
            تراجع
                      </Button></Box>
                      {/* </Box> */}
      </Paper>
    </Modal>
    </>
  );
}
