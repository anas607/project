import { useSelector } from "react-redux";
import { Box, Typography, Checkbox, Button } from "@mui/material";
import NoteIcon from "@mui/icons-material/Note";
import { postData } from "../../../../API/apiService";
import { addFormManual, BaseUrl } from "../../../../API/api";
export default function Step_4() {
  const { name, cost, path_ids, elements } = useSelector((state) => state.form);

  const handleSubmit = async () => {
    try {
      await postData(`${BaseUrl}`, `${addFormManual}`, {
        name,
        cost,
        path_ids,
        elements,
      });
      alert("تم إرسال المعاملة بنجاح");
    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء الإرسال");
    }
  };

  const renderField = (element, index) => {
    const { type, label, options } = element;

    if (type === 4 || type === 5) return null;

    return (
      <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Typography
          sx={{ minWidth: "120px", fontSize: "24px", fontWeight: 700 }}
        >
          {label}:
        </Typography>

        {type === 6 && options ? (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {options.map((opt, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox size="small" sx={{ color: "rgb(14,74,35)" }} />
                <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                  {opt}
                </Typography>
              </Box>
            ))}
          </Box>
        ) : (
          <Box
            sx={{
              borderBottom: "1px dashed gray",
              minWidth: "200px",
              minHeight: "28px",
              mx: 2,
            }}
          />
        )}
      </Box>
    );
  };

  const renderAttachments = () => {
    return elements
      .filter((el) => el.type === 4 || el.type === 5)
      .map((el, index) => (
        <Box
          key={index}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            flexDirection: "column",
            mr: 4,
            mt: 2,
          }}
        >
          <NoteIcon sx={{ fontSize: 50, color: "black", mb: 1 }} />
          <Typography
            sx={{ fontSize: "20px", fontWeight: "700", textAlign: "center" }}
          >
            {el.label}
          </Typography>
        </Box>
      ));
  };

  return (
    <Box sx={{ flex: 1, mt: 1 }}>
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          fontSize: "32px",
          fontWeight: "700",
          color: "black",
          mr: 13,
          pb: 1,
        }}
      >
        {name}
      </Typography>

      {/* الحقول */}
      {elements.map((el, i) => renderField(el, i))}

      {/* المرفقات */}
      {elements.some((el) => el.type === 4 || el.type === 5) && (
        <Box sx={{ mt: 4, mb: 6 }}>
          <Typography sx={{ fontSize: "20px", fontWeight: 700, mb: 1 }}>
            المرفقات:
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {renderAttachments()}
          </Box>
        </Box>
      )}

      {/* زر الإرسال */}
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="success"
        sx={{ mt: 2, fontSize: 18 }}
      >
        إرسال المعاملة
      </Button>
    </Box>
  );
}
