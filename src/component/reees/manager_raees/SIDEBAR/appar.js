import Box from '@mui/material/Box';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import TextField from '@mui/material/TextField';
import {
  IconButton,
  Typography,
  Avatar,
  List,
  ListItem,
  Button,
  Popper,
  Paper,
} from '@mui/material';
import { useState, useRef } from 'react';

const notifications = [
  { id: 1, avatar: '/user1.jpg', message: 'تمت إضافة موظف جديد' },
  { id: 2, avatar: '/user2.jpg', message: 'تم تحديث البيانات بنجاح' },
  { id: 3, avatar: '/user3.jpg', message: 'لديك مهمة جديدة' },
];

export default function Appar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifBtnRef = useRef(null);

  const handleToggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  

  return (
    <>
      {/* الشريط العلوي */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1,
          marginBottom: '2%',height:'60px'
        }}
      >
        {/* البحث */}
        <TextField
          placeholder="ابحث"
          variant="outlined"
          sx={{
            marginTop: '1.9%',
           mr:0.3,
            width: '85%',
            direction: 'rtl',height:'60px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '7px',
              backgroundColor: 'white',
              '& fieldset': { borderColor: 'rgb(250,250,250)' },
              '&:hover fieldset': { borderColor: 'rgb(250,250,250)' },
              '&.Mui-focused fieldset': { borderColor: 'rgb(250,250,250)' },
            },
            '& input': {
              paddingRight: '5px',
              color: 'rgb(105, 105, 102)',
              fontSize: '100%',
              height:'10px'
            },
          }}
          InputProps={{
            startAdornment: (
              <SearchIcon sx={{ color: 'rgb(17, 17, 17)' }} />
            ),
          }}
        />

        {/* زر الإشعارات */}
        
        <IconButton
        
 
          ref={notifBtnRef}
          onClick={handleToggleNotifications}
          sx={{
            border: '1px solid rgba(212, 208, 212, 0.31)',position: 'relative',
            borderRadius: '50px',
            padding: '8px',mr:1,
            backgroundColor: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.secondary.main,
          }}
        >
          <NotificationsIcon  sx={{ fontSize: '20px' }} /> <Box
    sx={(theme) => ({
      position: 'absolute',
      top: 8.4,
      right: 9,
      width: 6,
      height: 6,
      bgcolor: 'white',
      borderRadius: '50%', border: `2px solid ${theme.palette.primary.main}`,
    })}
  />
        </IconButton>
       <IconButton
        
          sx={{
            border: '1px solid rgba(212, 208, 212, 0.31)',
            borderRadius: '50px',
            padding: '8px',
                        backgroundColor: (theme) => theme.palette.primary.main,
ml:3,
            color: (theme) => theme.palette.secondary.main,
          }}
        >
          <PowerSettingsNewIcon sx={{ fontSize: '20px' }} />
        </IconButton>
      </Box>

      {/* بوكس الإشعارات المنبثق */}
      <Popper
        open={showNotifications}
        anchorEl={notifBtnRef.current}
        placement="bottom-start"
        sx={{ zIndex: 1300 }}
      >
        <Paper
          elevation={4}
          sx={{
            width: 320,
            maxHeight: 400,
            overflowY: 'auto',
            borderRadius: 2,
            p: 2,
            direction: 'rtl',
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 ,mr:15}}>
            الإشعارات
          </Typography>

          <List sx={{ width: '100%' }}>
            {notifications.map((notif, index) => (
              <ListItem
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  px: 0,
                  py: 1.5,
                  borderBottom: '1px solid #e0e0e0',
                }}
              >
                <Avatar src={notif.avatar} />
                <Typography sx={{ fontSize: '14px', fontWeight: 400 }}>
                  {notif.message}
                </Typography>
              </ListItem>
            ))}
          </List>

         
        </Paper>
      </Popper>
    </>
  );
}
