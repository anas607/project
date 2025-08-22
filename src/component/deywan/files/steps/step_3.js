import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FIELD_TYPES, setElements } from "../../../../reducer/files/manual";

export default function Step_3() {
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.step.elements);

  const addCustomField = (type) => {
    const label = prompt(`ادخل اسم ${type === FIELD_TYPES.IMAGE ? "الصورة" : "الملف"}`);
    if (label) {
      dispatch(setElements([...elements, { label, type }]));
    }
  };

  return (
    <Box sx={{ mt: 1 }}>
      <Button
        onClick={() => addCustomField(FIELD_TYPES.IMAGE)}
        sx={{ background: "rgb(14,74,35)", color: "white", m: 1 }}
      >
        إضافة شرط: صورة
      </Button>
      <Button
        onClick={() => addCustomField(FIELD_TYPES.EXCEL)}
        sx={{ background: "rgb(14,74,35)", color: "white", m: 1 }}
      >
        إضافة شرط: Excel
      </Button>
    </Box>
  );
}
