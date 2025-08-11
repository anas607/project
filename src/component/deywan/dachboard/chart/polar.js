
import {  Box } from '@mui/material';


import { VictoryPie } from 'victory';
import { useEffect,useState } from "react";
import { getData } from "../../../../API/apiService";
import { BaseUrl,  showInternalStatistics } from "../../../../API/api";








const COLORS = ["rgb(71,59,68)", "rgb(97,79,92)", "rgb(141,113,133)"];
export default function Polar () {
  const[state,setState]= useState([])
  useEffect(()=>{
    fetchInternalStatisticsSummary()
  },[])
  async function fetchInternalStatisticsSummary(){
    try{const response =await getData(`${BaseUrl}${showInternalStatistics}`)
    setState(response.data)
        console.log(response.data)

}catch(err){
  console.log(err)
}

  }
  const polarData = [
  { x: "محول", y: state.approved },
  { x: "مرفوض", y: state.rejected },
  { x: "قيد الدراسة", y: state.pending },
];

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


