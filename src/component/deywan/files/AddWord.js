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
import { BaseUrl, CREATE_INTERNAL_MAIL, FETCHOFFICE, FORM, UPLOUD_WORD } from "../../../API/api";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, setSelectedOfficeId, setTransactionCost } from "../../../reducer/files/word";


export default function AddWord({ open, onClose,onSuccess  }) {
  const dispatch = useDispatch();
  const {  transactionCost, selectedOfficeId } = useSelector(
    (state) => state.word
  );

  const [offices, setOffices] = useState([]);
  const [file, setFile] = useState(null); // ✅ الملف

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
async function UploadWord(){
    setIsLoading(true)
try {
      const formData = new FormData();
      formData.append("file", file); // ملف وورد
      formData.append("cost", transactionCost); // التكلفة
      selectedOfficeId.forEach((id) => formData.append("path_id[]", id)); // مصفوفة المسارات

    const response = await postData(`${BaseUrl}${FORM}${UPLOUD_WORD}`,formData)
    console.log(response)
    setSnackbar({
        open: true,
        message: response.message || "تم إنشاء الاختصاص بنجاح",
        severity: "success", color: "green",
      });
            if (onSuccess) onSuccess();
      onClose(); // ✅ يسكر المودال بعد النجاح
      dispatch(resetForm()); // رجع الفورم فاضي
      setFile(null);

}catch(err){
        console.error(err);

     setSnackbar({
        open: true,
        message: err?.message || "حدث خطأ أثناء الإرسال",
        severity: "error", color: "red",
      });
}finally{
      setIsLoading(false);    setTimeout(() => setSnackbar((prev) => ({ ...prev, open: false })), 2500);
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
           اضافة معاملة ووررد
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
         <Box sx={{ display: "flex", gap: 2 }}>
        <Typography sx={{ fontSize: "24px", fontWeight: 700,whiteSpace:'nowrap' }}>رسوم المعاملة</Typography>
        <input
          value={transactionCost}
          onChange={(e) => dispatch(setTransactionCost(e.target.value))}
          style={{
            height: "40px",
            width: "65%",
            border: "2px solid rgba(71, 59, 68, 1)",
            borderRadius: "5px",
          }}
        />
      </Box>

        

       

        
     

      {/* رسوم المعاملة */}
    
<Button
    variant="contained"
    component="label"
    sx={{
      backgroundColor: "rgb(14,74,35)",
      color: "white",
      borderRadius: "10px",
      fontWeight: 700,mt:5,mb:6,
      fontSize: "18px",
      px: 4,
      py: 1.5,
      "&:hover": { backgroundColor: "rgb(14,74,35)" },
    }}
  >
    اضف ملف وورد
    <input
      type="file"
      accept=".doc,.docx"
      hidden
       onChange={(e) => {
            if (e.target.files.length > 0) {
              setFile(e.target.files[0]); // ✅ خزّن الملف
            }
          }}
    />
  </Button>
  <Box sx={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  px: 2,
  pt: 2
}}>
      <hr style={{ height: "2px", border: "none", background: "rgba(206, 199, 199, 0.43)" }} />

     {/* مسار المعاملة */}
<Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 0 }}>
  {/* الزر الأول */}
  <Button
    variant="contained"
    sx={{
      backgroundColor: "rgb(14,75,34)",
      color: "white",
      borderRadius: 2,width:'120px',height:'70px',
      fontWeight: 700,fontSize: 24,
      "&:hover": { backgroundColor: "rgb(14,75,34)" },
    }}
  >
الد يوان  </Button>

  {/* السهم بين الزرين */}
  <Typography
    sx={{
      fontSize: 24,
      fontWeight: 700,
      color: "rgb(14,75,34)",
      px: 1,
    }}
  >
    ←
  </Typography>

  {/* الزر الثاني */}
  <Button
    variant="contained"
    sx={{
      backgroundColor: "rgb(14,75,34)",
      color: "white",
     borderRadius: 2,width:'120px',height:'70px',
      fontWeight: 700,fontSize: 24,
      textTransform: "none",
      "&:hover": { backgroundColor: "rgb(14,75,34)" },
      px: 2,
    }}
  >
    المالية
  </Button>

  {/* السهم قبل السيلكت */}
  <Typography
    sx={{
      fontSize: 24,
      fontWeight: 700,
      color: "rgb(14,75,34)",
      px: 1,
    }}
  >
    ←
  </Typography>

  {/* زر السيلكت */}
  <FormControl
    sx={{
      minWidth: 180,
      borderRadius: "0 20px 20px 0",
      overflow: "hidden",
      border: "4px dashed rgb(14,74,35)",
      px: 1,
      py: 0.5,
      backgroundColor: "white",
    }}
  >
    <Select
      multiple
      value={selectedOfficeId}
      onChange={(e) => dispatch(setSelectedOfficeId(e.target.value))}
      displayEmpty
      renderValue={(selected) => {
        if (!selected.length) {
          return <Typography sx={{ fontWeight: 700 }}>مسار المعاملة</Typography>;
        }
        return selected
          .map((id) => offices.find((o) => o.id === id)?.name)
          .filter(Boolean)
          .join(" , ");
      }}
      fullWidth
    >
      {offices.map((office) => (
        <MenuItem key={office.id} value={office.id}>
          {office.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
  
</Box>
{/* زر رفع ملف وورد */}


       </Box>
    </Grid>
    </Grid>
     
   
          
      
 <Box sx={{ display: 'flex', justifyContent: 'flex-end',mt:2 }}>
         <Button    disabled={isLoading}  onClick={UploadWord} variant="contained" color="rgb(14,74,35)"  sx={{borderRadius:"30px" ,width:"21%",height:"50px",backgroundColor:"rgb(14,74,35)",color:"white",fontSize:'20px',fontWeight:'700',ml:2, mt:30}}>
           {isLoading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "اضافة"} 
          </Button>
        </Box>
       
      </Paper>
    </Modal>
    
    </>
  );
}