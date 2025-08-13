import {
  Box,
  Typography,
  Paper,
  Modal,
  Grid,
  CircularProgress,
  IconButton,
  Dialog,
  DialogContent,
  Checkbox,
  Button,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ImageIcon from "@mui/icons-material/Image";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import NoteIcon from "@mui/icons-material/Note";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { useEffect, useState } from "react";
import { getData, patchData, postData } from "../../../API/apiService";
import { BaseUrl, CONTENT, Show, STATUS, TRANSACTION, TRANSACTION_STATUS, UNDER } from "../../../API/api";
import { useSelector } from "react-redux";

export default function EXPORTMAILS({ open, onClose, uuid,type }) {
  const [buttonsDisabled, setButtonsDisabled] = useState(true); // بشكل افتراضي معطلة

  const stateexport=useSelector((state)=>state.outerexport)
   console.log(stateexport.data)
   const statusValue = stateexport.data.length > 0 ? stateexport.data[0].status : null;

  const state = useSelector((state) => state.user);

// التحقق إذا كان أي دور يحتوي على كلمة "رئيس"
const hasRaeesRole = state.roles.some(role => role.includes("رئيس"));

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [editLoading, setEditLoading] = useState(false);
 const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    color: "",
  });
   async function UnderReview() {
      try {
        const res = await patchData(`${BaseUrl}${TRANSACTION}${UNDER}${uuid}`);
        setSnackbar({
          open: true,
          message: res?.data?.message || "تم التحديث بنجاح",
          color: "rgb(14,75,35)",
        }); setButtonsDisabled(false);
      } catch (err) {
        console.log(err.response.data.message);
        setSnackbar({
          open: true,
          message:
            err?.response?.data?.message || "حدث خطأ أثناء تغيير الحالة",
          color: "red",
        });
      } finally {
        setTimeout(() => setSnackbar((prev) => ({ ...prev, open: false })), 2500);
      }
    }
  useEffect(() => {
    if (open && uuid) {
      showTransaction();
    }
  }, [open, uuid]);

  async function showTransaction() {
    setLoading(true);
        let url = "";
        console.log("UUID value:", uuid, "Type:", typeof uuid);

   if (type === "inbox") {

  url = `${BaseUrl}${TRANSACTION}${Show}${uuid.id}`;
} else if(type ==="البريد الصادر الخارجي" ||type === "outbox" ) {
  url = `${BaseUrl}${TRANSACTION}${CONTENT}${uuid.id}`;
}

 console.log(uuid.type)
    try {
      const response = await getData(url);
      console.log(response)
      if (response.success) {
        setFormData(response.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  function openImageDialog(url) {
    setImageUrl(url);
    setShowImage(true);
  }

  async function EDITTRANSCTIONSTATUS(status) {
      setEditLoading(true);
      try {
        const response = await postData(
          `${BaseUrl}${TRANSACTION}${STATUS}${uuid}`,
          {  status }
        );
        setSnackbar({
          open: true,
          message: response?.data?.message || "تم تنفيذ العملية بنجاح",
          color: "rgb(14,75,35)",
        });
      } catch (err) {
        console.log(err);
        setSnackbar({
          open: true,
          message:
            err?.response?.data?.message || "حدث خطأ أثناء تعديل الحالة",
          color: "red",
        });
      } finally {
      setEditLoading(false);
  
      // إغلاق المودال بعد ظهور الرسالة بقليل
      setTimeout(() => {
        onClose();
      }, 300);
  
      // إخفاء الرسالة بعد 2.5 ثانية
      setTimeout(() => setSnackbar((prev) => ({ ...prev, open: false })), 2500);
    }
    }

  return (
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
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="export-mails-modal"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Paper
          elevation={4}
          sx={{
           width: 800,
      height: '500px',
            p: 3,
            borderRadius: 3,
            direction: "rtl",
            outline: "none",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >

      <Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
   
    padding: "8px 16px",
  }}
>
  {/* أيقونة العين على اليسار */}
 {statusValue !== "محول"  && (
  <IconButton onClick={UnderReview} sx={{ color: "#0e4a23" }}>
    <VisibilityIcon />
  </IconButton>
)}

  {/* أيقونة الإغلاق على اليمين */}
  
  <IconButton onClick={onClose} sx={{ color: "red" }}>
    <HighlightOffIcon />
  </IconButton>
</Box>

          <Typography
            variant="h6"
            sx={{
              mb: 3,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
            }}
          >
            {formData?.form_name }
          </Typography>

          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
              <CircularProgress />
            </Box>
          ) : formData ? (
            <>
              {/* العناصر */}
<Grid container spacing={8} sx={{ flexGrow: 1 }}>
  {formData.elements.map((el, index) => (
    <Grid  item xs={12} sm={6} key={index}>
      <Box sx={{ display: "flex", alignItems: "center",}}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "700",
            color: "rgb(98,91,113)",
            whiteSpace: "nowrap",
            mr: 1,
          }}
        >
          {el.label} :
        </Typography>
        {el.type === 6 ? (
          <Checkbox
            checked={el.label === el.value}
            disabled
            sx={{
              color: el.label === el.value ? "green" : "rgba(0,0,0,0.4)",
              '&.Mui-checked': { color: "green" },
            }}
          />
        ) : (
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "700",
              color: "black",
              userSelect: "text",
            }}
          >
            {el.value || ""}
          </Typography>
        )}
      </Box>
    </Grid>
  ))}
</Grid>


{/* المرفقات */}
{formData.media?.length > 0 && (
  <>
    <Typography
      sx={{
        fontSize: "20px",
        fontWeight: "700",
       
        mb: 1,
        color: "black",
      }}
    >
      المرفقات
    </Typography>

    <Grid container spacing={2}>
      {formData.media.map((m, i) => {
        const imageUrl = m.receipt || m.image;
        const fileUrl = m.file;

        if (imageUrl) {
          return (
            <Grid item xs={12} sm={6} key={i}>
              <Button
                variant="outlined"
                onClick={() => openImageDialog(imageUrl)}
                sx={{
                  height: 130,
                  width: "100%",
                  borderStyle: "dashed",
                  border: "2px dashed rgba(197, 193, 193, 0.79)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10%",
                  backgroundColor: "white",
                }}
              >
                <NoteIcon sx={{ fontSize: 30, color: "black", mb: 1 }} />
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  صورة
                </Typography>
              </Button>
            </Grid>
          );
        }

        if (fileUrl) {
          return (
            <Grid item xs={12} sm={6} key={i}>
              <Button
                variant="outlined"
                component="a"
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  height: 130,
                  width: "100%",
                  borderStyle: "dashed",
                  border: "2px dashed rgba(197, 193, 193, 0.79)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10%",
                  backgroundColor: "white",
                  textDecoration: "none",
                }}
              >
                <InsertDriveFileIcon
                  sx={{ fontSize: 30, color: "black", mb: 1 }}
                />
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  ملف
                </Typography>
              </Button>
            </Grid>
          );
        }

        return null;
      })}
    </Grid>
  </>
)}


              {/* أزرار الرفض والتحويل في آخر المودال */}
             {((statusValue !== "محول" )) &&(<Box sx={{ display: "flex", gap: 1, mt: 2, justifyContent: "center" }}>
            <Box
              component="button"
              onClick={() => EDITTRANSCTIONSTATUS("محول")}
                  disabled={buttonsDisabled || editLoading}

              style={{
      backgroundColor: buttonsDisabled ? "rgba(9, 83, 35, 0.5)" : "rgba(9, 83, 35, 1)",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "6px 16px",
                cursor: "pointer",
                fontWeight: "700",
                fontSize: "24px",
                width: "94px",
              }}
            >
              {editLoading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                "تحويل"
              )}
            </Box>

            <Box
              component="button"
              onClick={() => EDITTRANSCTIONSTATUS("مرفوض")
               
              }
                  disabled={buttonsDisabled || editLoading}

              style={{
      backgroundColor: buttonsDisabled ? "rgba(255,0,0,0.5)" : "red",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "6px 16px",
                cursor: "pointer",
                fontWeight: "700",
                fontSize: "24px",
                width: "94px",
              }}
            >
              {editLoading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                "رفض"
              )}
            </Box>
          </Box>)}
               
            </>
          ) : (
            <Typography>لا توجد بيانات</Typography>
          )}
        </Paper>
      </Modal>

      {/* Dialog عرض الصورة */}
      <Dialog open={showImage} onClose={() => setShowImage(false)} maxWidth="md" fullWidth>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#f5f5f5",
            padding: "8px 16px",
          }}
        >
          <IconButton sx={{ color: "#0e4a23" }}>
            <VisibilityIcon />
          </IconButton>
        
        </Box>
        <DialogContent sx={{ textAlign: "center" }}>
          {loading ? (
            <CircularProgress />
          ) : imageUrl ? (
            <img
              src={imageUrl}
              alt="Receipt"
              style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: "8px" }}
            />
          ) : (
            "لا توجد صورة متاحة"
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
