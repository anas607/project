import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Button
} from "@mui/material";

import ArticleIcon from '@mui/icons-material/Article';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import SidBar from "../deywan/dachboard/SIDEBAR/sidbar";
import Appar from "../deywan/dachboard/SIDEBAR/appar";
import CreatADversments from "./creatAdver";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverstment } from "../../reducer/admin/adverstment";
import Loading from "../../wrong/mails/loading";
import NoData from "../../wrong/mails/noData";
import ShowDeatiels from "./showDeatiels";

// تنسيق رأس الجدول
const headStyle = {
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
  py: 1.5
};

export default function Advertisments() {
  const state = useSelector((state) => state.fetchadversment);
  const dispatch = useDispatch();

  const [create, setCreate] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null); // للإعلان الذي سيتم عرض تفاصيله
  const [selectedid, setSelectedid] = useState(null); // للإعلان الذي سيتم عرض تفاصيله

  useEffect(() => {
    dispatch(fetchAdverstment());
  }, [dispatch]);

  const handleShowDetails = (ad) => {

    setSelectedAd(ad);
  };

  const handleBackToTable = () => {
    setSelectedAd(null);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", direction: "rtl", backgroundColor: "rgb(233,232,232)" }}>
      <SidBar />
      <Box flex={1} p={2}>
        <Appar />

        {selectedAd ? (
          // ================= تفاصيل الإعلان ====================
            <ShowDeatiels ad={selectedAd} onBack={handleBackToTable} />

        ) : (
          // =================== جدول الإعلانات ====================
          <>
            <Button
              onClick={() => setCreate(true)}
              variant="contained"
              sx={{
                borderRadius: "30px",
                width: "15%",
                height: "50px",
                backgroundColor: "rgb(14,74,35)",
                color: "white",
                fontSize: '16px',
                fontWeight: '700',
                mr: 120
              }}
            >
              اضافة اعلان
            </Button>

            {<CreatADversments open={create} onClose={() => setCreate(false)} />}

            <TableContainer sx={{ backgroundColor: "transparent", boxShadow: "none", mt: 1, width: "1003px" }}>
              <Table sx={{ Width: '100%' }}>
                <TableHead sx={{ width: "1003px", height: '88px' }}>
                  <TableRow sx={{ backgroundColor: "rgb(14, 74, 35)" }}>
                    <TableCell align="center" sx={headStyle}>رقم الاعلان</TableCell>
                    <TableCell align="center" sx={headStyle}>العنوان</TableCell>
                    <TableCell align="center" sx={headStyle}>تاريخ الاضافة</TableCell>
                    <TableCell align="center" sx={headStyle}></TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {state.error ? (
                    <TableRow>
                      <TableCell sx={{ color: 'red' }} colSpan={5} align="center">
                        حدث خطأ في جلب المعلومات
                      </TableCell>
                    </TableRow>
                  ) : state.isloading ? (
                    <TableRow>
                      <TableCell sx={{ color: 'green' }} colSpan={8} align="center">
                        <Loading />
                      </TableCell>
                    </TableRow>
                  ) : Array.isArray(state.data?.[0]) && state.data[0].length === 0 ? (
                    <NoData />
                  ) : Array.isArray(state.data) && state.data.length > 0 ? (
                    state.data.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          backgroundColor: "transparent",
                          borderBottom: "2px solid #1f4d38",
                        }}
                      >
                        <TableCell align="center" sx={{ fontWeight: "700", fontSize: "16px" }}>
                          {row.id ?? "ـ"}
                        </TableCell>

                        <TableCell align="center" sx={{ fontWeight: "700", fontSize: "16px" }}>
                          {row.title ?? "ـ"}
                        </TableCell>

                        <TableCell align="center" sx={{ fontWeight: "700", fontSize: "16px" }}>
                          {row.created_at ?? "ـ"}
                        </TableCell>

                        <TableCell align="center">
                          <IconButton
                            onClick={() => handleShowDetails(row)}
                            sx={{
                              border: "1px solid rgba(212, 208, 212, 0.31)",
                              borderRadius: "50px",
                              width: 52,
                              height: 52,
                              padding: "8px",
                              backgroundColor: (theme) => theme.palette.primary.main,
                              color: (theme) => theme.palette.secondary.main,
                              position: "relative"
                            }}
                          >
                            <ArticleIcon sx={{ fontSize: 30 }} />
                            <ArrowUpwardIcon
                              sx={{
                                position: "absolute",
                                top: 5,
                                right: 5,
                                fontSize: 10,
                                backgroundColor: "white",
                                color: "black",
                                transform: "rotate(60deg)",
                                borderRadius: "50%",
                                padding: "2px",
                              }}
                            />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} align="center">
                        <Loading />
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Box>
    </Box>
  );
}
