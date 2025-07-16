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

export default function Peaper() {
  return (
    <>
      {" "}
      <Box
        sx={{ flex: 1, backgroundColor: "white", borderRadius: 2, padding: 2 }}
      >
        <Typography
          sx={{ marginLeft: "79%", fontSize: "16px", mt: 1, fontWeight: "700" }}
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
                  mt: "2",
                  mr: 1,
                }}
              />

              <Typography
                sx={{ fontSize: "10px", mr: 1, mt: 3, fontWeight: "700" }}
                variant="h5"
              >
                <Box
                  component="span"
                  sx={{ ml: 1, fontWeight: "500", color: "#666" }}
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
                  backgroundColor: "rgb(97,79,92)",
                  display: "flex",
                  mr: 1,
                }}
              />

              <Typography
                sx={{ fontSize: "10px", mr: 1, fontWeight: "700" }}
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
                  backgroundColor: "rgb(141,113,133)",
                  display: "flex",
                  mr: 1,
                }}
              />

              <Typography
                sx={{ fontSize: "10px", mr: 1, fontWeight: "700" }}
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
            <Polar />
          </Box>
        </Box>
      </Box>
    </>
  );
}
