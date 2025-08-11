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
import { getData } from "../../../API/apiService";
import { BaseUrl, Show, TRANSACTION } from "../../../API/api";

export default function EXPORTMAILS({ open, onClose, uuid }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [editLoading, setEditLoading] = useState(false);

  useEffect(() => {
    if (open && uuid) {
      showTransaction();
    }
  }, [open, uuid]);

  async function showTransaction() {
    setLoading(true);
    try {
      const response = await getData(`${BaseUrl}${TRANSACTION}${Show}${uuid}`);
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

  function EDITRCIPITSTATUS(status) {
    setEditLoading(true);
    setTimeout(() => {
      console.log("تم تغيير الحالة إلى:", status);
      setEditLoading(false);
      setShowImage(false);
    }, 1000);
  }

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="export-mails-modal"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Paper
          elevation={4}
          sx={{
            width: 900,
            maxHeight: "90vh",
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
          <HighlightOffIcon
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              cursor: "pointer",
              color: "red",
              zIndex: 10,
            }}
          />

          <Typography
            variant="h6"
            sx={{
              mb: 3,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
            }}
          >
            {formData?.form_name || "بدون اسم"}
          </Typography>

          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
              <CircularProgress />
            </Box>
          ) : formData ? (
            <>
              <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                {formData.elements.map((el, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
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
    '&.Mui-checked': {
      color: "green",
    },
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

              {/* المرفقات - كلمة المرفقات */}
              {formData.media?.length > 0 && (
                <>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "700",
                      mt: 3,
                      mb: 1,
                      color: "black",
                    }}
                  >
                    المرفقات
                  </Typography>

                  <Grid container spacing={2}>
                    {formData.media.map((m, i) => {
                      // رابط صورة (receipt أو image)
                      const imageUrl = m.receipt || m.image;
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
                              <NoteIcon
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
                                صورة
                              </Typography>
                            </Button>
                          </Grid>
                        );
                      }

                      // زر الملف يظهر إذا فيه ملف
                      if (m.file) {
                        return (
                          <Grid item xs={12} sm={6} key={i}>
                            <Button
                              variant="outlined"
                              component="a"
                              href={m.file}
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

                      // إذا ما فيه صورة ولا ملف
                      return null;
                    })}
                  </Grid>
                </>
              )}

              {/* أزرار الرفض والتحويل في آخر المودال */}
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                <Button
                  onClick={() => EDITRCIPITSTATUS("مرسلة")}
                  sx={{
                    backgroundColor: "rgba(9, 83, 35, 1)",
                    color: "white",
                    fontWeight: "700",
                    fontSize: "20px",
                    width: "48%",
                    "&:hover": { backgroundColor: "rgba(9, 83, 35, 0.9)" },
                  }}
                >
                  {editLoading ? (
                    <CircularProgress size={24} sx={{ color: "white" }} />
                  ) : (
                    "تحويل"
                  )}
                </Button>
                <Button
                  onClick={() => EDITRCIPITSTATUS("مرفوضة")}
                  sx={{
                    backgroundColor: "red",
                    color: "white",
                    fontWeight: "700",
                    fontSize: "20px",
                    width: "48%",
                    "&:hover": { backgroundColor: "darkred" },
                  }}
                >
                  {editLoading ? (
                    <CircularProgress size={24} sx={{ color: "white" }} />
                  ) : (
                    "رفض"
                  )}
                </Button>
              </Box>
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
          <IconButton onClick={() => setShowImage(false)} sx={{ color: "red" }}>
            <CloseIcon />
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
