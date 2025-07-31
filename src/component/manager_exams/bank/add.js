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
import { postData } from "../../../API/apiService";
import { ADD_QUESTION_MANUAL, BaseUrl } from "../../../API/api";
import CircularProgress from "@mui/material/CircularProgress";
import { Backdrop, Alert } from "@mui/material";


const options = ["اختيار 1", "اختيار 2", "اختيار 3", "اختيار 4"];

export default function ADDQUSTION() {
  const [loading, setLoading] = useState(false);
    const[errorMessage,seterrorMessage]=useState("")

 const {  data: specializations } = useSelector((state) => state.fetchall);
 const dispatch=useDispatch() 
  const [selectedOption, setSelectedOption] = useState("1");
 const [add, setAdd] = useState({
  question: "",               
  option_a: "",
  option_b: "",
  option_c: "",
  option_d: "",
  correct_answer: "A",         
  specialization_id: "",
  difficulty_level: "",
});

  const handleChange = ( field, value) => {
  const updatedExams = [...add];
  updatedExams[field] = value;
  setAdd(updatedExams);
};
useEffect(()=>{
  dispatch(fetchspeclise())
},[dispatch])

async function handleADDManual() {
  setLoading(true)
  try{
  const response= await postData(`${BaseUrl}${ADD_QUESTION_MANUAL}`,add)
  alert(response.data)

}catch(err){
      alert( err.response?.data || err.message);
seterrorMessage(errorMessage)
// alert(errorMessage)
}finally {
    setLoading(false); 
  }


  
}





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
        value={add.question}
  onChange={(e) => setAdd({ ...add, question: e.target.value })}

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

       {["option_a", "option_b", "option_c", "option_d"].map((field, index) => {
  const value = String.fromCharCode(65 + index); // "A", "B", "C", "D"
  return (
    <Box key={field} sx={{ display: "flex", alignItems: "center", mb: 1, width: "190%", gap: 1 }}>
      <Typography sx={{ minWidth: "70px", textAlign: "right", fontWeight: '700', fontSize: '24px' }}>
        {options[index]}
      </Typography>
      <TextField
        variant="outlined"
        sx={{ flexGrow: 1 }}
        value={add[field]}
        onChange={(e) => setAdd({ ...add, [field]: e.target.value })}
        inputProps={{ dir: "rtl" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Radio
                checked={add.correct_answer === value}
                onChange={() => setAdd({ ...add, correct_answer: value })}
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
  onChange={(e) => setAdd({ ...add, specialization_id: e.target.value })}
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
  value={add.difficulty_level}
  onChange={(e) => setAdd({ ...add, difficulty_level: e.target.value })}
>
  <MenuItem value="بسيط">بسيط</MenuItem>
  <MenuItem value="متوسط">متوسط</MenuItem>
  <MenuItem value="صعب">صعب</MenuItem>
</Select>

      </Box>
      {errorMessage ? <><Alert
                variant="outlined"
                severity="error"
                sx={{ fontSize: "1.5rem", fontWeight: "700" }}
              >
                {errorMessage}
              </Alert></> : ""} 
               <Button onClick={handleADDManual}   variant="contained" color="rgb(14,74,35)"  sx={{borderRadius:"30px" ,width:"50%",height:"50px",backgroundColor:"rgb(14,74,35)",color:"white",fontSize:'24px',fontWeight:'700',mr:175, mt:5}}>
               
                              {loading ? (
                  <CircularProgress size={28} sx={{ color: "white" }} />
                ) : (
                  "اضافة"
                )}
                          </Button>
    </Box>
  );
}
