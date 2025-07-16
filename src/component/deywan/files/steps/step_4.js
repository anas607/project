import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NoteIcon from '@mui/icons-material/Note';import { Typography,Checkbox,TextField} from '@mui/material';


export default function Step_4(){
return(


         
          <>
          <Box sx={{ flex: 1,mt:1}}>
            
             <Typography
                  variant="h6"
                  sx={{
                    mb: 3,fontSize:"32px",
                    fontWeight: '700',
                    color: 'black',
                    mr: 13,
                    pb: 1,
                  }}
                >
                  بيان برنامج تدريبي
                </Typography>
                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 1}}>
                            <Typography sx={{ minWidth: '120px' ,fontSize:"24px"
,fontWeight:700,}}>الاسم الأول:</Typography>
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
           <Box sx={{ display: 'flex', alignItems: 'center', mb: 1}}>
                            <Typography sx={{ minWidth: '120px' ,fontSize:"24px"
,fontWeight:700,}}>الاسم العائلة:</Typography>
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
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1}}>
                            <Typography sx={{ minWidth: '120px' ,fontSize:"24px"
,fontWeight:700,}}>الاسم الاب:</Typography>
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
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1}}>
                            <Typography sx={{ minWidth: '120px' ,fontSize:"24px"
,fontWeight:700,}}>الاختصاص :</Typography>
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
 
<Typography sx={{mt:1, mr:2 ,fontSize:"20px"
,fontWeight:700,}}> رئيسي </Typography>
<Checkbox size="small"  sx={{mr:1 ,color: " rgb(14,74,35)"}}/>
        </Box>
      
      
       <Box sx={{ display: 'flex',mr:2}}>
 
<Typography sx={{mt:0.5 ,fontSize:"20px"
,fontWeight:700}}> فرعي </Typography>
<Checkbox size="small"  sx={{mr:1,color: " rgb(14,74,35)"}}/>
        </Box>
                          </Box>
                           <Box sx={{ display: 'flex', alignItems: 'center', mb: 1}}>
                            <Typography sx={{ minWidth: '120px' ,fontSize:"20px"
,fontWeight:700}}>مقبول في :</Typography>
                           
                                <Box sx={{ display: 'flex',mr:-2 }}>
 
<Typography sx={{mt:1.2, fontSize:"20px"
,fontWeight:700}}> مفاضلة ترميمية </Typography>
<Checkbox size="small"  sx={{mr:1 ,color: " rgb(14,74,35)",mt:0.5}}/>
        </Box>
      
      
       <Box sx={{ display: 'flex',mr:2}}>
 
<Typography sx={{mt:1.2 ,fontSize:"20px"
,fontWeight:700}}> مفاضلة عامة </Typography>
<Checkbox size="small"  sx={{mr:1,color: " rgb(14,74,35)"}}/>
        </Box>
                          </Box>
                           <Box sx={{ display: 'flex', alignItems: 'center', mb: 1}}>
                            <Typography sx={{ minWidth: '120px' ,fontSize:"20px"
,fontWeight:700}}>عدد سنوات الاختصاص حسب نظام الاقامة :</Typography>
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
          /></Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: -3 }}>
                                      <Typography sx={{fontSize:"20px"
,fontWeight:700}}>ناجح في الاختبار النهائي الكتابي دورة شهر :</Typography>
                                     
                                    <Box sx={{ display: 'flex'}}>
                             
                            <Typography sx={{mt:1.2 ,fontSize:"20px"
,fontWeight:700}}> نيسان</Typography>
                            <Checkbox size="small" sx={{color: " rgb(14,74,35)",mr:1}}/>
                                    </Box>
                                  
                                  
                                 
                                     
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 6,mt:4}}>
                                              <Typography sx={{fontSize:"20px"
,fontWeight:700}}> المرفقات:
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
                                              height: 150,
                                              width: 150,
                                              borderStyle: 'dashed',
                                              border: '4px dotted rgba(160, 154, 154, 0.79)',
                                              display: 'flex',
                                              flexDirection: 'column',    
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              borderRadius: '8%',
                                              textAlign: 'center',mr:13,mt:-2
                                            }}
                                          >
                                            <NoteIcon sx={{ fontSize: 50, color: 'black', mb: 1 }} />
                                          
                                            <Typography   style={{fontSize:'20px',fontWeight:'700',mt:-2 ,color:'black'}}>صورة </Typography>
                                                                                        <Typography   style={{fontSize:'20px',color:'black',fontWeight:'700',mt:-2 ,whiteSpace: 'nowrap'}}>مصدقة عن </Typography>

                                                                                        <Typography   style={{fontSize:'20px',color:'black',fontWeight:'700',mt:-2 ,whiteSpace: 'nowrap'}}> شهادة البورد  </Typography>

                                          </Button>
                                        </label>
                                     </Typography>
                                    
                                              
                                            </Box>
          </Box></>

         
           
)}
   




      











       