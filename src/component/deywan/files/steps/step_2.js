import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { FIELD_TYPES, setElements } from "../../../../reducer/files/manual";

export default function Step_2() {
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.step.elements);

  const addField = (type) => {
    let newField;
    switch (type) {
      case FIELD_TYPES.TEXT:
        newField = { type, label: "نص كتابي", value: "" };
        break;
      case FIELD_TYPES.NUMBER:
        newField = { type, label: "رقم", value: "" };
        break;
      case FIELD_TYPES.DATE:
        newField = { type, label: "تاريخ", value: "" };
        break;
      case FIELD_TYPES.MULTI_CHOICE:
        newField = { type, label: "اختيار متعدد", options: ["خيار 1"] };
        break;
      default:
        return;
    }
    dispatch(setElements([...elements, newField]));
  };

  const addOption = (index) => {
    const newElements = elements.map((el, i) => {
      if (i === index) {
        return { ...el, options: [...el.options, `خيار ${el.options.length + 1}`] };
      }
      return el;
    });
    dispatch(setElements(newElements));
  };

  return (
    <Box sx={{ mt: 2 }}>
      {/* أزرار الإضافة */}
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        <Button onClick={() => addField(FIELD_TYPES.TEXT)} variant="contained" color="success">
          نص كتابي
        </Button>
        <Button onClick={() => addField(FIELD_TYPES.NUMBER)} variant="contained" color="success">
          رقم
        </Button>
        <Button onClick={() => addField(FIELD_TYPES.DATE)} variant="contained" color="success">
          تاريخ
        </Button>
        <Button onClick={() => addField(FIELD_TYPES.MULTI_CHOICE)} variant="contained" color="success">
          اختيار متعدد
        </Button>
      </Box>

      {/* عرض الحقول */}
      <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
        {elements.map((el, idx) => (
          <Box
            key={idx}
            sx={{
              p: 2,
              border: "1px solid #ccc",
              borderRadius: 2,
            }}
          >
            {/* نص / رقم / تاريخ */}
            {(el.type === FIELD_TYPES.TEXT ||
              el.type === FIELD_TYPES.NUMBER ||
              el.type === FIELD_TYPES.DATE) && (
              <Box>
                <Typography sx={{ mb: 1, fontWeight: "bold" }}>{el.label}</Typography>
                <input type="text" placeholder={`أدخل ${el.label}`} style={{ width: "100%", padding: "8px" }} />
              </Box>
            )}

            {/* اختيار متعدد */}
            {el.type === FIELD_TYPES.MULTI_CHOICE && (
              <Box>
                <Typography sx={{ mb: 1, fontWeight: "bold" }}>{el.label}</Typography>
                {el.options.map((opt, i) => (
                  <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                    <input type="text" placeholder={opt} value={opt} readOnly style={{ flex: 1, padding: "6px" }} />
                    {i === el.options.length - 1 && (
                      <IconButton size="small" color="primary" onClick={() => addOption(idx)}>
                        <Add />
                      </IconButton>
                    )}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
