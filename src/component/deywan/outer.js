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
  Grid,
  Button,
  Checkbox,
  IconButton,
  TextField,
  Menu,
  MenuItem,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import NoteIcon from '@mui/icons-material/Note';import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SidBar from "./dachboard/SIDEBAR/sidbar";
import Appar from "./dachboard/SIDEBAR/appar";
import ArticleIcon from '@mui/icons-material/Article';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
 import {useDispatch,useSelector }  from "react-redux"
// بيانات البريد الوارد (وارد)
const inboxRows = [
  {
    id: "#896643",
    mailTitle: "طلب شهادة",
    officeName: "دائرة شؤون الطلاب",
    senderName: "أحمد ديب",
    senderPhone: "+963944123456",
    senderImg: "https://randomuser.me/api/portraits/men/45.jpg",
    dateSubmitted: "1/5/2025",
    dateReceived: "2/5/2025",
  },
  {
    id: "#896644",
    mailTitle: "تعديل بيانات",
    officeName: "مديرية القبول",
    senderName: "ليلى سعيد",
    senderPhone: "+963944654321",
    senderImg: "https://randomuser.me/api/portraits/women/65.jpg",
    dateSubmitted: "28/4/2025",
    dateReceived: "30/4/2025",
  },
];

// بيانات البريد الصادر (صادر)
const outboxRows = [
  {
    id: "#789541",
    mailTitle: "إرسال تقرير شهري",
    officeName: "قسم الإحصاء",
    receiverName: "د. سامي حسن",
    receiverPhone: "+963993222111",
    dateSubmitted: "1/5/2025",
    dateSent: "2/5/2025",
  },
  {
    id: "#789542",
    mailTitle: "إرسال نتائج امتحان",
    officeName: "شعبة الامتحانات",
    receiverName: "م. هالة رعد",
    receiverPhone: "+963991334455",
    dateSubmitted: "3/5/2025",
    dateSent: "4/5/2025",
  },
];




