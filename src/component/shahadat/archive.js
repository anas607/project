
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
import { useState } from "react";
const outboxRows = [
  {
    id: "#789541",
    mailTitle: "  98989",
    officeName: "قسم الإحصاء",
    receiverName: "د. سامي حسن",
    receiverPhone: "+963993222111",
    type:"شهادة ",
    dateSubmitted: "1/5/2025",
    dateSent: "2/5/2025",
  }
];

export default function Archiv_Shahadat(){
    const [openModal, setOpenModal] = useState(false);
  
    return(
        <>
          <Box
  sx={{
    direction: "rtl",
    height: '100vh',
    
    display: "flex"
  }}
>
  
  <SidBar />

  
  <Box sx={{ flexGrow: 1, padding: '2%', display: 'flex', flexDirection: 'column' ,backgroundColor:"rgb(233,232,232)"}}>

    {/*  صف العنوان + البحث + الإشعار */}
    <Appar/>

  

    
  {/* ///////////////////////////////// */}
   
  
   
 <Box
  sx={{
   backgroundColor:"rgb(233,232,232)",
    p: 2,
    borderRadius: 5,
    maxWidth: '1000px', 
    width: '100%',
    alignSelf: 'rtl', 
  }}
>
  <Box
          
            display="flex"
            alignItems="center"
            sx={{ cursor: "pointer", gap: 1 ,mb:3 }}
           
           
          >
            <MenuIcon />
            <Typography fontWeight="bold">البريد الصادر الخارجي</Typography>
             <ArrowDropDownCircleOutlinedIcon  
/>
          </Box>
          
               <TableContainer sx={{ mr: 1, backgroundColor: "transparent", boxShadow: "none" }}>
            <Table sx={{width:"98%"}}>
             <TableHead>
            <TableRow sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
              <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
                رقم المعاملة
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
                صورة الطبيب
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
                اسم الطبيب
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
                رقم الطبيب
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
                توع المعاملة
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
                المستقبل
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
                تاريخ التقديم
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
                تاريخ الإرسال
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>
                {/* أيقونة */}
              </TableCell>
            </TableRow>
          </TableHead>
          
          
          
          <TableBody>
            {outboxRows.map((row, index) => (
              <TableRow key={index} sx={{ borderBottom: "2px solid #1f4d38"}}>
          
                <TableCell  align="center">{row.mailTitle}</TableCell>
                <TableCell align="center">
                  <Avatar  src={row.receiverImg} />
                </TableCell>
                <TableCell align="center">
                 { row.receiverName}
                </TableCell>
                <TableCell align="center">
                 {  row.receiverPhone}
                </TableCell>
                 <TableCell align="center">
                 { row.type}
                </TableCell>
                <TableCell align="center">
                  {row.receiverName}
                </TableCell>
                <TableCell align="center">{row.dateSubmitted}</TableCell>
                <TableCell align="center">
                  { row.dateSent}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={() => setOpenModal(true)}
                    sx={{
                      border: "1px solid rgba(212, 208, 212, 0.31)",
                      borderRadius: "50px",
                      width: 30,
                      height: 30,
                      padding: "8px",
                      backgroundColor: (theme) => theme.palette.primary.main,
                      color: (theme) => theme.palette.secondary.main,
                    }}
                  >
                    <ArticleIcon sx={{ fontSize: 20 }} />
                    <ArrowUpwardIcon
                      sx={{
                        position: "absolute",
                        top: 11,
                        right: 2,
                        fontSize: 6,
                        backgroundColor: "white",
                        color: "black",
                        transform: "rotate(60deg)",
                        borderRadius: "50%",
                        padding: "2px",
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
      width: 600,
      maxHeight: '90vh',
      p: 2,
      borderRadius: 3,
      direction: 'rtl',
      outline: 'none',
      
    }}
  >
    <HighlightOffIcon
      onClick={() => setOpenModal(false)}
      sx={{ mr: 70, position: 'absolute' ,cursor:"pointer" }}
    />
    <Typography
         variant="h6"
         sx={{
           mb: 3,
           fontWeight: 'bold',
           color: 'black',
           mr: 30,
           pb: 1,
         }}
       >
         بيان برنامج تدريبي
       </Typography>
   
       <Grid container spacing={2}>
         {/* الاسم الأول + رقم الجوال */}
         <Grid container spacing={2}>
           <Grid item xs={6}>
             <Box sx={{ display: 'flex', alignItems: 'center', mb: 1}}>
               <Typography sx={{ minWidth: '120px' ,fontSize:"12px"}}>الاسم الأول:</Typography>
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
           <Grid item xs={6}>
             <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
               <Typography sx={{ minWidth: '120px',fontSize:"12px" }}>رقم الجوال :</Typography>
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
         </Grid>
   
         {/* اسم الأب + الهاتف الأرضي */}
         <Grid container spacing={2}>
           <Grid item xs={6}>
             <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
               <Typography sx={{ minWidth: '120px',fontSize:"12px" }}>الاسم الأب:</Typography>
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
           <Grid item xs={6}>
             <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
               <Typography sx={{ minWidth: '120px',fontSize:"12px" }}>الهاتف الأرضي :</Typography>
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
         </Grid>
   
         {/* اسم العائلة + السكن */}
         <Grid container spacing={2}>
           <Grid item xs={6}>
             <Box sx={{ display: 'flex', alignItems: 'center', mb: -1 }}>
               <Typography sx={{ minWidth: '120px' ,fontSize:"12px"}}>الاسم العائلة:</Typography>
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
           <Grid item xs={6}>
             <Box sx={{ display: 'flex', alignItems: 'center', mb: -3 }}>
               <Typography sx={{ minWidth: '120px',fontSize:"12px" }}>
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
                   mr: -1,
                 }
               }}
             />
             </Box>
           </Grid>
         </Grid>
   
         {/* الرقم الوطني */}
         <Grid item xs={12} sm={6}>
           <Box sx={{ display: 'flex', alignItems: 'center', mb: -1 }}>
             <Typography sx={{ minWidth: '120px' ,fontSize:"12px"}}>الرقم الوطني :</Typography>
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
   
         {/* باقي النموذج كما هو */}
        <Grid item xs={12}>
           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: -3 }}>
             <Typography  sx={{fontSize:"12px"}}>  الاختصاص:</Typography>
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
           <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1, mr:2 ,fontSize:"12px"}}> رئيسي </Typography>
   <Checkbox size="small"  sx={{mr:-1 ,color: " rgb(14,74,35)"}}/>
           </Box>
         
         
          <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1,fontSize:"12px"}}> فرعي </Typography>
   <Checkbox size="small"  sx={{mr:-1,color: " rgb(14,74,35)"}}/>
           </Box>
       
            
                <Typography sx={{fontSize:"12px"}} >مديرية الصحة:</Typography>
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
           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: -3 }}>
             <Typography sx={{ whiteSpace: 'nowrap' ,fontSize:"12px"}}>مقبول في :</Typography>
            
           <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1, whiteSpace: 'nowrap' ,fontSize:"12px"}}> مفاضلة ترميمية</Typography>
   <Checkbox size="small"  sx={{mr:-1 ,color: " rgb(14,74,35)"}}/>
           </Box>
         
         
          <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1,whiteSpace: 'nowrap' ,fontSize:"12px"}}>  مفاضلة عامة</Typography>
   <Checkbox size="small"  sx={{mr:-1,color: " rgb(14,74,35)"}}/>
           </Box>
       
             <Typography sx={{mr:2,fontSize:"12px"}}>المحافظة:</Typography>
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
                <Typography sx={{fontSize:"12px"}}>السنة:</Typography>
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
             <Typography sx={{whiteSpace: 'nowrap' ,fontSize:"12px"}} >عدد سنوات الاختصاص حسب نظام الاقامة  : </Typography>
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
           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: -3 }}>
             <Typography sx={{whiteSpace: 'nowrap' ,fontSize:"12px"}}>ناجح في الاختبار النهائي الكتابي دورة شهر :</Typography>
            
           <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1,fontSize:"12px"}}> نيسان</Typography>
   <Checkbox size="small" sx={{color: " rgb(14,74,35)"}}/>
           </Box>
         
         
          <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1,fontSize:"12px"}}> تشرين الاول</Typography>
   <Checkbox size="small" sx={{color: " rgb(14,74,35)"}} />
           </Box>
       
             <Typography sx={{mr:2,fontSize:"12px"}}>السنة:</Typography>
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
           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: -3 }}>
             <Typography sx={{whiteSpace: 'nowrap' ,fontSize:"12px"}}>ناجح في الاختبار النهائي العملي دورة شهر :</Typography>
            <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1,fontSize:"12px"}}> نيسان</Typography>
   <Checkbox size="small"sx={{color: " rgb(14,74,35)"}}/>
           </Box>
             <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1,fontSize:"12px"}}> تشرين الاول</Typography>
   <Checkbox size="small"sx={{color: " rgb(14,74,35)"}} />
           </Box>
             <Typography  sx={{mr:2,fontSize:"12px"}}>السنة:</Typography>
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
           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: -3 }}>
             <Typography sx={{whiteSpace: 'nowrap' ,fontSize:"12px"}}>ناجح في الاختبار السنة الاولى  دورة شهر :</Typography>
            <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1 ,mr:1.2,fontSize:"12px"}}> نيسان</Typography>
   <Checkbox size="small" sx={{color: " rgb(14,74,35)"}}/>
           </Box>
             <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1,fontSize:"12px"}}> تشرين الاول</Typography>
   <Checkbox size="small" sx={{color: " rgb(14,74,35)"}}/>
           </Box>
             <Typography  sx={{mr:2,fontSize:"12px"}}>السنة:</Typography>
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
          height: 100,
          width: 100,
          borderStyle: 'dashed',
          border: '2px dotted rgba(83, 79, 79, 0.79)',
          display: 'flex',
          flexDirection: 'column',    
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '5%',
          textAlign: 'center',mr:9,mt:-1
        }}
      >
        <NoteIcon sx={{ fontSize: 30, color: 'black', mb: 1 }} />
        <Typography sx={{ fontSize: '10px' }}>
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
          height: 100,
          width: 100,
          borderStyle: 'dashed',
          border: '2px dotted rgba(83, 79, 79, 0.79)',
          display: 'flex',
          flexDirection: 'column',    
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '5%',
          textAlign: 'center',mt:1.6
        }}
      >
        <NoteIcon sx={{ fontSize: 30, color: 'black', mb: 1 }} />
        <Typography sx={{ fontSize: '10px' }}>
            جدول العمليات  
        </Typography>
      </Button>
          
        </Box>
      </Grid>
    </Grid>
  </Paper>
  
</Modal>}
</Box>

    </>)}