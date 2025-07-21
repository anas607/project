
import { CircularProgress, Box } from '@mui/material';

export default function Loading(){
    return(
        <>
  <Box
      sx={{
        backgroundColor: '#ffffff',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress
        sx={{
          color: 'rgb(14, 74, 35)',
        }}
        size={60}
        thickness={5}
      />
    </Box>   </> )
}