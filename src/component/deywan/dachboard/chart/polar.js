
import {  Box } from '@mui/material';


import { VictoryPie } from 'victory';






const polarData = [
  { x: "محول", y: 45 },
  { x: "مرفوض", y: 30 },
  { x: "قيد الدراسة", y: 25 },
];

const COLORS = ["rgb(71,59,68)", "rgb(141,113,133)", "rgb(97,79,92)"];
export default function Polar () {
  return (
    

     

<>  
        {/* Polar Chart on the LEFT */}
        <Box sx={{ width: 188, height: 188 ,mt:2}}>
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


