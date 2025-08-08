

import {
  Box,
  Typography,
  
  Paper,
   Modal,
  Button,

} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useEffect, useState } from "react";
import { getData, postData } from "../../../API/apiService";
import { BaseUrl, EDIT_STATUS_MAIL, FETCHOFFICE, SHOW_INTERNAL_MAIL } from "../../../API/api";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";



export default function EnternalMails({open,onClose,uuid,status}){
const stateMalea=useSelector((state)=>state.user.roles[0])
const employeeRoles = ["موظف الديوان", "موظف الإقامة", "موظف المجالس", "موظف المالية", "موظف المفاضلة", "موظف الشهادات"];
const isManager = employeeRoles.some(role => stateMalea.includes(role));
  const shouldShow = !isManager || !["مرسلة", "مرفوضة"].includes(status);

    const [mailData, setMailData] = useState({subject:"",body:"",updated_at:"",from:""});
        const [isLoading, setIsLoading] = useState(false);
    
    
   
useEffect(()=>{
if (open && uuid) {
      fetchMail();
    }
  }, [open, uuid]);
const fetchMail = async () => {
    setIsLoading(true); // يبدأ التحميل

    try {
const res = await getData(`${BaseUrl}${SHOW_INTERNAL_MAIL}?uuid=${uuid}`);
      setMailData(res);
      console.log("المعاملة:", res);
    } catch (err) {
      // console.error(  err.response.data.message)  


    }finally{
       setIsLoading(false);
    }
  };
 async function EditMailStatus(status){
   setIsLoading(true);
    try{
const response = await postData(`${BaseUrl}${EDIT_STATUS_MAIL}`,{
  uuid,status
})
return response.data

    }catch(err){
    console.error( err.response?.data || err.message);

    }finally{
       setIsLoading(false);
    }
  }
  if (!open) return null;
    return(
<>

<Modal
  open={open}
  
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
       onClick={onClose}
      sx={{ position: 'absolute', top: 16, left: 16, cursor: 'pointer', fontSize:'30px'}}
    />

  {isLoading ? (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 10,
      backgroundColor: 'rgba(255,255,255,0.8)',
      borderRadius: 3,
    }}
  >
    <CircularProgress sx={{ color: 'green' }} size={60} />
  </Box>
) : (

        <>
          <Typography fontWeight="700" fontSize="24px" color="black">الجمهورية العربية السورية</Typography>
          <Typography fontWeight="700" fontSize="24px" color="black">وزارة الصحة</Typography>
          <Typography fontWeight="700" fontSize="24px" color="black">الهيئة السورية للاختصاصات الطبية</Typography>

          <Typography fontSize="24px" fontWeight="700" mt={2}>
            <Box component="span" color="gray">العنوان :</Box>{' '}
            <Box component="span" color="black">{mailData.subject}</Box>
          </Typography>

{/* الموضوع */}
<Typography fontSize="14px" fontWeight="400" color="rgb(34,42,37)" sx={{ whiteSpace: 'pre-line' }}>
  <span style={{ fontSize: '24px', fontWeight: '700', color: 'gray' }}>الموضوع :</span>{' '}
  
  <Typography fontSize="18px" fontWeight="500" color="rgb(34,42,37)">

   {mailData.body} 

</Typography>
</Typography>
    {/* التوقيع */}
    <Typography fontWeight="700" fontSize="20px" sx={{mr:54}}>
      <Box component="span" sx={{color:"black"}}>الاسم:</Box>{''}
            <Box component="span" sx={{color:"gray" ,whiteSpace:'-moz-pre-wrap'}}> 
    {typeof mailData.from === "object" ? mailData.from?.name : mailData.from ?? "غير معروف"}
</Box>

    </Typography>
   <Typography fontWeight="700" fontSize="20px" sx={{mr:54}}>
      <Box component="span" sx={{color:"black"}}>التاريخ:</Box>{''}
            <Box component="span" sx={{color:"gray"}}>      {new Date(mailData.updated_at).toLocaleDateString()}
</Box>

    </Typography>
    {/* زر الإرسال */}
    {!shouldShow && (
  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-start', mt: 55 ,ml:'-50' }}>
  <Button
  onClick={async () => {
    try {
      await EditMailStatus( "مرسلة");
      alert("تم قبول البريد بنجاح");
      onClose(); 
    } catch {
      alert("حدث خطأ أثناء قبول الطلب");
    }
  }}
    variant="contained"
    sx={{
      borderRadius: "20px",
      minWidth: "120px",
      backgroundColor: "rgb(14,74,35)",
      color: "white",
      fontWeight: "700",
      fontSize: "20px"
    }}
  >
           {isLoading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "قبول"} 
  </Button>
  <Button
   onClick={async () => {
    try {
      await EditMailStatus( "مرفوضة");
      alert("تم رفض البريد بنجاح");
      onClose();
    } catch {
      alert("حدث خطأ أثناء رفض الطلب");
    }
  }}
    variant="contained"
    sx={{
      borderRadius: "20px",
      minWidth: "120px",
      backgroundColor: "rgba(119, 30, 7, 1)",
      color: "white",
      fontWeight: "700",
      fontSize: "20px"
    }}
  >
           {isLoading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "رفض"} 
  </Button>
</Box>

)}
</>
      )}
  </Paper>
</Modal>

</>


    )
}