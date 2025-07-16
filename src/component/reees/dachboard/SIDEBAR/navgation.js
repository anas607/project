// material-ui
import Button from '@mui/material/Button';
import { Typography} from '@mui/material';

import MailIcon from '@mui/icons-material/Mail';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Box from '@mui/material/Box';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import GroupRemoveOutlinedIcon from '@mui/icons-material/GroupRemoveOutlined';
import Avatar from '@mui/material/Avatar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import Inventory2Icon from '@mui/icons-material/Inventory2';

import CloudIcon from '@mui/icons-material/Cloud';
// react-router
import { NavLink } from 'react-router-dom';

export default function Navgation() {
  const currentPath = window.location.pathname;

  return (
    <>
      <NavLink
        to="/dachbord_raees"
        style={{ textDecoration: 'none', width: '100%' }}
      >
        <Button
          
          sx={{
            justifyContent: 'flex-start',
            backgroundColor: currentPath === '/dachbord_raees' ?  'rgb(14, 74, 35)' : 'transparent',
            color: currentPath === '/dachbord_raees' ? 'white' : 'black',
            marginRight: currentPath === '/dachbord_raees' ? '7%' : '17%',
            fontWeight: '600',
            fontSize: '16px',
            marginBottom: '2%',transition:"1%",
            marginTop: '13%',
            borderRadius: '10px',width: '90%',
            '&:hover': {
             backgroundColor: 'rgb(14, 74, 35)',
              color: 'white',
              width: '140%',
              marginRight: '7%',
            },
          }}
        >
          <DashboardIcon sx={{ marginLeft: 2 ,fontSize: 20}} />
          لوحة التحكم
        </Button>
      </NavLink>
 <NavLink to="/outer_raees" style={{ textDecoration: 'none', width: '100%' }}>
        <Button
          
          sx={{
            justifyContent: 'flex-start',
            backgroundColor: currentPath === '/outer_raees' ?  'rgb(14, 74, 35)' : 'transparent',
            color: currentPath === '/outer_raees' ? 'white' : 'black',
            marginRight: currentPath === '/outer_raees' ? '7%' : '17%',
           fontWeight: '600',
            fontSize: '16px',
            marginBottom: '2%',
            borderRadius: '10px',width: '90%',transition:"1%",  position: 'relative',
            '&:hover': {
              backgroundColor: 'rgb(14, 74, 35)',
              color: 'white',
              width: '90%',
              marginRight: '7%', '& .back-icon': {
          color: 'black', // لون السهم عند hover على البوتون
          opacity: 1,
        },
            },
          }}
        >
         <div className="relative w-fit inline-block">
      {/* أيقونة الرسالة */}
     <MailIcon style={{ fontSize: 20 }} sx={{ml:2}} />

      {/* السهم الأبيض */}
      <KeyboardBackspaceIcon
        style={{
          position: 'absolute',
          right: 2,
          top: 15.2,zIndex: 2,
          strokeWidth:0.1,
          fontWeight: '600',
            fontSize: '16px',
         
            // اللون الأساسي
     opacity: currentPath === '/outer_raees' ? 1 : 0.9,
          color: currentPath === '/outer_raees' ? 'white' : 'black',
        }}
      /> <Box
    sx={(theme) => ({
      position: 'absolute',
      top: 14.4,
      right: -1,
      width: 8,
      height: 8,
      bgcolor: currentPath === '/outer_raees' ? 'rgb(14, 74, 35)' : 'white',
      borderRadius: '50%', border: currentPath === '/outer_raees'?'3px solid rgb(14, 74, 35)' :'3px solid white'
    })}
  />
    </div>
          البريد الخارجي
        </Button>
      </NavLink>
      <NavLink to="/enter_raees" style={{ textDecoration: 'none', width: '100%' }}>
        <Button
         
          sx={{
            justifyContent: 'flex-start',
            backgroundColor: currentPath === '/enter_raees' ?  'rgb(14, 74, 35)' : 'transparent',
            color: currentPath === '/enter_raees' ? 'white' : 'black',
            marginRight: currentPath === '/enter_raees' ? '7%' : '17%',
           fontWeight: '600',
            fontSize: '16px',
            marginBottom: '2%',transition:"1%",
            borderRadius: '10px',width: '90%',
            '&:hover': {
              backgroundColor: 'rgb(14, 74, 35)',
              color: 'white',
              width: '90%',
              marginRight: '7%',
            },
          }}
        >
          <div className="relative w-fit inline-block">
      
     <MailIcon style={{ fontSize: 20 }} sx={{ml:2}} />

      
      <KeyboardBackspaceIcon
        style={{
         position: 'absolute',
          right: 1,
          top: 15.2,zIndex: 2,
          strokeWidth:0.1,
          fontSize: 12,
         
              opacity: currentPath === '/enter_raees' ? 1 : 0.9,
          color: currentPath === '/enter_raees' ? 'white' : 'black',
          transform: 'scaleX(-1)',
        
        }}
      />
    </div> <Box
    sx={(theme) => ({
      position: 'absolute',
      top: 14.4,
      right: -1,
      width: 8,
      height: 8,
       bgcolor: currentPath === '/enter_raees' ? 'rgb(14, 74, 35)' : 'white',
      borderRadius: '50%', border: currentPath === '/enter_raees'?'3px solid rgb(14, 74, 35)' :'3px solid white'
    })}
  />
          البريد الداخلي
        </Button>
      </NavLink>

     

      
<NavLink to="/employee_raees" style={{ textDecoration: 'none', width: '100%' }}>
        <Button
          
          sx={{
            justifyContent: 'flex-start',
            backgroundColor: currentPath === '/employee_raees' ?  'rgb(14, 74, 35)' : 'transparent',
            color: currentPath === '/employee_raees' ? 'white' : 'black',
            marginRight: currentPath === '/employee_raees' ? '7%' : '17%',
            fontWeight: '600',
            fontSize: '16px',
            borderRadius: '10px',width: '90%',transition:"1%",
            '&:hover': {
               backgroundColor: 'rgb(14, 74, 35)',
              color: 'white',
              width: '90%',
              marginRight: '7%',
            },
          }}
        >
          <GroupIcon sx={{ marginLeft: 2 ,fontSize:20}} />
          موظفي الديوان
        </Button>
      </NavLink>
      <NavLink to="/archiv_raees" style={{ textDecoration: 'none', width: '100%' }}>
        <Button
          
          sx={{
            justifyContent: 'flex-start',
            backgroundColor: currentPath === '/archiv_raees' ?  'rgb(14, 74, 35)' : 'transparent',
            color: currentPath === '/archiv_raees' ? 'white' : 'black',
            marginRight: currentPath === '/archiv_raees' ? '7%' : '17%',
          fontWeight: '600',
            fontSize: '16px',
            marginBottom: '2%',transition:"1%",
            borderRadius: '10px',width: '90%',
            '&:hover': {
               backgroundColor: 'rgb(14, 74, 35)',
              color: 'white',
              width: '90%',
              marginRight: '7%',
            },
          }}
        >
     <Box position="relative" display="inline-block" width={40} height={40}>
    {/* أيقونة الغيمة */}
     <Box
      position="absolute"
      bottom={-2}
      right={2}
      sx={{
        zIndex: 2, // أعلى
        pointerEvents: 'none',
        backgroundColor: 'transparent',
      }}
    >
      <Inventory2Icon sx={{ fontSize: 14, mr: -0.4 }} />
    </Box>

    {/* الغيمة - خلف السطل */}
    <Box
      position="absolute"
      top={7}
      left={18}
      sx={{
        zIndex: 1,
      }}
    >
      <CloudIcon sx={{ fontSize: 18 }} />
    </Box>

  
  
  </Box>

          
          الارشيف
        </Button>
      </NavLink>
      <Box sx={{ display: 'flex' ,alignItems:"center",justifyContent:"center",marginTop:"59%",mr:-10,}}>
          <Avatar
           sx={{
              color: 'black',fontWeight:"900",fontSize:"25px"
              
             
             ,  borderBottom: '3px solid transparent',mr:6
              }}
          
          src='https://randomuser.me/api/portraits/women/1.jpg'/>

      <Box sx={{mr:1}}>
  <Typography variant="body2" color="black" sx={{fontSize:"14px",fontWeight:"600"}}>
                        سعاد حسني
                      </Typography>
                         
  <Typography  sx={{fontSize:"14px",fontWeight:"400"}} variant="body2" color="black">
                        رئيس  الاقامة
                      </Typography></Box>
                      
                      </Box>
       
    </>
  );
}
