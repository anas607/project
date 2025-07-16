
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { IconButton, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';


import SidBar from './dachboard/SIDEBAR/sidbar';

export default function Archiv_Exam(){
    return(
        <>
         <Box
      sx={{
        direction:"rtl",
        height: '100vh',
      display:"flex"
      }}
    >
     
      <SidBar/>
{/* =============apppar====*/}

      <Typography    style={{marginRight:"1%"}}  variant="h5" sx={{ color: 'black',fontWeight:"900",fontSize:"29px",marginTop:"1%"}}>
          الارشيف  
            </Typography>

    {/* search         */}
<TextField
  placeholder="يبحث"
  variant="outlined"
  fullWidth
  sx={{
marginTop:"1%",marginRight:"17%",





    width: '100%',
    maxWidth: '250px',
    direction: 'rtl',
    
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      color: 'rgba(212, 208, 212, 0.31)',
      '& fieldset': {
        borderColor: 'rgba(212, 208, 212, 0.31)',
      },
      '&:hover fieldset': {
        borderColor: 'gray',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'gray',
      },
    },
    '& input': {
      paddingRight: '8px',
      color: 'gray',
    },
  }}
   InputProps={{
    startAdornment: (
      
        <SearchIcon sx={{ color: 'rgba(212, 208, 212, 0.31)' }} />
    
    ),
  }}
 
/>
  
<Badge
  color="error"
  variant="dot"
 
  
  sx={{ marginRight: '27%' , height:"6%" ,marginTop:"1%"}}
>
  <IconButton
    sx={{
     
      border: '1px solid rgba(212, 208, 212, 0.31)',
      borderRadius: '8px', // مربع بحواف ناعمة
      padding: '8px',
      backgroundColor: 'transparent',
      color: 'rgba(212, 208, 212, 0.31)', // لون الأيقونة
    }}
  >
    <NotificationsIcon sx={{ fontSize: '28px' }} />
  </IconButton>
</Badge>
</Box></>)}
   




      











       