
import {  Box } from '@mui/material';


import { VictoryPie } from 'victory';






const polarData = [
  { x: "محول", y: 45 },
  { x: "مرفوض", y: 30 },
  { x: "قيد الدراسة", y: 25 },
];

const COLORS = ["rgb(14,74,35)", "rgb(14,215,84)", "rgb(11,141,56)"];
export default function PolarOut () {
  return (
    

     

<>  
        {/* Polar Chart on the LEFT */}
        <Box sx={{ width: 188, height: 188,mt:2}}>
          <VictoryPie
            data={polarData}
            colorScale={COLORS}
            innerRadius={50}
            padAngle={0}
            startAngle={90}
            endAngle={450}
            labels={() => null}
            style={{
              data: {
                stroke: "none",
                strokeWidth: 2
              }
            }}
          />
        </Box>

       

</>
  );
}


