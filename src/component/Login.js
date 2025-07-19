//=======mui=======//
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { useState } from "react";
import axios from "axios";
import { BaseUrl, LOGIN } from "../API/api";
import LoadingOverlay from "../wrong/auth/loding";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../wrong/auth/alert";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../reducer/user";
import Cookies from "universal-cookie";
import { postData } from "../API/apiService";
export default function Login() {
  const state_user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false);
const togglePasswordVisibility = () => {
  setShowPassword((prev) => !prev);
};
  const [form, setForm] = useState({
    name: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(form);
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("password", form.password);

    try {
      const response = await postData(`${BaseUrl}${LOGIN}`, formData);

      const token = response.data?.access_token;

      if (response.success) {
        dispatch(
          setUserData({
            user: response.data.user,
            roles: response.data.roles,
          })
        );

        const cookies = new Cookies();
        cookies.set("access_token", token, {
          path: "/",
          maxAge: 86400,
        });

        navigate("/dachbord");
      } else {
        setError("بيانات الدخول غير صحيحة");
        setOpenAlert(true);
        setTimeout(() => {
          setOpenAlert(false);
          setError("");
        }, 2000);
      }
    } catch (error) {
      setError(error.message || "حدث خطأ أثناء تسجيل الدخول");
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
        setError("");
      }, 2000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <LoadingOverlay open={loading} />

      <Box sx={{ display: "flex", height: "100vh" ,overflow:'hidden' }}>
        {/* قسم الصورة */}
        <Box
          sx={{
            flex: 3,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
          }}
        >
          <img src="hello.png" style={{ width: "100%", height: "100%" }} />
        </Box>
        <ErrorAlert
          open={openAlert}
          message={error}
          onClose={() => setOpenAlert(false)}
        />

        {/* قسم الكارد */}
        <Card
          sx={{
            width: "23%",height:'100%',
            px: 3,
            pt: 4,
            pb: 4,
            backgroundColor: (theme) => theme.palette.primary.main,
            boxShadow: "-10px 0px 30px rgb(70, 80, 72)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <CardContent>
              <img
                src="logo.png"
                style={{
                  width: "170px",
                  height: "170px",
                  marginTop: "5%",
                  filter: "brightness(0) invert(1)",
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  color: (theme) => theme.palette.secondary.main,
                  mt: "10%",mb:"2",fontSize:'36px',fontWeight:'700'
                }}
              >
                تسجيل الدخول
              </Typography>

              <Typography
                variant="h6"
                sx={{ mt: 2,color: (theme) => theme.palette.secondary.main }}
              >
                مرحبا بعودتك
              </Typography>

              <Box sx={{ pr: 2, width: "100%" }}>
                <TextField
  name="name"
  value={form.name}
  onChange={handleChange}
  label="اسم المستخدم"
  type="text"
  dir="rtl"
 
  variant="outlined"
  sx={{
    width: "100%",
    borderRadius: "8px",
    backgroundColor: (theme) => theme.palette.secondary.main,
    mb: 2,
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      height: "60px",
      boxShadow: "4px 3px 4px rgba(0, 0, 0, 0.3)",
      paddingRight: "8px",
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
        boxShadow: "0 0 6px rgba(0,0,0,0.3)",
      },
    },
  }}
/>


               <TextField
  name="password"
  value={form.password}
  onChange={handleChange}
  label="كلمة المرور"
  type={showPassword ? "text" : "password"}
  dir="rtl"
  
  variant="outlined"
  sx={{
    width: "100%",
    borderRadius: "8px",
    backgroundColor: (theme) => theme.palette.secondary.main,
    mb: 2,
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      height: "60px",
      boxShadow: "4px 3px 4px rgba(0, 0, 0, 0.3)",
      paddingRight: "8px", // يعطي مسافة صغيرة بين النص والأيقونة
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
        boxShadow: "0 0 6px rgba(0,0,0,0.3)",
      },
    },"& label.MuiInputLabel-root": {
  right: 16,
  left: "auto",
  textAlign: "right",
  
},

  }}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          onClick={togglePasswordVisibility}
          edge="end"
          size="small"
          sx={{
            padding: "4px",
            color: "rgba(0, 0, 0, 0.6)",
          }}
        >
          {showPassword ? (
            <VisibilityOff fontSize="small" />
          ) : (
            <Visibility fontSize="small" />
          )}
        </IconButton>
      </InputAdornment>
    ),
  }}
/>

              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: "23px",
                  backgroundColor: (theme) => theme.palette.secondary.main,
                  color: (theme) => theme.palette.primary.main,
                  fontSize: "20px",fontWeight:'700',
                  mt: "25%",
                  width: "55%",
                  mb: 2,
                  direction: "rtl",
                  textTransform: "none",
                }}
              >
                تسجيل الدخول
              </Button>
            </CardContent>
          </form>
        </Card>
      </Box>
    </>
  );
}
