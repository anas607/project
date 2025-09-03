import SpeakerNotesOffIcon from '@mui/icons-material/SpeakerNotesOff';
import { TableCell, TableRow, Typography, Box } from "@mui/material";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { keyframes } from '@mui/system';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';

export default function NoFinished() {

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
      <SpeakerNotesOffIcon 
        sx={{
          fontSize:'105px',
          animation: `${bounce} 1.5s ease-in-out infinite`
        }}
      />
      
      <Typography variant="h3" sx={{fontSize:'24px', fontWeight: 'bold', mt:2 }}>
        لا توجد بيانات حالياً
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 ,fontSize:'24px', fontWeight: 'bold'}}>
        لا يوجد طلبات ترشيح  لعرضها في الوقت الحالي
      </Typography>
    </Box>
  );
}
