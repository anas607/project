import { Box, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { VictoryPie } from 'victory';
import { useEffect, useState } from "react";
import { getData } from "../../../../API/apiService";
import { BaseUrl, showInternalStatistics } from "../../../../API/api";

const COLORS = ["rgb(71,59,68)", "rgb(97,79,92)", "rgb(141,113,133)"];

export default function Polar() {
  const [state, setState] = useState({});

  useEffect(() => {
    fetchInternalStatisticsSummary();
  }, []);

  async function fetchInternalStatisticsSummary() {
    try {
      const response = await getData(`${BaseUrl}${showInternalStatistics}`);
      setState(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const hasData =
    (state.approved || 0) > 0 ||
    (state.rejected || 0) > 0 ||
    (state.pending || 0) > 0;

  // تحضير بيانات البولر حسب وجود البيانات
  const polarData = hasData
    ? [
        { x: "محول", y: state.approved },
        { x: "مرفوض", y: state.rejected },
        { x: "قيد الدراسة", y: state.pending },
      ]
    : [
        { x: "", y: 1 },
        { x: "", y: 1 },
        { x: "", y: 1 },
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
          <InfoOutlinedIcon sx={{ fontSize: 32, color: '#32065cff' }} />
          <Typography variant="caption" sx={{ fontSize: 20,fontWeight: "700", color: '#32065cff' }}>
            لا يوجد بيانات حالياً
          </Typography>
        </Box>
      )}
    </Box>
  );
}
