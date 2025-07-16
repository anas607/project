
import FilterListIcon from '@mui/icons-material/FilterList';import { Box, Avatar, Typography, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import Container from '@mui/material/Container';

////المخططات الخطيرة 



const employees = [
  { id: 9, name: 'سعاد حسن', phone: '+963975302812', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: 41, name: 'سعاد حسن', phone: '+963975302812', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: 65, name: 'سعاد حسن', phone: '+963975302812', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
  { id: 8, name: 'سعاد حسن', phone: '+963975302812', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
];
export default function SmallBoxes () {
  return (
    <>
     <Box sx={{ width: '25%', minWidth: '250px', flexShrink: 0,backgroundColor: 'rgb(250,250,250)' ,borderRadius:"2%"}}>
     <Container maxWidth="bg" >
    
     
     
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginTop: "7%", padding: "0 5%"  ,gap:16}}>
 
  <Typography sx={{ fontSize: "16px" ,mr:-2,fontWeight:"600" }} variant="h5">
    الموظفين
  </Typography>
   <FilterListIcon sx={{fontSize:18}} />
</Box>
<List sx={{ width: '100%' }}>
  

{employees.map((emp, index) => (
      <ListItem
  key={index}
  sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    px: 0,
    borderBottom: '1px solid #e0e0e0', // الخط الرمادي
    py: 1.5, // مسافة رأسية
  }}
>
         <Avatar src={emp.avatar} />

        {/* الاسم ورقم الهاتف */}
        <Box sx={{ flexGrow: 1, textAlign: 'right', pr: 1 }}>
          <Typography sx={{ fontSize: "10px" ,fontWeight:"600" }}>{emp.name}</Typography>
          <Typography sx={{fontSize: "10px" ,fontWeight:"600" , color: 'gray' }}>{emp.phone}</Typography>
        </Box>
         <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            backgroundColor: "red",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '10px',
            fontWeight: '600',
          }}
        >
          {emp.id}
        </Box>

{/* صورة الموظف */}
       
      </ListItem>
    ))}
  </List>  
    
    </Container>
  </Box>
  </>
  );
}


