import FilterListIcon from "@mui/icons-material/FilterList";
import { getData } from "../../../../API/apiService";
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Container from "@mui/material/Container";
import { BaseUrl, showEmployees } from "../../../../API/api";
////المخططات الخطيرة

// EmployeePage.js (مثال)

import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "../../../../reducer/employees";
import Cookies from "universal-cookie";

export default function SmallBoxes() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.data);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        // const token = cookies.get("access_token");

        // const config = {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // };

        const response = await getData(`${BaseUrl}${showEmployees}`);

        dispatch(setEmployees(response.data));
      } catch (error) {
        console.error("فشل في جلب الموظفين:", error);
      }
    };

    fetchEmployees();
  }, [dispatch]);

  // const employees = [
  //   { id: 9, name: 'سعاد حسن', phone: '+963975302812', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  //   { id: 41, name: 'سعاد حسن', phone: '+963975302812', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  //   { id: 65, name: 'سعاد حسن', phone: '+963975302812', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
  //   { id: 8, name: 'سعاد حسن', phone: '+963975302812', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
  // ];
  return (
    <>
      <Box
        sx={{
          width: "400px",
          height: "927",
          flexShrink: 0,
          backgroundColor: "rgb(250,250,250)",
          borderRadius: "2%",
        }}
      >
        <Container maxWidth="bg">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ marginTop: "7%", padding: "0 5%", gap: 16 }}
          >
            <Typography
              sx={{ fontSize: "24px", mr: -2, fontWeight: "700" }}
              variant="h5"
            >
              الموظفين
            </Typography>
            <FilterListIcon sx={{ fontSize: "24px" }} />
          </Box>
          <List sx={{ width: "100%" }}>
            {employees.map((emp, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  px: 0,
                  borderBottom: "1px solid #e0e0e0", // الخط الرمادي
                  py: 1.5, // مسافة رأسية
                }}
              >
                <Avatar
                  sx={{
                    width: 64,
                    height: 64,
                    color: "black",
                    fontWeight: "900",
                    fontSize: "22px",
                    borderBottom: "3px solid transparent",
                    mr: 2,
                  }}
                  src={emp.avatar}
                />

                {/* الاسم ورقم الهاتف */}
                <Box sx={{ flexGrow: 1, textAlign: "right", pr: 1 }}>
                  <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                    {emp.name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "12px", fontWeight: "700", color: "gray" }}
                  >
                    {emp.phone}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    backgroundColor: "red",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "10px",
                    fontWeight: "600",
                  }}
                >
                  {emp.id}
                </Box>

                {/* صورة الموظف */}
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>
    </>
  );
}
