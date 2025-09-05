import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";

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
import { BaseUrl, FORM, REVIEW } from "../../../API/api";
import { useSelector } from "react-redux";

export default function DeatilsForm({ open, onClose ,id ,onSuccess ,status }) {
  const state = useSelector((state) => state.user);
const[name,setName] =useState("")

    const isAdmin = state.roles?.some(role => role === "المدير")
const[details,setDetails]=useState([])
const[Loading,setLoading]=useState(false)
const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "",
  });

useEffect(()=>{
if (open && id) {
  console.log(id)
      showDetalis();
    }
  }, [open, id]);
async function showDetalis() {
  setLoading(true)
  try{
    const response =await getData(`${BaseUrl}${FORM}${id}`)
     if (response.success && response.data?.length) {
                  setName(response.data[0].form_name);

      const formElements = response.data[0].elements;
      setDetails(formElements);
     }

  }catch(err){alert(err)}finally{
    setLoading(false)
  }
  
  
}
async function ReviewDetalis(status) {
  try{
    const response =await postData(`${BaseUrl}${FORM}${REVIEW}${id}`,{
      status
    })
     setSnackbar({
        open: true,
        message: response.message || "تم   بنجاح",
        severity: "success", color: "green",
      });
      if (onSuccess) onSuccess();
  }catch(err){ setSnackbar({
        open: true,
        message: err?.message || "حدث خطأ أثناء الإرسال",
        severity: "error", color: "red",
      });}
  finally{
    setLoading(false)
    setTimeout(() => setSnackbar((prev) => ({ ...prev, open: false })), 2500);
  }
  
  
}

 const renderField = (el) => {
    switch (el.type) {
      case 1: // نص
      case 2: // رقم
        return (
          <Box display="flex" alignItems="center" gap={1}>
            <Typography
              variant="body2"
              sx={{ whiteSpace: "nowrap", minWidth: "90px" , fontSize: "20px",fontWeight:'700'}}
            >
              {el.label}:
            </Typography>
            <TextField
              variant="standard"
              size="small"
              sx={{
                flex: 1,
                input: {
                  fontSize: "20px",
                  borderBottom: "1px dashed gray !important",
                },
              }}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Box>
        );

      case 4: // صورة
        return (
          <Button
            variant="outlined"
            sx={{
              height: 100,
              width: "100%",
              borderStyle: "dashed",
              border: "2px dotted rgba(83, 79, 79, 0.79)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5%",
              textAlign: "center",
            }}
          >
            <NoteIcon sx={{ fontSize: 30, color: "black", mb: 1 }} />
            <Typography sx={{ fontSize: "20px", textAlign: "center" }}>
              {el.label}
            </Typography>
          </Button>
        );

      case 6: // اختيار (checkbox)
        return (
          <Box display="flex" alignItems="center" gap={1}>
            <Checkbox size="small" />
            <Typography sx={{ fontSize: "20px",}}variant="body2">{el.label}</Typography>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <>
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
    <Modal
 open={open}
  onClose={onClose}
  
  aria-labelledby="add-employee-modal"
  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
>
  
  <Paper
    elevation={4}
    sx={{
      width: 800,
      height: '80vh',
      p: 2,
      borderRadius: 3,
      direction: 'rtl',
      outline: 'none',
      
    }}
  >
    <HighlightOffIcon
  onClick={() => onClose()} 
      sx={{ mr: 70, position: 'absolute' ,cursor:"pointer" }}
    />
    {Loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "60vh",
              }}
            >
              <CircularProgress sx={{ color: "green" }} />
            </Box>
          ) : (
            <>
    <Typography
         variant="h6"
         sx={{
           mb: 3,
           fontWeight: 'bold',
           color: 'black',
           mr: 30,
           pb: 1,
         }}
       >
{name}       </Typography>
   
     

            <Grid container spacing={2}>
              {details
                .filter((el) => el.type !== 4) // عرض الحقول العادية أولاً
                .map((el, idx) => (
                  <Grid item xs={12} key={idx}>
                    {renderField(el)}
                  </Grid>
                ))}

              {/* قسم المرفقات */}
              {details.some((el) => el.type === 4) && (
                <>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      المرفقات:
                    </Typography>
                  </Grid>
                  {details
                    .filter((el) => el.type === 4)
                    .map((el, idx) => (
                      <Grid item xs={12} key={idx}>
                        {renderField(el)}
                      </Grid>
                    ))}
                </>
              )}
            </Grid>
            </>
          )}

{ status==='قيد الدراسة'  && (
  <Box
    sx={{
      display: "flex",
      gap: 2,
      justifyContent: "center",
      position: "absolute",
      bottom: 80,
      left: -470,
      right: 0,
    }}
  >
    <Button
     onClick={async () => {
    try {
   await ReviewDetalis  ( "فعالة");
      onClose(); 
    } catch {
      alert("حدث خطأ أثناء قبول الطلب");
    }
  }}
      variant="contained"
      sx={{
        borderRadius: "20px",
        minWidth: "120px",
        backgroundColor: "rgb(14,74,35)",
        color: "white",
        fontWeight: "700",
        fontSize: "20px"
      }}
    >
      قبول
    </Button>
    <Button
      onClick={async () => {
    try {
   await ReviewDetalis  ( "مرفوضة");
      onClose(); 
    } catch {
      alert("حدث خطأ أثناء قبول الطلب");
    }
  }}
      variant="contained"
      sx={{
        borderRadius: "20px",
        minWidth: "120px",
        backgroundColor: "rgba(119, 30, 7, 1)",
        color: "white",
        fontWeight: "700",
        fontSize: "20px"
      }}
    >
      رفض
    </Button>
  </Box>
)}


     
    
    
  </Paper>
  
</Modal>
    </>
  );
}
