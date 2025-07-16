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
// react-router_exam
import { NavLink } from 'react-router-dom';

export default function Navgation() {
  const currentPath = window.location.pathname;

  return (
    <>
      <NavLink
        to="/dachbord_exam"
        style={{ textDecoration: 'none', width: '100%' }}
      >
        <Button
          
          sx={{
            justifyContent: 'flex-start',
            backgroundColor: currentPath === '/dachbord_exam' ?  'rgb(14, 74, 35)' : 'transparent',
            color: currentPath === '/dachbord_exam' ? 'white' : 'black',
            marginRight: currentPath === '/dachbord_exam' ? '7%' : '17%',
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
 <NavLink to="/outer_exam" style={{ textDecoration: 'none', width: '100%' }}>
        <Button
          
          sx={{
            justifyContent: 'flex-start',
            backgroundColor: currentPath === '/outer_exam' ?  'rgb(14, 74, 35)' : 'transparent',
            color: currentPath === '/outer_exam' ? 'white' : 'black',
            marginRight: currentPath === '/outer_exam' ? '7%' : '17%',
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
     opacity: currentPath === '/outer_exam' ? 1 : 0.9,
          color: currentPath === '/outer_exam' ? 'white' : 'black',
        }}
      /> <Box
    sx={(theme) => ({
      position: 'absolute',
      top: 14.4,
      right: -1,
      width: 8,
      height: 8,
      bgcolor: currentPath === '/outer_exam' ? 'rgb(14, 74, 35)' : 'white',
      borderRadius: '50%', border: currentPath === '/outer_exam'?'3px solid rgb(14, 74, 35)' :'3px solid white'
    })}
  />
    </div>
          البريد الخارجي
        </Button>
      </NavLink>
      <NavLink to="/enter_exam" style={{ textDecoration: 'none', width: '100%' }}>
        <Button
         
          sx={{
            justifyContent: 'flex-start',
            backgroundColor: currentPath === '/enter_exam' ?  'rgb(14, 74, 35)' : 'transparent',
            color: currentPath === '/enter_exam' ? 'white' : 'black',
            marginRight: currentPath === '/enter_exam' ? '7%' : '17%',
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
         
              opacity: currentPath === '/enter_exam' ? 1 : 0.9,
          color: currentPath === '/enter_exam' ? 'white' : 'black',
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
       bgcolor: currentPath === '/enter_exam' ? 'rgb(14, 74, 35)' : 'white',
      borderRadius: '50%', border: currentPath === '/enter_exam'?'3px solid rgb(14, 74, 35)' :'3px solid white'
    })}
  />
          البريد الداخلي
        </Button>
      </NavLink>

     

      
<NavLink to="/employee_exam" style={{ textDecoration: 'none', width: '100%' }}>
        <Button
          
          sx={{
            justifyContent: 'flex-start',
            backgroundColor: currentPath === '/employee_exam' ?  'rgb(14, 74, 35)' : 'transparent',
            color: currentPath === '/employee_exam' ? 'white' : 'black',
            marginRight: currentPath === '/employee_exam' ? '7%' : '17%',
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
      <NavLink to="/archiv_exam" style={{ textDecoration: 'none', width: '100%' }}>
        <Button
          
          sx={{
            justifyContent: 'flex-start',
            backgroundColor: currentPath === '/archiv_exam' ?  'rgb(14, 74, 35)' : 'transparent',
            color: currentPath === '/archiv_exam' ? 'white' : 'black',
            marginRight: currentPath === '/archiv_exam' ? '7%' : '17%',
          fontWeight: '600',
            fontSize: '16px',
           transition:"1%",
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
      <NavLink to="/bank_exam" style={{ textDecoration: 'none', width: '100%' }}>
        <Button
          
          sx={{
            justifyContent: 'flex-start',
            backgroundColor: currentPath === '/bank_exam' ?  'rgb(14, 74, 35)' : 'transparent',
            color: currentPath === '/bank_exam' ? 'white' : 'black',
            marginRight: currentPath === '/bank_exam' ? '7%' : '17%',
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
           بنك الاسئلة
        </Button>
      </NavLink>
      <NavLink to="/quiz_exam" style={{ textDecoration: 'none', width: '100%' }}>
        <Button
          
          sx={{
            justifyContent: 'flex-start',
            backgroundColor: currentPath === '/quiz_exam' ?  'rgb(14, 74, 35)' : 'transparent',
            color: currentPath === '/quiz_exam' ? 'white' : 'black',
            marginRight: currentPath === '/quiz_exam' ? '7%' : '17%',
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
           الامتحانات
        </Button>
      </NavLink>
      <NavLink to="/need_exam" style={{ textDecoration: 'none', width: '100%' }}>
        <Button
          
          sx={{
            justifyContent: 'flex-start',
            backgroundColor: currentPath === '/need_exam' ?  'rgb(14, 74, 35)' : 'transparent',
            color: currentPath === '/need_exam' ? 'white' : 'black',
            marginRight: currentPath === '/need_exam' ? '7%' : '17%',
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
          طلبات الامتحان 
        </Button>
      </NavLink>
      <Box sx={{ display: 'flex' ,alignItems:"center_exam",justifyContent:"center_exam",marginTop:"19%",mr:1,}}>
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
                        رئيس ديوان 
                      </Typography></Box>
                      
                      </Box>
       
    </>
  );
}
