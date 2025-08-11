import {
  
  Box,
  
  Modal,
  CircularProgress,
  IconButton,
  DialogContent,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";import { getData, postData } from "../../../API/apiService";
import { BaseUrl, TRANSACTION, RECEPIET_IMAGE, SHOW_INTERNAL_MAIL } from "../../../API/api";
import { useEffect, useState } from "react";

export default function ShowReicipet({open,onClose,uuid}){
const[loading,setLoading]=useState(false)
  const [imageUrl, setImageUrl] = useState("");
const [showImage, setShowImage] = useState(true);


  useEffect(()=>{

      if (open && uuid) {
      fetchImage();
    }
  }, [open, uuid]);


  async function fetchImage(){
    setLoading(true)
    try{    const response= await getData(`${BaseUrl}${TRANSACTION}${RECEPIET_IMAGE}${uuid}`)
    console.log(response.data)
     if (response?.data) {
        setImageUrl(response.data); // مباشرة الرابط من الـ API
      }
}catch(err){
  console.log(err)
}finally{
  setLoading(false)
}

  }
   async function UnderReview() {
    try {
      const res = await patchData(`${BaseUrl}transaction/under-review/${uuid}`);
    }catch(err){
      console.log(err)
    }

    }
      
  
    return(
        <>
        
      
 <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="receipt-dialog-title"
      maxWidth="md"
      fullWidth
    >
      {/* الشريط العلوي */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#f5f5f5",
          padding: "8px 16px",
        }}
      >
        {/* أيقونة العين */}
        <IconButton
          onClick={() => setShowImage((prev) => !prev)}
          sx={{ color: "#0e4a23" }}
        >
          <VisibilityIcon />
        </IconButton>

        {/* أيقونة الإغلاق */}
        <IconButton onClick={onClose} sx={{ color: "red" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* محتوى الصورة */}
      <DialogContent sx={{ textAlign: "center" }}>
        {loading ? (
          <CircularProgress />
        ) : showImage && imageUrl ? (
          <img
            src={imageUrl}
            alt="Receipt"
            style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: "8px" }}
          />
        ) : (
          !loading && "لا توجد صورة متاحة"
        )}
      </DialogContent>
    </Dialog>
      
        
        
        </>
    )
}