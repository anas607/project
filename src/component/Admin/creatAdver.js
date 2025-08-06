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
import { postData } from "../../API/apiService";
import { BaseUrl, ANNOUNCEMENT,ADD } from "../../API/api";


export default function CreatADversments({ open, onClose ,onSuccess }) {

  const [form,setform]= useState({title:"",body:""})
    const [isLoading, setIsLoading] = useState(false);


 

async function handleCreat(){
 
 

  setIsLoading(true);
  
  try{
    const response = await postData(`${BaseUrl}${ANNOUNCEMENT}${ADD}`,form)
     console.log("Response:", response);

        alert(response?.message || "تم إنشاء الاعلان بنجاح");
 if (typeof onSuccess === "function") onSuccess();


  setform("");
    onClose(); // ✅ هذا هو الصحيح
  } catch (err) {
     const errorMessage = err?.message || err?.errors?.[0] || "حدث خطأ أثناء الإرسال";
    alert( errorMessage);
    
  }finally {
    setIsLoading(false); //  إيقاف اللودر
  }
}
  return (
    <>
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
          اضافة اعلان
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
       

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 ,color: "black",fontSize:"20px",fontWeight: '700',}}>
             العنوان
          </Typography>
<input
  value={form.title}
  onChange={(e) => {
    setform({ ...form, title: e.target.value });
  }}
  style={{ width: '60%', padding: '8px' }}
/>
        </Box>

       

        
      </Grid>

      {/* العمود الأيسر */}
     
    </Grid>
     <Typography variant="subtitle1" sx={{ mb: 1,color: "black",fontSize:"20px",fontWeight: '700' }}>
             الموضوع

          </Typography>
          
       <TextField
  value={form.body}
  onChange={(e) => setform({ ...form, body: e.target.value })}
/>

        {/* زر الإرسال */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end',mt:2 }}>
         <Button    disabled={isLoading}  onClick={handleCreat} variant="contained" color="rgb(14,74,35)"  sx={{borderRadius:"30px" ,width:"21%",height:"50px",backgroundColor:"rgb(14,74,35)",color:"white",fontSize:'20px',fontWeight:'700',ml:2, mt:30}}>
           {isLoading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "اضافة"} 
          </Button>
        </Box>
      </Paper>
    </Modal>
    
    </>
  );
}