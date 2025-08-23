import { Box, Typography, Button, FormControl, Select, MenuItem } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SortIcon from "@mui/icons-material/Sort";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BaseUrl, FETCHOFFICE } from "../../../../API/api";
import { setSelectedOfficeId, setTransactionCost, setTransactionName } from "../../../../reducer/files/manual";
import { getData } from "../../../../API/apiService";

export default function Step_1() {
  const dispatch = useDispatch();
  const { name, transactionCost, selectedOfficeId } = useSelector(
    (state) => state.step
  );

  const [offices, setOffices] = useState([]);

  useEffect(() => {
    fetchOffices();
  }, []);

  const fetchOffices = async () => {
    try {
      const res = await getData(`${BaseUrl}${FETCHOFFICE}`);
      setOffices(res.data[0]); // المكاتب بيجوا مع name
    } catch (err) {
      console.error("فشل في جلب المكاتب:", err);
    }
  };

  return (
    <Box sx={{ flex: 1, mt: 2 }}>
      {/* اسم المعاملة */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>اسم المعاملة</Typography>
        <input
          value={name}
          onChange={(e) => dispatch(setTransactionName(e.target.value))}
          style={{
            height: "40px",
            width: "65%",
            border: "2px solid rgba(71, 59, 68, 1)",
            borderRadius: "5px",
          }}
        />
      </Box>

      <hr style={{ height: "2px", border: "none", background: "rgba(206, 199, 199, 0.43)" }} />

      {/* رسوم المعاملة */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>رسوم المعاملة</Typography>
        <input
          value={transactionCost}
          onChange={(e) => dispatch(setTransactionCost(e.target.value))}
          style={{
            height: "40px",
            width: "65%",
            border: "2px solid rgba(71, 59, 68, 1)",
            borderRadius: "5px",
          }}
        />
      </Box>

      <hr style={{ height: "2px", border: "none", background: "rgba(206, 199, 199, 0.43)" }} />

     {/* مسار المعاملة */}
<Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 0 }}>
  {/* الزر الأول */}
  <Button
    variant="contained"
    sx={{
      backgroundColor: "rgb(14,75,34)",
      color: "white",
      borderRadius: 5,
      fontWeight: 700,
      "&:hover": { backgroundColor: "rgb(14,75,34)" },
    }}
  >
    الديوان
  </Button>

  {/* السهم بين الزرين */}
  <Typography
    sx={{
      fontSize: 24,
      fontWeight: 700,
      color: "rgb(14,75,34)",
      px: 1,
    }}
  >
    ←
  </Typography>

  {/* الزر الثاني */}
  <Button
    variant="contained"
    sx={{
      backgroundColor: "rgb(14,75,34)",
      color: "white",
      borderRadius: 5,
      textTransform: "none",
      fontWeight: 700,
      "&:hover": { backgroundColor: "rgb(14,75,34)" },
      px: 2,
    }}
  >
    المالية
  </Button>

  {/* السهم قبل السيلكت */}
  <Typography
    sx={{
      fontSize: 24,
      fontWeight: 700,
      color: "rgb(14,75,34)",
      px: 1,
    }}
  >
    ←
  </Typography>

  {/* زر السيلكت */}
  <FormControl
    sx={{
      minWidth: 180,
      borderRadius: "0 20px 20px 0",
      overflow: "hidden",
      border: "4px dashed rgb(14,74,35)",
      px: 1,
      py: 0.5,
      backgroundColor: "white",
    }}
  >
    <Select
      multiple
      value={selectedOfficeId}
      onChange={(e) => dispatch(setSelectedOfficeId(e.target.value))}
      displayEmpty
      renderValue={(selected) => {
        if (!selected.length) {
          return <Typography sx={{ fontWeight: 700 }}>مسار المعاملة</Typography>;
        }
        return selected
          .map((id) => offices.find((o) => o.id === id)?.name)
          .filter(Boolean)
          .join(" , ");
      }}
      fullWidth
    >
      {offices.map((office) => (
        <MenuItem key={office.id} value={office.id}>
          {office.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
</Box>


      <hr style={{ height: "2px", border: "none", background: "rgba(206, 199, 199, 0.43)" }} />
    </Box>
  );
}
