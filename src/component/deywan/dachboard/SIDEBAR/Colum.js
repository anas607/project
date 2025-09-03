import { Box, Typography, TextField, Grid, Dialog, DialogTitle,DialogContentText, DialogActions,DialogContent, Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useEffect, useRef, useState } from "react";
import { putData, getData } from "../../../../API/apiService";
import ColumnChart from "../chart/columchart";
import { BaseUrl, WEEKLY_HOURS, WEEKLY_HOURS_SHOW } from "../../../../API/api";

const weekDays = [
  { day: "الأحد", en: "Sunday" },
  { day: "الاثنين", en: "Monday" },
  { day: "الثلاثاء", en: "Tuesday" },
  { day: "الأربعاء", en: "Wednesday" },
  { day: "الخميس", en: "Thursday" },
  { day: "الجمعة", en: "Friday" },
  { day: "السبت", en: "Saturday" },
];

export default function Colum() {
  const isFirstRun = useRef(true);
  const [originalData, setOriginalData] = useState(null);
  const [dayOff, setDayOff] = useState([]);
  const [time, setTime] = useState({
    startPeriod: "",
    endPeriod: "",
    startHour: "",
    endHour: "",
    startMinute: "",
    endMinute: "",
  });
const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    color: "",
  });

  // الحالة الجديدة لإدارة نافذة التأكيد
  const [openConfirm, setOpenConfirm] = useState(false);

  // بيانات مؤقتة عند التعديل
  const [pendingTime, setPendingTime] = useState(null);
  const [pendingDayOff, setPendingDayOff] = useState(null);

  const convertTo = (hour, minute, period) => {
    let h = parseInt(hour);
    if (period === "م" && h !== 12) h += 12;
    if (period === "ص" && h === 12) h = 0;
    return `${h.toString().padStart(2, "0")}:${minute}`;
  };

  useEffect(() => {
    const fetchWorkingHours = async () => {
      try {
        const response = await getData(`${BaseUrl}${WEEKLY_HOURS_SHOW}`);
        const data = response.data;

        setDayOff(data.day_off);
        setOriginalData({
          start_time: data.start_time,
          end_time: data.end_time,
          day_off: data.day_off,
        });

        const parseTime = (timeStr) => {
          const [hourStr, minute] = timeStr.split(":");
          let hour = parseInt(hourStr, 10);
          let period = "ص";

          if (hour >= 12) {
            period = "م";
            if (hour > 12) hour -= 12;
          } else if (hour === 0) {
            hour = 12;
          }

          return {
            hour: hour.toString().padStart(2, "0"),
            minute,
            period,
          };
        };

        const start = parseTime(data.start_time);
        const end = parseTime(data.end_time);

        setTime({
          startHour: start.hour,
          startMinute: start.minute,
          startPeriod: start.period,
          endHour: end.hour,
          endMinute: end.minute,
          endPeriod: end.period,
        });
      } catch (err) {
        console.error("خطأ أثناء جلب بيانات الدوام:", err);
      }
    };

    fetchWorkingHours();
  }, []);

  //  لفتح نافذة التأكيد عند تعديل الوقت أو الأيام
  const requestSave = (newTime, newDayOff) => {
    setPendingTime(newTime);
    setPendingDayOff(newDayOff);
    setOpenConfirm(true);
  };

  // عند الموافقة على الحفظ
  const handleConfirm = async () => {
    setOpenConfirm(false);

    if (!pendingTime || !pendingDayOff) return;

    const start_time = convertTo(pendingTime.startHour, pendingTime.startMinute, pendingTime.startPeriod);
    const end_time = convertTo(pendingTime.endHour, pendingTime.endMinute, pendingTime.endPeriod);

    try {
    const response=  await putData(`${BaseUrl}${WEEKLY_HOURS}`, {
        start_time,
        end_time,
        day_off: pendingDayOff,
      });
setSnackbar({
        open: true,
        message: response.message || "تم تغيير بيانات الدوام بنجاح",
        severity: "success", color: "green",
      });
      // alert("تم تغيير بيانات الدوام بنجاح");

      setOriginalData({
        start_time,
        end_time,
        day_off: pendingDayOff,
      });

      setTime(pendingTime);
      setDayOff(pendingDayOff);

      setPendingTime(null);
      setPendingDayOff(null);
    } catch (err) {
      alert("حدث خطأ أثناء الحفظ");
      console.error(err);
    }finally{
          setTimeout(() => setSnackbar((prev) => ({ ...prev, open: false })), 2500);

    }
  };

  // عند إلغاء الحفظ
  const handleCancel = () => {
    setOpenConfirm(false);
    setPendingTime(null);
    setPendingDayOff(null);
  };

  // التعامل مع تغيير الوقت (في حقل بدء العمل)
  const handleStartTimeChange = (e) => {
    const [h, m] = e.target.value.split(":");
    let hour = parseInt(h);
    let period = "ص";

    if (hour >= 12) {
      period = "م";
      if (hour > 12) hour -= 12;
    } else if (hour === 0) {
      hour = 12;
    }

    const newTime = {
      ...time,
      startHour: hour.toString().padStart(2, "0"),
      startMinute: m,
      startPeriod: period,
    };

    requestSave(newTime, dayOff);
  };

  // التعامل مع تغيير الوقت (في حقل انتهاء العمل)
  const handleEndTimeChange = (e) => {
    const [h, m] = e.target.value.split(":");
    let hour = parseInt(h);
    let period = "ص";

    if (hour >= 12) {
      period = "م";
      if (hour > 12) hour -= 12;
    } else if (hour === 0) {
      hour = 12;
    }

    const newTime = {
      ...time,
      endHour: hour.toString().padStart(2, "0"),
      endMinute: m,
      endPeriod: period,
    };

    requestSave(newTime, dayOff);
  };

  // التعامل مع تغيير أيام العطلة
  const handleDayOffClick = (day) => {
    let newDayOff;

    if (dayOff.includes(day)) {
      newDayOff = dayOff.filter((d) => d !== day);
    } else {
      newDayOff = [...dayOff, day];
    }

    requestSave(time, newDayOff);
  };

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
    <Box
      sx={{
        width: "600px",
        height: "1072px",
        backgroundColor: "rgb(232, 232, 232)",
        borderRadius: "8px",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "360px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: 2,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* العنوان + أيقونة الكاليندر */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{fontSize:'24px'}} fontWeight="bold">أيام عمل النظام</Typography>
          <CalendarMonthIcon sx={{ color: "rgb(14, 75, 35)" }} />
        </Box>

        {/* دوائر الأيام */}
        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 1, cursor: "pointer" }}>
          {weekDays.map((item, index) => (
            <Box
              key={index}
              onClick={() => handleDayOffClick(item.day)}
              sx={{
                width: 70,
                height: 70,fontSize:'18px',
                borderRadius: "50%",
                backgroundColor: dayOff.includes(item.day) ? "#aaa" : "rgb(14, 75, 35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography fontSize={18} color="#fff">
                {item.day}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* عنوان وقت العمل + أيقونة الساعة */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <Typography sx={{fontSize:'24px'}} fontWeight="700">أوقات عمل النظام</Typography>
          <AccessTimeIcon sx={{fontSize:'24px', color: "rgb(14, 75, 35)" }} />
        </Box>

        {/* الورقتين */}
        <Grid container spacing={1} mt={1}>
          {/* بدء العمل */}
          <Grid item xs={6}>
            <TextField
              type="time"
              value={time.startHour && time.startMinute ? `${convertTo(time.startHour, time.startMinute, time.startPeriod)}` : ""}
              onChange={handleStartTimeChange}
              label="بدء العمل"
              sx={{
                                width:"250px",

                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgb(14, 75, 35)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgb(14, 75, 35)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(14, 75, 35)",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "rgb(14, 75, 35)",
                },
              }}
            />
          </Grid>

          {/* انتهاء العمل */}
          <Grid item xs={6}>
            <TextField
              type="time"
              
              value={time.endHour && time.endMinute ? `${convertTo(time.endHour, time.endMinute, time.endPeriod)}` : ""}
              onChange={handleEndTimeChange}
              label="انتهاء العمل"
              sx={{
                width:"250px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgb(14, 75, 35)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgb(14, 75, 35)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(14, 75, 35)",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "rgb(14, 75, 35)",
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* البوكس الأزرق الأساسي تحته */}
      <Box
        sx={{
          width: "100%",height:'655px',
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          mt: 2,
          px: 2,
          pt: 2,
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{ color: "rgb(14, 75, 35)", mb: 2, fontSize: "20px", fontWeight: "bold" }}
        >
          إنجاز الدوائر للمعاملات
        </Typography>

        <ColumnChart />
      </Box>

      {/* حوار التأكيد */}
      <Dialog
                       open={openConfirm}
                       aria-labelledby="alert-dialog-title"
                       aria-describedby="alert-dialog-description"
                     >
                       <DialogTitle
                         id="alert-dialog-title"
                         sx={{ direction: "rtl", fontSize: "24px", fontWeight: "700" }}
                       >
                        هل ترغب فعلاً بتأكيد التغييرات؟
                          </DialogTitle>
                                          <DialogContent>
                                            <DialogContentText
                                              sx={{ fontSize: "24px", fontWeight: "700" }}
                                              id="alert-dialog-description"
                                            >
                                              لن تستطبع التراجع اذا قمت بالضغط على موافق
                                            </DialogContentText>
                                          </DialogContent>
                                           <DialogActions sx={{ mr: 39 }}>
                                                              <Button
                                                                sx={{ color: "red", fontSize: "24px", fontWeight: "700" }}
                                                                autoFocus
                                                                onClick={handleConfirm}
                                                              >
                                                                موافق
                                                              </Button>
                                                              <Button
                                                                onClick={handleCancel}
                                                                sx={{
                                                                  color: "rgb(14,74,35)",
                                                                  fontSize: "24px",
                                                                  fontWeight: "700",
                                                                }}
                                                              >
                                                                تراجع
                                                              </Button>
                                                            </DialogActions>
                                                          </Dialog>
     
    </Box>
    </>
  );
}
