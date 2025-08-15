import { useDispatch } from "react-redux";
import { addElement } from "../../../../reducer/form";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  MenuItem,
  Select,
  TextField,
  Checkbox,
} from "@mui/material";

const ELEMENT_TYPES = [
  { label: "نص كتابي", value: 0 },
  { label: "حقل كتابي", value: 1 },
  { label: "تاريخ", value: 3 },
  { label: "اختيار من متعدد", value: 6 },
];

export default function Step_2() {
  const dispatch = useDispatch();
  const [fields, setFields] = useState([]);
  const [newType, setNewType] = useState("");

  const addNewField = () => {
    if (newType !== "") {
      setFields([
        ...fields,
        { type: parseInt(newType), label: "", options: [] },
      ]);
      setNewType("");
    }
  };

  const updateLabel = (index, value) => {
    const updated = [...fields];
    updated[index].label = value;
    setFields(updated);
  };

  const updateOption = (index, optionIndex, value) => {
    const updated = [...fields];
    updated[index].options[optionIndex] = value;
    setFields(updated);
  };

  const addOptionToField = (index) => {
    const updated = [...fields];
    if (!updated[index].options) updated[index].options = [];
    updated[index].options.push("");
    setFields(updated);
  };

  const handleSubmit = () => {
    fields.forEach((field) => {
      if (field.label.trim()) {
        dispatch(addElement(field));
      }
    });
    setFields([]);
  };

  return (
    <Box sx={{ flex: 1, mt: 2 }}>
      {/* اختيار نوع الحقل */}
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Select
          value={newType}
          onChange={(e) => setNewType(e.target.value)}
          displayEmpty
          sx={{ width: "50%" }}
        >
          <MenuItem disabled value="">
            اختر نوع الحقل
          </MenuItem>
          {ELEMENT_TYPES.map((el) => (
            <MenuItem key={el.value} value={el.value}>
              {el.label}
            </MenuItem>
          ))}
        </Select>
        <Button onClick={addNewField} variant="outlined">
          إضافة حقل
        </Button>
      </Box>

      {/* عرض الحقول المضافة */}
      <Box
        sx={{
          maxHeight: "400px",
          overflowY: "auto",
          pr: 1,
          mb: 2,
          border: "1px solid #ccc",
          borderRadius: "8px",
          p: 2,
        }}
      >
        {fields.map((field, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography sx={{ fontSize: 20, fontWeight: 700, mb: 1 }}>
              {ELEMENT_TYPES.find((e) => e.value === field.type)?.label ||
                "حقل"}
            </Typography>

            {/* label الرئيسي */}
            <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
              <Typography sx={{ minWidth: "100px", fontWeight: 600 }}>
                العنوان:
              </Typography>
              <TextField
                fullWidth
                value={field.label}
                onChange={(e) => updateLabel(index, e.target.value)}
              />
            </Box>

            {/* في حال كان اختيار متعدد */}
            {field.type === 6 && (
              <>
                {field.options?.map((opt, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 1,
                    }}
                  >
                    <Checkbox disabled />
                    <TextField
                      fullWidth
                      value={opt}
                      onChange={(e) => updateOption(index, i, e.target.value)}
                    />
                  </Box>
                ))}
                <Button onClick={() => addOptionToField(index)} variant="text">
                  + إضافة خيار
                </Button>
              </>
            )}
          </Box>
        ))}
      </Box>

      <Button onClick={handleSubmit} variant="contained" color="success">
        إضافة العناصر
      </Button>
    </Box>
  );
}
