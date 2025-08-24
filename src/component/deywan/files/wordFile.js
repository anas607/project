
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import {
  Typography,
  Grid,
  Paper,
  Modal,
  CircularProgress,
  StepLabel,
  TextField,
} from "@mui/material";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useState } from "react";
import AddWord from "./AddWord";

export default function WORDFILE({onSuccess}){
    const [showWord, setShowWord] = useState(false);

  function handleAddWord() {
    setShowWord(true);
  }
    return(
        <>
         <Grid item xs={12} sm={6} md={3}>
                <label htmlFor="upload-word-file">
                 
                  <Button
                   onClick={handleAddWord}  // يفتح المودال
                    component="span"
                    variant="outlined"
                    fullWidth
                    sx={{
                      height: 230,
                      width: "290px",
                      borderStyle: "dashed",
                      border: "4px dashed rgb(14,75,35) ",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      borderRadius: "5%",
                    }}
                  >
                    <Box
                      position="relative"
                      display="inline-flex"
                      width={40}
                      height={40}
                    >
                      <InsertDriveFileIcon sx={{ fontSize: 50 }} />
                      <Typography
                        variant="caption"
                        sx={{
                          position: "absolute",
                          top: "70%",
                          left: "40%",
                          transform: "translate(-50%, -50%)",
                          fontWeight: "600",
                          color: "white", // أو أي لون يناسبك
                          fontSize: "18px",
                        }}
                      >
                        W
                      </Typography>
                    </Box>
                    <Typography
                      sx={{ mt: 2 }}
                      style={{ fontSize: "20px", fontWeight: "700" }}
                    >
                      اضافة معاملة
                    </Typography>
                    <Typography style={{ fontSize: "20px", fontWeight: "700" }}>
                      بواسطة ملف وورد{" "}
                    </Typography>
                  </Button>
                </label>
              </Grid>
         <AddWord 
        open={showWord} 
        onClose={() => setShowWord(false)} 
        onSuccess={onSuccess}
      />
        </>
    )
}