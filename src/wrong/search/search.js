import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchOffIcon from "@mui/icons-material/SearchOff";

export default function NOSERACH() {
  return (
    <Box
      className="background-notFound"
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "linear-gradient(blue -500%, white 99%)",
        overflow: "hidden",
      }}
    >
      {/* الشخص */}
      <Box className="person" sx={{ position: "absolute", left: "65%", top: "28%" }}>
        <img
          src="https://res.cloudinary.com/dfzndr9en/image/upload/v1623709059/IE%20MIGUEL%20GRAU/Sitting_pownds.svg"
          alt="person"
        />
      </Box>

      {/* الصندوق */}
      <Box
        className="box-notFound"
        sx={{ position: "absolute", top: 160, left: 440, textAlign: "center" }}
      >
        <Typography
          className="head-notFound"
          sx={{ color: "#FF7A00", fontSize: "35px", fontWeight: "bold" }}
        >
          لم يتم العثور على نتائج
        </Typography>

        <Typography
          className="body-notFound"
          sx={{ color: "#054d21ff", fontSize: "60px", fontWeight: "bold", mt: 2 }}
        >
        جرّب كتابة اسم آخر أو التأكد من صحة الإدخال
        </Typography>

        <SearchOffIcon           sx={{ color: "#FF7A00", fontSize: "550px", fontWeight: "bold", mt: 2 }}
/>
    
      </Box>

      {/* الشجر */}
      <Box className="bush" sx={{ position: "absolute", right: "70%", top: "3%" }}>
        <img
          src="https://res.cloudinary.com/dfzndr9en/image/upload/v1623709040/IE%20MIGUEL%20GRAU/Plant_Left_ynfvjt.svg"
          alt="bush"
        />
      </Box>
    </Box>
  );
}
