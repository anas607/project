import { useEffect, useState } from "react";
import { Box, Avatar, Typography, List, ListItem, Container, useTheme, useMediaQuery } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { getData } from "../../../../API/apiService";
import { BaseUrl, showEmployees } from "../../../../API/api";
import { useSelector } from "react-redux";
import NOEMPLOYEE from "../../../../wrong/search/noEmployyesearch";
import SearchingEmployees from "../../../../wrong/loading/searchEmployees";

export default function SmallBoxes({ searchTerm }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // شاشات صغيرة
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // تابلت
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // شاشات كبيرة

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
        width: { xs: "100%", sm: "90%", md: "600px" }, // ريسبونسيف
        height: { xs: "auto", md: "987px" }, // بالموبايل auto، بالديسكتوب ثابت
        flexShrink: 0,
        backgroundColor: "rgb(250,250,250)",
        borderRadius: { xs: "0", md: "12px" }, // موبايل بدون حواف، ديسكتوب بحواف
        mt: 3,
        overflowY: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            marginTop: { xs: "5%", md: "7%" },
            padding: { xs: "0 2%", md: "0 5%" },
            gap: { xs: 2, md: 16 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "20px", md: "24px" },
              mr: { xs: 0, md: -2 },
              fontWeight: "700",
            }}
            variant="h5"
          >
            الموظفين
          </Typography>
          <FilterListIcon sx={{ fontSize: { xs: "20px", md: "24px" } }} />
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
              maxHeight: { xs: "auto", md: "calc(100% - 120px)" },
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
                  px: { xs: 1, md: 0 },
                  borderBottom: "1px solid #e0e0e0",
                  py: { xs: 1, md: 1.5 },
                }}
              >
                <Avatar
                  sx={{
                    width: { xs: 48, md: 64 },
                    height: { xs: 48, md: 64 },
                    fontWeight: "900",
                    fontSize: { xs: "16px", md: "22px" },
                    mr: 2,
                  }}
                  src={emp.avatar}
                />
                <Box sx={{ flexGrow: 1, textAlign: "right", pr: 1 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                      fontWeight: "700",
                    }}
                  >
                    {emp.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", md: "12px" },
                      fontWeight: "700",
                      color: "gray",
                    }}
                  >
                    {isSub_Admin ? emp.role : emp.phone}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: { xs: 36, md: 48 },
                    height: { xs: 36, md: 48 },
                    borderRadius: "50%",
                    backgroundColor: "red",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: { xs: "9px", md: "10px" },
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
