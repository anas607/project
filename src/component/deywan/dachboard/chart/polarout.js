import { Box, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { VictoryPie } from 'victory';
import { useEffect, useState } from "react";
import { getData } from "../../../../API/apiService";
import { BaseUrl, showExternalStatistics } from "../../../../API/api";

const COLORS = ["rgb(14,74,35)", "rgb(11,141,56)", "rgb(14,215,84)"];

export default function PolarOut() {
  const [state, setState] = useState({});

  useEffect(() => {
    fetchInternalStatisticsSummary();
  }, []);

  async function fetchInternalStatisticsSummary() {
    try {
      const response = await getData(`${BaseUrl}${showExternalStatistics}`);
      setState(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const hasData =
    (state.done || 0) > 0 ||
    (state.pending || 0) > 0 ||
    (state.under_review || 0) > 0;

  const polarData = [
    { x: "منتهي", y: hasData ? state.done : 1 },
    { x: "انتظار", y: hasData ? state.pending : 1 },
    { x: "قيد الدراسة", y: hasData ? state.under_review : 1 },
  ];

  return (
    <Box sx={{ width: 188, height: 188, mt: 2, position: 'relative' }}>
      <VictoryPie
        data={polarData}
        colorScale={hasData ? COLORS : ["#e0e0e0"]}
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

      {!hasData && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }}
        >
          <InfoOutlinedIcon sx={{ fontSize: 32, color: '#075c15ff' }} />
          <Typography variant="caption" sx={{ fontSize: 20,fontWeight: "700",color: '#094709ff' }}>
بريدك الخارجي فارغ          </Typography>
        </Box>
      )}
    </Box>
  );
}
