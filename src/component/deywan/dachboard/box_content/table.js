import FlashlightOnIcon from '@mui/icons-material/FlashlightOn';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import {
  Box, Button, Select, MenuItem, Typography,
  IconButton, Avatar, FormControl, TableBody,
  InputLabel, CircularProgress
} from "@mui/material";

import {
  VictoryChart, VictoryArea, VictoryTheme,
  VictoryAxis, VictoryScatter
} from 'victory';
import { useEffect, useState } from 'react';
import { getData } from '../../../../API/apiService';
import { BaseUrl, FETCHOFFICE, STATISTICS, WEEKLY_DONE, WEEKLYPATH } from '../../../../API/api';
import { useSelector } from 'react-redux';

export default function TableBox() {
  const state = useSelector((state) => state.user);
  const isAdmin = state.roles?.some(role => role === "المدير")


  const [selectchartData, setselectChartData] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [offices, setOffices] = useState([]);
  const [loading, setloading] = useState(false);
  const [chartData, setChartData] = useState([]);

  const chartToRender = Array.isArray(isAdmin ? selectchartData : chartData)
    ? (isAdmin ? selectchartData : chartData)
    : [];

  useEffect(() => {
    if (isAdmin) {
      fetchOffices();
    } else {
      fetchWeekly();
    }
  }, []);

  const fetchOffices = async () => {
    try {
      const res = await getData(`${BaseUrl}${FETCHOFFICE}`);
      const allOffices = res.data[0];
      console.log(      res.data[0])

      setOffices(allOffices);

      if (isAdmin && allOffices.length > 0) {
        const defaultOffice = allOffices[0];
        setSelectedOffice(defaultOffice);
fetchweeklyByOfficeName(defaultOffice.id);
      }
    } catch (err) {
      console.error("فشل في جلب المكاتب:", err);
    }
  };

  async function fetchWeekly() {
    try {
      const response = await getData(`${BaseUrl}${STATISTICS}${WEEKLY_DONE}`);
      if (response.success && Array.isArray(response.data)) {
        const formatted = response.data.map((item) => ({
          day: item.day,
          value: item.total_done ?? 0,
        }));
        setChartData(formatted);
      } else {
        setChartData([]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setloading(false);
    }
  }

 async function fetchweeklyByOfficeName(officeid) {
  if (!officeid) return;
  setloading(true);
  console.log("Fetching data for office ID:", officeid);
  try {
    const response = await getData(`http://127.0.0.1:8000/api/statistics/weekly/path/${officeid}`);
    
    const weeklyData = response.data?.["الانجاز الاسبوعي"] || [];

    const formatted = weeklyData.map(item => ({
      day: item.day,
      value: item.total_done ?? 0,
    }));

    setselectChartData(formatted);
  } catch (err) {
    console.error("الرابط المطلوب غير موجود. الرجاء التحقق من الرابط.", err.response?.data || err.message);
    setselectChartData([]);
  } finally {
    setloading(false);
  }
}

  return (
    <Box sx={{ backgroundColor: 'white', flex: 3, mt: -4, borderRadius: 2, height: '697px', p: -2, width: '1590px' }}>
     <Box sx={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  px: 2,
  pt: 2
}}>
  <Typography sx={{ fontSize: "18px", fontWeight: "700" }} variant="h5">
    أداء الدائرة خلال أيام الأسبوع
  </Typography>

  {isAdmin && (
    <FormControl sx={{
      minWidth: 300,
      border: '2px solid rgb(14, 75, 35)',
      borderRadius: '8px',
      px: 1,
      py: 0.5
    }}>
      <InputLabel
        id="filter-label"
        sx={{
          color: "rgb(14, 75, 35)",
          fontSize: '18px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          '&.Mui-focused': { color: "rgb(14, 75, 35)" },
        }}
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          تصفية حسب الدائرة
          <Box sx={{ position: 'relative', display: 'inline-block', ml: 1 }}>
            <FlashlightOnIcon sx={{ fontSize: 24, color: 'rgb(14, 75, 35)' }} />
            <FormatAlignRightIcon sx={{
              position: 'absolute',
              bottom: 2,
              right: -6,
              fontSize: 16,
              color: 'rgb(14, 75, 35)'
            }} />
          </Box>
        </Box>
      </InputLabel>

      <Select
        value={selectedOffice?.id || ""}
        onChange={(e) => {
          const officeId = e.target.value;
          const office = offices.find((o) => o.id === officeId);
          setSelectedOffice(office);
          if (office) {
            fetchweeklyByOfficeName(office.id);
          }
        }}
        labelId="filter-label"
        fullWidth
        sx={{
          color: "rgb(14, 75, 35)",
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: "rgb(14, 75, 35)",
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: "rgb(14, 75, 35)",
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: "rgb(14, 75, 35)",
          }
        }}
      >
        {offices.map((office) => (
          <MenuItem key={office.id} value={office.id}>
            {office.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )}
</Box>


      {loading ? (
        <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 10 }}>
          <CircularProgress sx={{ color: 'green' }} />
        </Box>
      ) : (
       
        
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={20}
            height={125}
            padding={{ top: 3, bottom: 40, left: 30, right: 10 }}
          >
            <VictoryAxis
              style={{ tickLabels: { fontSize: 5, padding: 3 } }}
              tickFormat={chartToRender.map(d => d.day)}
            />
            <VictoryAxis
              dependentAxis
              tickFormat={(x) => `${x}`}
              style={{ tickLabels: { fontSize: 5 } }}
            />
            <VictoryArea
              data={chartToRender}
              x="day"
              y="value"
              interpolation="natural"
              style={{ data: { fill: "rgb(205,217,209)", stroke: "rgb(205,217,209)" } }}
            />
            <VictoryScatter
              data={chartToRender}
              x="day"
              y="value"
              size={1.2}
              style={{
                data: {
                  fill: "white",
                  stroke: "rgb(205,217,209)",
                  strokeWidth: 1,
                },
              }}
            />
          </VictoryChart>
        )
      }
    </Box>
  );
}
