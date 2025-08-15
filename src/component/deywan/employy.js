import Button from "@mui/material/Button";
import { Typography, Grid, Paper, Avatar, Box, Modal } from "@mui/material";
import SidBar from "./dachboard/SIDEBAR/sidbar";
import SatelliteIcon from "@mui/icons-material/Satellite";
import Appar from "./dachboard/SIDEBAR/appar";
import { useEffect, useState, useCallback } from "react";
import AddIcon from "@mui/icons-material/Add";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useDispatch, useSelector } from "react-redux";
import { postData, getData } from "../../API/apiService";
import { BaseUrl, registerEmployee, showEmployees } from "../../API/api";
import { setEmployees } from "../../reducer/employees";
import {
  resetEmployeeForm,
  updateEmployeeField,
} from "../../reducer/employeeRegister";

export default function Employee() {
  const dispatch = useDispatch();

  const employees = useSelector((state) => state.employees.data) || [];
  const employee = useSelector((state) => state.employeeRegister);

  const [avatarFile, setAvatarFile] = useState(null);
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [showEditEmployee, setShowEditEmployee] = useState(false);
  const [selectedEditEmployee, setSelectedEditEmployee] = useState(null);
  const [loadingList, setLoadingList] = useState(false);
  const [listError, setListError] = useState("");

  const fetchEmployees = useCallback(async () => {
    try {
      setLoadingList(true);
      setListError("");
      const res = await getData(`${BaseUrl}${showEmployees}`);
      const normalized = Array.isArray(res.data)
        ? res.data.map((e) => ({ ...e, is_acitve: Number(e.is_acitve) }))
        : [];
      dispatch(setEmployees(normalized));
    } catch (e) {
      console.error("فشل في جلب الموظفين:", e);
      setListError(
        e?.response?.data?.message || e?.message || "فشل في جلب الموظفين"
      );
    } finally {
      setLoadingList(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  function handleAddEmployee() {
    setShowAddEmployee(true);
    setSelectedEditEmployee(null);
  }

  function handleEditEmployee(item) {
    setSelectedEditEmployee(item);
    setShowEditEmployee(true);
  }

  const handleSubmit = async () => {
    if (
      !employee.name ||
      !employee.email ||
      !employee.password ||
      !employee.phone ||
      !employee.address
    ) {
      alert("الرجاء تعبئة جميع الحقول المطلوبة.");
      return;
    }

    const formData = new FormData();
    formData.append("name", employee.name);
    formData.append("email", employee.email);
    formData.append("password", employee.password);
    formData.append("phone", employee.phone);
    formData.append("address", employee.address);
    if (avatarFile) formData.append("avatar", avatarFile);

    try {
      const response = await postData(
        `${BaseUrl}${registerEmployee}`,
        formData,
        {},
        true
      );

      dispatch(resetEmployeeForm());
      setAvatarFile(null);
      setShowAddEmployee(false);

      await fetchEmployees();

      console.log("تم التسجيل بنجاح:", response);
    } catch (error) {
      if (error?.response?.status === 422) {
        console.error("أخطاء التحقق:", error?.response?.data?.errors);
        alert(error?.response?.data?.message || "تحقق من الحقول المطلوبة.");
      } else {
        console.error("فشل في التسجيل:", error);
        alert(error?.response?.data?.message || "فشل في التسجيل.");
      }
    }
  };

  return (
    <>
      <Box sx={{ direction: "rtl", height: "100vh", display: "flex" }}>
        <SidBar />
        <Box
          sx={{
            flexGrow: 1,
            p: "2%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgb(233,232,232)",
          }}
        >
          <Appar />

          <Box
            sx={{
              backgroundColor: "rgb(233,232,232)",
              p: 2,
              borderRadius: 5,
              maxWidth: "3000px",
              width: "1600px",
              alignSelf: "rtl",
            }}
          >
            <Grid container spacing={2}>
              {/* زر إضافة موظف */}
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  onClick={handleAddEmployee}
                  variant="outlined"
                  fullWidth
                  sx={{
                    height: 200,
                    width: "290px",
                    border: "4px dashed rgb(14,74,35)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    borderRadius: "5%",
                  }}
                >
                  <Box
                    position="relative"
                    display="inline-flex"
                    width={40}
                    height={40}
                  >
                    <AccountBoxIcon sx={{ fontSize: "32px" }} />
                    <AddIcon
                      sx={{
                        position: "absolute",
                        bottom: -3,
                        right: -5,
                        fontSize: 19,
                        color: "white",
                        backgroundColor: "rgb(14, 74, 35)",
                        borderRadius: "50%",
                        border: "3px solid rgb(209, 218, 213)",
                      }}
                    />
                  </Box>
                  <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                    إضافة موظف
                  </Typography>
                </Button>
              </Grid>

              {/* أخطاء أو تحميل القائمة */}
              {listError && (
                <Grid item xs={12}>
                  <Typography sx={{ color: "red", fontWeight: "700" }}>
                    ⚠️ {listError}
                  </Typography>
                </Grid>
              )}
              {loadingList && (
                <Grid item xs={12}>
                  <Typography sx={{ fontWeight: "700" }}>
                    جاري التحميل...
                  </Typography>
                </Grid>
              )}

              {/* بطاقات الموظفين */}
              {!loadingList &&
                employees.map((emp) => (
                  <Grid item xs={12} sm={6} md={3} key={emp.id}>
                    <Paper
                      elevation={3}
                      sx={{
                        height: 178,
                        width: "270px",
                        p: 2,
                        backgroundColor: "rgba(255, 255, 255, 0.02)",
                        border:
                          Number(emp.is_acitve) === 1
                            ? "3px solid rgb(1, 53, 19)"
                            : Number(emp.is_acitve) === 0
                            ? "3px solid rgba(139, 2, 2, 1)"
                            : "gray",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        borderRadius: "5%",
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 64,
                          height: 64,
                          position: "absolute",
                          top: 17,
                          left: 8,
                        }}
                        src={emp.avatar}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color:
                              Number(emp.is_acitve) === 1
                                ? "rgb(14, 74, 35)"
                                : "rgba(139, 2, 2, 1)",
                            fontSize: "14px",
                            fontWeight: "700",
                            mt: 1,
                          }}
                        >
                          {emp.name}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color:
                              Number(emp.is_acitve) === 1
                                ? "rgb(14, 74, 35)"
                                : "rgba(139, 2, 2, 1)",
                            fontSize: "14px",
                            fontWeight: "700",
                            mt: 1,
                          }}
                        >
                          {emp.phone}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: "700",
                            mt: 1,
                            color:
                              Number(emp.is_acitve) === 1
                                ? "rgb(14, 74, 35)"
                                : "rgba(139, 2, 2, 1)",
                          }}
                          variant="body2"
                        >
                          {emp.home}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color:
                              Number(emp.is_acitve) === 1
                                ? "rgb(14, 74, 35)"
                                : "rgba(139, 2, 2, 1)",
                            fontWeight: 700,
                            fontSize: "14px",
                            mt: 1,
                          }}
                        >
                          {Number(emp.is_acitve) === 1 ? "مفعّل" : "غير مفعّل"}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          onClick={() => handleEditEmployee(emp)}
                          variant="contained"
                          sx={{
                            borderRadius: "15px",
                            fontSize: "12px",
                            fontWeight: "700",
                            backgroundColor: "rgba(255, 255, 255, 0.02)",
                            border:
                              Number(emp.is_acitve) === 1
                                ? "3px solid rgb(1, 53, 19)"
                                : "3px solid rgba(139, 2, 2, 1)",
                            color:
                              Number(emp.is_acitve) === 1
                                ? "rgb(14, 74, 35)"
                                : "rgba(139, 2, 2, 1)",
                            textTransform: "none",
                            width: "35%",
                            height: "34px",
                            px: 2,
                            py: 0.5,
                          }}
                        >
                          تعديل
                        </Button>
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "15px",
                            backgroundColor: "rgba(255, 255, 255, 0.02)",
                            border:
                              Number(emp.is_acitve) === 1
                                ? "3px solid rgb(1, 53, 19)"
                                : "3px solid rgba(139, 2, 2, 1)",
                            color:
                              Number(emp.is_acitve) === 1
                                ? "rgb(14, 74, 35)"
                                : "rgba(139, 2, 2, 1)",
                            textTransform: "none",
                            width: "35%",
                            height: "34px",
                            fontSize: "12px",
                            fontWeight: "700",
                            px: 2,
                            py: 0.5,
                          }}
                        >
                          {Number(emp.is_acitve) === 1
                            ? "إلغاء تفعيل"
                            : "تفعيل"}
                        </Button>
                      </Box>
                    </Paper>
                  </Grid>
                ))}

              {/* مودال إضافة موظف */}
              <Modal
                open={showAddEmployee}
                onClose={() => setShowAddEmployee(false)}
                aria-labelledby="add-employee-modal"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    width: "677px",
                    height: "765px",
                    p: 4,
                    borderRadius: 3,
                    direction: "rtl",
                    outline: "none",
                  }}
                >
                  <HighlightOffIcon
                    onClick={() => setShowAddEmployee(false)}
                    sx={{ mr: 80, fontSize: "30px", cursor: "pointer" }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "700",
                      color: "rgb(14,74,35)",
                      fontSize: "24px",
                    }}
                  >
                    إضافة موظف
                  </Typography>
                  <hr
                    style={{
                      height: "4px",
                      width: "70%",
                      background:
                        "linear-gradient(to left, rgb(14,74,35)20%, gray 80%)",
                      border: "none",
                      margin: "1rem 0",
                      borderRadius: "2px",
                      marginTop: "0",
                    }}
                  />

                  <Grid container spacing={2}>
                    {/* العمود الأيمن */}
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ mb: 3 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ mb: 1, fontSize: "24px", fontWeight: "700" }}
                        >
                          اسم الموظف
                        </Typography>
                        <input
                          type="text"
                          value={employee.name}
                          onChange={(e) =>
                            dispatch(
                              updateEmployeeField({
                                field: "name",
                                value: e.target.value,
                              })
                            )
                          }
                          style={{
                            width: "60%",
                            height: "30px",
                            padding: "8px",
                            border: "1px solid #ccc",
                          }}
                        />
                      </Box>

                      <Box sx={{ mb: 3 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ mb: 1, fontSize: "24px", fontWeight: "700" }}
                        >
                          البريد الإلكتروني
                        </Typography>
                        <input
                          type="email"
                          value={employee.email}
                          onChange={(e) =>
                            dispatch(
                              updateEmployeeField({
                                field: "email",
                                value: e.target.value,
                              })
                            )
                          }
                          style={{
                            width: "60%",
                            height: "30px",
                            padding: "8px",
                            border: "1px solid #ccc",
                          }}
                        />
                      </Box>

                      <Box sx={{ mb: 3 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ mb: 1, fontSize: "24px", fontWeight: "700" }}
                        >
                          صورة الموظف
                        </Typography>
                        <Box
                          sx={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Button
                            variant="outlined"
                            component="label"
                            sx={{
                              width: "65%",
                              justifyContent: "flex-start",
                              textTransform: "none",
                              padding: "8px",
                              borderRadius: "4px",
                              border: "1px solid #ccc",
                              color: "#333",
                              backgroundColor: "#fff",
                            }}
                          >
                            تحميل صورة
                            <input
                              type="file"
                              hidden
                              accept="image/*"
                              onChange={(e) =>
                                setAvatarFile(e.target.files?.[0] ?? null)
                              }
                            />
                            <SatelliteIcon sx={{ mr: 10, color: "gray" }} />
                          </Button>
                        </Box>
                      </Box>

                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ mb: 1, fontSize: "24px", fontWeight: "700" }}
                        >
                          كلمة السر
                        </Typography>
                        <input
                          type="password"
                          value={employee.password}
                          onChange={(e) =>
                            dispatch(
                              updateEmployeeField({
                                field: "password",
                                value: e.target.value,
                              })
                            )
                          }
                          style={{
                            width: "60%",
                            height: "30px",
                            padding: "8px",
                            border: "1px solid #ccc",
                          }}
                        />
                      </Box>
                    </Grid>

                    {/* العمود الأيسر */}
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ mb: 3, mr: -3 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ mb: 1, fontSize: "24px", fontWeight: "700" }}
                        >
                          رقم الجوال
                        </Typography>
                        <input
                          type="text"
                          value={employee.phone}
                          onChange={(e) =>
                            dispatch(
                              updateEmployeeField({
                                field: "phone",
                                value: e.target.value,
                              })
                            )
                          }
                          style={{
                            width: "60%",
                            height: "30px",
                            padding: "8px",
                            border: "1px solid #ccc",
                          }}
                        />
                      </Box>

                      <Box sx={{ mb: 3, mr: -3 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ mb: 1, fontSize: "24px", fontWeight: "700" }}
                        >
                          العنوان
                        </Typography>
                        <input
                          type="text"
                          value={employee.address}
                          onChange={(e) =>
                            dispatch(
                              updateEmployeeField({
                                field: "address",
                                value: e.target.value,
                              })
                            )
                          }
                          style={{
                            width: "60%",
                            height: "30px",
                            padding: "8px",
                            border: "1px solid #ccc",
                          }}
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  <Box sx={{ mt: 20, mr: 62, width: "70%" }}>
                    <Button
                      variant="contained"
                      onClick={handleSubmit}
                      sx={{
                        borderRadius: "20px",
                        width: "40%",
                        backgroundColor: "rgb(14,74,35)",
                        color: "white",
                        fontSize: "24px",
                        fontWeight: "700",
                        textTransform: "none",
                        "&:hover": { backgroundColor: "rgb(10,60,28)" },
                      }}
                    >
                      إضافة
                    </Button>
                  </Box>
                </Paper>
              </Modal>

              {/* مودال تعديل (واجهة فقط – اربطها لاحقاً إذا رغبت) */}
              <Modal
                open={showEditEmployee}
                onClose={() => setShowEditEmployee(false)}
                aria-labelledby="edit-employee-modal"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    width: "677px",
                    height: "765px",
                    p: 4,
                    borderRadius: 3,
                    direction: "rtl",
                    outline: "none",
                  }}
                >
                  <HighlightOffIcon
                    onClick={() => setShowEditEmployee(false)}
                    sx={{ mr: 80, mt: -1, cursor: "pointer", fontSize: "30px" }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "rgb(14,74,35)",
                    }}
                  >
                    تعديل بيانات موظف
                  </Typography>
                  <hr
                    style={{
                      height: "4px",
                      width: "70%",
                      background:
                        "linear-gradient(to left, rgb(14,74,35)20%, gray 80%)",
                      border: "none",
                      borderRadius: "2px",
                      marginLeft: "30%",
                      marginTop: "0",
                    }}
                  />
                  {/*… بإمكانك لاحقاً ربط النموذج بقيم selectedEditEmployee …*/}
                  <Box sx={{ mt: 34, mr: 62, width: "70%" }}>
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "20px",
                        width: "40%",
                        backgroundColor: "rgb(14,74,35)",
                        color: "white",
                        fontSize: "24px",
                        fontWeight: "700",
                        textTransform: "none",
                      }}
                    >
                      تأكيد
                    </Button>
                  </Box>
                </Paper>
              </Modal>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
