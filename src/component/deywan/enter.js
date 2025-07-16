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
 fontWeight: "700" ,fontSize:'20px',
  py: 1.5,
};
const Enter = () => {
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
            sx={{ cursor: "pointer", gap: 1  ,}}
            onClick={handleClick}
          style={{marginTop:'3%'}}
          >
            <MenuIcon  />
<Typography fontWeight="700"  sx={{fontSize:'24px'}}>{selectedType}</Typography>
            <ArrowDropDownCircleOutlinedIcon   sx={{fontSize:'30px'}} onClick={() => {
    setSelectedType(prev =>
      prev === "البريد الوارد" ? "البريد الصادر" : "البريد الوارد"
    );
  }}
/>
          </Box>

     <TableContainer sx={{ mr: 1, backgroundColor: "transparent", boxShadow: "none",mt:6 }}>
  <Table sx={{width:"1573px", height:'88px'}}>
    <TableHead sx={{width:"1573px", height:'88px'}}>
  <TableRow sx={{ backgroundColor: "rgb(14, 74, 35)" }}>
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
        borderBottom: "3px solid rgb(14, 74, 35)",
      }}
    >
      <TableCell align="center" sx={{ py: 1.5 ,fontWeight: "700" ,fontSize:'16px'}}>{row.id}</TableCell>

      {isInbox ? (
        <>
          <TableCell align="center">
            <Avatar src={row.senderImg} sx={{ width: 56, height: 56, margin: "auto" }} />
          </TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.senderName}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.senderPhone}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.mailTitle}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.officeName}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.dateReceived}</TableCell>
        </>
      ) : (
        <>
          <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.officeName}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.officePhone}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.mailTitle}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.status}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.dateReceived}</TableCell>
          <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.dateSent}</TableCell>
        </>
      )}

      <TableCell align="center">
        <IconButton
          onClick={() => setOpenModal(true)}
          sx={{
            border: '1px solid rgba(212, 208, 212, 0.31)',
            borderRadius: '50px',ml:-4,
            width: 52,
            height: 52,
            padding: '8px',
            backgroundColor: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.secondary.main,
          }}
        >
          <ArticleIcon sx={{ fontSize: 30}} />
          <ArrowUpwardIcon
            sx={{
              position: 'absolute',
               top: 24,
              right: 10,
              fontSize: 6,
              backgroundColor: 'white',
              color: 'black',
              transform: 'rotate(60deg)',
              borderRadius: '50%',
              padding: '2px',border: "3px solid rgb(14, 74, 35)",
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
      width: '677px',
      height: '765px',
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
      width: 600, // حجم الشعار
      height: 600,
      backgroundImage: 'url("/logo.png")', // رابط الشعار المرفق
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      opacity: 0.1, // شفافية عالية جداً
      zIndex: 0,
    },  // يجعل الخلفية باهتة
    }}
  >
    <HighlightOffIcon
       onClick={()=>{setOpenModal(false)}}
      sx={{ position: 'absolute', top: 16, left: 16, cursor: 'pointer', fontSize:'30px'}}
    />

    {/* نصوص العنوان الكبيرة */}
    <Typography fontWeight="700" fontSize="24px"color="black">
       الجمهورية العربية السورية
    </Typography>
    <Typography fontWeight="700" fontSize="24px" color="black">
      وزارة الصحة
    </Typography>
    <Typography fontWeight="700" fontSize="24px" color="black">
      الهيئة السورية للاختصاصات الطبية
    </Typography>
   {/* العنوان */}
<Typography fontSize="24px" fontWeight="700" mt={2}>
  <Box component="span" color="gray">العنوان :</Box>{' '}
  <Box component="span" color="black">تسليم شهادة</Box>
</Typography>

{/* الموضوع */}
<Typography fontSize="14px" fontWeight="400" color="rgb(34,42,37)" sx={{ whiteSpace: 'pre-line' }}>
  <span style={{ fontSize: '24px', fontWeight: '700', color: 'gray' }}>الموضوع :</span>{' '}
  <span style={{ fontSize: '24px', fontWeight: '700', color: 'black' }}>تعديل آلية تسليم شهادات البورد السوري</span>
  {"\n\n"}
  <Typography fontSize="18px" fontWeight="500" color="rgb(34,42,37)">

  بناءً على متطلبات تسهيل الإجراءات الإدارية، وحرصاً على تيسير استلام شهادات البورد السوري للأطباء الأخصائيين المقيمين خارج محافظات مراكز الهيئة، تقرر ما يلي:
  {"\n\n"}
  يُسمح للأطباء المتقدمين لاستلام شهادات البورد السوري بإرسال أصول الوثائق المطلوبة عبر البريد الرسمي.
  {"\n"}
  أو عن طريق وكلاء قانونيون بموجب وكالات موثقة ومصدقة أصولاً، على أن يتم التأكد من صحة الوثائق والأصول.
  {"\n"}
  المرسلة ومطابقتها للسجلات المعتمدة في الهيئة، و تسليم الشهادة للطبيب شخصياً عند حضوره إلى مقر الهيئة، أو إرسالها له عبر البريد الرسمي إلى العنوان المحدد بناءً على طلب خطي، و في حال الاستلام عبر.
  {"\n"}
  وكيل، يجب إرفاق نسخة مصدقة من الوكالة القانونية الممنوحة له.
  {"\n\n"}
  يُعمل بهذا التعديل اعتباراً من تاريخه، ويُعمم على كافة الدوائر المعنية للتنفيذ بدقة.
  {"\n\n"}
  وتفضلوا بقبول فائق الاحترام
</Typography>

</Typography>
    {/* التوقيع */}
    <Typography fontWeight="700" fontSize="20px" sx={{mr:54}}>
      <Box component="span" sx={{color:"black"}}>الاسم:</Box>{''}
            <Box component="span" sx={{color:"gray" ,whiteSpace:'-moz-pre-wrap'}}>        الدكتور يونس قبلان
</Box>

    </Typography>
   <Typography fontWeight="700" fontSize="20px" sx={{mr:54}}>
      <Box component="span" sx={{color:"black"}}>التاريخ:</Box>{''}
            <Box component="span" sx={{color:"gray"}}>        1/2/2035  
</Box>

    </Typography>
    {/* زر الإرسال */}
    <Box sx={{ display: 'flex', justifyContent: 'flex-end',mt:2 }}>
     <Button variant="contained" color="rgb(14,74,35)" sx={{borderRadius:"20px" ,width:"36%",backgroundColor:"rgb(14,74,35)",color:"white",ml:56,fontWeight:"700", fontSize:"20px"}}>
        ارسال
      </Button>
    </Box>
  </Paper>
</Modal>
}
    </Box>
  );
};

export default Enter;
