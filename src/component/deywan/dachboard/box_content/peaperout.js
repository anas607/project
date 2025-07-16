import { Box, Paper, Typography } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CreateIcon from "@mui/icons-material/Create";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import GroupRemoveOutlinedIcon from "@mui/icons-material/GroupRemoveOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";

import { VictoryPie } from "victory";
import Polar from "../chart/polar";
import PolarOut from "../chart/polarout";

const polarData = [
  { x: "محول", y: 45 },
  { x: "مرفوض", y: 30 },
  { x: "قيد الدراسة", y: 25 },
];

const COLORS = ["#1E88E5", "#D32F2F", "#FBC02D"];
export default function PeaperOut() {
  return (
    <>
      {" "}
      <Box
        sx={{ flex: 1, backgroundColor: "white", borderRadius: 2, padding: 2 }}
      >
        <Typography
          sx={{ marginLeft: "69%", fontSize: "16px", mt: 1, fontWeight: "700" }}
          variant="h5"
        >
          البريد الخارجي
        </Typography>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          sx={{ marginTop: "-8%" }}
        >
          {/* Text content on the RIGHT */}
          <Box>
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "700",
                mt: 8,
                color: "rgb(14,74,35)",
              }}
              variant="h5"
            >
              897
            </Typography>

            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: "700",
                marginTop: "1%",
                marginBottom: "5%",
              }}
              variant="h5"
            >
              عدد معاملات البريد الخارجي
            </Typography>

            <Box display="flex" alignItems="center" mb={1}>
              <Box
                sx={{
                  width: 20,
                  height: 8,
                  borderRadius: "30%",
                  backgroundColor: "rgb(14,74,35)",
                  mr: 1,
                }}
              />
              <Typography
                sx={{ fontSize: "10px", fontWeight: "700", mr: 1 }}
                variant="h5"
              >
                <Box
                  component="span"
                  sx={{
                    ml: 1,
                    fontWeight: "500",
                    // fontSize: "16px",
                    color: "#666",
                  }}
                >
                  123
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
                  backgroundColor: "rgb(14,215,84)",
                  mr: 1,
                }}
              />
              <Typography
                sx={{ fontSize: "10px", mr: 1, fontWeight: "600" }}
                variant="h5"
              >
                <Box
                  component="span"
                  sx={{ ml: 1, fontWeight: "500", color: "#666" }}
                >
                  123
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
                  backgroundColor: "rgb(11,141,56)",
                  mr: 1,
                }}
              />
              <Typography
                sx={{ fontSize: "10px", mr: 1, fontWeight: "600" }}
                variant="h5"
              >
                <Box
                  component="span"
                  sx={{ ml: 1, fontWeight: "500", color: "#666" }}
                >
                  123
                </Box>
                من البريد قيد الدراسة
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mr: 22 }}>
            <PolarOut />
          </Box>
        </Box>
      </Box>
    </>
  );
}
