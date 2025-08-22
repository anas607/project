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
      <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>مسار المعاملة</Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        <FormControl
          sx={{
            minWidth: 300,
            border: "4px dashed rgb(14,74,35)",
            borderRadius: "8px",
            px: 1,
            py: 0.5,
          }}
        >
          <Select
            multiple
            value={selectedOfficeId} // رح تكون مصفوفة أسماء
            onChange={(e) => dispatch(setSelectedOfficeId(e.target.value))}
            renderValue={(selected) => {
              if (!selected.length) {
                return (
                  <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.5 }}>
                    <SortIcon fontSize="32px" />
                    <KeyboardBackspaceIcon
                      sx={{
                        fontSize: "32px",
                        transform: "rotate(270deg)",
                        color: "rgb(14,74,35)",
                      }}
                    />
                    <h3 style={{ fontSize: "18px", fontWeight: "700", color: "rgb(14,74,35)" }}>
                      إضافة مسار
                    </h3>
                  </Box>
                );
              }
              return selected.join(" , ");
            }}
            fullWidth
          >
            {offices.map((office) => (
              <MenuItem key={office.id} value={office.name}>
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
