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
import { useEffect, useRef, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ExcelIcon from "./icon";
import { postData } from "../../../API/apiService";
import { ADDEXELQUESTIONS, BaseUrl } from "../../../API/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchspeclise } from "../../../reducer/managerexam/showspeclice";


export default function Exel(){
     const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const {  data: specializations } = useSelector((state) => state.fetchall);
   const dispatch=useDispatch()
   const [excelFile, setExcelFile] = useState(null);
   const [snackbar, setSnackbar] = useState({
       open: false,
       message: "",
       color: "",
     });
const handleFileChange = (e) => {
  setExcelFile(e.target.files[0]);
};
const [add, setAdd] = useState({
          
  specialization_id: "",
  
});
useEffect(()=>{
  dispatch(fetchspeclise())
},[dispatch])
  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  async function handleADDEXEL() {
  //    if (!excelFile || !add.specialization_id) {
  //   alert("يرجى اختيار التخصص وملف Excel");
  //   return;
  // }
    
      const formData = new FormData();
  formData.append("specialization_id", add.specialization_id);
  formData.append("file", excelFile);
  setLoading(true)
    try{
    const response= await postData(`${BaseUrl}${ADDEXELQUESTIONS}`,formData)
    setSnackbar({
        open: true,
        message: response.data || "تم اضافة السؤال الامتحاني بنجاح ",
        color: "rgb(14,75,35)",
      });
  
  }catch(err){
        // alert( err.response?.data || err.message);
  
     setSnackbar({
        open: true,
        message:
          err.message || "حدث خطأ أثناء تغيير ",
        color: "red",
      });
  }finally{
        setLoading(false)

        setTimeout(() => setSnackbar((prev) => ({ ...prev, open: false })), 2500);

  }
  
  
  
    
  }
    return(
        <>
         {snackbar.open && (
                      <Box
                        sx={{
                          position: "fixed",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          backgroundColor: snackbar.color,
                          color: "white",
                          padding: "24px 36px",
                          borderRadius: "10px",
                          fontSize: "22px",
                          fontWeight: "bold",
                          textAlign: "center",
                          zIndex: 2000,
                          boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                          minWidth: "300px",
                        }}
                      >
                        {snackbar.message}
                      </Box>
                    )}
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
  onClick={handleIconClick}
  sx={{
    width: "400%",
    justifyContent: "flex-start",
    textTransform: "none",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  }}
>
  {excelFile ? excelFile.name : ""}
  


                            
                            {/* input مخفي */}
<input
  type="file"
  hidden
  ref={fileInputRef}
  accept=".xls,.xlsx"
  onChange={handleFileChange}
/>                            <ExcelIcon  size={24} />
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
     
               <Button  onClick={handleADDEXEL}  variant="contained" color="rgb(14,74,35)"  sx={{borderRadius:"30px" ,width:"50%",height:"50px",backgroundColor:"rgb(14,74,35)",color:"white",fontSize:'24px',fontWeight:'700',mr:175, mt:60}}>
                 {loading ? (
                  <CircularProgress size={28} sx={{ color: "white" }} />
                ) : (
                  "اضافة"
                )}
                          </Button>
              
    </Box>
        
        
        </>
    )
}


