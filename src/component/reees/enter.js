import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
   Modal,
  Button,
  Divider,
  ListItemAvatar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  AppBar,
} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import ArticleIcon from '@mui/icons-material/Article';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SidBar from "./dachboard/SIDEBAR/sidbar";
import Appar from "./dachboard/SIDEBAR/appar";

const inboxRows = [
  {
    id: "#896643",
    mailTitle: "استلام شهادة",
    officeName: "مكتب المدير العام",
    senderName: "محمد الأسد",
    senderPhone: "+963987432196",
    senderImg: "https://randomuser.me/api/portraits/men/75.jpg",
    dateReceived: "2/5/2025",
  },
];

const outboxRows = [
  {
    id: "#789541",
    mailTitle: "إرسال تقرير",
    officeName: "قسم الإحصاء",
    officePhone: "+963998765432",
    status: "مرسلة",
    dateReceived: "2/5/2025",
    dateSent: "2/5/2025",
  },
];

const headStyle = {
  color: "white",
  fontWeight: "bold",
  py: 1.5,
};
const Enter_Raees = () => {
   const [anchorEl, setAnchorEl] = useState(null);
  const [selectedType, setSelectedType] = useState("البريد الوارد");
  const [openModal, setOpenModal] = useState(false);

   const handleClick = (event) => setAnchorEl(event.currentTarget);
  const isInbox = selectedType === "البريد الوارد";
  const rows = isInbox ? inboxRows : outboxRows;

  return (
    <Box sx={{ display: "flex", height: "100vh", direction: "rtl",backgroundColor:"rgb(233,232,232)" }}>
      <SidBar />
      <Box flex={1} p={2}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
          
        >
        

        

          
        </Box>
 <Appar/>
      <Box
          
            display="flex"
            alignItems="center"
            sx={{ cursor: "pointer", gap: 1 ,mb:3 }}
            onClick={handleClick}
           
          >
            <MenuIcon />
<Typography fontWeight="bold">{selectedType}</Typography>
            <ArrowDropDownCircleOutlinedIcon   onClick={() => {
    setSelectedType(prev =>
      prev === "البريد الوارد" ? "البريد الصادر" : "البريد الوارد"
    );
  }}
/>
          </Box>

     <TableContainer sx={{ mr: 1, backgroundColor: "transparent", boxShadow: "none" }}>
  <Table sx={{width:"98%"}}>
    <TableHead>
  <TableRow sx={{ backgroundColor: "#1f4d38" }}>
    <TableCell align="center" sx={headStyle}>رقم البريد</TableCell>

    {isInbox ? (
      <>
        <TableCell align="center" sx={headStyle}>صورة المرسل</TableCell>
        <TableCell align="center" sx={headStyle}>اسم المرسل</TableCell>
        <TableCell align="center" sx={headStyle}>رقم المرسل</TableCell>
        <TableCell align="center" sx={headStyle}>عنوان البريد</TableCell>
        <TableCell align="center" sx={headStyle}>اسم المكتب</TableCell>
        <TableCell align="center" sx={headStyle}>تاريخ الاستلام</TableCell>
      </>
    ) : (
      <>
        <TableCell align="center" sx={headStyle}>اسم المكتب</TableCell>
        <TableCell align="center" sx={headStyle}>رقم المكتب</TableCell>
        <TableCell align="center" sx={headStyle}>عنوان البريد</TableCell>
        <TableCell align="center" sx={headStyle}>حالة البريد</TableCell>
        <TableCell align="center" sx={headStyle}>تاريخ الاستلام</TableCell>
        <TableCell align="center" sx={headStyle}>تاريخ الإرسال</TableCell>
      </>
    )}

    <TableCell align="center" sx={{ color: "white", py: 1.5 }}></TableCell>
  </TableRow>
</TableHead>

   <TableBody>
  {rows.map((row, index) => (
    <TableRow
      key={index}
      sx={{
        backgroundColor: "transparent",
        borderBottom: "2px solid #1f4d38",
      }}
    >
      <TableCell align="center" sx={{ py: 1.5 }}>{row.id}</TableCell>

      {isInbox ? (
        <>
          <TableCell align="center">
            <Avatar src={row.senderImg} sx={{ width: 35, height: 35, margin: "auto" }} />
          </TableCell>
          <TableCell align="center">{row.senderName}</TableCell>
          <TableCell align="center">{row.senderPhone}</TableCell>
          <TableCell align="center">{row.mailTitle}</TableCell>
          <TableCell align="center">{row.officeName}</TableCell>
          <TableCell align="center">{row.dateReceived}</TableCell>
        </>
      ) : (
        <>
          <TableCell align="center">{row.officeName}</TableCell>
          <TableCell align="center">{row.officePhone}</TableCell>
          <TableCell align="center">{row.mailTitle}</TableCell>
          <TableCell align="center">{row.status}</TableCell>
          <TableCell align="center">{row.dateReceived}</TableCell>
          <TableCell align="center">{row.dateSent}</TableCell>
        </>
      )}

      <TableCell align="center">
        <IconButton
          onClick={() => setOpenModal(true)}
          sx={{
            border: '1px solid rgba(212, 208, 212, 0.31)',
            borderRadius: '50px',
            width: 30,
            height: 30,
            padding: '8px',
            backgroundColor: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.secondary.main,
          }}
        >
          <ArticleIcon sx={{ fontSize: 20 }} />
          <ArrowUpwardIcon
            sx={{
              position: 'absolute',
              top: 11,
              right: 2,
              fontSize: 6,
              backgroundColor: 'white',
              color: 'black',
              transform: 'rotate(60deg)',
              borderRadius: '50%',
              padding: '2px',
            }}
          />
        </IconButton>
      </TableCell>
    </TableRow>
  ))}
</TableBody>
  </Table>
</TableContainer>



      </Box>




  {<Modal
  open={openModal}
  
  aria-labelledby="add-employee-modal"
  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
>
  <Paper
    elevation={4}
    sx={{
      width: 600,
      maxHeight: '90vh',
      p: 4,
      borderRadius: 3,
      direction: 'rtl',
      position: 'relative',
      
      backgroundPosition: 'center',
      backgroundColor: '#fff', '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400, // حجم الشعار
      height: 400,
      backgroundImage: 'url("/logo.png")', // رابط الشعار المرفق
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      opacity: 0.3, // شفافية عالية جداً
      zIndex: 0,
    },  // يجعل الخلفية باهتة
    }}
  >
    <HighlightOffIcon
       onClick={()=>{setOpenModal(false)}}
      sx={{ position: 'absolute', top: 16, left: 16, cursor: 'pointer' }}
    />

    {/* نصوص العنوان الكبيرة */}
    <Typography fontWeight="600" fontSize="14px"color="black">
       الجمهورية العربية السورية
    </Typography>
    <Typography fontWeight="600" fontSize="14px" color="black">
      وزارة الصحة
    </Typography>
    <Typography fontWeight="600" fontSize="14px" color="black">
      الهيئة السورية للاختصاصات الطبية
    </Typography>
   {/* العنوان */}
<Typography fontSize="14px" fontWeight="600" mt={2}>
  <Box component="span" color="gray">العنوان :</Box>{' '}
  <Box component="span" color="black">تسليم شهادة</Box>
</Typography>

{/* الموضوع */}
<Typography fontSize="14px" fontWeight="600">
  <Box component="span" color="gray">الموضوع :</Box>{' '}
  <Box component="span" color="black">تعديل آلية تسليم شهادات البورد السوري</Box>
</Typography>


    <Typography fontSize="14px" color="rgb(34,42,37)" mt={2}>
      بناءً على متطلبات تسهيل الإجراءات الإدارية، وحرصاً على تيسير استلام شهادات البورد السوري للأطباء الأخصائيين المقيمين خارج محافظات مراكز الهيئة، تقرر ما يلي:
    </Typography>

    <Typography fontSize="14px" color="rgb(34,42,37)" mt={1}>
      يُسمح للأطباء المتقدمين لاستلام شهادات البورد السوري بإرسال أصول الوثائق المطلوبة عبر البريد الرسمي
    </Typography>
    <Typography fontSize="14px" color="rgb(34,42,37)">
      أو عن طريق وكلاء قانونيون بموجب وكالات موثقة ومصدقة أصولاً، على أن يتم التأكد من صحة الوثائق والأصول
    </Typography>
    <Typography fontSize="14px" color="rgb(34,42,37)">
      المرسلة ومطابقتها للسجلات المعتمدة في الهيئة، و تسليم الشهادة للطبيب شخصياً عند حضوره إلى مقر الهيئة، أو إرسالها له عبر البريد الرسمي إلى العنوان المحدد بناءً على طلب خطي، و في حال الاستلام عبر
    </Typography>
    <Typography fontSize="14px" color="rgb(34,42,37)">
      وكيل، يجب إرفاق نسخة مصدقة من الوكالة القانونية الممنوحة له.
    </Typography>
    <Typography fontSize="14px" color="rgb(34,42,37)" mt={1}>
      يُعمل بهذا التعديل اعتباراً من تاريخه، ويُعمم على كافة الدوائر المعنية للتنفيذ بدقة.
    </Typography>
    <Typography fontSize="14px" color="rgb(34,42,37)" mt={2}>
      وتفضلوا بقبول فائق الاحترام
    </Typography>

    {/* التوقيع */}
    <Typography fontWeight="600" fontSize="14px" sx={{mr:54}}>
      <Box component="span" sx={{color:"black"}}>الاسم:</Box>{''}
            <Box component="span" sx={{color:"gray" ,whiteSpace:'-moz-pre-wrap'}}>        الدكتور يونس قبلان
</Box>

    </Typography>
   <Typography fontWeight="600" fontSize="14px" sx={{mr:54}}>
      <Box component="span" sx={{color:"black"}}>التاريخ:</Box>{''}
            <Box component="span" sx={{color:"gray"}}>        1/2/2035  
</Box>

    </Typography>
    {/* زر الإرسال */}
    <Box sx={{ display: 'flex', justifyContent: 'flex-end',mt:2 }}>
     <Button variant="contained" color="rgb(14,74,35)" sx={{borderRadius:"20px" ,width:"46%",backgroundColor:"rgb(14,74,35)",color:"white",ml:56}}>
        ارسال
      </Button>
    </Box>
  </Paper>
</Modal>
}
    </Box>
  );
};

export default Enter_Raees;
