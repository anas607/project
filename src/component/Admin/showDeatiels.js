import {
  Box, Button, Select, MenuItem, Typography, IconButton, Avatar,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from "@mui/material";

import ArticleIcon from '@mui/icons-material/Article';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { useEffect, useState } from "react";
import Loading from "../../wrong/mails/loading";
import NoData from "../../wrong/mails/noData";
import { getData } from "../../API/apiService";
import { BaseUrl, ANNOUNCEMENT } from "../../API/api";

const headStyle = {
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
  py: 1.5
};

export default function ShowDeatiels({ ad, onBack }) {
  const [deteilas, setDeteilas] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    if (ad && ad.id) {
      fetchMail(ad.id);
    }
  }, [ad]);

  const fetchMail = async (id) => {
    setIsLoading(true);
    try {
      const res = await getData(`${BaseUrl}${ANNOUNCEMENT}${id}`);
      setDeteilas(res.data);
    } catch (err) {
      console.error(err.response?.data || err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <IconButton
        onClick={onBack}
        sx={{ backgroundColor: "rgb(71, 59, 68)", color: "rgb(233,232,232)" }}
      >
        <ArrowBackIcon
          sx={{
            fontSize: '50px',
            transform: "rotate(180deg)"
          }}
        />
      </IconButton>

      <TableContainer sx={{ backgroundColor: "transparent", boxShadow: "none", mt: 6, width: "1003px" }}>
        <Table sx={{ width: '100%' }}>
          <TableHead sx={{ height: '88px' }}>
            <TableRow sx={{ backgroundColor: "rgb(14, 74, 35)" }}>
              <TableCell align="center" sx={headStyle}>رقم الاعلان</TableCell>
              <TableCell align="center" sx={headStyle}>العنوان</TableCell>
              <TableCell align="center" sx={headStyle}>تاريخ الاضافة</TableCell>
              <TableCell align="center" sx={headStyle}></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {isloading ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  <Loading />
                </TableCell>
              </TableRow>
            ) : deteilas ? (
              <TableRow sx={{ borderBottom: "3px solid rgb(14, 74, 35)" }}>
                <TableCell align="center" sx={{ fontWeight: "700", fontSize: "16px" }}>
                  {deteilas.id ?? "ـ"}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "700", fontSize: "16px" }}>
                  {deteilas.title ?? "ـ"}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "700", fontSize: "16px" }}>
                  {deteilas.created_at ?? "ـ"}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    sx={{
                      border: '1px solid rgba(212, 208, 212, 0.31)',
                      borderRadius: '50px',
                      width: 52,
                      height: 52,
                      padding: '8px',
                      backgroundColor: 'primary.main',
                      color: 'secondary.main',
                      position: 'relative'
                    }}
                  >
                    <ArticleIcon sx={{ fontSize: 30 }} />
                    <ArrowUpwardIcon
                      sx={{
                        position: 'absolute',
                        top: 6,
                        right: 6,
                        fontSize: 10,
                        backgroundColor: 'white',
                        color: 'black',
                        transform: 'rotate(60deg)',
                        borderRadius: '50%',
                        padding: '2px',
                        border: "2px solid rgb(14, 74, 35)",
                      }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  <NoData />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
