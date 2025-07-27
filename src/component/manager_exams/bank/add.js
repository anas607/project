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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchspeclise } from "../../../reducer/managerexam/showspeclice";


const options = ["اختيار 1", "اختيار 2", "اختيار 3", "اختيار 4"];

export default function ADDQUSTION() {
 const {  data: specializations } = useSelector((state) => state.fetchall);
 const dispatch=useDispatch() 
  const [selectedOption, setSelectedOption] = useState("1");
  const [add, setAdd] = useState({
text:"",
select:"",
specialization_id:""


  });
  const handleChange = (index, field, value) => {
  const updatedExams = [...add];
  updatedExams[field] = value;
  setAdd(updatedExams);
};
  const [level, setLevel] = useState("");
useEffect(()=>{
  dispatch(fetchspeclise())
},[dispatch])
  return (
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
      <Box>
        <Typography  mb={1} sx={{ textAlign: "right" ,fontWeight:'700',fontSize:'24px' }}>
          نص السؤال
        </Typography>
        <TextField
        value={add.text}
  onChange={(e) => setAdd(e.target.value)}

          variant="outlined"
          sx={{ width: "300%" }}
          inputProps={{ dir: "rtl" }}
        />
      </Box>

      {/* الاختيارات */}
      <Box sx={{ width: "100%" }}>
        <Typography  mb={1} sx={{ textAlign: "right" ,fontWeight:'700',fontSize:'24px'}}>
          اختيار من متعدد
        </Typography>

        {options.map((label, index) => {
          const value = (index + 1).toString();
          return (
            <Box
              key={value}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                width: "190%",
                gap: 1,
              }}
            >
              {/* النص خارج التيكست فيلد */}
              <Typography sx={{ minWidth: "70px", textAlign: "right",fontWeight:'700',fontSize:'24px' }}>
                {label}
              </Typography>

              {/* التيكست فيلد مع الدويرة جواتها على اليسار */}
              <TextField
                variant="outlined"
                sx={{ flexGrow: 1 }}
                inputProps={{ dir: "rtl" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Radio
                        checked={selectedOption === value}
                        onChange={() => setSelectedOption(value)}
                        value={value}
                        size="small"
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          );
        })}
      </Box>

      {/* الاختصاص */}
      <Box sx={{ width: "100%" }}>
        <InputLabel sx={{ textAlign: "right", display: "block",fontWeight:'700',fontSize:'24px',color:'black' }}>
          الاختصاص
        </InputLabel>
         <Select
          value={add.specialization_id}
  onChange={(e) => setAdd(e.target.value)}
          fullWidth
        >
          <MenuItem disabled value="">اختر الاختصاص</MenuItem>
          {specializations?.map((spec) => (
            <MenuItem key={spec.id} value={spec.id}>
              {spec.name}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* المستوى */}
      <Box sx={{ width: "100%" }}>
        <InputLabel sx={{ textAlign: "right", display: "block" ,fontWeight:'700',fontSize:'24px',color:'black'}}>
          المستوى
        </InputLabel>
        <Select
          sx={{ width: "190%" }}
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <MenuItem value="easy">سهل</MenuItem>
          <MenuItem value="medium">متوسط</MenuItem>
          <MenuItem value="hard">صعب</MenuItem>
        </Select>
      </Box>
               <Button    variant="contained" color="rgb(14,74,35)"  sx={{borderRadius:"30px" ,width:"50%",height:"50px",backgroundColor:"rgb(14,74,35)",color:"white",fontSize:'24px',fontWeight:'700',mr:175, mt:5}}>
                اضافة 
                </Button>
    </Box>
  );
}
