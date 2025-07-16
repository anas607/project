import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SortIcon from '@mui/icons-material/Sort';
import { Typography,} from '@mui/material';


export default function Step_1(){
return(


         
          <>
          <Box sx={{ flex: 1,mt:2}}>
            <Box sx={{display:"flex", gap:2 }}><Typography sx={{color:"rgb(30,30,30)" ,fontSize:"24px"
,fontWeight:700 ,mt:0.5
            }}>   اسم المعاملة 
             
            </Typography>
            <input style={{height:"40px" ,width:'65%',border:'2px solid rgba(71, 59, 68, 1) ',borderRadius:'5px'}}/>
            </Box>
            
            <hr style={{ height: "2px",border: "none",
            width: "100%",background:"rgba(206, 199, 199, 0.43)"}}/>
            <Box sx={{display:"flex", gap:2 }}><Typography sx={{color:"rgb(30,30,30)" ,fontSize:"24px"
,fontWeight:700 ,mt:0.5
            }}>   رسوم المعاملة 
             
            </Typography>
                        <input style={{height:"40px" ,width:'65%',border:'2px solid rgba(71, 59, 68, 1) ',borderRadius:'5px'}}/>
</Box> <hr style={{ height: "2px",border: "none",
            width: "100%",background:"rgba(206, 199, 199, 0.43)"}}/>
            <Typography sx={{color:"rgb(30,30,30)" ,fontSize:"24px"
,fontWeight:700 ,mt:0.5
            }}>   مسار  المعاملة 
             
            </Typography>
             <Box sx={{display:"flex", gap:2 }}>
             <Button
             
              sx={{
                backgroundColor: ' rgb(14,74,35)',
                color: 'white',
                borderRadius: '10px',mt:2,width:'30%',height:'69px',fontSize:"24px"
,fontWeight:700,
                minWidth: '100px',
                
              }}
            >
              المالية
            </Button>
            <KeyboardBackspaceIcon sx={{mr:-2,fontSize:'49px' ,color:' rgb(14,74,35)' ,mt:3}}/>

             <Button
             
              sx={{
                backgroundColor: ' rgb(14,74,35)',
                color: 'white',
                borderRadius: '10px',mt:2,mr:-2,width:'30%',height:'69px',fontSize:"24px"
,fontWeight:700,
                minWidth: '100px',
               
              }}
            >
              الديوان
            </Button>
            <KeyboardBackspaceIcon sx={{mr:-2 ,fontSize:'49px' ,color:' rgb(14,74,35)',mt:3}}/>
             <Button
             
              sx={{
                mr:-1.6,
                color: ' rgb(14,74,35)',
                borderRadius: '10px',mt:2,width:'30%',height:'69px',fontSize:"24px"
,fontWeight:700,
                minWidth: '100px',
                border:'4px dashed  rgb(14,74,35)',
              }}
            >
              اضافة مسار
              {/* <FilterListIcon sx={{fontSize:'12px',}}/> */}
              <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
      {/* أيقونة Sort (ثلاث خطوط) */}
      <SortIcon fontSize="12px" />

     
      <KeyboardBackspaceIcon
        sx={{
          position: 'absolute',
          top: 3,       // اضبط الارتفاع حسب الحاجة ليكون على أول خط
          right: -2,     // المسافة من يمين الأيقونة الرئيسية
          fontSize: 12, // حجم السهم
          transform: 'rotate(270deg)', // تدوير السهم لتحت
          color: ' rgb(14,74,35)',
          pointerEvents: 'none', // يمنع السهم من التقاط الأحداث (اختياري)
        }}
      />
    </Box>

            </Button>
            </Box>
              <hr style={{ height: "2px",border: "none",
            width: "100%",background:"rgba(206, 199, 199, 0.43)"}}/>
          </Box></>

         
           
)}
   




      











       