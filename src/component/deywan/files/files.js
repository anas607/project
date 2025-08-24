import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
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
import { fetchForm } from "../../../reducer/admin/forms";
import DeatilsForm from "../../mails/form/detealsform";
import Creat_Manaual from "./creatmanaual";
import WORDFILE from "./wordFile";
import { BaseUrl, FORM, TOOGLE_STATUS } from "../../../API/api";
import { SearchForms } from "../../../reducer/search/formSearch";
import NOSERACH from "../../../wrong/search";


export default function Files() {
   const { data: searchResults, isloading } = useSelector(
    (state) => state.searchForms
  );
    const [searchTerm, setSearchTerm] = useState("");

   const [snackbar, setSnackbar] = useState({
      open: false,
      message: "",
      color: "",
    });

const [selectedStatus, setSelectedStatus] = useState("");

    const[selectedid,setselectedid]=useState("")

  const[shoeDeatils,setShoeDeatils]=useState(false)
const [loadingStatus, setLoadingStatus] = useState({});
     const state=useSelector((state)=>state.fetchform)
const formsToDisplay = searchTerm 
  ? searchResults?.[0] ?? []   // فك المصفوفة الداخلية أو fallback لمصفوفة فارغة
  : state.data?.[0] ?? [];
// console.log(searchResults)
    //  console.log(state.data)
     ///fetch
  const dispatch=useDispatch()
     useEffect(()=>{
         dispatch(fetchForm())
     },[dispatch])
//===///
///serch//
  useEffect(() => {
  if (searchTerm) {
    dispatch(SearchForms(searchTerm));
  }
}, [searchTerm, dispatch]);
////=////

async function handleToggleStatus(id) {
  try {
    setLoadingStatus((prev) => ({ ...prev, [id]: true }));

    const res = await patchData(`${BaseUrl}${FORM}${TOOGLE_STATUS}${id}`);
    // console.log(res);

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
          <Appar onSearch={setSearchTerm} />

          <Box
            sx={{
              //  backgroundColor:"rgb(233,232,232)",
              p: 2,
              borderRadius: 5,
              maxWidth: "3000px",
              maxHeight: "2000px",
              width: "1600px",
              alignSelf: "rtl",    overflow: "auto" 

            }}
          >
            <Grid container spacing={2}>
             <Creat_Manaual      onSuccess={() => dispatch(fetchForm())}
/>
              {/* add ============================file============================================= */}
              {/* زر word لتحميل ملف من الجهاز */}
             <WORDFILE                      onSuccess={() => dispatch(fetchForm())}
             
/>
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
  </Box> 
 : formsToDisplay.length > 0 ? (
formsToDisplay.map((item) => (
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
     <Box 
  sx={{ 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center",
    gap: 1,
    overflow: "hidden" 
  }}
>
  {/* النصوص على اليمين */}
  <Box 
    sx={{ 
      textAlign: "right", 
      display: "flex", 
      flexDirection: "column", 
      flex: 1, 
      minWidth: 0  // مهم عشان ellipsis يشتغل
    }}
  >
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
        fontSize: "20px",
        fontWeight: "700",
        color:
          item.status === "فعالة"
            ? "rgb(1, 53, 19)"
            : item.status === "قيد الدراسة"
            ? "orange"
            : "#ca0b0bff",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis", // يضيف "..." إذا الاسم طويل
      }}
    >
      {item.name}
    </Typography>
  </Box>

  {/* الأيقونة */}
  <NoteIcon
    sx={{
      fontSize: 50,
      flexShrink: 0, // يمنعها من التصغير
      color:
        item.status === "فعالة"
          ? "rgb(1, 53, 19)"
          : item.status === "قيد الدراسة"
          ? "orange"
          : "#ca0b0bff",
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
   ))
    ) : (
<NOSERACH/>
    )}


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
