import {
  Box,
  TextField,
  Typography,
  Radio,
  InputAdornment,
  InputLabel,
  Select,
  MenuItem,Button
} from "@mui/material";
import { useRef, useState } from "react";
import TableChartIcon from '@mui/icons-material/TableChart';
import ExcelIcon from "./icon";


export default function Exel(){
     const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  const [major, setMajor] = useState("");
    return(
        <>
         <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        direction: "rtl",
        alignItems: "flex-start",
        mt: 2,
        width: "320px",
      }}
    >
     

    

      {/* الاختصاص */}
      <Box sx={{ width: "100%" }}>
        <InputLabel sx={{ textAlign: "right", display: "block",fontWeight:'700',fontSize:'24px',color:'black' }}>
          الاختصاص
        </InputLabel>
        <Select
          sx={{ width: "190%" }}
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        >
          <MenuItem value="comp">علوم حاسوب</MenuItem>
          <MenuItem value="eng">هندسة</MenuItem>
          <MenuItem value="med">طب</MenuItem>
        </Select>
      </Box>

    <Box>
      <Typography
        mb={1}
        sx={{ textAlign: "right", fontWeight: "700", fontSize: "24px" }}
      >
        ملف Excel
      </Typography>
<Box
                          sx={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",width: "590%",
                          }}
                        >
                          {/* الزر المخصص لتحميل الصورة */}
                          <Button
                            variant="outlined"
                            component="label"
                            sx={{
                              width: "600%",
                              justifyContent: "flex-start",
                              textTransform: "none",
                              padding: "8px",
                              borderRadius: "4px",
                              border: "1px solid #ccc",
                              
                            }}
                          >
                            
                            {/* input مخفي */}
                            <input type="file" hidden   accept=".xls,.xlsx" position="end"/>
                            <ExcelIcon  size={24} />
                          </Button>

                          {/* أيقونة الصورة على أقصى اليسار */}
                        </Box>
       {/* <TextField
        variant="outlined"
        inputProps={{ dir: "rtl", readOnly: true }}
        sx={{ width: "250%" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                <ExcelIcon size={24} />
            </InputAdornment>
          ),
        }}
      />

      <input
        type="file"
        accept=".xls,.xlsx"
        ref={fileInputRef}
        style={{ display: "none" }}
      /> */}
    </Box>
     
               <Button    variant="contained" color="rgb(14,74,35)"  sx={{borderRadius:"30px" ,width:"50%",height:"50px",backgroundColor:"rgb(14,74,35)",color:"white",fontSize:'24px',fontWeight:'700',mr:175, mt:60}}>
                اضافة 
                </Button>
              
    </Box>
        
        
        </>
    )
}


