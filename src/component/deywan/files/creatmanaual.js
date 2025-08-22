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

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useEffect, useState } from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Step_1 from "./steps/step_1";
import Step_2 from "./steps/step_2";
import Step_3 from "./steps/step_3";
import Step_4 from "./steps/step_4";
import { getData, postData } from "../../../API/apiService";
import { BaseUrl, FETCHOFFICE } from "../../../API/api";
import axios from "axios";
import { useSelector } from "react-redux";
import { FIELD_TYPES } from "../../../reducer/files/manual";


const steps = ["المعلومات العامة", " استمارة المعاملة", "المرفقات", "معاينة"];



export default function Creat_Manaual() {
    
   
  const [showaddfile, setShowAddFile] = useState(false);
  const [activeStep, setActiveStep] = useState(0);



 const step1 = useSelector(state => state.step); // transactionName, transactionCost, selectedOfficeId
    const step2 = useSelector(state => state.step.elements); // عناصر Step 2
    const step3 = useSelector(state => state.step); // imageFile, excelFile

  function handleBack() {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  }
  function handleStep(step) {
    setActiveStep(step);
  }
const handleNext = async () => {
  if (activeStep === 3) {
    try {
      const trimmedName = step1.name.trim();

      const mapTypeToNumber = {
        [FIELD_TYPES.TEXT]: 1,
        [FIELD_TYPES.NUMBER]: 2,
        [FIELD_TYPES.DATE]: 3,
        [FIELD_TYPES.EXCEL]: 5,
        [FIELD_TYPES.IMAGE]: 5,
        [FIELD_TYPES.CHECKBOX]: 6,
        [FIELD_TYPES.MULTI_CHOICE]: 6
      };

      const elementsForBackend = step2.map(el => ({
        label: el.label.trim(),
        type: mapTypeToNumber[el.type] || 1 // الافتراضي نص
      }));

      // تجهيز البودي للإرسال
      const body = {
        name: trimmedName,
        cost: step1.transactionCost,
        path_ids: step1.selectedOfficeId.length ? step1.selectedOfficeId : [],
        elements: elementsForBackend
      };

      console.log("جسم الطلب للإرسال:", body);

      const response = await postData(
        "http://127.0.0.1:8000/api/form/manual",
        body
      );

      if (response.data.success) {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("خطأ أثناء الإرسال:", error);
    }
  } else {
    setActiveStep((prev) => prev + 1);
  }
};




 
  return (
    <>
 

     
        
       
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
             </Grid>
             </>)}