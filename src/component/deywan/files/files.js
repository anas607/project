import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AddIcon from "@mui/icons-material/Add";
import {
  Typography,
  Grid,
  Paper,
  Modal,
  CircularProgress,
  StepLabel,
  TextField,
} from "@mui/material";
import NoteIcon from "@mui/icons-material/Note";
import SidBar from "../dachboard/SIDEBAR/sidbar";
import Appar from "../dachboard/SIDEBAR/appar";
import { useState } from "react";


import FilesMails from "../../mails/form/files";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, patchData } from "../../../API/apiService";
import { setTransactions } from "../../../reducer/transaction";
import { BaseUrl, FORM, showAllTransactions, TOOGLE_STATUS } from "../../../API/api";
import { fetchForm } from "../../../reducer/admin/forms";
import DeatilsForm from "../../mails/form/detealsform";
import Creat_Manaual from "./creatmanaual";
import WORDFILE from "./wordFile";



const steps = ["المعلومات العامة", " استمارة المعاملة", "المرفقات", "معاينة"];


// const response = await getData(`${BaseUrl}${showAllTransactions}`);

export default function Files() {
   const [snackbar, setSnackbar] = useState({
      open: false,
      message: "",
      color: "",
    });
  const [showFile, setShowFile] = useState(false);
  const [showaddfile, setShowAddFile] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
const [selectedStatus, setSelectedStatus] = useState("");

    const[selectedid,setselectedid]=useState("")

  const[shoeDeatils,setShoeDeatils]=useState(false)
const [loadingStatus, setLoadingStatus] = useState({});
     const state=useSelector((state)=>state.fetchform)
     console.log(state.data)
  const dispatch=useDispatch()
     useEffect(()=>{
         dispatch(fetchForm())
     },[dispatch])

  
async function handleToggleStatus(id) {
  try {
    setLoadingStatus((prev) => ({ ...prev, [id]: true }));

    const res = await patchData(`${BaseUrl}${FORM}${TOOGLE_STATUS}${id}`);
    console.log(res);

    // تحديث البيانات مباشرة في الـ state المحلي
      dispatch(fetchForm())

    setSnackbar({
      open: true,
      message: res?.data?.message || "تم التحديث بنجاح",
      color: "rgb(14,75,35)",
    });
  } catch (err) {
    console.log(err);
    setSnackbar({
      open: true,
      message: err?.response?.data?.message || "حدث خطأ أثناء تغيير الحالة",
      color: "red",
    });
  } finally {
    setLoadingStatus((prev) => ({ ...prev, [id]: false }));

    setTimeout(() => setSnackbar((prev) => ({ ...prev, open: false })), 2500);
  }
}
 function handleShowDeatiels(id ,status){
      setselectedid(id)
      setSelectedStatus(status)
setShoeDeatils(true)
    }
  return (
    <>
    {snackbar.open && (
 <Box
  sx={{
    position: "fixed",
    top: 50, // المسافة من الأعلى
    left: "50%", // ضع العنصر عند منتصف العرض
    transform: "translateX(-50%)", // ضعه تمامًا في الوسط
    p: 2,
    backgroundColor: snackbar.color,
    color: "white",
    borderRadius: 2,
    zIndex: 9999,
    minWidth: 200,
    textAlign: "center",
  }}
>
  {snackbar.message}
</Box>

)}

      <Box
        sx={{
          direction: "rtl",
          height: "100vh",

          display: "flex",
        }}
      >
        <SidBar />

        <Box
          sx={{
            flexGrow: 1,
            padding: "2%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(233,232,232,0.5)",
          }}
        >
          {/*  صف العنوان + البحث + الإشعار */}
          <Appar />

          <Box
            sx={{
              //  backgroundColor:"rgb(233,232,232)",
              p: 2,
              borderRadius: 5,
              maxWidth: "3000px",
              maxHeight: "2000px",
              width: "1600px",
              alignSelf: "rtl",
            }}
          >
            <Grid container spacing={2}>
             <Creat_Manaual/>
              {/* add ============================file============================================= */}
              {/* زر word لتحميل ملف من الجهاز */}
             <WORDFILE/>
              {/* أوراق المعاملات */}
               {state.isloading ?  <Box
    sx={{
      position: "fixed", // تثبيت اللودر بالنسبة للشاشة
      top: "50%",        // منتصف ارتفاع الشاشة
      left: "50%",       // منتصف عرض الشاشة
      transform: "translate(-50%, -50%)", // تحريك العنصر إلى الوسط بالضبط
      zIndex: 9999,      // ليكون فوق كل العناصر الأخرى
    }}
  >
    <CircularProgress />
  </Box> :

 state.data?.[0]?.map((item) => (
    <Grid container spacing={2}>

  <Grid  key={item.id}>
    <Paper
    onClick={() => handleShowDeatiels(item.id )}
      elevation={3}
      sx={{
        height: 200,cursor:'pointer',
        width: "270px",
        p: 2,backgroundColor:'rgba(233,232,232,0.5)',
        border:
          item.status === "فعالة"
            ? "4px solid rgb(1, 53, 19)"
            : item.status === "قيد الدراسة"
            ? "4px solid orange"
            : "4px solid #ca0b0bff",
        borderRadius: "5%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* المحتوى الأساسي */}
      <Box sx={{ display: "flex", justifyContent:'space-between' }}>
        {/* الأيقونة على أقصى اليسار */}
       

        {/* النصوص على اليمين */}
        <Box sx={{ textAlign: "right", display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "700",
              color:
                item.status === "فعالة"
                  ? "rgb(1, 53, 19)"
                  : item.status === "قيد الدراسة"
                  ? "orange"
                  : "#ca0b0bff",
            }}
          >
            {item.created_at}
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "700",
              color:
                item.status === "فعالة"
                  ? "rgb(1, 53, 19)"
                  : item.status === "قيد الدراسة"
                  ? "orange"
                  : "#ca0b0bff",
            }}
          >
            {item.status}
          </Typography>

          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              color:
                item.status === "فعالة"
                  ? "rgb(1, 53, 19)"
                  : item.status === "قيد الدراسة"
                  ? "orange"
                  : "#ca0b0bff",
            }}
          >
            {item.name}
          </Typography>
          
        </Box>
         <NoteIcon
          sx={{
            fontSize: 64,
            color:
              item.status === "فعالة"
                ? "rgb(1, 53, 19)"
                : item.status === "قيد الدراسة"
                ? "orange"
                : "#ca0b0bff",
            mr: 1,
          }}
        />
      </Box>

  {/* زر التفعيل/إلغاء التفعيل */}
  {item.status !== "قيد الدراسة" && (
  <Button
  variant="contained"
  onClick={() => handleToggleStatus(item.id)}
  disabled={loadingStatus[item.id]} // تعطيل الزر أثناء التحميل
  sx={{
    mt: 1,
    alignSelf: "flex-start",
    fontSize: "12px",
    padding: "4px 10px",
    borderRadius: "12px",
    backgroundColor: item.status === "فعالة" ? "#ca0b0bff" :"rgb(4,75,34)",
    "&:hover": {
      backgroundColor: item.status === "فعالة" ? "#ca0b0bff" : "rgb(4,75,34)",
    },
  }}
>
  {loadingStatus[item.id] ? <CircularProgress/> : item.status === "فعالة" ? "إلغاء التفعيل" : "تفعيل"}
</Button>


  )}
</Paper>
</Grid>
  </Grid>
))}


            </Grid>
          </Box>
        </Box>
        
        {<FilesMails  open={shoeDeatils}
            onClose={()=>{setShoeDeatils(false)}}
           id= {selectedid}
                onSuccess={() => dispatch(fetchForm())}
              
           
           /> }
      </Box>
    </>
  );
}
