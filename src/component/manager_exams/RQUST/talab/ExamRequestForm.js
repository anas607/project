import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Paper,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  MenuItem,
  Select,TextField
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const requestTypes = {
  internal: {
    title: "طلب ترشيح للامتحان داخل القطر",
    attachments: [
      "صورة الهوية الشخصية",
      "صورة المرفق",
      "بيان بالوظائف بدون أجر",
      "موافقة عميد الكلية على الترشيح",
      "كشف علامات التخرج الأصلي",
      "صورة بيان خدمة",
    ],
  },
  external: {
    title: "طلب ترشيح للامتحان خارج القطر",
    attachments: ["صورة الهوية الشخصية", "صورة جواز السفر"],
  },
  excuse: {
    title: "طلب اعتذار عن الامتحان",
    attachments: [],
  },
};

const mockDoctorData = {
  fullName: "محمد ملهم",
  fatherName: "خالد",
  lastName: "الزقيمي",
  phone: "+963987653402",
  landline: "0112217566",
  nationalId: "1234567890",
  birthPlace: "دمشق",
  birthDate: "2000-09-17",
  university: "دمشق",
  graduationDate: "2013-09-17",
  registrationNumber: "1809",
  specialization: "جراحة عامة",
  degree: "طبيب بشري",
  address: "دمشق - القنوات",
  mainSpecialization: true,
  licenseStatus: "مؤقت",
  registrationType: "رئيسي",
  sessionMonth: "تشرين الأول",
  sessionYear: "2025",
};

function AttachmentCard({ label }) {
  const [open, setOpen] = useState(false);

  return (
    <Paper elevation={3} sx={{ p: 2, textAlign: "center", cursor: "pointer" }} onClick={() => setOpen(true)}>
      <Typography>📎 {label}</Typography>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">{label}</Typography>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <img
            src="https://via.placeholder.com/400"
            alt={label}
            style={{ width: "100%", marginTop: 10 }}
          />
        </DialogContent>
      </Dialog>
    </Paper>
  );
}

export default function ExamRequestForm() {
  const [requestType, setRequestType] = useState("internal");
  const { title, attachments } = requestTypes[requestType];

  return (
    <>
     <Box textAlign="center" mb={3}>
          <Typography variant="h6" fontWeight="bold" color="black">
            {title}
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Avatar
              alt="Doctor"
              src="https://via.placeholder.com/150"
              sx={{ width: 120, height: 120, mx: 'auto' }}
            />
          </Grid>

          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              {Object.entries(mockDoctorData).map(([key, value]) => (
                <Grid item xs={12} sm={6} key={key}>
                  <TextField
                    fullWidth
                    label={key}
                    value={value.toString()}
                    variant="standard"
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1">نوع الطلب:</Typography>
          <Select
            value={requestType}
            onChange={(e) => setRequestType(e.target.value)}
            fullWidth
            sx={{ mt: 1 }}
          >
            <MenuItem value="internal">داخل القطر</MenuItem>
            <MenuItem value="external">خارج القطر</MenuItem>
            <MenuItem value="excuse">طلب اعتذار</MenuItem>
          </Select>
        </Box>

        {/* المرفقات */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle1" mb={1}>المرفقات:</Typography>
          <Grid container spacing={2}>
            {attachments.length > 0 ? (
              attachments.map((att, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Button
                    component="span"
                    variant="outlined"
                    fullWidth
                    sx={{
                      height: 100,
                      borderStyle: 'dashed',
                      border: '2px dotted rgba(83, 79, 79, 0.79)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '5%',
                      textAlign: 'center',
                    }}
                  >
                    {/* <NoteIcon sx={{ fontSize: 30, color: 'black', mb: 1 }} /> */}
                    <Typography sx={{ fontSize: '10px' }}>{att}</Typography>
                  </Button>
                </Grid>
              ))
            ) : (
              <Typography color="text.secondary">لا يوجد مرفقات مطلوبة لهذا الطلب.</Typography>
            )}
          </Grid>
        </Box>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="success">قبول</Button>
          <Button variant="contained" color="error">رفض</Button>
        </Box></>
  );
}
