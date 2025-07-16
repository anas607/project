import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography, Box, Grid
} from '@mui/material';

import {
  VictoryChart, VictoryArea, VictoryTheme,
  VictoryAxis, VictoryScatter
} from 'victory';
import PolarVictory from '../chart/polarvictory';

const data = [
  { day: 'الأحد', value: 100 },
  { day: 'الاثنين', value: 75 },
  { day: 'الثلاثاء', value: 70 },
  { day: 'الأربعاء', value: 30 },
  { day: 'الخميس', value: 90 },
  { day: 'الجمعة', value: 40 },
];

export default function TableBox() {
  return (
    <Box sx={{ backgroundColor: 'white', flex: 3, mt: -4, borderRadius: 2,height:'650px',
       p: -2,  width: '1120px', }}>
      <Typography sx={{ fontSize: "16px" ,fontWeight:"700", marginTop: "1%", marginLeft: "80%" }} variant="h5">
        أداء الدائرة خلال أيام الأسبوع
      </Typography>

     <PolarVictory/>
       {/* <Typography
          sx={{
            fontSize: '13px',
           
            pb: 0.2,
          }}
        >
          المعاملات المنجزة
        </Typography> */}
      </Box>

  );
}
