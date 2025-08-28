// material-ui
import Button from "@mui/material/Button";

          import InventoryIcon from '@mui/icons-material/Inventory';


import { NavLink } from "react-router-dom";

export default function Sub_Sxam({ device}) {
  const currentPath = window.location.pathname;



  return (
   

       <> <NavLink to="/exam_bank" style={{ textDecoration: "none", width: "100%" }}>
        <Button
          sx={{
            justifyContent: "flex-start",
            backgroundColor:
              currentPath === "/exam_bank" ? "rgb(14, 74, 35)" : "transparent",
            color: currentPath === "/exam_bank" ? "white" : "black",
            fontWeight: "600",
            fontSize: "16px",
            marginBottom: "2%",
            transition: "1%",
            width: "381px",
            height: "78px",
            "&:hover": {
              backgroundColor: "rgb(14, 74, 35)",
              color: "white",
              width: "140%",
            },
          }}
        >
                 <InventoryIcon sx={{ marginRight: 7, fontSize: 32 }} />
          <h2
            style={{ fontSize: "24px", fontWeight: "700", marginRight: "3%" }}>
            {" "}
            بنك الاسئلة{" "}
          </h2>
        </Button>
      </NavLink>
        </>
   )}