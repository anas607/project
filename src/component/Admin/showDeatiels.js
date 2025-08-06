import {
  Box,
  Typography,
  
  Paper,
   Modal,
  Button,

} from "@mui/material";
import { CircularProgress } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import ArticleIcon from '@mui/icons-material/Article';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { useEffect, useState } from "react";
import Loading from "../../wrong/mails/loading";
import NoData from "../../wrong/mails/noData";
import { getData } from "../../API/apiService";
import { BaseUrl, ANNOUNCEMENT } from "../../API/api";

const headStyle = {
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
  py: 1.5
};

export default function ShowDeatiels({ open, onClose,id }) {
        const [isLoading, setIsLoading] = useState(false);
    const [mailData, setMailData] = useState({title:"",body:"",created_at:""});

  useEffect(()=>{
  if (open && id) {
fetchMail(id);
      }
    }, [open, id]);

  const fetchMail = async (id) => {
    setIsLoading(true);
    try {
      const res = await getData(`${BaseUrl}${ANNOUNCEMENT}${id}`);

      setMailData(res.data);
    } catch (err) {
      console.error(err.response?.data || err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
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
      <Box component="span" color="black">{mailData.title}</Box>
    </Typography>

    <Typography fontSize="14px" fontWeight="400" color="rgb(34,42,37)" sx={{ whiteSpace: 'pre-line' }}>
      <span style={{ fontSize: '24px', fontWeight: '700', color: 'gray' }}>الموضوع :</span>{' '}
      <Typography fontSize="18px" fontWeight="500" color="rgb(34,42,37)">
        {mailData.body}
      </Typography>
    </Typography>

    <Typography fontWeight="700" fontSize="20px" sx={{ mr: 54 }}>
      <Box component="span" sx={{ color: "black" }}>التاريخ:</Box>{' '}
      <Box component="span" sx={{ color: "gray" }}>{new Date(mailData.created_at).toLocaleDateString()}</Box>
    </Typography>
  </>
)}

  </Paper>
</Modal>
    </>
  );
}
