import React from "react";
import { Box, Typography, Button, TextField, IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { FIELD_TYPES, setElements } from "../../../../reducer/files/manual";

export default function Step_2() {
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.step.elements);

  const addField = (type, labelText = "") => {
    if (type === FIELD_TYPES.TEXT || type === FIELD_TYPES.NUMBER || type === FIELD_TYPES.DATE) {
      dispatch(setElements([...elements, { type, label: labelText, value: "" }]));
    } else if (type === FIELD_TYPES.MULTI_CHOICE) {
      dispatch(setElements([...elements, { type, label: labelText || "اختيار", options: ["", ""] }]));
    } else if (type === FIELD_TYPES.CHECKBOX) {
      dispatch(setElements([...elements, { type, label: labelText || "مربع اختيار", options: [""] }]));
    }
  };

  const handleLabelChange = (index, value) => {
    const newElements = elements.map((el, i) =>
      i === index ? { ...el, label: value } : el
    );
    dispatch(setElements(newElements));
  };

  const handleValueChange = (index, value) => {
    const newElements = elements.map((el, i) =>
      i === index ? { ...el, value } : el
    );
    dispatch(setElements(newElements));
  };

  const handleOptionChange = (elIndex, optIndex, value) => {
    const newElements = elements.map((el, i) => {
      if (i === elIndex) {
        const newOptions = [...el.options];
        newOptions[optIndex] = value;
        return { ...el, options: newOptions };
      }
      return el;
    });
    dispatch(setElements(newElements));
  };

  const addOption = (elIndex) => {
    const newElements = elements.map((el, i) => {
      if (i === elIndex) {
        return { ...el, options: [...el.options, ""] };
      }
      return el;
    });
    dispatch(setElements(newElements));
  };

  return (
    <Box sx={{ mt: 2 }}>
      {/* أزرار الإضافة */}
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        <Button
          onClick={() => addField(FIELD_TYPES.TEXT, "نص كتابي")}
          variant="contained"
          color="success"
        >
          نص كتابي
        </Button>
        <Button
          onClick={() => addField(FIELD_TYPES.NUMBER, "رقم")}
          variant="contained"
          color="success"
        >
          رقم
        </Button>
        <Button
          onClick={() => addField(FIELD_TYPES.DATE, "تاريخ")}
          variant="contained"
          color="success"
        >
          تاريخ
        </Button>
       
        <Button
          onClick={() => addField(FIELD_TYPES.CHECKBOX, "خانة اختيار")}
          variant="contained"
          color="success"
        >
          خانة اختيار
        </Button>
      </Box>

      {/* عرض الحقول */}
      <Box sx={{ mt: 3 }}>
        {elements.map((el, idx) => (
          <Box
            key={idx}
            sx={{
              mb: 2,
              p: 2,
              border: "1px solid #ccc",
              borderRadius: 2
            }}
          >
            {/* نص / رقم / تاريخ */}
            {(el.type === FIELD_TYPES.TEXT ||
              el.type === FIELD_TYPES.NUMBER ||
              el.type === FIELD_TYPES.DATE) && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <TextField
                  label="العنوان"
                  value={el.label}
                  onChange={(e) => handleLabelChange(idx, e.target.value)}
                  sx={{ width: "200px" }}
                />
                <TextField
                  fullWidth
                  placeholder={el.label}
                  value={el.value}
                  onChange={(e) => handleValueChange(idx, e.target.value)}
                />
              </Box>
            )}

            {/* اختيار متعدد */}
            {el.type === FIELD_TYPES.MULTI_CHOICE && (
              <Box>
                <TextField
                  label="العنوان"
                  value={el.label}
                  onChange={(e) => handleLabelChange(idx, e.target.value)}
                  sx={{ mb: 2 }}
                />
                {el.options.map((opt, optIdx) => (
                  <Box
                    key={optIdx}
                    sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}
                  >
                    <Typography>خيار {optIdx + 1}</Typography>
                    <TextField
                      value={opt}
                      onChange={(e) =>
                        handleOptionChange(idx, optIdx, e.target.value)
                      }
                      fullWidth
                    />
                  </Box>
                ))}
                <IconButton onClick={() => addOption(idx)} color="primary">
                  <Add />
                </IconButton>
              </Box>
            )}

            {/* خانة اختيار */}
            {el.type === FIELD_TYPES.CHECKBOX && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <TextField
                  label="العنوان"
                  value={el.label}
                  onChange={(e) => handleLabelChange(idx, e.target.value)}
                  sx={{ width: "200px" }}
                />
                <Typography>✅ خانة اختيار</Typography>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
