



import {
  Box,
  Typography,
 
  Paper,
   Modal,
  Grid,
  Button,
  Checkbox,
  
  TextField,
 
} from "@mui/material";
import NoteIcon from '@mui/icons-material/Note';import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const mockDoctorData = {
  fullName: "محمد ملهم",
  fatherName: "خالد",
  lastName: "الزقيمي",
  phone: "+963987653402",
  landline: "0112217566",
  nationalId: "1234567890",
  birthPlace: "دمشق",
  birthDate: "2000-09-17",
  university: "دمشق",
  graduationDate: "2013-09-17",
  registrationNumber: "1809",
  specialization: "جراحة عامة",
  degree: "طبيب بشري",
  address: "دمشق - القنوات",
  mainSpecialization: true,
  licenseStatus: "مؤقت",
  registrationType: "رئيسي",
  sessionMonth: "تشرين الأول",
  sessionYear: "2025",
};

export default function EXPORTMAILS({open,onClose}){
    return(

<>

<Modal
 open={open}
  onClose={onClose}
  
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
      onClick={onClose}
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
               <Typography sx={{ fontSize: "13px", px: 1 }}>
  {mockDoctorData.fullName}
</Typography>
             </Box>
           </Grid>
           <Grid item xs={6}>
             <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
               <Typography sx={{ minWidth: '120px',fontSize:"12px" }}>الهاتف الأرضي :</Typography>
                 <Typography sx={{ fontSize: "13px", px: 1 }}>
  {mockDoctorData.fullName}
</Typography>
             </Box>
           </Grid>
         </Grid>
   
         {/* اسم العائلة + السكن */}
         <Grid container spacing={2}>
           <Grid item xs={6}>
             <Box sx={{ display: 'flex', alignItems: 'center', mb: -1 }}>
               <Typography sx={{ minWidth: '120px' ,fontSize:"12px"}}>الاسم العائلة:</Typography>
                <Typography sx={{ fontSize: "13px", px: 1 }}>
  {mockDoctorData.fullName}
</Typography>
             </Box>
           </Grid>
           <Grid item xs={6}>
             <Box sx={{ display: 'flex', alignItems: 'center', mb: -3 }}>
               <Typography sx={{ minWidth: '120px',fontSize:"12px" }}>
                 عنوان السكن المعتمد :
               </Typography>
                 <Typography sx={{ fontSize: "13px", px: 1 }}>
  {mockDoctorData.fullName}
</Typography>
             </Box>
           </Grid>
         </Grid>
   
         {/* الرقم الوطني */}
         <Grid item xs={12} sm={6}>
           <Box sx={{ display: 'flex', alignItems: 'center', mb: -1 }}>
             <Typography sx={{ minWidth: '120px' ,fontSize:"12px"}}>الرقم الوطني :</Typography>
              <Typography sx={{ fontSize: "13px", px: 1 }}>
  {mockDoctorData.fullName}
</Typography>
           </Box>
         </Grid>
   
         {/* باقي النموذج كما هو */}
        <Grid item xs={12}>
           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: -3 }}>
             <Typography  sx={{fontSize:"12px"}}>  الاختصاص:</Typography>
             <Typography sx={{ fontSize: "13px", px: 1 }}>
  {mockDoctorData.fullName}
</Typography>
           <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1, mr:2 ,fontSize:"12px"}}> رئيسي </Typography>
   <Checkbox checked={mockDoctorData.mainSpecialization} size="small"  sx={{mr:-1 ,color: " rgb(14,74,35)"}}/>
           </Box>
         
         
          <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1,fontSize:"12px"}}> فرعي </Typography>
   <Checkbox   checked={mockDoctorData.mainSpecialization} size="small"  sx={{mr:-1,color: " rgb(14,74,35)"}}/>
           </Box>
       
            
                <Typography sx={{fontSize:"12px"}} >مديرية الصحة:</Typography>
             <Typography sx={{ fontSize: "13px", px: 1 }}>
  {mockDoctorData.fullName}
</Typography>
           </Box>
         </Grid>
   
         <Grid item xs={12}>
           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: -3 }}>
             <Typography sx={{ whiteSpace: 'nowrap' ,fontSize:"12px"}}>مقبول في :</Typography>
            
           <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1, whiteSpace: 'nowrap' ,fontSize:"12px"}}> مفاضلة ترميمية</Typography>
   <Checkbox  checked={mockDoctorData.mainSpecialization} size="small"  sx={{mr:-1 ,color: " rgb(14,74,35)"}}/>
           </Box>
         
         
          <Box sx={{ display: 'flex'}}>
    
   <Typography sx={{mt:1,whiteSpace: 'nowrap' ,fontSize:"12px"}}>  مفاضلة عامة</Typography>
   <Checkbox checked={mockDoctorData.mainSpecialization} size="small"  sx={{mr:-1,color: " rgb(14,74,35)"}}/>
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
  
</Modal>


</>




    )
}