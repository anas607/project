import { useEffect, useState } from "react";
import { Box, Avatar, Typography, List, ListItem, Container } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { getData } from "../../../../API/apiService";
import { BaseUrl, showEmployees } from "../../../../API/api";
import { useSelector } from "react-redux";
import NOEMPLOYEE from "../../../../wrong/search/noEmployyesearch";
import SearchingEmployees from "../../../../wrong/loading/searchEmployees";

export default function SmallBoxes({ searchTerm }) {
  const state = useSelector((state) => state.user);
  const isSub_Admin = state.roles?.[0]?.includes("نائب المدير");

  const [localEmployees, setLocalEmployees] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(true); // للبيانات
  const [searchLoading, setSearchLoading] = useState(false); // للبحث
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      try {
        let endpoint = isSub_Admin
          ? "show/employees/and/managers"
          : showEmployees;

        const response = await getData(`${BaseUrl}${endpoint}`);
        if (isSub_Admin) {
          setLocalEmployees(response);
          setFilteredEmployees(response);
        } else {
          setEmployee(response.data);
          setFilteredEmployees(response.data);
        }
      } catch (error) {
        console.error("فشل في جلب الموظفين:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [isSub_Admin]);

  const employeesToDisplay = isSub_Admin ? localEmployees : employee;

  // عند البحث: تفعيل لودر مؤقت
  useEffect(() => {
    if (!searchTerm) {
      setFilteredEmployees(employeesToDisplay);
      setSearchLoading(false);
      return;
    }

    setSearchLoading(true);

    const timer = setTimeout(() => {
      const filtered = employeesToDisplay.filter(emp =>
        emp.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEmployees(filtered);
      setSearchLoading(false);
    }, 300); // تأخير بسيط لمحاكاة البحث

    return () => clearTimeout(timer);
  }, [searchTerm, employeesToDisplay]);

  return (
    <Box
      sx={{
        width: "600px",
        height: "987px",
        flexShrink: 0,
        backgroundColor: "rgb(250,250,250)",
        borderRadius: "2%",
        mt: 3,
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

        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80%",
            }}
          >
            <SearchingEmployees term="تحميل البيانات..." />
          </Box>
        ) : searchLoading ? (
          <SearchingEmployees term={searchTerm} />
        ) : filteredEmployees.length > 0 ? (
          <List
            sx={{
              width: "100%",
              maxHeight: "calc(100% - 120px)",
              overflowY: "auto",
            }}
          >
            {filteredEmployees.map((emp, index) => (
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
                  sx={{ width: 64, height: 64, fontWeight: "900", fontSize: "22px", mr: 2 }}
                  src={emp.avatar}
                />
                <Box sx={{ flexGrow: 1, textAlign: "right", pr: 1 }}>
                  <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>{emp.name}</Typography>
                  <Typography sx={{ fontSize: "12px", fontWeight: "700", color: "gray" }}>
                    {isSub_Admin ? emp.role : emp.phone}
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
                  {emp.handled_transactions ?? "-"}
                </Box>
              </ListItem>
            ))}
          </List>
        ) : (
          <NOEMPLOYEE />
        )}
      </Container>
    </Box>
  );
}