const Outer = () => {
  // const out=useSelector((state)=>state.dewan_outer)
  // console.log(out)
   const [anchorEl, setAnchorEl] = useState(null);
  const [selectedType, setSelectedType] = useState("البريد الوارد");
  const [openModal, setOpenModal] = useState(false);
const[close,setclose]=useState(false)
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
            style={{marginTop:'3%'}}
          >
            <MenuIcon sx={{mr:1}} />
            <Typography fontWeight="700" sx={{fontSize:'24px'}}>{selectedType}</Typography>
             <ArrowDropDownCircleOutlinedIcon  sx={{fontSize:'30px'}} onClick={() => {
    setSelectedType(prev =>
      prev === "البريد الوارد" ? "البريد الصادر" : "البريد الوارد"
    );
  }}
/>
          </Box>

     <TableContainer sx={{ mr: 1, backgroundColor: "transparent", boxShadow: "none" ,mt:6}}>
  <Table sx={{width:"1573px", height:'88px'}}>
   <TableHead sx={{width:"1573px", height:'88px'}}>
  <TableRow sx={{ backgroundColor: "rgb(14, 74, 35)" }}>
    <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px' }}>
      نوع المعاملة
    </TableCell>
    <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
      صورة الطبيب
    </TableCell>
    <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
      اسم الطبيب
    </TableCell>
    <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
      رقم الطبيب
    </TableCell>
    <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
      {isInbox ? "المرسل" : "المستقبل"}
    </TableCell>
    <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
      تاريخ التقديم
    </TableCell>
    <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
      {isInbox ? "تاريخ الاستلام" : "تاريخ الإرسال"}
    </TableCell>
    <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
      {/* أيقونة */}
    </TableCell>
  </TableRow>
</TableHead>



<TableBody>
  {rows.map((row, index) => (
    <TableRow key={index} sx={{ borderBottom: "3px solid rgb(14, 74, 35)" }}>

      <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.mailTitle}</TableCell>
      <TableCell align="center">
        <Avatar  sx={{width: 56,
    height: 56,margin:'auto'}} src={row.senderImg || row.receiverImg} />
      </TableCell>
      <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">
        {isInbox ? row.senderName : row.receiverName}
      </TableCell>
      <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">
        {isInbox ? row.senderPhone : row.receiverPhone}
      </TableCell>
      <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">
        {isInbox ? row.senderName : row.receiverName}
      </TableCell>
      <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">{row.dateSubmitted}</TableCell>
      <TableCell sx={{  fontWeight: "700" ,fontSize:'16px' }} align="center">
        {isInbox ? row.dateReceived : row.dateSent}
      </TableCell>
      <TableCell align="center">
        <IconButton
          onClick={() => setOpenModal(true)}
          sx={{
            border: "1px solid rgba(212, 208, 212, 0.31)",
            borderRadius: "50px",ml:-4,
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
              padding: "2px",            border: "3px solid rgb(14, 74, 35)",

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

     { <Modal
 open={openModal}
  onClose={() => setOpenModal(false)}
  
  aria-labelledby="add-employee-modal"
  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
>
  
  <Paper
    elevation={4}
    sx={{
      width: '800px',
      height: '775px',
      p: 2,
      borderRadius: 3,
      direction: 'rtl',
      outline: 'none',
      
    }}
  >
    <HighlightOffIcon
      onClick={() => setOpenModal(false)}
      sx={{ mr: 91, position: 'absolute' ,cursor:"pointer",fontSize:'30px' }}
    />
    <Typography
         variant="h6"
         sx={{
           mb: 3,
           fontWeight: '700',fontSize:'32px',mt:3,
           color: 'black',
           mr: 30,
           pb: 2,
         }}
       >
         بيان برنامج تدريبي
       </Typography>
   
       <Grid container spacing={2}>
         {/* الاسم الأول + رقم الجوال */}
         <Grid container spacing={2}>
           <Grid item xs={6}>
             <Box sx={{ display: 'flex', alignItems: 'center', mb: 2}}>
               <Typography sx={{  fontSize:"20px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>الاسم الأول:</Typography>
                <TextField
               variant="standard"
               fullWidth
               sx={{
                 width: '20%',
                 input: {
                   px: 1,
                   fontSize: "13px",
                   borderBottom: '1px dashed gray !important',
                 },
               }}
               InputProps={{
                 disableUnderline: true,
                 sx: {
                   
                   px: 1,
                   minHeight: '28px',
                   mt: -2,
                   mr: 1,
                 }
               }}
             />
             </Box>
           </Grid>
           <Grid item xs={6}>
             <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
               <Typography  sx={{  fontSize:"20px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>رقم الجوال :</Typography>
                <TextField
               variant="standard"
               fullWidth
               sx={{
                 width: '20%',
                 input: {
                   px: 1,
                   fontSize: "13px",
                   borderBottom: '1px dashed gray !important',
                 },
               }}
               InputProps={{
                 disableUnderline: true,
                 sx: {
                   
                   px: 1,
                   minHeight: '28px',
                   mt: -2,
                   mr: 1,
                 }
               }}
             />
             </Box>
           </Grid>
         </Grid>
   
         {/* اسم الأب + الهاتف الأرضي */}
         <Grid container spacing={2}>
           <Grid item xs={6}>
             <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
               <Typography  sx={{  fontSize:"20px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>الاسم الأب:</Typography>
                <TextField
               variant="standard"
               fullWidth
               sx={{
                 width: '20%',
                 input: {
                   px: 1,
                   fontSize: "13px",
                   borderBottom: '1px dashed gray !important',
                 },
               }}
               InputProps={{
                 disableUnderline: true,
                 sx: {
                   
                   px: 1,
                   minHeight: '28px',
                   mt: -2,
                   mr: 1,
                 }
               }}
             />
             </Box>
           </Grid>
           <Grid item xs={6}>
             <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
               <Typography  sx={{  fontSize:"20px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>الهاتف الأرضي :</Typography>
                <TextField
               variant="standard"
               fullWidth
               sx={{
                 width: '20%',
                 input: {
                   px: 1,
                   fontSize: "13px",
                   borderBottom: '1px dashed gray !important',
                 },
               }}
               InputProps={{
                 disableUnderline: true,
                 sx: {
                   
                   px: 1,
                   minHeight: '28px',
                   mt: -2,
                   mr: 1,
                 }
               }}
             />
             </Box>
           </Grid>
         </Grid>
   
         {/* اسم العائلة + السكن */}
         <Grid container spacing={2}>
           <Grid item xs={6}>
             <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
               <Typography  sx={{  fontSize:"20px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>الاسم العائلة:</Typography>
               <TextField
               variant="standard"
               fullWidth
               sx={{
                 width: '20%',
                 input: {
                   px: 1,
                   fontSize: "13px",
                   borderBottom: '1px dashed gray !important',
                 },
               }}
               InputProps={{
                 disableUnderline: true,
                 sx: {
                   
                   px: 1,
                   minHeight: '28px',
                   mt: -2,
                   mr: 1,
                 }
               }}
             />
             </Box>
           </Grid>
           <Grid item xs={6}>
             <Box sx={{ display: 'flex', alignItems: 'center', mb: -1 }}>
               <Typography sx={{ fontSize:"20px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>
                 عنوان السكن المعتمد :
               </Typography>
                <TextField
               variant="standard"
               fullWidth
               sx={{
                 width: '20%',
                 input: {
                   px: 1,
                   fontSize: "13px",
                   borderBottom: '1px dashed gray !important',
                 },
               }}
               InputProps={{
                 disableUnderline: true,
                 sx: {
                   
                   px: 1,
                   minHeight: '28px',
                   mt: -2,
                   mr: 1,
                 }
               }}
             />
             </Box>
           </Grid>
         </Grid>
   
         {/* الرقم الوطني */}
         <Grid item xs={12} sm={6}>
           <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
             <Typography  sx={{  fontSize:"20px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>الرقم الوطني :</Typography>
             <TextField
               variant="standard"
               fullWidth
               sx={{
                 width: '20%',
                 input: {
                   px: 1,
                   fontSize: "13px",
                   borderBottom: '1px dashed gray !important',
                 },
               }}
               InputProps={{
                 disableUnderline: true,
                 sx: {
                   
                   px: 1,
                   minHeight: '28px',
                   mt: -2,
                   mr: 1,
                 }
               }}
             />
           </Box>
         </Grid>
   
         {/* باقي النموذج كما هو */}
        <Grid item xs={12}>
           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: -1 }}>
             <Typography  sx={{  fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>  الاختصاص:</Typography>
              <TextField
               variant="standard"
               fullWidth
               sx={{
                 width: '20%',
                 input: {
                   px: 1,
                   fontSize: "13px",
                   borderBottom: '1px dashed gray !important',
                 },
               }}
               InputProps={{
                 disableUnderline: true,
                 sx: {
                   
                   px: 1,
                   minHeight: '28px',
                   mt: -2,
                   mr: 1,
                 }
               }}
             />
           <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1, mr:2 ,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}> رئيسي </Typography>
   <Checkbox size="small"  sx={{mr:-1 ,color: " rgb(14,74,35)"}}/>
           </Box>
         
         
          <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}> فرعي </Typography>
   <Checkbox size="small"  sx={{mr:-1,color: " rgb(14,74,35)"}}/>
           </Box>
       
            
                <Typography sx={{whiteSpace: 'nowrap',fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}} >مديرية الصحة:</Typography>
             <TextField
               variant="standard"
               fullWidth
               sx={{
                 width: '20%',
                 input: {
                   px: 1,
                   fontSize: "13px",
                   borderBottom: '1px dashed gray !important',
                 },
               }}
               InputProps={{
                 disableUnderline: true,
                 sx: {
                   
                   px: 1,
                   minHeight: '28px',
                   mt: -2,
                   mr: -1,
                 }
               }}
             />
           </Box>
         </Grid>
   
         <Grid item xs={12}>
           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: -1 }}>
             <Typography sx={{ whiteSpace: 'nowrap' ,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>مقبول في :</Typography>
            
           <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1, whiteSpace: 'nowrap' ,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}> مفاضلة ترميمية</Typography>
   <Checkbox size="small"  sx={{mr:-1 ,color: " rgb(14,74,35)"}}/>
           </Box>
         
         
          <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1,whiteSpace: 'nowrap' ,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>  مفاضلة عامة</Typography>
   <Checkbox size="small"  sx={{mr:-1,color: " rgb(14,74,35)"}}/>
           </Box>
       
             <Typography sx={{mr:2,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>المحافظة:</Typography>
              <TextField
               variant="standard"
               fullWidth
               sx={{
                 width: '20%',
                 input: {
                   px: 1,
                   fontSize: "13px",
                   borderBottom: '1px dashed gray !important',
                 },
               }}
               InputProps={{
                 disableUnderline: true,
                 sx: {
                   
                   px: 1,
                   minHeight: '28px',
                   mt: -2,
                   mr: -1,
                 }
               }}
             />
                <Typography sx={{fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>السنة:</Typography>
              <TextField
               variant="standard"
               fullWidth
               sx={{
                 width: '20%',
                 input: {
                   px: 1,
                   fontSize: "13px",
                   borderBottom: '1px dashed gray !important',
                 },
               }}
               InputProps={{
                 disableUnderline: true,
                 sx: {
                   
                   px: 1,
                   minHeight: '28px',
                   mt: -2,
                   mr: -6,
                 }
               }}
             />
           </Box>
         </Grid>
   
         <Grid item xs={12}>
           <Box sx={{ mt: 2 ,display: 'flex', alignItems: 'center'}}>
             <Typography sx={{whiteSpace: 'nowrap' ,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}} >عدد سنوات الاختصاص حسب نظام الاقامة  : </Typography>
             <TextField
                        variant="standard"
                        fullWidth
                        sx={{
                          width: '20%',
                          input: {
                            px: 1,
                            fontSize: "13px",
                            borderBottom: '1px dashed gray !important',
                          },
                        }}
                        InputProps={{
                          disableUnderline: true,
                          sx: {
                            
                            px: 1,
                            minHeight: '28px',
                            mt: -2,
                            mr: -1,
                          }
                        }}
                      />
                </Box>
         </Grid>
   
         <Grid item xs={12}>
           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: -1 }}>
             <Typography sx={{whiteSpace: 'nowrap' ,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>ناجح في الاختبار النهائي الكتابي دورة شهر :</Typography>
            
           <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}> نيسان</Typography>
   <Checkbox size="small" sx={{color: " rgb(14,74,35)"}}/>
           </Box>
         
         
          <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1,whiteSpace: 'nowrap',fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}> تشرين الاول</Typography>
   <Checkbox size="small" sx={{color: " rgb(14,74,35)"}} />
           </Box>
       
             <Typography sx={{mr:2,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>السنة:</Typography>
             <TextField
               variant="standard"
               fullWidth
               sx={{
                 width: '20%',
                 input: {
                   px: 1,
                   fontSize: "13px",
                   borderBottom: '1px dashed gray !important',
                 },
               }}
               InputProps={{
                 disableUnderline: true,
                 sx: {
                   
                   px: 1,
                   minHeight: '28px',
                   mt: -2,
                   mr: -6,
                 }
               }}
             />
           </Box>
         </Grid>
   
         <Grid item xs={12}>
           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: -1 }}>
             <Typography sx={{whiteSpace: 'nowrap' ,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>ناجح في الاختبار النهائي العملي دورة شهر :</Typography>
            <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}> نيسان</Typography>
   <Checkbox size="small"sx={{color: " rgb(14,74,35)"}}/>
           </Box>
             <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1,whiteSpace: 'nowrap',fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}> تشرين الاول</Typography>
   <Checkbox size="small"sx={{color: " rgb(14,74,35)"}} />
           </Box>
             <Typography  sx={{mr:2,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>السنة:</Typography>
             <TextField
               variant="standard"
               fullWidth
               sx={{
                 width: '20%',
                 input: {
                   px: 1,
                   fontSize: "13px",
                   borderBottom: '1px dashed gray !important',
                 },
               }}
               InputProps={{
                 disableUnderline: true,
                 sx: {
                   
                   px: 1,
                   minHeight: '28px',
                   mt: -2,
                   mr: -6,
                 }
               }}
             />
           </Box>
         </Grid>
   
         <Grid item xs={12}>
           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: -1 }}>
             <Typography sx={{whiteSpace: 'nowrap' ,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>ناجح في الاختبار السنة الاولى  دورة شهر :</Typography>
            <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1 ,mr:1.2,ffontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}> نيسان</Typography>
   <Checkbox size="small" sx={{color: " rgb(14,74,35)"}}/>
           </Box>
             <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1,whiteSpace: 'nowrap',fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}> تشرين الاول</Typography>
   <Checkbox size="small" sx={{color: " rgb(14,74,35)"}}/>
           </Box>
             <Typography  sx={{mr:2,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>السنة:</Typography>
             <TextField
               variant="standard"
               fullWidth
               sx={{
                 width: '20%',
                 input: {
                   px: 1,
                   fontSize: "13px",
                   borderBottom: '1px dashed gray !important',
                 },
               }}
               InputProps={{
                 disableUnderline: true,
                 sx: {
                   
                   px: 1,
                   minHeight: '28px',
                   mt: -2,
                   mr: -6,
                 }
               }}
             />
           </Box>
         </Grid>

      {/* المرفقات */}
      <Grid item xs={12}>
       <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, mt: 1 }}>
  <Typography>
    المرفقات:
    <label htmlFor="upload-image-file">
      <input
        id="upload-image-file"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
      />
      <Button
        component="span"
        variant="outlined"
        fullWidth
        sx={{
          height: 130,
          width: 130,
          borderStyle: 'dashed',
          border: '2px dashed rgba(197, 193, 193, 0.79)',
          display: 'flex',
          flexDirection: 'column',    
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '10%',
          textAlign: 'center',mr:9,mt:-1
        }}
      >
        <NoteIcon sx={{ fontSize: 30, color: 'black', mb: 1 }} />
        <Typography sx={{ fontSize: '16px' ,fontWeight:'700' ,color:'black'}}>
          صورة مصدقة عن شهادة البورد
        </Typography>
      </Button>
    </label>
  </Typography>


   <Button
        component="span"
        variant="outlined"
        fullWidth
        sx={{
          height: 130,
          width: 130,
          borderStyle: 'dashed',
          border: '2px dashed rgba(197, 193, 193, 0.79)',
          display: 'flex',
          flexDirection: 'column',    
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '10%',
          textAlign: 'center',mt:1.6
        }}
      >
        <NoteIcon sx={{ fontSize: 30, color: 'black', mb: 1 }} />
        <Typography sx={{ fontSize: '16px',fontWeight:'700' ,color:'black' }}>
            جدول العمليات  
        </Typography>
      </Button>
          
        </Box>
      </Grid>
    </Grid>
  </Paper>
  
</Modal>}
    </Box>
  );
};

export default Outer;
