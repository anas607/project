import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SortIcon from '@mui/icons-material/Sort';
import { Typography,} from '@mui/material';


export default function Step_3(){
return(


         
          <>
          <Box sx={{ flex: 1,mt:1}}>
            
             <Box sx={{display:"flex", gap:4 }}>
               <Button
              component="label"
              sx={{
                backgroundColor: ' rgb(14,74,35)',
                color: 'white',
                borderRadius: '5px',mt:2,
                minWidth: '70px',width:'20%',height:'69px',fontSize:"24px"
,fontWeight:700,
                
              }}
            >
                 <input
      type="file"
      accept="image/*"
      hidden
      onChange={(e) => {
        const file = e.target.files[0];
      
      }}
    />
              صورة 
            </Button>

             <Button
             component="label"
              sx={{
                backgroundColor: ' rgb(14,74,35)',
                color: 'white',
                borderRadius: '5px',mt:2,mr:-2,
                minWidth: '70px',textTransform: 'none'
                ,width:'20%',height:'69px',fontSize:"24px"
,fontWeight:700,
              }}
            >
              ملف  excel
               <input
      type="file"
      accept=".xlsx, .xls"
      hidden
      onChange={(e) => {
        const file = e.target.files[0];
        console.log('ملف إكسل مرفوع:', file);
        // هون فيك تضيف معالجتك لملف الإكسل
      }}
    />
            </Button>
           
             

     
            </Box>
            <Box sx={{mt:2}}>
              
              
             
           
           
            
           
            
{/* 2 */}
 <Typography sx={{fontSize:"24px",mb:1
,fontWeight:700}} > صورة:</Typography>

<Box sx={{display:"flex", gap:2 }}><Typography sx={{color:"rgb(30,30,30)" ,fontSize:"24px"
,fontWeight:700 ,mt:0.5
            }}>  العنوان
             
            </Typography>
             <input style={{height:"40px" ,width:'65%',border:'2px solid rgba(71, 59, 68, 1) ',borderRadius:'5px'}}/></Box>
            <hr style={{ height: "2px",border: "none",marginRight:-9,
            width: "100%",
            background:"rgba(206, 199, 199, 0.43)"}}/>
            {/* 3 */}
 <Typography sx={{fontSize:"24px",mb:1
,fontWeight:700}} >ملف excel :</Typography>

<Box sx={{display:"flex", gap:2 }}><Typography sx={{color:"rgb(30,30,30)" ,fontSize:"24px"
,fontWeight:700 ,mt:0.5
            }}>  العنوان
             
            </Typography>
           <input style={{height:"40px" ,width:'65%',border:'2px solid rgba(71, 59, 68, 1) ',borderRadius:'5px'}}/></Box>
            <hr style={{ height: "2px",border: "none",marginRight:-9,
            width: "100%",
            background:"rgba(206, 199, 199, 0.43)"}}/>
            {/* 4*/}
 
             </Box>
          </Box></>

         
           
)}
   




      











       