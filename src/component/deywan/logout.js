
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import {
  IconButton,
  
  Button,
 
} from "@mui/material";
import { useState, useRef } from "react";
import Cookies from "universal-cookie";

export default function LogeOut(){
      const [showLogOut, setShowLogOut] = useState(false);
    
    return(
        <>
        
       <IconButton
              onClick={() => setShowLogOut(true)}
              sx={{
                border: "1px solid rgba(212, 208, 212, 0.31)",
                borderRadius: "50px",
                padding: "8px",
                width: { xs: 40, sm: 60, md: 70 },
    height: { xs: 40, sm: 60, md: 70 },
                backgroundColor: "rgb(71, 59, 68)",
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              <PowerSettingsNewIcon sx={{ fontSize: { xs: 22, sm: 32, md: 40 } }} />
            </IconButton>  
        
        {
                <Dialog
                  open={showLogOut}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle
                    id="alert-dialog-title"
                    sx={{ direction: "rtl", fontSize: "24px", fontWeight: "700" }}
                  >
                    {"هل ترغب حقا بتسجيل الخروج؟"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText
                      sx={{ fontSize: "24px", fontWeight: "700" }}
                      id="alert-dialog-description"
                    >
                      لن تستطبع التراجع اذا قمت بالضغط على موافق
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions sx={{ mr: 39 }}>
                    <Button
                      sx={{ color: "red", fontSize: "24px", fontWeight: "700" }}
                      autoFocus
                    //   onClick={handleLogout}
                    >
                      موافق
                    </Button>
                    <Button
                      onClick={() => {
                        setShowLogOut(false);
                      }}
                      sx={{
                        color: "rgb(14,74,35)",
                        fontSize: "24px",
                        fontWeight: "700",
                      }}
                    >
                      تراجع
                    </Button>
                  </DialogActions>
                </Dialog>
              }
        </>
    )
}