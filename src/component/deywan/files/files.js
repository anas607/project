import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
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
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Appar from "../dachboard/SIDEBAR/appar";
import { useState } from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Step_1 from "./steps/step_1";
import Step_2 from "./steps/step_2";
import Step_3 from "./steps/step_3";
import Step_4 from "./steps/step_4";
import FilesMails from "../../mails/form/files";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, patchData } from "../../../API/apiService";
import { setTransactions } from "../../../reducer/transaction";
import { BaseUrl, FORM, showAllTransactions, TOOGLE_STATUS } from "../../../API/api";
import { fetchForm } from "../../../reducer/admin/forms";



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

const [loadingStatus, setLoadingStatus] = useState({});
     const state=useSelector((state)=>state.fetchform)
     console.log(state.data)
  const dispatch=useDispatch()
     useEffect(()=>{
         dispatch(fetchForm())
     },[dispatch])

  function handleBack() {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  }
  function handleStep(step) {
    setActiveStep(step);
  }
  function handleNext() {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  }
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
              {/* زر رفع ملف */}
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  onClick={() => {
                    setShowAddFile(true);
                  }}
                  variant="outlined"
                  fullWidth
                  sx={{
                    height: 230,
                    width: "290px",
                    borderStyle: "dashed",
                    border: "4px dashed rgb(14,75,35) ",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    borderRadius: "5%",
                  }}
                >
                  <Box
                    position="relative"
                    display="inline-flex"
                    width={40}
                    height={40}
                  >
                    <TextSnippetIcon sx={{ fontSize: 50 }} />
                    <AddIcon
                      sx={{
                        position: "absolute",
                        top: 2,
                        right: 2,
                        fontSize: 16,
                        backgroundColor: "rgb(233, 218, 218)",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{ mt: 2 }}
                    style={{ fontSize: "20px", fontWeight: "700", mt: -2 }}
                  >
                    اضافة معاملة
                  </Typography>
                  <Typography
                    style={{ fontSize: "20px", fontWeight: "700", mt: -3 }}
                  >
                    بشكل يدوي{" "}
                  </Typography>
                </Button>
              </Grid>
              {/* add file */}
              <Modal
                open={showaddfile}
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
                    width: "850px",
                    height: "800px",
                    p: 4,
                    borderRadius: 3,
                    direction: "rtl",
                    outline: "none",
                    display: "flex",
                    flexDirection: "row",
                    boxShadow: "3px 3px 3px gray",
                    gap: 4,
                  }}
                >
                  {/* الجزء الأيمن: الستيبّر */}
                  <Box
                    sx={{ position: "relative", Width: 50, pt: 2, height: 400 }}
                  >
                    {/* الخط الخلفي اليدوي */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 10, // بداية الخط (عدّل حسب الحاجة)
                        bottom: 10,
                        left: 12, // يمر خلف الدوائر تمامًا (عدّل حسب موقع الأيقونة)
                        width: 2,
                        bgcolor: "#ccc",
                        zIndex: 0,
                      }}
                    />

                    <Stepper
                      activeStep={activeStep}
                      orientation="vertical"
                      connector={<></>} // نلغي الموصلات الافتراضية
                    >
                      {steps.map((label, index) => (
                        <Step
                          key={label}
                          sx={{ py: 2, position: "relative", zIndex: 1 }}
                        >
                          <StepLabel
                            onClick={() => handleStep(index)}
                            sx={{
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              ".MuiStepLabel-iconContainer": {
                                order: 2,
                                pl: -3,
                                zIndex: 2,
                              },
                              ".MuiStepLabel-label": {
                                order: 1,
                                color:
                                  activeStep === index
                                    ? "rgb(14,74,35)"
                                    : "gray",
                                fontWeight:
                                  activeStep === index ? "700" : "normal",
                                textAlign: "right",
                                whiteSpace: "nowrap",
                                fontSize: "18px",
                              },
                            }}
                            StepIconProps={{
                              style: {
                                color:
                                  activeStep === index
                                    ? "rgb(14,74,35)"
                                    : "#ccc",
                                width: "40px",
                                height: "40px",
                              },
                            }}
                          >
                            {label}
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </Box>

                  {/* الجزء الأوسط: المحتوى */}
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      mr: -2,
                    }}
                  >
                    {/* العنوان */}
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "24px",
                          color: "rgb(14,74,35)",
                          fontWeight: 700,
                        }}
                      >
                        {steps[activeStep]}
                      </Typography>
                      <HighlightOffIcon
                        onClick={() => setShowAddFile(false)}
                        sx={{
                          cursor: "pointer",
                          color: "rgb(14,74,35)",
                          mt: -2,
                          fontSize: "30px",
                        }}
                      />
                    </Box>
                    <hr
                      style={{
                        height: "4px",
                        width: "90%",
                        background: (() => {
                          if (activeStep === 0)
                            return "linear-gradient(to left, rgb(14,74,35) 40%, rgba(206, 199, 199, 0.43) 60%)";
                          if (activeStep === 1)
                            return "linear-gradient(to left, rgb(14,74,35) 60%, rgba(206, 199, 199, 0.43) 40%)";
                          if (activeStep === 2)
                            return "linear-gradient(to left, rgb(14,74,35) 80%, rgba(206, 199, 199, 0.43) 20%)";
                          if (activeStep === 3)
                            return "linear-gradient(to left, rgb(14,74,35) 100%, rgb(14,74,35) 100%)";
                          return "rgba(206, 199, 199, 0.43)";
                        })(),
                        border: "none",
                        margin: "1rem 0",
                        borderRadius: "2px",
                        mb: 2,
                        marginTop: "0",
                      }}
                    />
                    {/* محتوى كل خطوة (تضع التفاصيل لاحقًا) */}
                    {activeStep == 0 && <Step_1 />}
                    {activeStep == 1 && <Step_2 />}
                    {activeStep == 2 && <Step_3 />}
                    {activeStep == 3 && <Step_4 />}
                    {/* أزرار التنقل */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                      }}
                    >
                      {activeStep !== 0 && (
                        <Button
                          onClick={handleBack}
                          sx={{
                            backgroundColor: "rgb(215,34,24)",
                            color: "white",
                            borderRadius: "25px",
                            width: "30%",
                            height: "54px",
                            fontSize: "24px",
                            fontWeight: "700",
                            "&:hover": {
                              backgroundColor: "darkred",
                            },
                          }}
                        >
                          السابق
                        </Button>
                      )}

                      <Button
                        onClick={handleNext}
                        sx={{
                          backgroundColor: "rgb(14,74,35)",
                          color: "white",
                          borderRadius: "25px",
                          width: "30%",
                          height: "54px",
                          fontSize: "24px",
                          fontWeight: "700",
                          mr: activeStep == 0 ? 55 : 20,
                          "&:hover": {
                            backgroundColor: "rgb(10,50,25)",
                          },
                        }}
                      >
                        {activeStep == 3 ? "اضافة" : "التالي"}
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </Modal>
              {/* add ============================file============================================= */}
              {/* زر word لتحميل ملف من الجهاز */}
              <Grid item xs={12} sm={6} md={3}>
                <label htmlFor="upload-word-file">
                  <input
                    id="upload-word-file"
                    type="file"
                    accept=".doc,.docx"
                    style={{ display: "none" }}
                  />
                  <Button
                    component="span"
                    variant="outlined"
                    fullWidth
                    sx={{
                      height: 230,
                      width: "290px",
                      borderStyle: "dashed",
                      border: "4px dashed rgb(14,75,35) ",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      borderRadius: "5%",
                    }}
                  >
                    <Box
                      position="relative"
                      display="inline-flex"
                      width={40}
                      height={40}
                    >
                      <InsertDriveFileIcon sx={{ fontSize: 50 }} />
                      <Typography
                        variant="caption"
                        sx={{
                          position: "absolute",
                          top: "70%",
                          left: "40%",
                          transform: "translate(-50%, -50%)",
                          fontWeight: "600",
                          color: "white", // أو أي لون يناسبك
                          fontSize: "18px",
                        }}
                      >
                        W
                      </Typography>
                    </Box>
                    <Typography
                      sx={{ mt: 2 }}
                      style={{ fontSize: "20px", fontWeight: "700" }}
                    >
                      اضافة معاملة
                    </Typography>
                    <Typography style={{ fontSize: "20px", fontWeight: "700" }}>
                      بواسطة ملف وورد{" "}
                    </Typography>
                  </Button>
                </label>
              </Grid>
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
      elevation={3}
      sx={{
        height: 200,
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
        {
          <FilesMails
            open={showFile}
            onclose={() => {
              setShowFile(false);
            }}
          />
        }
      </Box>
    </>
  );
}
