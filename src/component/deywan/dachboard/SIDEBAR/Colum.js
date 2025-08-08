import { Box  ,Typography,
  Avatar,
  TextField,
  Grid,
  Paper, FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ColumChart from "../chart/columchart";
import { useEffect, useRef, useState } from "react";
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
  const isFirstRun = useRef(true);
const [originalData, setOriginalData] = useState(null);

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
setOriginalData({
  start_time: data.start_time,
  end_time: data.end_time,
  day_off: data.day_off,
});

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
 
 useEffect(() => {
  if (isFirstRun.current) {
    isFirstRun.current = false;
    return;
  }

  const saveSettings = async () => {
    if (
      startHour && startMinute && startPeriod &&
      endHour && endMinute && endPeriod &&
      originalData // تأكد من تحميل البيانات الأصلية
    ) {
      const start_time = convertTo24Hour(startHour, startMinute, startPeriod);
      const end_time = convertTo24Hour(endHour, endMinute, endPeriod);
      const validArabicDays = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
      const cleanDayOff = dayOff.filter((day) => validArabicDays.includes(day));

      // ✨ تحقق إذا تغير شيء فعليًا
      const isChanged =
        start_time !== originalData.start_time ||
        end_time !== originalData.end_time ||
        JSON.stringify(cleanDayOff.sort()) !== JSON.stringify([...originalData.day_off].sort());

      if (!isChanged) return; // لا تفعل شيء إذا لا يوجد تغيير

      try {
        await putData("http://127.0.0.1:8000/api/working-hours", {
          start_time,
          end_time,
          day_off: cleanDayOff,
        });

        alert("تم تغيير بيانات الدوام بنجاح");

        // ✨ حدّث النسخة الأصلية بعد الحفظ
        setOriginalData({
          start_time,
          end_time,
          day_off: cleanDayOff,
        });

      } catch (err) {
        console.error("❌ خطأ أثناء الحفظ التلقائي:", err);
      }
    }
  };

  saveSettings();
}, [startHour, startMinute, startPeriod, endHour, endMinute, endPeriod, dayOff, originalData]);

 
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
        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 1,cursor:'pointer' }}>
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
    <TextField
  type="time"
  fullWidth
  value={`${startHour && startMinute ? `${convertTo24Hour(startHour, startMinute, startPeriod)}` : ''}`}
  onChange={(e) => {
    const [h, m] = e.target.value.split(":");
    let hour = parseInt(h);
    let period = "ص";

    if (hour >= 12) {
      period = "م";
      if (hour > 12) hour -= 12;
    } else if (hour === 0) {
      hour = 12;
    }

    setStartHour(hour.toString().padStart(2, "0"));
    setStartMinute(m);
    setStartPeriod(period);
  }}
  label="بدء العمل"
   sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgb(14, 75, 35)',
      },
      '&:hover fieldset': {
        borderColor: 'rgb(14, 75, 35)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgb(14, 75, 35)',
      },
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'rgb(14, 75, 35)',
    },
  }}
/>


  </Grid>

  {/* انتهاء العمل */}
  <Grid item xs={6}>
    <Box display="flex" justifyContent="space-between" mb={0.5}>
     <TextField
  type="time"
  fullWidth
  value={`${endHour && endMinute ? `${convertTo24Hour(endHour, endMinute, endPeriod)}` : ''}`}
  onChange={(e) => {
    const [h, m] = e.target.value.split(":");
    let hour = parseInt(h);
    let period = "ص";

    if (hour >= 12) {
      period = "م";
      if (hour > 12) hour -= 12;
    } else if (hour === 0) {
      hour = 12;
    }

    setEndHour(hour.toString().padStart(2, "0"));
    setEndMinute(m);
    setEndPeriod(period);
  }}
  label="انتهاء العمل"
   sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgb(14, 75, 35)',
      },
      '&:hover fieldset': {
        borderColor: 'rgb(14, 75, 35)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgb(14, 75, 35)',
      },
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'rgb(14, 75, 35)',
    },
  }}
/>

    </Box>

   
  </Grid>
</Grid>



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
