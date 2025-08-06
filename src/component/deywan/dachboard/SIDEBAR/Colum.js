import { Box  ,Typography,
  Avatar,
  Stack,
  Grid,
  Paper, FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ColumChart from "../chart/columchart";
import { useEffect, useState } from "react";
import axios from "axios";
import { putData,getData } from "../../../../API/apiService";
import ColumnChart from "../chart/columchart";

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
const [dayOff, setDayOff] = useState([]); // مصفوفة فارغة في البداية
   
const [startPeriod, setStartPeriod] = useState("");

const [endPeriod, setEndPeriod] = useState("");

    const [startHour, setStartHour] = useState("");
  const [startMinute, setStartMinute] = useState("");
  const [endHour, setEndHour] = useState("");
  const [endMinute, setEndMinute] = useState("");

 
    
  
const convertTo24Hour = (hour, minute, period) => {
  let h = parseInt(hour);
  if (period === "م" && h !== 12) h += 12;
  if (period === "ص" && h === 12) h = 0;
  return `${h.toString().padStart(2, "0")}:${minute}`;
};
    useEffect(() => {
  const fetchWorkingHours = async () => {
    try {
      const response = await getData("http://127.0.0.1:8000/api/working-hours/show");
      console.log(response)
const data = response.data;

      setDayOff(data.day_off);

      // تحويل 24 ساعة إلى 12 ساعة مع تحديد الفترة
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
      setStartHour(start.hour);
      setStartMinute(start.minute);
      setStartPeriod(start.period);

      const end = parseTime(data.end_time);
      setEndHour(end.hour);
      setEndMinute(end.minute);
      setEndPeriod(end.period);

    } catch (err) {
      console.error("خطأ أثناء جلب بيانات الدوام:", err);
    }
  };

  fetchWorkingHours();
}, []);
 
 
 
  return (
    <Box
      sx={{
        width: "400px",
        height: "972px",
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
          <Typography fontWeight="bold">أيام عمل النظام</Typography>
          <CalendarMonthIcon sx={{ color: "rgb(14, 75, 35)" }} />

        </Box>

        {/* دوائر الأيام */}
        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 1 }}>
          {weekDays.map((item, index) => (
          <Box
              key={index}
onClick={() => {
  if (dayOff.includes(item.day)) {
    // إذا اليوم موجود، نشيله (إلغاء العطلة)
setDayOff(dayOff.filter(day => day !== item.day))
  } else {
    // إذا مش موجود، نضيفه (تفعيل العطلة)
setDayOff([...dayOff, item.day])
  }
}}            sx={{
              width: 35,
              height: 35,
              borderRadius: "50%",
               backgroundColor: dayOff.includes(item.day) ? "#aaa" : "rgb(14, 75, 35)",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
               <Typography fontSize={12} color="#fff">
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
          <Typography fontWeight="bold">أوقات عمل النظام</Typography>
          <AccessTimeIcon sx={{ color: "rgb(14, 75, 35)" }} />

        </Box>

        {/* الورقتين */}
       <Grid container spacing={1} mt={1}>
  {/* بدء العمل */}
  <Grid item xs={6}>
    <Box display="flex" justifyContent="space-between" mb={0.5}>
      <Typography fontSize={12} fontWeight="bold" color="black">
        بدء العمل:
      </Typography>
      <Typography fontSize={12} fontWeight="bold" color="rgb(14, 75, 35)">
        {startHour && startMinute && startPeriod
          ? `${startHour}:${startMinute} ${startPeriod}`
          : "--:--"}
      </Typography>
    </Box>

    <Paper
      elevation={1}
      sx={{
        padding: 1, width: "185%",
        borderRadius: "10px",
        backgroundColor: "rgb(232,232,232)",
      }}
    >
      <Box display="flex" gap={1}>
        {/* الساعات */}
        <FormControl fullWidth>
          <InputLabel>ساعة</InputLabel>
          <Select
            value={startHour}
            label="ساعة"
            onChange={(e) => setStartHour(e.target.value)}
            MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
          >
            {Array.from({ length: 12 }, (_, i) =>
              (i + 1).toString().padStart(2, "0")
            ).map((h) => (
              <MenuItem key={h} value={h}>
                {h}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* الدقائق */}
        <FormControl fullWidth>
          <InputLabel>دقيقة</InputLabel>
          <Select
            value={startMinute}
            label="دقيقة"
            onChange={(e) => setStartMinute(e.target.value)}
            MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
          >
            {Array.from({ length: 60 }, (_, i) =>
              i.toString().padStart(2, "0")
            ).map((m) => (
              <MenuItem key={m} value={m}>
                {m}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* الفترة */}
        <FormControl fullWidth>
          <InputLabel>الفترة</InputLabel>
          <Select
            value={startPeriod}
            label="الفترة"
            onChange={(e) => setStartPeriod(e.target.value)}
          >
            {["ص", "م"].map((p) => (
              <MenuItem key={p} value={p}>
                {p}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Paper>
  </Grid>

  {/* انتهاء العمل */}
  <Grid item xs={6}>
    <Box display="flex" justifyContent="space-between" mb={0.5}>
      <Typography fontSize={12} fontWeight="bold" color="black">
        انتهاء العمل:
      </Typography>
      <Typography fontSize={12} fontWeight="bold" color="rgb(14, 75, 35)">
        {endHour && endMinute && endPeriod
          ? `${endHour}:${endMinute} ${endPeriod}`
          : "--:--"}
      </Typography>
    </Box>

    <Paper
      elevation={1}
      sx={{
        padding: 1,width: "185%",
        borderRadius: "10px",
        backgroundColor: "rgb(232,232,232)",
      }}
    >
      <Box display="flex" gap={1}>
        {/* الساعات */}
        <FormControl fullWidth>
<InputLabel shrink sx={{ fontSize: "14px", fontWeight: "bold" }}>
  ساعة
</InputLabel>
          <Select
            value={endHour}
            label="ساعة"
            onChange={(e) => setEndHour(e.target.value)}
            MenuProps={{ PaperProps: { style: { maxHeight: 300 } } }}
          >
            {Array.from({ length: 12 }, (_, i) =>
              (i + 1).toString().padStart(2, "0")
            ).map((h) => (
              <MenuItem key={h} value={h}>
                {h}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* الدقائق */}
        <FormControl fullWidth>
          <InputLabel>دقيقة</InputLabel>
          <Select
            value={endMinute}
            label="دقيقة"
            onChange={(e) => setEndMinute(e.target.value)}
            MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
          >
            {Array.from({ length: 60 }, (_, i) =>
              i.toString().padStart(2, "0")
            ).map((m) => (
              <MenuItem key={m} value={m}>
                {m}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* الفترة */}
        <FormControl fullWidth>
          <InputLabel>الفترة</InputLabel>
          <Select
            value={endPeriod}
            label="الفترة"
            onChange={(e) => setEndPeriod(e.target.value)}
          >
            {["ص", "م"].map((p) => (
              <MenuItem key={p} value={p}>
                {p}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Paper>
  </Grid>
</Grid>

<Box mt={2} textAlign="center">
  <button
    onClick={async () => {
      const start_time = convertTo24Hour(startHour, startMinute, startPeriod);
      const end_time = convertTo24Hour(endHour, endMinute, endPeriod);

const validArabicDays = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
  const cleanDayOff = dayOff.filter((day) => validArabicDays.includes(day));
      try {
        console.log({
  start_time,
  end_time,
  day_off: dayOff,
});

        const res = await putData("http://127.0.0.1:8000/api/working-hours", {
          start_time,
          end_time,
day_off: cleanDayOff,         });
        console.log(res)
        alert("تم حفظ الإعدادات بنجاح ✅");
      } catch (err) {
  console.error("Error response:", err);
        alert("حدث خطأ أثناء الإرسال ❌");
      }
    }}
    style={{
      backgroundColor: "rgb(14, 75, 35)",
      color: "#fff",
      padding: "8px 16px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    }}
  >
    حفظ الإعدادات
  </button>
</Box>


      </Box>

      {/* البوكس الأزرق الأساسي تحته */}
     <Box
  sx={{
    width: "100%",
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


    
    </Box>
  );
}
