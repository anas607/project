import { Box, Paper, Typography } from "@mui/material";
import { BaseUrl, showInternalStatistics } from "../../../../API/api";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../../API/apiService";

import { useEffect } from "react";
import  {
  setInternalStatistics,
} from "../../../../reducer/internalStatistics";
import Polar from "../chart/polar";

export default function Peaper() {
  const dispatch = useDispatch();
  const { approved, pending, rejected } = useSelector(
    (state) => state.internalStatistics
  );
  useEffect(() => {
    const fetchInternalStatistics = async () => {
      try {
        const response = await getData(`${BaseUrl}${showInternalStatistics}`);

        if (response?.success === true && typeof response.data === "object") {
          const stats = {
            approved: response.data.approved ?? 0,
            pending: response.data.pending ?? 0,
            rejected: response.data.rejected ?? 0,
          };

          dispatch(setInternalStatistics(stats));
        } else {
          console.warn(
            "الرد لم يكن ناجحًا أو لا يحتوي على البيانات:",
            response.data
          );
        }
      } catch (error) {
        console.error("فشل في جلب الإحصائيات:", error);
      }
    };

    fetchInternalStatistics();
  }, [dispatch]);

  return (
    <>
      {" "}
      <Box
        sx={{ flex: 1, backgroundColor: "white", borderRadius: 2, padding: 2 }}
      >
        <Typography
          sx={{ marginLeft: "79%", fontSize: "42px", mt: 1, fontWeight: "700",whiteSpace:'nowrap' }}
          variant="h5"
        >
          البريد الداخلي
        </Typography>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          sx={{ marginTop: "-8%" }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "40px",
                mt: 8,
                color: "rgb(71,59,68)",
              }}
              variant="h5"
            >
              {approved + rejected + pending}
            </Typography>

            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                marginTop: "1%",
              //  marginBottom: "5%",
              }}
              variant="h5"
            >
              عدد معاملات البريد الداخلي
            </Typography>

            <Box display="flex" alignItems="center" mb={1}>
              <Box
                sx={{
                  width: 20,
                  height: 8,
                  borderRadius: "30%",
                  backgroundColor: "rgb(70, 71, 59)",
                  display: "flex",
                  mt: 2,
                  mr: 1,
                }}
              />

              <Typography
                sx={{ fontSize: "18px", mr: 1, mt: 3, fontWeight: "700" }}
                variant="h5"
              >
                <Box
                  component="span"
                  sx={{
                    ml: 1,
                    fontWeight: "500",
                    // fontSize: "20px",
                    color: "#666",
                  }}
                >
                  {approved}
                </Box>
                من البريد المحول
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={1}>
              <Box
                sx={{
                  width: 20,
                  height: 8,
                  borderRadius: "30%",
                  backgroundColor: "rgb(97,79,92)",
                  display: "flex",
                  mr: 1,
                }}
              />

              <Typography
                sx={{ fontSize: "18px", mr: 1, fontWeight: "700" }}
                variant="h5"
              >
                <Box
                  component="span"
                  sx={{
                    ml: 1,
                    fontWeight: "500",
                    color: "#666",
                    // fontSize: "20px",
                  }}
                >
                  {rejected}
                </Box>
                من البريد المرفوض
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <Box
                sx={{
                  width: 20,
                  height: 8,
                  borderRadius: "30%",
                  backgroundColor: "rgb(141,113,133)",
                  display: "flex",
                  mr: 1,
                }}
              />

              <Typography
                sx={{ fontSize: "18px", mr: 1, fontWeight: "700" }}
                variant="h5"
              >
                <Box
                  component="span"
                  sx={{
                    ml: 1,
                    fontWeight: "500",
                    color: "#666",
                    // fontSize: "20px",
                  }}
                >
                  {pending}
                </Box>
                من البريد قيد الدراسة
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mr: 22 }}>
            <Polar />
          </Box>
        </Box>
      </Box>
    </>
  );
}
