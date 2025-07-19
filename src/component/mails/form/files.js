





import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { Typography, Grid ,Paper,Modal,Checkbox,StepLabel, TextField} from '@mui/material';
import NoteIcon from '@mui/icons-material/Note';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';





export default function FilesMails({open,onclose}){
    return(
        <Modal
         open={open}
          onClose={onclose}
          
          aria-labelledby="add-employee-modal"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          
          <Paper
            elevation={4}
            sx={{
              width: '800px',
              height: '775px',
              p: 2,
              borderRadius: 3,
              direction: 'rtl',
              outline: 'none',
              
            }}
          >
            <HighlightOffIcon
              onClick={onclose}
              sx={{ mr: 91, position: 'absolute' ,cursor:"pointer",fontSize:'30px' }}
            />
            <Typography
                 variant="h6"
                 sx={{
                   mb: 3,
                   fontWeight: '700',fontSize:'32px',mt:3,
                   color: 'black',
                   mr: 30,
                   pb: 2,
                 }}
               >
                 بيان برنامج تدريبي
               </Typography>
           
               <Grid container spacing={2}>
                 {/* الاسم الأول + رقم الجوال */}
                 <Grid container spacing={2}>
                   <Grid item xs={6}>
                     <Box sx={{ display: 'flex', alignItems: 'center', mb: 2}}>
                       <Typography sx={{  fontSize:"20px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>الاسم الأول:</Typography>
                        <TextField
                       variant="standard"
                       fullWidth
                       sx={{
                         width: '20%',
                         input: {
                           px: 1,
                           fontSize: "13px",
                           borderBottom: '1px dashed gray !important',
                         },
                       }}
                       InputProps={{
                         disableUnderline: true,
                         sx: {
                           
                           px: 1,
                           minHeight: '28px',
                           mt: -2,
                           mr: 1,
                         }
                       }}
                     />
                     </Box>
                   </Grid>
                   <Grid item xs={6}>
                     <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                       <Typography  sx={{  fontSize:"20px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>رقم الجوال :</Typography>
                        <TextField
                       variant="standard"
                       fullWidth
                       sx={{
                         width: '20%',
                         input: {
                           px: 1,
                           fontSize: "13px",
                           borderBottom: '1px dashed gray !important',
                         },
                       }}
                       InputProps={{
                         disableUnderline: true,
                         sx: {
                           
                           px: 1,
                           minHeight: '28px',
                           mt: -2,
                           mr: 1,
                         }
                       }}
                     />
                     </Box>
                   </Grid>
                 </Grid>
           
                 {/* اسم الأب + الهاتف الأرضي */}
                 <Grid container spacing={2}>
                   <Grid item xs={6}>
                     <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                       <Typography  sx={{  fontSize:"20px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>الاسم الأب:</Typography>
                        <TextField
                       variant="standard"
                       fullWidth
                       sx={{
                         width: '20%',
                         input: {
                           px: 1,
                           fontSize: "13px",
                           borderBottom: '1px dashed gray !important',
                         },
                       }}
                       InputProps={{
                         disableUnderline: true,
                         sx: {
                           
                           px: 1,
                           minHeight: '28px',
                           mt: -2,
                           mr: 1,
                         }
                       }}
                     />
                     </Box>
                   </Grid>
                   <Grid item xs={6}>
                     <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                       <Typography  sx={{  fontSize:"20px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>الهاتف الأرضي :</Typography>
                        <TextField
                       variant="standard"
                       fullWidth
                       sx={{
                         width: '20%',
                         input: {
                           px: 1,
                           fontSize: "13px",
                           borderBottom: '1px dashed gray !important',
                         },
                       }}
                       InputProps={{
                         disableUnderline: true,
                         sx: {
                           
                           px: 1,
                           minHeight: '28px',
                           mt: -2,
                           mr: 1,
                         }
                       }}
                     />
                     </Box>
                   </Grid>
                 </Grid>
           
                 {/* اسم العائلة + السكن */}
                 <Grid container spacing={2}>
                   <Grid item xs={6}>
                     <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                       <Typography  sx={{  fontSize:"20px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>الاسم العائلة:</Typography>
                       <TextField
                       variant="standard"
                       fullWidth
                       sx={{
                         width: '20%',
                         input: {
                           px: 1,
                           fontSize: "13px",
                           borderBottom: '1px dashed gray !important',
                         },
                       }}
                       InputProps={{
                         disableUnderline: true,
                         sx: {
                           
                           px: 1,
                           minHeight: '28px',
                           mt: -2,
                           mr: 1,
                         }
                       }}
                     />
                     </Box>
                   </Grid>
                   <Grid item xs={6}>
                     <Box sx={{ display: 'flex', alignItems: 'center', mb: -1 }}>
                       <Typography sx={{ fontSize:"20px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>
                         عنوان السكن المعتمد :
                       </Typography>
                        <TextField
                       variant="standard"
                       fullWidth
                       sx={{
                         width: '20%',
                         input: {
                           px: 1,
                           fontSize: "13px",
                           borderBottom: '1px dashed gray !important',
                         },
                       }}
                       InputProps={{
                         disableUnderline: true,
                         sx: {
                           
                           px: 1,
                           minHeight: '28px',
                           mt: -2,
                           mr: 1,
                         }
                       }}
                     />
                     </Box>
                   </Grid>
                 </Grid>
           
                 {/* الرقم الوطني */}
                 <Grid item xs={12} sm={6}>
                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                     <Typography  sx={{  fontSize:"20px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>الرقم الوطني :</Typography>
                     <TextField
                       variant="standard"
                       fullWidth
                       sx={{
                         width: '20%',
                         input: {
                           px: 1,
                           fontSize: "13px",
                           borderBottom: '1px dashed gray !important',
                         },
                       }}
                       InputProps={{
                         disableUnderline: true,
                         sx: {
                           
                           px: 1,
                           minHeight: '28px',
                           mt: -2,
                           mr: 1,
                         }
                       }}
                     />
                   </Box>
                 </Grid>
           
                 {/* باقي النموذج كما هو */}
                <Grid item xs={12}>
                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: -1 }}>
                     <Typography  sx={{  fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>  الاختصاص:</Typography>
                      <TextField
                       variant="standard"
                       fullWidth
                       sx={{
                         width: '20%',
                         input: {
                           px: 1,
                           fontSize: "13px",
                           borderBottom: '1px dashed gray !important',
                         },
                       }}
                       InputProps={{
                         disableUnderline: true,
                         sx: {
                           
                           px: 1,
                           minHeight: '28px',
                           mt: -2,
                           mr: 1,
                         }
                       }}
                     />
                   <Box sx={{ display: 'flex'}}>
            
           <Typography sx={{mt:1, mr:2 ,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}> رئيسي </Typography>
           <Checkbox size="small"  sx={{mr:-1 ,color: " rgb(14,74,35)"}}/>
                   </Box>
                 
                 
                  <Box sx={{ display: 'flex'}}>
            
           <Typography sx={{mt:1,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}> فرعي </Typography>
           <Checkbox size="small"  sx={{mr:-1,color: " rgb(14,74,35)"}}/>
                   </Box>
               
                    
                        <Typography sx={{whiteSpace: 'nowrap',fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}} >مديرية الصحة:</Typography>
                     <TextField
                       variant="standard"
                       fullWidth
                       sx={{
                         width: '20%',
                         input: {
                           px: 1,
                           fontSize: "13px",
                           borderBottom: '1px dashed gray !important',
                         },
                       }}
                       InputProps={{
                         disableUnderline: true,
                         sx: {
                           
                           px: 1,
                           minHeight: '28px',
                           mt: -2,
                           mr: -1,
                         }
                       }}
                     />
                   </Box>
                 </Grid>
           
                 <Grid item xs={12}>
                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: -1 }}>
                     <Typography sx={{ whiteSpace: 'nowrap' ,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>مقبول في :</Typography>
                    
                   <Box sx={{ display: 'flex'}}>
            
           <Typography sx={{mt:1, whiteSpace: 'nowrap' ,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}> مفاضلة ترميمية</Typography>
           <Checkbox size="small"  sx={{mr:-1 ,color: " rgb(14,74,35)"}}/>
                   </Box>
                 
                 
                  <Box sx={{ display: 'flex'}}>
            
           <Typography sx={{mt:1,whiteSpace: 'nowrap' ,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>  مفاضلة عامة</Typography>
           <Checkbox size="small"  sx={{mr:-1,color: " rgb(14,74,35)"}}/>
                   </Box>
               
                     <Typography sx={{mr:2,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>المحافظة:</Typography>
                      <TextField
                       variant="standard"
                       fullWidth
                       sx={{
                         width: '20%',
                         input: {
                           px: 1,
                           fontSize: "13px",
                           borderBottom: '1px dashed gray !important',
                         },
                       }}
                       InputProps={{
                         disableUnderline: true,
                         sx: {
                           
                           px: 1,
                           minHeight: '28px',
                           mt: -2,
                           mr: -1,
                         }
                       }}
                     />
                        <Typography sx={{fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>السنة:</Typography>
                      <TextField
                       variant="standard"
                       fullWidth
                       sx={{
                         width: '20%',
                         input: {
                           px: 1,
                           fontSize: "13px",
                           borderBottom: '1px dashed gray !important',
                         },
                       }}
                       InputProps={{
                         disableUnderline: true,
                         sx: {
                           
                           px: 1,
                           minHeight: '28px',
                           mt: -2,
                           mr: -6,
                         }
                       }}
                     />
                   </Box>
                 </Grid>
           
                 <Grid item xs={12}>
                   <Box sx={{ mt: 2 ,display: 'flex', alignItems: 'center'}}>
                     <Typography sx={{whiteSpace: 'nowrap' ,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}} >عدد سنوات الاختصاص حسب نظام الاقامة  : </Typography>
                     <TextField
                                variant="standard"
                                fullWidth
                                sx={{
                                  width: '20%',
                                  input: {
                                    px: 1,
                                    fontSize: "13px",
                                    borderBottom: '1px dashed gray !important',
                                  },
                                }}
                                InputProps={{
                                  disableUnderline: true,
                                  sx: {
                                    
                                    px: 1,
                                    minHeight: '28px',
                                    mt: -2,
                                    mr: -1,
                                  }
                                }}
                              />
                        </Box>
                 </Grid>
           
                 <Grid item xs={12}>
                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: -1 }}>
                     <Typography sx={{whiteSpace: 'nowrap' ,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>ناجح في الاختبار النهائي الكتابي دورة شهر :</Typography>
                    
                   <Box sx={{ display: 'flex'}}>
            
           <Typography sx={{mt:1,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}> نيسان</Typography>
           <Checkbox size="small" sx={{color: " rgb(14,74,35)"}}/>
                   </Box>
                 
                 
                  <Box sx={{ display: 'flex'}}>
            
           <Typography sx={{mt:1,whiteSpace: 'nowrap',fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}> تشرين الاول</Typography>
           <Checkbox size="small" sx={{color: " rgb(14,74,35)"}} />
                   </Box>
               
                     <Typography sx={{mr:2,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>السنة:</Typography>
                     <TextField
                       variant="standard"
                       fullWidth
                       sx={{
                         width: '20%',
                         input: {
                           px: 1,
                           fontSize: "13px",
                           borderBottom: '1px dashed gray !important',
                         },
                       }}
                       InputProps={{
                         disableUnderline: true,
                         sx: {
                           
                           px: 1,
                           minHeight: '28px',
                           mt: -2,
                           mr: -6,
                         }
                       }}
                     />
                   </Box>
                 </Grid>
           
                 <Grid item xs={12}>
                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: -1 }}>
                     <Typography sx={{whiteSpace: 'nowrap' ,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>ناجح في الاختبار النهائي العملي دورة شهر :</Typography>
                    <Box sx={{ display: 'flex'}}>
            
           <Typography sx={{mt:1,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}> نيسان</Typography>
           <Checkbox size="small"sx={{color: " rgb(14,74,35)"}}/>
                   </Box>
                     <Box sx={{ display: 'flex'}}>
            
           <Typography sx={{mt:1,whiteSpace: 'nowrap',fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}> تشرين الاول</Typography>
           <Checkbox size="small"sx={{color: " rgb(14,74,35)"}} />
                   </Box>
                     <Typography  sx={{mr:2,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>السنة:</Typography>
                     <TextField
                       variant="standard"
                       fullWidth
                       sx={{
                         width: '20%',
                         input: {
                           px: 1,
                           fontSize: "13px",
                           borderBottom: '1px dashed gray !important',
                         },
                       }}
                       InputProps={{
                         disableUnderline: true,
                         sx: {
                           
                           px: 1,
                           minHeight: '28px',
                           mt: -2,
                           mr: -6,
                         }
                       }}
                     />
                   </Box>
                 </Grid>
           
                 <Grid item xs={12}>
                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: -1 }}>
                     <Typography sx={{whiteSpace: 'nowrap' ,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>ناجح في الاختبار السنة الاولى  دورة شهر :</Typography>
                    <Box sx={{ display: 'flex'}}>
            
           <Typography sx={{mt:1 ,mr:1.2,ffontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}> نيسان</Typography>
           <Checkbox size="small" sx={{color: " rgb(14,74,35)"}}/>
                   </Box>
                     <Box sx={{ display: 'flex'}}>
            
           <Typography sx={{mt:1,whiteSpace: 'nowrap',fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}> تشرين الاول</Typography>
           <Checkbox size="small" sx={{color: " rgb(14,74,35)"}}/>
                   </Box>
                     <Typography  sx={{mr:2,fontSize:"18px",fontWeight:'700' ,color:'rgb(98,91,113)'}}>السنة:</Typography>
                     <TextField
                       variant="standard"
                       fullWidth
                       sx={{
                         width: '20%',
                         input: {
                           px: 1,
                           fontSize: "13px",
                           borderBottom: '1px dashed gray !important',
                         },
                       }}
                       InputProps={{
                         disableUnderline: true,
                         sx: {
                           
                           px: 1,
                           minHeight: '28px',
                           mt: -2,
                           mr: -6,
                         }
                       }}
                     />
                   </Box>
                 </Grid>
        
              {/* المرفقات */}
              <Grid item xs={12}>
               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, mt: 1 }}>
          <Typography>
            المرفقات:
            <label htmlFor="upload-image-file">
              <input
                id="upload-image-file"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
              />
              <Button
                component="span"
                variant="outlined"
                fullWidth
                sx={{
                  height: 130,
                  width: 130,
                  borderStyle: 'dashed',
                  border: '2px dashed rgba(197, 193, 193, 0.79)',
                  display: 'flex',
                  flexDirection: 'column',    
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10%',
                  textAlign: 'center',mr:9,mt:-1
                }}
              >
                <NoteIcon sx={{ fontSize: 30, color: 'black', mb: 1 }} />
                <Typography sx={{ fontSize: '16px' ,fontWeight:'700' ,color:'black'}}>
                  صورة مصدقة عن شهادة البورد
                </Typography>
              </Button>
            </label>
          </Typography>
        
        
           
                  
                </Box>
              </Grid>
            </Grid>
          </Paper>
          
        </Modal>
    )
}