import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

import {
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from "@mui/material";

import {
  Typography,
  Grid,
  Paper,
  Modal,
  Checkbox,
  StepLabel,
  TextField,
} from "@mui/material";
import NoteIcon from "@mui/icons-material/Note";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useEffect, useState } from "react";
import { getData, postData } from "../../../API/apiService";
import { BaseUrl,CREATE_INTERNAL_MAIL, FETCHOFFICE } from "../../../API/api";

export default function CreatMails({ open, onClose  }) {
  

  const [offices, setOffices] = useState([]);
const [selectedOfficeId, setSelectedOfficeId] = useState("");
  const [subject,setsubject]= useState("")
    const [body,setbody]= useState("")
    const [isLoading, setIsLoading] = useState(false);
const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    color: "",
  });

useEffect(() => {
  if (open) {
    fetchOffices();
  }
}, [open]); 
const fetchOffices = async () => {
  try {
    const res = await getData(`${BaseUrl}${FETCHOFFICE}`);
    setOffices(res.data[0]);
console.log(res.data[0])
    // console.log(setOffices) 
  } catch (err) {
    console.error("فشل في جلب المكاتب:", err);
  }
};
async function handleCreat(){
  const formData = new FormData();
  formData.append("subject", subject);
  formData.append("body", body);
  if (selectedOfficeId) {
    formData.append("to_path_ids[]", selectedOfficeId);
  }

  setIsLoading(true);
  if (selectedOfficeId) {
    formData.append("to_path_ids[]", selectedOfficeId);
  }
  try{
    const response = await postData(`${BaseUrl}${CREATE_INTERNAL_MAIL}`,formData)
     console.log("Response:", response);

       // alert(response?.message || "تم إنشاء البريد بنجاح");
 setSnackbar({
        open: true,
        message: response?.message || "تم التحديث بنجاح",
        color: "rgb(14,75,35)",
      });

  setsubject("");
    setbody("");
    setSelectedOfficeId("");
    onClose(); // ✅ هذا هو الصحيح
  } catch (err) {
     const errorMessage = err?.message || err?.errors?.[0] || "حدث خطأ أثناء الإرسال";
   // alert( errorMessage);
     setSnackbar({
        open: true,
        message:
           err?.message || "حدث خطأ أثناء تغيير الحالة",
        color: "red",
      });
    
  }finally {
    setIsLoading(false);
          setTimeout(() => setSnackbar((prev) => ({ ...prev, open: false })), 2500);
 //  إيقاف اللودر
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
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Paper
        elevation={4}
        sx={{
          width: '824px',
          height: '700px',
          p: 4,
          borderRadius: 3,
          direction: 'rtl',
          position: 'relative',
          
          backgroundPosition: 'center',
          backgroundColor: '#fff', '&::before': {
          content: '""',
          position: 'absolute',
          top: '10%',
          left: '40%',
          transform: 'translate(-50%, -50%)',
          width: 400, // حجم الشعار
          height: 400,
        
          zIndex: 0,
        },  // يجعل الخلفية باهتة
        }}
      >
        <HighlightOffIcon
           onClick={onClose}
          sx={{ position: 'absolute', top: 16, left: 16, cursor: 'pointer' }}
        />
        <Typography fontWeight="700" fontSize="24px" color="rgb(14,74,35)">
          انشاء بريد
        </Typography>
    
         <hr style={{
            height: "4px",
            width: "90%",
             border: "none",
            margin: "1rem 0",  background: "linear-gradient(to left, rgb(14,74,35)20%, rgb(163, 168, 165) 80%)",

            borderRadius: "2px",mb:2,
            marginTop: "0"
          }} />
       <Grid container spacing={2}>
      {/* العمود الأيمن */}
      <Grid item xs={12} sm={6}>
       
<Box sx={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  px: 2,
  pt: 2
}}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 ,color: "black",fontSize:"20px",fontWeight: '700',}}>
             العنوان
          </Typography>
          <input  value={subject} onChange={(e)=>{setsubject(e.target.value)}} style={{ width: '60%', padding: '8px' }}  />
        </Box>

       

        
     

      {/* العمود الأيسر */}
      <FormControl sx={{
            minWidth: 300,
            border: '2px solid rgb(14, 75, 35)',
            borderRadius: '8px',
            px: 1,
            py: 0.5
          }}>
            <InputLabel
              id="filter-label"
              sx={{
                color: "rgb(14, 75, 35)",
                fontSize: '18px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                '&.Mui-focused': { color: "rgb(14, 75, 35)" },
              }}
            >
              <Box sx={{ display: 'flex', gap: 1 }}>
                تصفية حسب الدائرة
               
              </Box>
            </InputLabel>
      
            <Select
              value={selectedOfficeId}
      onChange={(e) => setSelectedOfficeId(e.target.value)}
              labelId="filter-label"
              fullWidth
              sx={{
                color: "rgb(14, 75, 35)",
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: "rgb(14, 75, 35)",
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: "rgb(14, 75, 35)",
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: "rgb(14, 75, 35)",
                }
              }}
            >
              {offices.map((office) => (
                <MenuItem key={office.id} value={office.id}>
                  {office.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
       </Box>
    </Grid>
    </Grid>
     
     <Typography variant="subtitle1" sx={{ mb: 1,color: "black",fontSize:"20px",fontWeight: '700' }}>
             الموضوع

          </Typography>
          
         <TextField
  value={body}
  onChange={(e) => setbody(e.target.value)}
  variant="outlined"
  fullWidth
  multiline
  rows={6} 
  sx={{
    mt: 2,
    '& .MuiInputBase-root': {
      fontSize: "14px",
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '8px'
    }
  }}
/>

        {/* زر الإرسال */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end',mt:2 }}>
         <Button    disabled={isLoading}  onClick={handleCreat} variant="contained" color="rgb(14,74,35)"  sx={{borderRadius:"30px" ,width:"21%",height:"50px",backgroundColor:"rgb(14,74,35)",color:"white",fontSize:'20px',fontWeight:'700',ml:2, mt:30}}>
           {isLoading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "انشاء"} 
          </Button>
        </Box>
      </Paper>
    </Modal>
    
    </>
  );
}