

import {
  Box,
  Typography,
  
  Paper,
   Modal,
  Button,

} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';



export default function EnternalMails({open,onclose}){
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
       onClick={onclose}
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


</>


    )
}