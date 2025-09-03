import { TableCell, TableRow, Typography, Box } from "@mui/material";
import { keyframes } from '@mui/system';import NineteenMpIcon from '@mui/icons-material/NineteenMp';
import FactCheckIcon from '@mui/icons-material/FactCheck';export default function NoMARK() {

  // أنميشن للأيقونة تتحرك لأعلى ولأسفل
  const bounce = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  `;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 6,
        color: 'gray'
      }}
    >
      <NineteenMpIcon 
        sx={{
          fontSize:'105px',
          animation: `${bounce} 1.5s ease-in-out infinite`
        }}
      />
      
      <Typography variant="h3" sx={{fontSize:'24px', fontWeight: 'bold', mt:2 }}>
        لا توجد بيانات حالياً
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 ,fontSize:'24px', fontWeight: 'bold'}}>
        لا يوجد علامات لعرضها في الوقت الحالي
      </Typography>
     
    </Box>
  );
}
