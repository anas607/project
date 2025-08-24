import {
  Box,
  Typography,
  Paper,
  Modal,
  Grid,
  Button,
  Checkbox,
  IconButton,
  TextField,
  Avatar
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NoteIcon from '@mui/icons-material/Note';

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

export default function EditRequest({ open, onClose,status }) {
    const shouldShowButtons = !["مرسلة", "مرفوضة"].includes(status)

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="add-employee-modal"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Paper
          elevation={4}
          sx={{
            width: 1200,
            maxHeight: '1000px',
            height: '900px',
            p: 2,
            borderRadius: 3,
            direction: 'rtl',
            outline: 'none',
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <IconButton onClick={onClose} sx={{ backgroundColor: "rgb(71, 59, 68)", color: "rgb(233,232,232)" }}>
              <ArrowBackIcon sx={{ fontSize: '50px', transform: "rotate(180deg)" }} />
            </IconButton>
          </Box>

          <Typography
            variant="h6"
            sx={{
              mb: 3,
              fontWeight: '700',
              color: 'black',
              fontSize: '32px',
              textAlign: 'center',
              pb: 1,
            }}
          >
            بيان برنامج تدريبي
          </Typography>

          <Grid container spacing={4}>
            {/* Column 1 */}
            <Grid item xs={12} md={4}>
              <Box display="flex" flexDirection="column" gap={2}>
                <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                  الاسم الأول: <Box component="span" sx={{ color: 'black' }}>{mockDoctorData.fullName}</Box>
                </Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                  اسم الأب: <Box component="span" sx={{ color: 'black' }}>{mockDoctorData.fatherName}</Box>
                </Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                  اسم العائلة: <Box component="span" sx={{ color: 'black' }}>{mockDoctorData.lastName}</Box>
                </Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                  الرقم الوطني: <Box component="span" sx={{ color: 'black' }}>{mockDoctorData.nationalId}</Box>
                </Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                  مكان وتاريخ الولادة:
                  <Box component="span" sx={{ color: 'black' }}> {mockDoctorData.birthPlace} - {mockDoctorData.birthDate}</Box>
                </Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                  مسجل في سنة:
                  <Box component="span" sx={{ color: 'black' }}> {mockDoctorData.graduationDate} برقم {mockDoctorData.registrationNumber}</Box>
                </Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                  حاصل على ترخيص:
                  <Box component="span" sx={{ color: 'black' }}> {mockDoctorData.licenseStatus} برقم {mockDoctorData.registrationNumber}</Box>
                </Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                  بصفة:
                  <Box component="span" sx={{ color: 'black' }}> {mockDoctorData.registrationType} لدى مديرية الصحة</Box>
                </Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                  يرجى الموافقة على دخولي الاختبار النهائي لاختصاص
                </Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                  دورة شهر: نيسان <Checkbox size="small" /> تشرين الأول <Checkbox size="small" /> السنة: <TextField variant="standard" sx={{ width: '60px' }} />
                </Typography>

                <Box mt={4}>
                  <Typography sx={{ fontSize: '18px', fontWeight: 700, color: 'gray', mb: 1 }}>
                    المرفقات:
                  </Typography>
                  <Box display="flex" flexDirection="row" gap={2}>
                    <label htmlFor="upload-board">
                      <input type="file" id="upload-board" accept="image/*" style={{ display: 'none' }} />
                      <Button component="span" variant="outlined" sx={{ height: 100, width: 100, border: '2px dashed rgba(83, 79, 79, 0.79)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <NoteIcon sx={{ fontSize: 30, color: 'black' }} />
                        <Typography sx={{ fontSize: '10px' }}>شهادة البورد</Typography>
                      </Button>
                    </label>
                    <label htmlFor="upload-operations">
                      <input type="file" id="upload-operations" accept="image/*" style={{ display: 'none' }} />
                      <Button component="span" variant="outlined" sx={{ height: 100, width: 100, border: '2px dashed rgba(83, 79, 79, 0.79)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <NoteIcon sx={{ fontSize: 30, color: 'black' }} />
                        <Typography sx={{ fontSize: '10px' }}>جدول العمليات</Typography>
                      </Button>
                    </label>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Column 2 */}
            <Grid item xs={12} md={4}>
              <Box display="flex" flexDirection="column" gap={2}>
                <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                  رقم الجوال: <Box component="span" sx={{ color: 'black' }}>{mockDoctorData.phone}</Box>
                </Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                  رقم الهاتف الأرضي: <Box component="span" sx={{ color: 'black' }}>{mockDoctorData.landline}</Box>
                </Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                  عنوان السكن المعتمد: <Box component="span" sx={{ color: 'black' }}>{mockDoctorData.address}</Box>
                </Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                  الجنسية: <Box component="span" sx={{ color: 'black' }}>سوري</Box>
                </Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                  خريج جامعة: <Box component="span" sx={{ color: 'black' }}>{mockDoctorData.university}</Box>
                </Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                  تاريخ التخرج: <Box component="span" sx={{ color: 'black' }}>{mockDoctorData.graduationDate}</Box>
                </Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'gray' }}>
                  تاريخ الميلاد: <Box component="span" sx={{ color: 'black' }}>{mockDoctorData.birthDate}</Box>
                </Typography>
              </Box>
            </Grid>

            {/* Column 3 */}
            <Grid item xs={12} md={4}>
              <Box display="flex" justifyContent="flex-start">
                <Box
                  sx={{
                    width: 220,
                    height: 220,
                    borderRadius: 2,
                    border: '2px dashed rgba(83, 79, 79, 0.79)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Avatar sx={{ width: 80, height: 80 }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
              
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
                        موافق
            
                      </Button></Box>
        </Paper>
      </Modal>
    </>
  );
}
