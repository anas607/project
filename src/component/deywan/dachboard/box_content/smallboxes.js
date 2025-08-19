import { useEffect, useState } from "react";
import { Box, Avatar, Typography, List, ListItem, Container } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { getData } from "../../../../API/apiService";
import { BaseUrl, showEmployees } from "../../../../API/api";
import { useSelector } from "react-redux";

export default function SmallBoxes() {
  const state = useSelector((state) => state.user);
  const isSub_Admin = state.roles?.[0]?.includes("نائب المدير");

  const [localEmployees, setLocalEmployees] = useState([]);
const [employee,setEmployee] =useState([]) 

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        let endpoint = isSub_Admin
          ? "show/employees/and/managers"
          : showEmployees;

        const response = await getData(`${BaseUrl}${endpoint}`);
        if (isSub_Admin) {
          console.log(response)
          setLocalEmployees(response );
        } else{
           setEmployee(response.data)
        }
        // لو مش Sub_Admin، البيانات مخزنة في Redux بواسطة مكان آخر
      } catch (error) {
        console.error("فشل في جلب الموظفين:", error);
      }
    };

    fetchEmployees();
  }, [isSub_Admin]);

  // نستخدم الموظفين المناسبين حسب الحالة
  const employeesToDisplay = isSub_Admin ? localEmployees : employee;

  return (
    <Box
      sx={{
        width: "400px",
        height: "977px",
        flexShrink: 0,
        backgroundColor: "rgb(250,250,250)",
        borderRadius: "2%",   mt:3,
    overflowY: "auto",  
      }}
    >
      <Container maxWidth="bg">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ marginTop: "7%", padding: "0 5%", gap: 16 }}
        >
          <Typography sx={{ fontSize: "24px", mr: -2, fontWeight: "700" }} variant="h5">
            الموظفين
          </Typography>
          <FilterListIcon sx={{ fontSize: "24px" }} />
        </Box>

        <List sx={{ width: "100%" ,    maxHeight: "calc(100% - 120px)", // خصم مساحة العنوان والفلاتر
    overflowY: "auto",  }}>
          {employeesToDisplay.map((emp, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                px: 0,
                borderBottom: "1px solid #e0e0e0",
                py: 1.5,
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

              <Box sx={{ flexGrow: 1, textAlign: "right", pr: 1 }}>
                <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                  {emp.name}
                </Typography>

                {isSub_Admin ? (
                  <>
                    <Typography sx={{ fontSize: "12px", fontWeight: "700", color: "gray" }}>
                      {emp.role}
                    </Typography>
                    
                  </>
                ) : (
                  <Typography sx={{ fontSize: "12px", fontWeight: "700", color: "gray" }}>
                    {emp.phone}
                  </Typography>
                )}
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
{                emp.handled_transactions ?? "-"    }         </Box>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
}
