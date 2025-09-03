//=======mui=======//
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useTheme, useMediaQuery } from '@mui/material';

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
import { requestForToken } from "./notifay/forToken";
export default function Login() {
  const theme=useTheme()
   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  const state_user = useSelector((state) => state.user);
    const Role_user = useSelector((state) => state.user.roles);


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
  //console.log(form);
  
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
 async function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);

  try {
    const fcmToken = await requestForToken();
    
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("password", form.password);
    // إذا حاب ترسل device token
    formData.append("device_token", fcmToken || "");
console.log("device_token", fcmToken)
    // إرسال الطلب
    const response = await postData(`${BaseUrl}${LOGIN}`, formData);

    if (response.success) {
      // تحديث بيانات المستخدم في Redux
      dispatch(setUserData({
        user: response.data.user,
        roles: response.data.roles,
      }));

      // تحديد مسار التنقل بناءً على الأدوار
      const userRoles = response.data.roles || [];
      const employeeRoles = [
        "موظف الديوان","موظف الإقامة","موظف المجالس","موظف المالية",
        "موظف المفاضلة","موظف الشهادات","موظف الامتحانات"
      ];
      const managerRoles = [
        "رئيس الديوان","رئيس الإقامة","رئيس المجالس","رئيس المالية",
        "رئيس المفاضلة","رئيس الشهادات","رئيس الامتحانات",
        "المدير","نائب المدير"
      ];

      if (userRoles.some(role => managerRoles.includes(role))) {
        navigate("/dachbord");
      } else if (userRoles.some(role => employeeRoles.includes(role))) {
        navigate("/enter_emdewan");
      }

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

      <Box sx={{ display: "flex", height: "100vh", overflow: "hidden",

                flexDirection: { xs: "column", md: "row" }

       }}>
        {/* قسم الصورة */}
        <Box
          sx={{
            flex: 3,            display: { xs: "none", md: "block" }

            // backgroundSize: "cover",
            // backgroundPosition: "center",
          }}
        >
          <img src="hello.png" style={{ width: "100%", height: "100%",              objectFit: "cover"
 }} />
        </Box>
        <ErrorAlert
          open={openAlert}
          message={error}
          onClose={() => setOpenAlert(false)}
        />

        {/* قسم الكارد */}
        <Card
         sx={{
            width: { 
              xs: "100%", 
              sm: "70%", 
              md: "40%", 
              lg: "23%" 
            },
            height: { xs: "100%", md: "100%" },
            px: { xs: 2, sm: 3, md: 3 },
            pt: { xs: 2, sm: 3, md: 4 },
            pb: { xs: 2, sm: 3, md: 4 }
            ,
            backgroundColor: (theme) => theme.palette.primary.main,
 boxShadow: { 
              xs: "none", 
              md: "-10px 0px 30px rgb(70, 80, 72)" 
            },
            borderRadius: { xs: 0, md: "initial" },
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", md: "flex-start" },
            margin: { xs: "0 auto", md: "0" }          }}
        >
          <form onSubmit={handleSubmit}>
            <CardContent>
              <img
                src="logo.png"
                 style={{
                  width: isMobile ? "120px" : "180px",
                  height: isMobile ? "100px" : "160px",
                  marginTop: isMobile ? "5%" : "15%",
                  filter: "brightness(0) invert(1)",
                }}
              
              />
              <Typography
                variant="h1"
                sx={{
                  color: (theme) => theme.palette.secondary.main,
                 mt: isMobile ? "5%" : "10%",
                  mb: "2",
                  fontSize: { 
                    xs: "28px", 
                    sm: "32px", 
                    md: "40px" 
                  },
                 
                  fontWeight: "700",
                }}
              >
                تسجيل الدخول
              </Typography>

              <Typography
                variant="h5"
                 sx={{ 
                  mt: isMobile ? 3 : 5, 
                  mb: isMobile ? 8 : 14,  color: (theme) => theme.palette.secondary.main }}
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
                    width: { 
                      xs: "100%", 
                      sm: "90%", 
                      md: "90%" 
                    },
                    borderRadius: "10px",
                    backgroundColor: (theme) => theme.palette.secondary.main,
                    mb: 4,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      height: { xs: "55px", sm: "60px", md: "70px" },
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
width: { 
                      xs: "100%", 
                      sm: "90%", 
                      md: "90%" 
                    },                    borderRadius: "10px",
                    backgroundColor: (theme) => theme.palette.secondary.main,
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      height: { xs: "55px", sm: "60px", md: "70px" },
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
                    },
                    "& label.MuiInputLabel-root": {
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
  sx={{
    borderRadius: "23px",
    backgroundColor: (theme) => theme.palette.secondary.main,
    color: (theme) => theme.palette.primary.main,
    fontSize: { xs: "18px", sm: "20px", md: "24px" },
    fontWeight: "700",
    mt: { xs: "15%", sm: "20%", md: "25%" },
    width: { xs: "50%", sm: "40%", md: "35%" },
    mb: 2,
    textTransform: "none",
    // إضافة تأثيرات تفاعلية
    '&:hover': {
      backgroundColor: (theme) => theme.palette.secondary.dark,
      transform: "translateY(-2px)",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    },
    '&:active': {
      transform: "translateY(0)",
    },
    // تأكد من أن الزر يمكن النقر عليه
    position: "relative",
    zIndex: 1,
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

