// DoctorRequestDetails.jsx
import {
  Box,
  Typography,
  Grid,
  Button,
  IconButton,
  TextField,Checkbox,
  Avatar
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {
  
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NoteIcon from '@mui/icons-material/Note';
import { useSelector } from "react-redux";
import SidBar from "../../deywan/dachboard/SIDEBAR/sidbar";
import { SidBarComponent } from "../../deywan/manger_deywan/SIDEBAR/sidbar";
import { useEffect, useState } from "react";
import { getData, postData } from "../../../API/apiService";
import { BaseUrl, EDIT_FORM_CONTENT_EXAM, SHOW_FORM_CONTENT } from "../../../API/api";


export default function DoctorRequestDetails({  setShowRequest,uuid }) {
   const state = useSelector((state) => state.user);
   
  const isSub_exam=state.roles[0].includes("رئيس الامتحانات")
  const ismanger_exam=state.roles[0].includes("موظف الامتحانات")
const [formData, setFormData] = useState({});
const [Data, setData] = useState({});
const [openDialog, setOpenDialog] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);

const isChecked = (field) => formData[field] === 'on';

const handleOpenDialog = (imageUrl) => {
  setSelectedImage(imageUrl);
  setOpenDialog(true);
};

const attachmentButtons = () => {
  if (!formData) return [];

  return Object.entries(formData)
    .filter(([label, value]) => typeof value === 'string' && value.startsWith("http"))
    .map(([label, value], index) => ({
      id: `attachment-${index}`,
      label: label,
      url: value
    }));
};

const handleAttachmentClick = (url) => {
  console.log(url)
  if (url) {
    handleOpenDialog(url);
  } 
};


  useEffect(()=>{
    if (uuid !== null) {
     
    fetchRequest()}
  },[uuid])
  async function fetchRequest(){
    try{
const response = await getData(`${BaseUrl}${SHOW_FORM_CONTENT}?uuid=${uuid}`)
console.log(response.data.Doctor_image); 

setData(response.data)
  const elementsArray = response.data.elements;
    const transformedData = Object.fromEntries(elementsArray.map(({ label, value }) => [label, value]));
    setFormData(transformedData);
 console.log(Data.Doctor_image)
    }catch(err){
    console.error( err.response?.data || err.message);

    }
  }
   async function editRequestStatus(status){
    try{
const response = await postData(`${BaseUrl}${EDIT_FORM_CONTENT_EXAM}`,{
  uuid,status
})
return response.data

    }catch(err){
    console.error( err.response?.data || err.message);

    }
  }
  
  return (
<> 
      <Box sx={{ display: "flex", height: "100vh", direction: "rtl", backgroundColor: "rgb(233,232,232)" }}>
  
                  {isSub_exam?<SidBar /> :<SidBarComponent /> } 
           
                 <Box sx={{ flex: 1, p: 2 }}>
                   
                   <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                {/* زر الرجوع */}
                <IconButton onClick={() => setShowRequest(false)} sx={{ backgroundColor: "rgb(71, 59, 68)", color: "rgb(233,232,232)" }}>
                  <ArrowBackIcon sx={{fontSize:'50px',                  transform: "rotate(180deg)", // إذا بدك يوجه يمين
        }} />
                </IconButton>
        
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
                      {/* <NotificationsIcon sx={{ fontSize: "30px" }} /> */}
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
        
                   {/* <LogeOut/> */}
                  </Box>
              </Box>
     
      <Typography variant="h6" sx={{ fontSize: '32px', fontWeight: 700, textAlign: 'center', mb: 14 }}>
{Data.form_name}      </Typography>

       <Grid container spacing={4}>
                  {/* Column 1 */}
                  <Grid item xs={12} md={4}>
                    
                    <Box display="flex" flexDirection="column" gap={2}>
                                                                                   <Box display="flex" alignItems="center" gap={19}>

                      <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                        الاسم الأول: <Box component="span" sx={{ color: 'black' }}>
                          {formData['الاسم الأول']}
</Box>
                      </Typography>
                      </Box>

                                                             <Box display="flex" alignItems="center" gap={19}>

                      <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                        اسم الأب: <Box component="span" sx={{ color: 'black' }}>
                          {formData['اسم الأب']}
                          </Box>
                      </Typography>
                                                </Box>

                                                             <Box display="flex" alignItems="center" gap={19}>

                      <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                        اسم العائلة: <Box component="span" sx={{ color: 'black' }}>
                          {formData['اسم العائلة']}
                          </Box>
                      </Typography>
                                                </Box>

                                                             <Box display="flex" alignItems="center" gap={19}>

                   <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                        الرقم الوطني:
                        <Box component="span" sx={{ color: 'black' }}> 


    {formData['الرقم الوطني']}
    </Box>
</Typography>
         </Box>             
                                       <Box display="flex" alignItems="center" gap={19}>

                   <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                        مكان وتاريخ الولادة:
                        <Box component="span" sx={{ color: 'black' }}> 


    {formData['مكان وتاريخ الولادة']}
    </Box>
</Typography>
 
   
</Box>
                     
                                   <Box display="flex" alignItems="center" gap={19}>

                   <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                        مسجل في سنة:
                        <Box component="span" sx={{ color: 'black' }}> 


    {formData['مسجل في سنة']}
    </Box>
</Typography>
 
   <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
برقم :                       <Box component="span" sx={{ color: 'black' }}> 


    {formData['برقم']}
    </Box>
</Typography>
 
</Box>
   
                     <Box display="flex" alignItems="center" gap={19}>

                   <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
   حاصل على ترخيص:                      
                        <Box component="span" sx={{ color: 'black' }}> 


    {formData['حاصل على ترخيص']}
    </Box>
</Typography>
 
   <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
برقم :                       <Box component="span" sx={{ color: 'black' }}> 


    {formData['برقم']}
    </Box>
</Typography>
 
</Box>
                      <Box display="flex" alignItems="center" gap={19}>

                    <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
بصفة:<Box component="span" sx={{ color: 'black' }}> 


    {formData['بصفة']}
    </Box>
</Typography>
  
   <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
لدى وزارة التعليم العالي -جامعة :                     
                        <Box component="span" sx={{ color: 'black' }}> 


    {formData['لدى وزارة التعليم العالي_جامعة']}
    </Box>
</Typography>
</Box>
                      
<Box display="flex" alignItems="center" gap={9}>

                    <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
  يرجى الموافقة على دخولي الاختبار النهائي لاختصاص:
</Typography>
  <Typography sx={{ fontSize: '18px', color: 'gray' }}>فرعي
<Checkbox size="small" checked={isChecked('فرعي')} />
  </Typography>
  <Typography sx={{ fontSize: '18px', color: 'gray' }}>رئيسي
<Checkbox size="small" checked={isChecked('رئيسي')} />
  </Typography>
   <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
مسبوق باختصاص رئيسي هو                      
                        <Box component="span" sx={{ color: 'black' }}> 


    {formData['مسبوق باختصاص رئيسي هو']}
    </Box>
</Typography>
</Box>
<Box display="flex" alignItems="center" gap={9}>

                    <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
لدورة شهر:</Typography>
  <Typography sx={{ fontSize: '18px', color: 'gray' }}>نيسان
<Checkbox size="small" checked={isChecked('نيسان')} />
  </Typography>
  <Typography sx={{ fontSize: '18px', color: 'gray' }}>تشرين الأول
<Checkbox size="small" checked={isChecked('تشرين الأول')} />
  </Typography>
   <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
السنة:                        <Box component="span" sx={{ color: 'black' }}> 


    {formData['السنة']}
    </Box>
</Typography>
</Box>
      
      {Data.form_name === 'طلب اعتذار عن الاختبار' ? (
  <Box mt={4}>
    <Typography sx={{ fontSize: '18px', fontWeight: 700, color: 'gray', mb: 2 }}>
      هل يوجد اختبارات سابقة؟
    </Typography>
    <Box display="flex" gap={4} flexWrap="wrap">
      {['كتابي', 'نظري', 'نعم', 'لايوجد'].map((label) => (
        <Box key={label} display="flex" alignItems="center" gap={1}>
          <Checkbox size="small" />
          <Typography sx={{ fontSize: '16px', color: 'gray' }}>{label}</Typography>
        </Box>
      ))}
    </Box>
  </Box>
) : (
 <Box mt={4}>
    <Box display="flex" flexWrap="wrap" gap={2}>

  <Typography sx={{ fontSize: '18px', fontWeight: 700, color: 'gray', mb: 2 }}>
    المرفقات:
  </Typography>

  <Box display="flex" flexWrap="wrap" gap={2}>
    {attachmentButtons().map((attachment) => (
      <Button
onClick={() => handleAttachmentClick(attachment.url)}

        key={attachment.id}
        variant="outlined"
       
        sx={{
          width: '130px',
          height: '128px',
          px: 2,
          py: 2,
          fontWeight: 'bold',
          fontSize: '14px',
          border: '2px dotted rgba(114, 113, 113, 0.79)',
          color: 'black',
          backgroundColor: 'white',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          whiteSpace: 'normal',
        }}
      >
        <NoteIcon sx={{ fontSize: 32, color: 'black', mb: 1 }} />
        {attachment.label}
      </Button>
    ))}
  </Box></Box>
</Box>

)}



                    </Box>
                  </Grid>
      
                  {/* Column 2 */}
                  <Grid item xs={12} md={4}>
                    
                    <Box display="flex" flexDirection="column" gap={2}>
                                                                                   <Box display="flex" alignItems="center" gap={19}>

                      <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                        رقم الجوال: <Box component="span" sx={{ color: 'black' }}>
                          
    {formData['رقم الجوال']}
                          
                          </Box>
                      </Typography>                          </Box>
                                                                                   <Box display="flex" alignItems="center" gap={19}>

                      <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                        رقم الهاتف الأرضي: <Box component="span" sx={{ color: 'black' }}>
    {formData['رقم الهاتف الأرضي']}
                          </Box>
                      </Typography></Box>
                                                                                                         <Box display="flex" alignItems="center" gap={19}>

                      <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                        عنوان السكن المعتمد: <Box component="span" sx={{ color: 'black' }}>
    {formData['عنوان السكن المعتمد']}
                          </Box>
                      </Typography>                          </Box>
                                                                                   <Box display="flex" alignItems="center" gap={19}>

                      <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                        الجنسية: <Box component="span" sx={{ color: 'black' }}>    {formData['الجنسية']}
</Box>
                      </Typography></Box>
                                                                                   <Box display="flex" alignItems="center" gap={19}>

                      <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                        خريج جامعة: <Box component="span" sx={{ color: 'black' }}>
    {formData['خريج جامعة']}
                          </Box>
                      </Typography>                          </Box>

                    
                                                                                   <Box display="flex" alignItems="center" gap={19}>

<Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
تاريخ:                        <Box component="span" sx={{ color: 'black' }}> 


    {formData['تاريخ']}
    </Box>
</Typography>

    </Box>

                                                                                   <Box display="flex" alignItems="center" gap={19}>

<Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
تاريخ:                        <Box component="span" sx={{ color: 'black' }}> 


    {formData['تاريخ']}
    </Box>
</Typography>

    </Box>








                    </Box>
                  </Grid>
      
                  {/* Column 3 */}
                  <Grid item xs={12} md={4}  sx={{ mr: 29 ,mt:15}}>
                    <Box display="flex" justifyContent="flex-start">
                      <Box
                        sx={{
                          width: 420,
                          height: 420,
                          borderRadius: 2,
                          border: '2px dashed rgba(83, 79, 79, 0.79)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                       
<img src={Data.Doctor_image?.replace(/\\/g, '/')} sx={{ width:' 100%', height: '100%' }} />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>



                
                {ismanger_exam ? <>        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 6 }}>
  <Button
    variant="contained"
    color="success"
    sx={{ px: 6, py: 1.5, fontSize: '18px', fontWeight: 700 }}
    onClick={async () => {
    try {
      await editRequestStatus( "مقبول");
      alert("تم قبول الطلب بنجاح");
      setShowRequest(false); 
    } catch {
      alert("حدث خطأ أثناء قبول الطلب");
    }
  }}
  >
    قبول
  </Button>
  <Button
    variant="contained"
    color="error"
    sx={{ px: 6, py: 1.5, fontSize: '18px', fontWeight: 700 }}
    onClick={async () => {
    try {
      await editRequestStatus( "مرفوض");
      alert("تم رفض الطلب بنجاح");
      setShowRequest(false); 
    } catch {
      alert("حدث خطأ أثناء قبول الطلب");
    }
  }}
  >
    رفض
  </Button>
</Box></> :""}
        

    </Box>
    
    </Box>
    <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md">
       <DialogTitle sx={{ m: 0, p: 2 }}>
    <IconButton
      aria-label="close"
      onClick={() => setOpenDialog(false)}
      sx={{
        position: "absolute",
        right: 8,
        top: 8,
        color: (theme) => theme.palette.grey[500],
      }}
    >
      <CloseIcon />
    </IconButton>
  </DialogTitle>
  <DialogContent>
    <img src={encodeURI(selectedImage)} alt="Preview" 

      style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
    />
  </DialogContent>
</Dialog>
</> 
  );
}
