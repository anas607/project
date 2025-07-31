import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { Backdrop, Alert } from "@mui/material";

import {
  Typography,
  Grid,
  Paper,
  Modal,
  TextField,
} from "@mui/material";
import {
  
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useEffect, useState } from "react";
import { getData, postData } from "../../../../API/apiService";
import { ADD, BaseUrl, Specializations } from "../../../../API/api";
import { useSelector } from "react-redux";

export default function EDITSpeclist({ open, onClose ,onSuccess ,spec }) {
const [addDialogOpen, setAddDialogOpen] = useState(false);
const [newOption, setNewOption] = useState('');
    
    const stat=useSelector((state)=>state.fetchall)
    const [selectedid, setSelectedid] = useState(null);

      const selectedSpec = stat.data.find(item => item.id === selectedid);
    const [name, setName] = useState('');
  const [degree, setDegree] = useState('');
      const[errorMessage,seterrorMessage]=useState("")
      const [loading, setLoading] = useState(false);
 const [options, setOptions] = useState([
  { name: "", years: "" }, // الخيار 1
  { name: "", years: "" }, // الخيار 2
]);
const handleAddOption = () => {
  if (newOption.trim() !== "") {
    setOptions((prev) => [...prev, { name: newOption, years: "" }]);
    setNewOption("");
    setAddDialogOpen(false);
  }
};

 useEffect(() => {
  if (spec) {
    setName(spec.name || '');
    setDegree(spec.bachelors_degree || '');
    const optionsArr = Object.entries(spec.experience_years || {}).map(([name, years]) => ({ name, years }));
    setOptions(optionsArr.length ? optionsArr : [{ name: "", years: "" }, { name: "", years: "" }]);
  }
}, [spec]);


async function handledit() {
  setLoading(true);
  try {
    const experience_years = {};
options.forEach((opt) => {
  if (opt.name?.trim()) {
    experience_years[opt.name.trim()] = Number(opt.years) || 0;
  }
});


    const payload = {
      name,
      bachelors_degree: degree,
      experience_years,
    };

const response = await postData(`${BaseUrl}${Specializations}${spec.id}`, payload);

    alert(response?.message || "تم التعديل بنجاح");
    onClose();
    if (onSuccess) onSuccess();
  } catch (err) {
    const errorMessage =
     alert( err?.message || err?.errors?.[0] || "حدث خطأ أثناء التعديل");
    seterrorMessage(errorMessage);
  } finally {
    setLoading(false);
  }
}



  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="add-employee-modal"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Paper
         open={open}
          elevation={4}
          sx={{
            width: "824px",
            height: "800px",
            p: 4,
            borderRadius: 5,
            direction: "rtl",
            position: "relative",
            backgroundColor: "#fff",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "10%",
              left: "40%",
              transform: "translate(-50%, -50%)",
              width: 400,
              height: 400,
              zIndex: 0,
            },
          }}
        >
          <HighlightOffIcon
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 20,
              left: 16,
              cursor: "pointer",
              fontSize: "30px",
              mb: "4%",
            }}
          />

          <Typography
            fontWeight="700"
            fontSize="24px"
            color="rgb(14,74,35)"
            sx={{ mt: 3 }}
          >
            اضافة اختصاص
          </Typography>

          <hr
            style={{
              height: "4px",
              width: "90%",
              border: "none",
              margin: "1rem 0",
              background:
                "linear-gradient(to left, rgb(14,74,35)20%, rgb(163, 168, 165) 80%)",
              borderRadius: "2px",
              marginTop: "0",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              direction: "rtl",
              alignItems: "flex-start",
              mt: 2,
              width: "90%",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                mb={1}
                sx={{ textAlign: "right", fontWeight: "700", fontSize: "24px" }}
              >
                اسم الاختصاص
              </Typography>
              <TextField
               value={name}
  onChange={(e) => setName(e.target.value)}
                fullWidth
                variant="outlined"
                inputProps={{ dir: "rtl" }}
              />
            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography
                mb={1}
                sx={{ textAlign: "right", fontWeight: "700", fontSize: "24px" }}
              >
                الاجازة الجامعية
              </Typography>
              <TextField
             value={degree}
  onChange={(e) => setDegree(e.target.value)}
                fullWidth
                variant="outlined"
                inputProps={{ dir: "rtl" }}
              />

            </Box>
     <Typography
                mb={1}
                sx={{ textAlign: "right", fontWeight: "700", fontSize: "24px" }}
              >
                عدد السنوات المطلوبة
              </Typography>

            {options.map((option, index) => (
  <Box key={index} sx={{ display: "flex", gap: 2, mt: 2, alignItems: "center" }}>
    <Typography
      sx={{
        mt: 2,
        fontWeight: "700",
        fontSize: "20px",
        whiteSpace: "nowrap",
      }}
    >
      الخيار {index + 1}
    </Typography>
    <TextField
      fullWidth
      variant="outlined"
      placeholder="اسم الاختصاص الفرعي"
      value={option.name}
      onChange={(e) => {
        const updated = [...options];
        updated[index].name = e.target.value;
        setOptions(updated);
      }}
      inputProps={{ dir: "rtl" }}
    />
    <TextField
      sx={{ maxWidth: 100 }}
      variant="outlined"
      placeholder="عدد السنوات"
      value={option.years}
      onChange={(e) => {
        const updated = [...options];
        updated[index].years = e.target.value;
        setOptions(updated);
      }}
      inputProps={{ dir: "rtl", type: "number" }}
    />

    {index === options.length - 1 && (
      <IconButton
               onClick={() => setAddDialogOpen(true)}

        sx={{
          backgroundColor: "rgb(14,74,35)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgb(14,74,35)",
          },
        }}
      >
        <AddIcon />
      </IconButton>
    )}
  </Box>
))}

           
<Box sx={{display:"flex",gap:3 ,mr:58,width:'300',mt:76,position:'fixed'}}>
          
            <Button
       onClick={onClose}
              variant="contained"
              sx={{
                borderRadius: "30px",
                width: "70%",
                height: "55px",
                backgroundColor: "rgba(189, 165, 165, 1)",
                color: "white",
                fontSize: "24px",
                fontWeight: "700",
               
                mt: 10,
              }}
            >
               
  تراجع
            </Button>  <Button
            onClick={handledit}
              variant="contained"
              sx={{
                borderRadius: "30px",
                width: "280px",
                height: "55px",
                backgroundColor: "rgb(14,74,35)",
                color: "white",
                fontSize: "24px",
                fontWeight: "700",
                
                mt: 10,
              }}
            >
                {loading ? (
    <CircularProgress size={28} sx={{ color: "white" }} />
  ) : (
    "حفظ"
  )}
  
            </Button></Box>
          </Box>
        </Paper>
      </Modal>
     <Dialog
  open={addDialogOpen}
  onClose={() => setAddDialogOpen(false)}
  PaperProps={{
    sx: { width: "540px", direction: "rtl", height: "248px" },
  }}
>
  <DialogTitle sx={{ textAlign: "right", fontWeight: "700", fontSize: "24px" }}>
    إضافة خيار جديد
  </DialogTitle>
  <DialogContent>
    <TextField
      autoFocus
      fullWidth
      label="اسم الخيار"
      value={newOption}
      onChange={(e) => setNewOption(e.target.value)}
      inputProps={{ dir: "rtl" }}
    />
  </DialogContent>
  <DialogActions>
    <Button
      sx={{ fontWeight: "700", fontSize: "24px" }}
      onClick={() => setAddDialogOpen(false)}
    >
      إلغاء
    </Button>
    <Button
      sx={{ fontWeight: "700", fontSize: "24px" }}
      variant="contained"
      onClick={handleAddOption}
    >
      حفظ
    </Button>
  </DialogActions>
</Dialog>

    </>
  );
}
