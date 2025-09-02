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
 sx={{
      backgroundColor: "rgb(14,75,34)",
      color: "white",
      borderRadius: 5,
      fontWeight: 700,width:'30%',fontSize:'24px',
      "&:hover": { backgroundColor: "rgb(14,75,34)" },
    }}>
  إضافة : صورة
</Button>
<Button
  onClick={() => addCustomField(FIELD_TYPES.EXCEL)}
 sx={{
      backgroundColor: "rgb(14,75,34)",
      color: "white",
      borderRadius: 5,
      fontWeight: 700,width:'30%',fontSize:'24px',
      "&:hover": { backgroundColor: "rgb(14,75,34)" },
    }}>
  إضافة : Excel
</Button>

    </Box>
  );
}
