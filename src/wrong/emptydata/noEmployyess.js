import { TableCell, TableRow, Typography, Box } from "@mui/material";
import Diversity3Icon from '@mui/icons-material/Diversity3';import { keyframes } from '@mui/system';

export default function NoEmployees() {

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
      <Diversity3Icon 
        sx={{
          fontSize:'105px',
          animation: `${bounce} 1.5s ease-in-out infinite`
        }}
      />
      
      <Typography variant="h3" sx={{fontSize:'24px', fontWeight: 'bold', mt:2 }}>
        لا توجد بيانات حالياً
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 ,fontSize:'24px', fontWeight: 'bold'}}>
        لا يوجد محتوى لعرضه في الوقت الحالي
      </Typography>
    </Box>
  );
}
