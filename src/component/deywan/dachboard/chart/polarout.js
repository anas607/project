
import {  Box } from '@mui/material';


import { VictoryPie } from 'victory';
import { useEffect,useState } from "react";
import { getData } from "../../../../API/apiService";
import { BaseUrl,  showExternalStatistics } from "../../../../API/api";


const COLORS = ["rgb(14,74,35)", "rgb(11,141,56)","rgb(14,215,84)" ];
export default function PolarOut () {
  const[state,setState]= useState([])
  useEffect(()=>{
    fetchInternalStatisticsSummary()
  },[])
  async function fetchInternalStatisticsSummary(){
    try{const response =await getData(`${BaseUrl}${showExternalStatistics}`)
    setState(response.data)
}catch(err){
  console.log(err)
}

  }
  const polarData = [
  { x: "منتهي", y: state.done},
  { x: "انتظار", y: state.pending},
  { x: "قيد الدراسة", y: state.under_review},
];
  return (
    

     

<>  
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


