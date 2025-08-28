import SearchOffIcon from '@mui/icons-material/SearchOff'; // استيراد الأيقونة
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function NOEMPLOYEE(){
    return(
        <>
        <Box
  sx={{
    width: "100%",
    textAlign: "center",
    mt: 5,
    p: 3,
    borderRadius: 2,
    backgroundColor: "rgba(255, 235, 238, 0.6)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <SearchOffIcon sx={{ fontSize: 60, color: "error.main", mb: 2 }} />
  <Typography variant="h6" color="error" sx={{ mb: 1 }}>
    لا توجد نتائج مطابقة للبحث
  </Typography>
  <Typography variant="body1" color="textSecondary">
    حاول تعديل كلمات البحث أو التحقق من الإملاء.
  </Typography>
</Box>
        </>
    )
}
// داخل JSX

