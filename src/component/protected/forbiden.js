
import { Box, Typography, Button} from "@mui/material";
import { Navigate, NavLink } from "react-router-dom";
export default function FORBIDDIN(){
    return(
        <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#ddeafe",
        padding: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0 0 6px #bbbbbb",
          width: { xs: "90%", sm: "500px" },
          padding: 3,
          textAlign: "center",
          borderRadius: 1,
        }}
      >
        <img
          src="https://i.pinimg.com/736x/8a/f9/10/8af910f93406671e0b8d5a3c7d5413ab.jpg"
          alt="Error 403"
          style={{ maxWidth: "100%", height: "auto", marginBottom: 16 }}
        />
        <Typography variant="h5" gutterBottom sx={{ letterSpacing: 1.5 }}>
نحن آسفون...        </Typography>
        <Typography
          variant="body1"
          sx={{ letterSpacing: 0.5, lineHeight: 1.5, mb: 3 }}
        >
          الصفحة التي تحاول الوصول إليها لديها وصول مقيد. يرجى الرجوع إلى مسؤول النظام الخاص بك.
        </Typography>
       <NavLink to="/dachbord">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgb(41,222,197)",
            boxShadow: "0px 1px 2px #bbbbbb",
            textTransform: "capitalize",width:"50%",
            ":hover": { backgroundColor: "#27486c", cursor: "pointer" },fontSize:"24px",fontWeight:'700'
          }}
        >
          العودة 
        </Button>
        </NavLink>
      </Box>
    </Box>
    )
}