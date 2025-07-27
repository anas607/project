import { Box, Button, Select, MenuItem, Typography, IconButton,Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SidBar from "../../../deywan/dachboard/SIDEBAR/sidbar";

import ArticleIcon from '@mui/icons-material/Article';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchspeclise } from "../../../../reducer/managerexam/showspeclice";
import { postData } from "../../../../API/apiService";
import { ADD, BaseUrl, PROGRAM } from "../../../../API/api";




export default function AddProgramForm({ setAddProgram }) {
  const [selectedMonth, setSelectedMonth] = useState("");
const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const [exams, setExams] = useState([
  {
    specialization_id: "",
    day: "",
    date: "",
    simple_ratio: "",
    average_ratio: "",
    hard_ratio: "",
    start_time: "",
    end_time: "",
  }
]);
const handleExamChange = (index, field, value) => {
  const updatedExams = [...exams];
  updatedExams[index][field] = value;
  setExams(updatedExams);
};
const handleAddRow = () => {
  setExams([
    ...exams,
    {
      specialization_id: "",
      day: "",
      date: "",
      start_time: "",
      end_time: "",
      simple_ratio: "",
      average_ratio: "",
      hard_ratio: "",
    },
  ]);
};
const handleSubmitProgram = async () => {
  if (!selectedMonth || !selectedYear) {
    alert("يرجى اختيار الشهر والسنة");
    return;
  }

  try {
    const payload = {
      month: selectedMonth,
      year: selectedYear,
      exams: exams.map((e) => ({
        ...e,
        simple_ratio: Number(e.simple_ratio),
        average_ratio: Number(e.average_ratio),
        hard_ratio: Number(e.hard_ratio),
      })),
    };

    const res = await postData(`${BaseUrl}${PROGRAM}${ADD}`, payload);
    alert("تمت الإضافة بنجاح");
    setExams([]);
  } catch (err) {
    alert(err.message || "فشل في إرسال البيانات");
  }
};


// const [specializations, setSpecializations] = useState([]);

 const {  data: specializations } = useSelector((state) => state.fetchall); 
  const [selectedSpecializations, setSelectedSpecializations] = useState({});
  const dispatch = useDispatch();

  const handleSpecializationChange = (index, selectedId) => {
  setSelectedSpecializations(prev => ({
    ...prev,
    [index]: selectedId
  }));
};

useEffect(() => {
  dispatch(fetchspeclise());
}, [dispatch]);



  return (
    <Box sx={{ display: "flex", height: "100vh", direction: "rtl", backgroundColor: "rgb(233,232,232)" }}>
         
         <SidBar />
   
         <Box sx={{ flex: 1, p: 2 }}>
           
           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        {/* زر الرجوع */}
        <IconButton onClick={() => setAddProgram(false)} sx={{ backgroundColor: "rgb(71, 59, 68)", color: "rgb(233,232,232)" }}>
          <ArrowBackIcon sx={{fontSize:'50px',                  transform: "rotate(180deg)", // إذا بدك يوجه يمين
}} />
        </IconButton>

        {/* إشعارات وخروج */}
          {/* الزرين */}
          <Box sx={{ display: "flex", gap: 3 }}>
            <IconButton
            //   ref={notifBtnRef}
            //   onClick={handleToggleNotifications}
              sx={{
                border: "1px solid rgba(212, 208, 212, 0.31)",
                borderRadius: "50px",
                width: "64px",
                height: "64px",
                padding: "8px",
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.secondary.main,
                position: "relative",
              }}
            >
              <NotificationsIcon sx={{ fontSize: "30px" }} />
              <Box
                sx={(theme) => ({
                  position: "absolute",
                  top: 18.4,
                  right: 18,
                  width: 7,
                  height: 7,
                  bgcolor: "white",
                  borderRadius: "50%",
                  border: `2px solid ${theme.palette.primary.main}`,
                })}
              />
            </IconButton>

            <IconButton
            //   onClick={() => setShowLogOut(true)}
              sx={{
                border: "1px solid rgba(212, 208, 212, 0.31)",
                borderRadius: "50px",
                padding: "8px",
                width: "64px",
                height: "64px",
                backgroundColor: "rgb(71, 59, 68)",
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              <PowerSettingsNewIcon sx={{ fontSize: "30px" }} />
            </IconButton>
          </Box>
      </Box>

      {/* select للدورة والسنة */}
      <Box sx={{ display: "flex", gap: 4, mb: 4 }}>
        
        <Box>
          <Typography sx={{fontSize:'24px',fontWeight:'700',mr:-25}}>دورة شهر</Typography>
          <Select
  value={selectedMonth}
  onChange={(e) => setSelectedMonth(e.target.value)}
  fullWidth
  sx={{ minWidth: 300 }}
>
  <MenuItem value="">اختر الشهر</MenuItem>
  <MenuItem value="تشرين الأول">تشرين الأول</MenuItem>
  <MenuItem value="نيسان">نيسان</MenuItem>
</Select>
        </Box>

        <Box>
          <Typography sx={{fontSize:'24px',fontWeight:'700',mr:-29}}> سنة</Typography>
          <Select
  value={selectedYear}
  onChange={(e) => setSelectedYear(e.target.value)}
  fullWidth
  sx={{ minWidth: 300 }}
>
  {[...Array(10)].map((_, i) => {
    const year = new Date().getFullYear() + i;
    return (
      <MenuItem key={year} value={year}>
        {year}
      </MenuItem>
    );
  })}
</Select>

        </Box>
         <Button  onClick={handleSubmitProgram}  variant="contained" color="rgb(14,74,35)"  sx={{borderRadius:"30px" ,width:"11%",height:"60px",backgroundColor:"rgb(14,74,35)",color:"white",fontSize:'24px',fontWeight:'700'}}>
                                اضافة 
                                </Button>
      </Box>

      {/* جدول أو محتوى آخر */}
      <Box>
      
               <TableContainer sx={{ mr: -1, backgroundColor: "transparent", boxShadow: "none" , width: "1583px",mt:2}}>
            <Table  sx={{Width: '100%'}}>
             <TableHead sx={{width:"1503px", height:'88px'}}>
            <TableRow sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                الاختصاص 
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px' }}>
                 اليوم
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                 التاريخ
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                 الساعة
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                نسبة البسيط
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                نسبة المتوسط
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                نسبة الصعب
              </TableCell>
             
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                {/* أيقونة */}
              </TableCell>
            </TableRow>
          </TableHead>
          
          
          
          <TableBody>
           
       
               {exams.map((exam, index) => (
    <TableRow key={index}>
      <TableCell align="center">
        <Select
          value={exam.specialization_id}
          onChange={(e) => handleExamChange(index, "specialization_id", e.target.value)}
          fullWidth
        >
          <MenuItem disabled value="">اختر الاختصاص</MenuItem>
          {specializations?.map((spec) => (
            <MenuItem key={spec.id} value={spec.id}>
              {spec.name}
            </MenuItem>
          ))}
        </Select>
      </TableCell>

      <TableCell align="center">
  <Select
    value={exam.day}
    onChange={(e) => handleExamChange(index, "day", e.target.value)}
    fullWidth
    displayEmpty
  >
    <MenuItem value="" disabled>اختر اليوم</MenuItem>
    <MenuItem value="السبت">السبت</MenuItem>
    <MenuItem value="الأحد">الأحد</MenuItem>
    <MenuItem value="الاثنين">الاثنين</MenuItem>
    <MenuItem value="الثلاثاء">الثلاثاء</MenuItem>
    <MenuItem value="الأربعاء">الأربعاء</MenuItem>
    <MenuItem value="الخميس">الخميس</MenuItem>
  </Select>
</TableCell>

      <TableCell align="center">
        <TextField
          type="date"
          value={exam.date}
          onChange={(e) => handleExamChange(index, "date", e.target.value)}
          fullWidth
        />
      </TableCell>

      <TableCell align="center">
        <TextField
          type="time"
          value={exam.start_time}
          onChange={(e) => handleExamChange(index, "start_time", e.target.value)}
          fullWidth
          label="من"
        />
        <TextField
          type="time"
          value={exam.end_time}
          onChange={(e) => handleExamChange(index, "end_time", e.target.value)}
          fullWidth
          label="إلى"
        />
      </TableCell>

      <TableCell align="center">
        <TextField
          value={exam.simple_ratio}
          type="number"
          onChange={(e) => handleExamChange(index, "simple_ratio", e.target.value)}
          fullWidth
        />
      </TableCell>

      <TableCell align="center">
        <TextField
          value={exam.average_ratio}
          type="number"
          onChange={(e) => handleExamChange(index, "average_ratio", e.target.value)}
          fullWidth
        />
      </TableCell>

      <TableCell align="center">
        <TextField
          value={exam.hard_ratio}
          type="number"
          onChange={(e) => handleExamChange(index, "hard_ratio", e.target.value)}
          fullWidth
        />
      </TableCell>

     
                <TableCell align="center">
                  <IconButton
                    sx={{
                      border: "1px solid rgba(212, 208, 212, 0.31)",
                      borderRadius: "50px",ml:-3,
                      width: 52,
                      height: 52,
                      padding: "8px",
                      backgroundColor: (theme) => theme.palette.primary.main,
                      color: (theme) => theme.palette.secondary.main,
                    }}
                  >
                    <ArticleIcon sx={{ fontSize: 30 }} />
                    <ArrowUpwardIcon
                      sx={{
                        position: "absolute",
                       top: 24,
              right: 10,
                        fontSize: 6,
                        backgroundColor: "white",
                        color: "black",
                        transform: "rotate(60deg)",
                        borderRadius: "50%",
                        padding: "2px",border: "3px solid rgb(14, 74, 35)",
                      }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
           <TableRow
  sx={{
    borderBottom: "3px solid rgb(14, 74, 35)",
    height: 80,
    backgroundColor: "transparent",
  }}
>
  <TableCell colSpan={8} align="center">
  
  </TableCell>
</TableRow>


          </TableBody>
          
          
          
            </Table>
          </TableContainer>
          <Box sx={{ position: "relative" }}>
  {/* TableContainer هنا */}
  <TableContainer>...</TableContainer>

  <IconButton
    onClick={handleAddRow}
    sx={{
      position: "absolute",
      bottom: -30,
      right: 20,
      width: 60,
      height: 60,
      borderRadius: "50%",
      backgroundColor: "rgb(14,74,35)",
      color: "white",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      transition: "0.3s",
      "&:hover": {
        backgroundColor: "rgb(18, 100, 45)",
      },
    }}
    disabled={exams.length >= 8}
  >
    <AddIcon sx={{ fontSize: 32 }} />
  </IconButton>
</Box>

         

        {/* يمكنك وضع جدول MUI هنا */}
      </Box>
    </Box></Box>
  );
}
