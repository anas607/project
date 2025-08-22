import { Box, Typography, TextField, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { FIELD_TYPES } from "../../../../reducer/files/manual";

export default function Step_4() {
  const { transactionName, elements } = useSelector((state) => state.step);

  const renderField = (el, index) => {
    switch (el.type) {
      case FIELD_TYPES.TEXT:
      case FIELD_TYPES.NUMBER:
      case FIELD_TYPES.DATE:
        return (
          <Grid item xs={12} sm={6} key={index}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography sx={{ minWidth: "120px", fontWeight: 600 }}>
                {el.label}
              </Typography>
              <TextField
                fullWidth
                placeholder={el.label}
                variant="standard"
                InputProps={{ disableUnderline: true }}
                sx={{
                  borderBottom: "2px dashed #444",
                }}
              />
            </Box>
          </Grid>
        );
      default:
        return null;
    }
  };

  const attachments = elements.filter(
    (el) => el.type === FIELD_TYPES.IMAGE || el.type === FIELD_TYPES.EXCEL
  );

  return (
    <Box sx={{ mt: 3 }}>
      {/* عنوان المعاملة */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "rgb(14,74,35)", mb: 3 }}
      >
        اسم المعاملة: {transactionName || "—"}
      </Typography>

      {/* الحقول النصية */}
      <Grid container spacing={3}>
        {elements.map((el, idx) => renderField(el, idx))}
      </Grid>

      {/* المرفقات */}
      {attachments.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "rgb(14,74,35)", mb: 2 }}
          >
            المرفقات
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {attachments.map((att, idx) => (
              <Box
                key={idx}
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  background: "#fff",
                  px: 2,
                  py: 1,
                  minWidth: "120px",
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                {att.label}
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
