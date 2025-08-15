import { useDispatch, useSelector } from "react-redux";
import { setGeneralInfo } from "../../../../reducer/form";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  MenuItem,
  Select,
  OutlinedInput,
  Chip,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SortIcon from "@mui/icons-material/Sort";

const EXTRA_PATHS = [
  { id: 3, name: "اللجنة العلمية" },
  { id: 4, name: "القبول" },
  { id: 5, name: "الامتحانات" },
];

export default function Step_1() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => state.form);

  const [localName, setLocalName] = useState(name);
  const [localCost, setLocalCost] = useState(cost);
  const [selectedPaths, setSelectedPaths] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChangePaths = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedPaths(typeof value === "string" ? value.split(",") : value);
  };

  const saveGeneralInfo = () => {
    const fixed = [1, 2]; // المالية + الديوان
    const allPaths = fixed.concat(selectedPaths.map((id) => parseInt(id)));
    dispatch(
      setGeneralInfo({ name: localName, cost: localCost, path_ids: allPaths })
    );
  };

  return (
    <Box sx={{ flex: 1, mt: 2 }}>
      {/* اسم المعاملة */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Typography sx={{ fontSize: "24px", fontWeight: 700, mt: 0.5 }}>
          اسم المعاملة
        </Typography>
        <input
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
          style={{
            height: "40px",
            width: "65%",
            border: "2px solid rgba(71, 59, 68, 1)",
            borderRadius: "5px",
          }}
        />
      </Box>

      <hr style={hrStyle} />

      {/* رسوم المعاملة */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Typography sx={{ fontSize: "24px", fontWeight: 700, mt: 0.5 }}>
          رسوم المعاملة
        </Typography>
        <input
          value={localCost}
          onChange={(e) => setLocalCost(e.target.value)}
          style={{
            height: "40px",
            width: "65%",
            border: "2px solid rgba(71, 59, 68, 1)",
            borderRadius: "5px",
          }}
        />
      </Box>

      <hr style={hrStyle} />

      {/* مسار المعاملة */}
      <Typography sx={{ fontSize: "24px", fontWeight: 700, mt: 0.5 }}>
        مسار المعاملة
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button disabled sx={pathBtnStyle}>
          المالية
        </Button>
        <KeyboardBackspaceIcon sx={arrowStyle} />
        <Button disabled sx={pathBtnStyle}>
          الديوان
        </Button>
        <KeyboardBackspaceIcon sx={arrowStyle} />

        {/* زر يتحول لقائمة */}
        {!showDropdown ? (
          <Button
            onClick={() => setShowDropdown(true)}
            sx={{
              mr: -1.6,
              color: "rgb(14,74,35)",
              borderRadius: "10px",
              mt: 2,
              width: "30%",
              height: "69px",
              fontSize: "24px",
              fontWeight: 700,
              minWidth: "100px",
              border: "4px dashed rgb(14,74,35)",
            }}
          >
            اضافة مسار
            <Box
              sx={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <SortIcon fontSize="12px" />
              <KeyboardBackspaceIcon
                sx={{
                  position: "absolute",
                  top: 3,
                  right: -2,
                  fontSize: 12,
                  transform: "rotate(270deg)",
                  color: "rgb(14,74,35)",
                  pointerEvents: "none",
                }}
              />
            </Box>
          </Button>
        ) : (
          <Select
            multiple
            autoFocus
            value={selectedPaths}
            onChange={handleChangePaths}
            onBlur={() => setShowDropdown(false)}
            input={<OutlinedInput />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((id) => {
                  const item = EXTRA_PATHS.find((p) => p.id === id);
                  return <Chip key={id} label={item?.name || `مسار ${id}`} />;
                })}
              </Box>
            )}
            sx={{
              mr: -1.6,
              color: "rgb(14,74,35)",
              borderRadius: "10px",
              mt: 2,
              width: "30%",
              height: "69px",
              fontSize: "24px",
              fontWeight: 700,
              minWidth: "100px",
              border: "4px dashed rgb(14,74,35)",
              backgroundColor: "#fff",
            }}
          >
            {EXTRA_PATHS.map((path) => (
              <MenuItem key={path.id} value={path.id}>
                {path.name}
              </MenuItem>
            ))}
          </Select>
        )}
      </Box>

      {/* زر التالي */}
      <Button
        variant="contained"
        color="success"
        onClick={saveGeneralInfo}
        sx={{ mt: 4, fontSize: 18 }}
      >
        التالي
      </Button>
    </Box>
  );
}

const hrStyle = {
  height: "2px",
  border: "none",
  width: "100%",
  background: "rgba(206, 199, 199, 0.43)",
};

const pathBtnStyle = {
  backgroundColor: "rgb(14,74,35)",
  color: "white",
  borderRadius: "10px",
  mt: 2,
  width: "30%",
  height: "69px",
  fontSize: "24px",
  fontWeight: 700,
  minWidth: "100px",
};

const arrowStyle = {
  mr: -2,
  fontSize: "49px",
  color: "rgb(14,74,35)",
  mt: 3,
};
