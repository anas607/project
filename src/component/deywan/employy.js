import Button from "@mui/material/Button";
import {
  Typography,
  Grid,
  Paper,
  Avatar,
  Box,
  TableRow,
  Modal,
  ListItem,
} from "@mui/material";
import SidBar from "./dachboard/SIDEBAR/sidbar";
import TableCell from "@mui/icons-material/Satellite";
import Appar from "./dachboard/SIDEBAR/appar";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../API/apiService";
import { BaseUrl, showEmployees } from "../../API/api";
import { SearchEmployees } from "../../reducer/search/employeesSearch";



import { CircularProgress } from "@mui/material";
import NOSERACH from "../../wrong/search/search";
import NoEmployees from "../../wrong/noEmployyess";

export default function Employee() {
  const dispatch = useDispatch();

  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(false);

  const { data: searchResults, isloading } = useSelector(
    (state) => state.search
  );

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      dispatch(SearchEmployees(searchTerm));
    }
  }, [searchTerm, dispatch]);

  useEffect(() => {
    fetchEmployee();
  }, []);

  async function fetchEmployee() {
    setLoading(true);
    try {
      const response = await getData(`${BaseUrl}${showEmployees}`);
      setEmployee(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  const employessToDisplay = searchTerm
    ? searchResults?.[0] ?? [] // فك المصفوفة الداخلية أو fallback لمصفوفة فارغة
    : employee ?? [];
        const isEmpty = !employessToDisplay || employessToDisplay.length === 0;


  return (
    <>
      <Box
        sx={{
          direction: "rtl",
          height: "100vh",
          display: "flex",
        }}
      >
        <SidBar />
        <Box
          sx={{
            flexGrow: 1,
            padding: "2%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgb(233,232,232)",
          }}
        >
          <Appar onSearch={setSearchTerm} />

          <Box
            sx={{
              backgroundColor: "rgb(233,232,232)",
              p: 2,
              borderRadius: 5,
              maxWidth: "3000px",
              width: "1600px",
              alignSelf: "rtl",
              minHeight: 600, // مساحة مناسبة للعرض
            }}
          >
            {loading || isloading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "400px",
                }}
              >
                <CircularProgress sx={{ color: "green" }} />
              </Box>
            ) : employessToDisplay.length === 0 ? (
              <NOSERACH/>
            ) :!searchTerm && isEmpty ? (
                <TableRow>
              <TableCell colSpan={8} align="center">
                <NoEmployees/>
              </TableCell>
            </TableRow>
                                                                                  
                                     ):(
              <Grid container spacing={2}>
                {employessToDisplay.map((emp) => (
                  <Grid item xs={12} sm={6} md={3} key={emp.id}>
                    <Paper
                      elevation={3}
                      sx={{
                        height: 178,
                        width: "270px",
                        p: 2,
                        backgroundColor: "rgba(255, 255, 255, 0.02)",
                        border:
                          emp.is_active === 1
                            ? "3px solid rgb(14, 75, 35)"
                            : "3px solid rgba(139, 2, 2, 1)",
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
                          sx={{ color: "black", fontSize: "14px", fontWeight: "700", mt: 1 }}
                        >
                          {emp.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "black", fontSize: "14px", fontWeight: "700", mt: 1 }}
                        >
                          {emp.phone}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "14px", fontWeight: "700", mt: 1, color: "black" }}
                        >
                          {emp.address}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: emp.is_active === 1 ? "rgb(14, 75, 35)" : "rgba(139, 2, 2, 1)",
                            fontWeight: 700,
                            fontSize: "14px",
                            mt: 1,
                          }}
                        >
                          {emp.is_active === 1 ? "فعال" : "غير فعال"}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

