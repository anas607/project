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
  Button,
  Grid,
  CircularProgress
} from "@mui/material";

import ArticleIcon from "@mui/icons-material/Article";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import SidBar from "../deywan/dachboard/SIDEBAR/sidbar";
import Appar from "../deywan/dachboard/SIDEBAR/appar";
import CreatADversments from "./creatAdver";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverstment } from "../../reducer/admin/adverstment";
import Loading from "../../wrong/mails/loading";
import NoData from "../../wrong/mails/noData";
import ShowDeatiels from "./showDeatiels";
import { SearchAnnouncements } from "../../reducer/search/Announcements";
import NOSERACH from "../../wrong/search/search";
import NoANNOUNVEMTS from "../../wrong/Announcements";

// تنسيق رأس الجدول
const headStyle = {
  color: "white",
  fontWeight: "bold",
  fontSize: "24px",
  py: 1.5
};

export default function Advertisments() {
  const { data: searchResults, isloading: searchLoading } = useSelector(
    (state) => state.SearchAnnouncements
  );
  const dispatch = useDispatch();
        const [searchTerm, setSearchTerm] = useState("");
  const state = useSelector((state) => state.fetchadversment);

  const [create, setCreate] = useState(false);
  const [selectedid, setSelectedid] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(fetchAdverstment());
  }, [dispatch]);

  useEffect(() => {
    if (searchTerm) {
      dispatch(SearchAnnouncements(searchTerm));
    }
  }, [searchTerm, dispatch]);

  const handleOpenModal = (id) => {
    setSelectedid(id);
    setTimeout(() => setOpenModal(true), 0);
  };

 // لو في بحث استخدم نتائجه، غير هيك اعرض البيانات الأصلية
const specliseToDisplay = searchTerm
  ? Array.isArray(searchResults)
    ? Array.isArray(searchResults[0])
      ? searchResults[0]   // حالة nested array مثل اللي عندك
      : searchResults
    : []
  : Array.isArray(state.data)
    ? state.data
    : [];
    const isEmpty = !specliseToDisplay || specliseToDisplay.length === 0;


  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        direction: "rtl",
        backgroundColor: "rgb(233,232,232)"
      }}
    >
      <SidBar />
      <Box flex={1} p={2}>
        <Appar onSearch={setSearchTerm} />

        <Button
          onClick={() => setCreate(true)}
          variant="contained"
          sx={{
            borderRadius: "30px",
            width: "175px",
            height: "70px",
            backgroundColor: "rgb(14,74,35)",
            color: "white",
            fontSize: "24px",
            fontWeight: "700",
            mr: 190
          }}
        >
          اضافة اعلان
        </Button>

        <CreatADversments
          open={create}
          onClose={() => setCreate(false)}
          onSuccess={() => dispatch(fetchAdverstment())}
        />

        <TableContainer
          sx={{ backgroundColor: "transparent", boxShadow: "none", mt: 1 ,width: "1583px"}}
        >
          <Table  sx={{Width: '100%'}}>
             <TableHead sx={{width:"1503px", height:'88px'}}>
              <TableRow sx={{ backgroundColor: "rgb(14, 74, 35)" }}>
                <TableCell align="center" sx={headStyle}>
                  رقم الاعلان
                </TableCell>
                <TableCell align="center" sx={headStyle}>
                  العنوان
                </TableCell>
                <TableCell align="center" sx={headStyle}>
                  تاريخ الاضافة
                </TableCell>
                <TableCell align="center" sx={headStyle}></TableCell>
              </TableRow>
            </TableHead>

           <TableBody>
  {state.error ? (
    <TableRow>
      <TableCell sx={{ color: "red" }} colSpan={4} align="center">
        حدث خطأ في جلب المعلومات
      </TableCell>
    </TableRow>
  ) : state.isloading ? (
    <TableRow>
      <TableCell colSpan={4} align="center">
        <Loading />
      </TableCell>
    </TableRow>
  ) : searchLoading ? (
    <TableRow>
      <TableCell colSpan={4} align="center">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 200
          }}
        >
          <CircularProgress sx={{ color: "green" }} size={60} />
        </Box>
      </TableCell>
    </TableRow>
  ) : Array.isArray(specliseToDisplay) && specliseToDisplay.length > 0 ? (
    specliseToDisplay.map((row, index) => (
      <TableRow
        key={index}
        sx={{
          backgroundColor: "transparent",
          borderBottom: "2px solid #1f4d38"
        }}
      >
        <TableCell
          align="center"
          sx={{ fontWeight: "700", fontSize: "16px" }}
        >
          {row.id ?? "ـ"}
        </TableCell>
        <TableCell
          align="center"
          sx={{ fontWeight: "700", fontSize: "16px" }}
        >
          {row.title ?? "ـ"}
        </TableCell>
        <TableCell
          align="center"
          sx={{ fontWeight: "700", fontSize: "16px" }}
        >
          {row.created_at ?? "ـ"}
        </TableCell>
        <TableCell align="center">
          <IconButton
            onClick={() => handleOpenModal(row.id)}
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
                padding: "2px"
              }}
            />
          </IconButton>
        </TableCell>
      </TableRow>
    ))
  ) : searchTerm ? (
    // انتهى البحث ومافي نتائج
    <TableRow>
       <TableCell colSpan={8} align="center">
         <NOSERACH />
       </TableCell>
     </TableRow>
  ) : 
    // انتهى الفيتش ومافي بيانات
    
    
 !searchTerm && isEmpty ? (
    <TableRow>
  <TableCell colSpan={8} align="center">
    <NoANNOUNVEMTS/>
  </TableCell>
</TableRow>
                                                                      
                         





  ):""}
</TableBody>

          </Table>
        </TableContainer>

        <ShowDeatiels
          open={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
          id={selectedid}
        />
      </Box>
    </Box>
  );
}
