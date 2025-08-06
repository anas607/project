import { useEffect, useState } from "react";
import {
  VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryLabel
} from "victory";
import { getData } from "../../../../API/apiService";
import { ACHIEVEMENT, BaseUrl, PATHS, STATISTICS } from "../../../../API/api";
import { CircularProgress, Box } from '@mui/material';

export default function ColumnChart() {
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchAchievement();
  }, []);

  async function fetchAchievement() {
    setLoading(true);
    try {
      const response = await getData(`${BaseUrl}${STATISTICS}${PATHS}${ACHIEVEMENT}`);
      if (response.success) {
        const transformedData = response.data.map((item) => ({
          name: item["الدائرة"],
          value: item["نسبة الانجاز المئوية"],
        }));
        setChartData(transformedData.reverse());
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}>
        <CircularProgress sx={{ color: 'green' }} />
      </Box>
    );
  }

  return (
    <VictoryChart
  theme={VictoryTheme.material}
  domainPadding={{ x: 40 }}
  height={350}
  padding={{ top: 20, bottom: 100, left: 50, right: 20 }} // 👈 زدنا bottom
>

      {/* المحور الأفقي (أسماء الدوائر) */}
     <VictoryAxis
  style={{
    tickLabels: {
      fontSize: 16,
      fontWeight: '700',
      angle: -45,
           // بدون زاوية
      textAnchor: "middle", // ثبّت النص تحت العمود بالمنتصف
      padding: 10,
      direction: "rtl",
    },
  }}
  tickFormat={chartData.map(d => d.name)}
/>

      {/* الأعمدة */}
      <VictoryBar
        data={chartData}
        x="name"
        y="value"
        labels={({ datum }) => `${datum.value}%`}
        labelComponent={<VictoryLabel dy={-10} />}
        style={{
          data: { fill: "#0e4b23", width: 25 },
          labels: { fill: "#0e4b23", fontSize: 16, fontWeight: "700" },
        }}
      />
    </VictoryChart>
  );
}
