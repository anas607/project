import {
  Box,
  CircularProgress,
  IconButton,
  DialogContent,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { getData, patchData, postData } from "../../../API/apiService";
import {
  BaseUrl,
  TRANSACTION,
  RECEPIET_IMAGE,
  UNDER,
  RECEPIET_STATUS,
} from "../../../API/api";
import { useEffect, useState } from "react";

export default function ShowReicipet({ open, onClose, uuid }) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [showImage, setShowImage] = useState(true);
  const [editLoading, setEditLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    color: "",
  });

  useEffect(() => {
    if (open && uuid) {
      fetchImage();
    }
  }, [open, uuid]);

  async function fetchImage() {
    setLoading(true);
    try {
      const response = await getData(
        `${BaseUrl}${TRANSACTION}${RECEPIET_IMAGE}${uuid}`
      );
      if (response?.data) {
        setImageUrl(response.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function UnderReview() {
    try {
      const res = await patchData(`${BaseUrl}${TRANSACTION}${UNDER}${uuid}`);
      setSnackbar({
        open: true,
        message: res?.data?.message || "تم التحديث بنجاح",
        color: "rgb(14,75,35)",
      });
    } catch (err) {
      console.log(err);
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

  async function EDITRCIPITSTATUS(status) {
    setEditLoading(true);
    try {
      const response = await postData(
        `${BaseUrl}${TRANSACTION}${RECEPIET_STATUS}`,
        { uuid, status }
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
          <IconButton onClick={UnderReview} sx={{ color: "#0e4a23" }}>
            <VisibilityIcon />
          </IconButton>

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
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                borderRadius: "8px",
              }}
            />
          ) : (
            !loading && "لا توجد صورة متاحة"
          )}

          <Box sx={{ display: "flex", gap: 1, mt: 2, justifyContent: "center" }}>
            <Box
              component="button"
              onClick={() => EDITRCIPITSTATUS("مرسلة")}
              style={{
                backgroundColor: "rgba(9, 83, 35, 1)",
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
              onClick={() => EDITRCIPITSTATUS("مرفوضة")
               
              }
              style={{
                backgroundColor: "red",
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
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
