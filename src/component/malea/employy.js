import Button from '@mui/material/Button';
import { Typography, Grid ,Paper,Avatar,Box,Popper,Modal ,ListItem} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SidBar from './dachboard/SIDEBAR/sidbar';
import SatelliteIcon from '@mui/icons-material/Satellite';import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Appar from './dachboard/SIDEBAR/appar';
import { useState } from 'react';
import {InputAdornment, IconButton, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';






 const transactions = [
    { id: 1, name: 'ون بيس 1', phone: '0993489839', home: 'حلب' ,status:'فعال', avatar: 'https://randomuser.me/api/portraits/women/1.jpg'},
    { id: 2, name: 'ون بيس 2', phone: ' 0993489839', home: 'دمشق',status:'فعال' , avatar: 'https://randomuser.me/api/portraits/women/1.jpg'},
    { id: 3, name: 'ون بيس 3', phone: '0993489839', home: 'سبيستون' ,status:'غير فعال', avatar: 'https://randomuser.me/api/portraits/women/1.jpg'},
    { id: 4, name: 'زن بيس 4', phone: ' 0993489839', home: 'خالتي' ,status:'غير فعال',avatar: 'https://randomuser.me/api/portraits/women/1.jpg'},
        { id: 5, name: 'معاملة 5', phone: ' 0993489839', home: 'ادلب',status:'فعال', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 6, name: 'زن بيس 6', phone: ' 0993489839', home: 'حسكة' ,status:'غير فعال',avatar: 'https://randomuser.me/api/portraits/women/1.jpg'},

  ];





const getCardColor = (status) => {
  switch (status) {
    case 'فعال':
      return 'rgb(14, 74, 35)';   
    case 'غير فعال':
      return 'rgb(215, 34, 24)'; // أحمر فاتح
  
    default:
      return '#ffffff';
  }
};
export default function Employee_Malea(){
 const[showAddEmployee,setShowAddEmployee]=useState(false)
 const[showEditEmployee,setShowEditEmployee]=useState(false)
  const[seleectedEditEmployee,setseleectedEditEmployee]=useState(null)

 function handleAddEmployee(item){
  setShowAddEmployee(true)
  setseleectedEditEmployee(item);
  console.log(item)
 }
 function handleEditEmployee(){
  setShowEditEmployee(true)
 }
    return(
        <>
       <Box
  sx={{
    direction: "rtl",
    height: '100vh',
    
    display: "flex"
  }}
>
  
  <SidBar />

  
  <Box sx={{ flexGrow: 1, padding: '2%', display: 'flex', flexDirection: 'column' ,backgroundColor:"rgb(233,232,232)"}}>

    {/*  صف العنوان + البحث + الإشعار */}
    <Appar/>

  

    
  {/* ///////////////////////////////// */}
   
  
   
 <Box
  sx={{
   backgroundColor:"rgb(233,232,232)",
    p: 2,
    borderRadius: 5,
    maxWidth: '1000px', 
    width: '100%',
    alignSelf: 'rtl', 
  }}
>
   <Grid container spacing={1}>

  {/* زر رفع ملف */}
  <Grid item xs={12} sm={6} md={3}>
    <Button
    onClick={handleAddEmployee}
      variant="outlined"
      fullWidth
      sx={{
        height: 150,
        borderStyle: 'dashed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',borderRadius:"5%"
      }}
    >
      <CloudUploadIcon fontSize="large" />اضافة موظف
    </Button>
  </Grid>
{/* /////////////////modal for add employee////////////////// */}
<Modal
  open={showAddEmployee}
  onClose={() => setShowAddEmployee(false)}
  aria-labelledby="add-employee-modal"
  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
>
  <Paper
    elevation={4}
    sx={{
      width: 600,
      p: 4,
      borderRadius: 3,
      direction: 'rtl',
      outline: 'none',
     
    }}
  >
    {/* العنوان */}
    <HighlightOffIcon onClick={()=>{setShowAddEmployee(false)}} sx={{mr:72}}/>
    
    <Typography
      variant="h6"
      sx={{
        
        fontWeight: 'bold',
        color: "rgb(14,74,35)",
        
        display: 'inline-block',
        width: 'fit-content',
        
      }}
    >
      إضافة موظف
     
    </Typography> <hr style={{height: "4px", /* سمك الخط */
  width: "70%" ,/* عرض كامل */
  background: "linear-gradient(to left, rgb(14,74,35)20%, gray 80%)",
  border: "none",
  margin:" 1rem 0",
  borderRadius: "2px" ,marginTop:"0"}}/>


    {/* النموذج */}
    <Grid container spacing={2}>
      {/* العمود الأيمن */}
      <Grid item xs={12} sm={6}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 ,fontSize:"18px",fontWeight: 'bold'}}>
            اسم الموظف
          </Typography>
          <input type="text" style={{ width: '60%', padding: '8px' }}  />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ mb: 1,fontSize:"18px",fontWeight: 'bold' }}>
            البريد الإلكتروني
          </Typography>
          <input type="email" style={{ width: '60%', padding: '8px' }}  />
        </Box>

       <Box sx={{ mb: 3 }}>
  <Typography variant="subtitle1" sx={{ mb: 1 ,fontSize:"18px",fontWeight: 'bold'}}>
    صورة الموظف
  </Typography>

  <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
    {/* الزر المخصص لتحميل الصورة */}
    <Button
      variant="outlined"
      component="label"
      
      sx={{
        width: '65%',
        justifyContent: 'flex-start',
        textTransform: 'none',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        color: '#333',
        backgroundColor: '#fff',
      }}
    >
      تحميل صورة
      {/* input مخفي */}
      <input
        type="file"
        hidden
        accept="image/*"
       
      />
      <SatelliteIcon sx={{  mr:10, color: 'gray' }} />
    </Button>

    {/* أيقونة الصورة على أقصى اليسار */}
    
  </Box>
</Box>

        <Box>
             <Typography variant="subtitle1" sx={{ mb: 1,fontSize:"18px",fontWeight: 'bold' }}>
            كلمة السر
          </Typography>
          <input type="password" style={{ width: '60%', padding: '8px' }} />
        </Box>
      </Grid>

      {/* العمود الأيسر */}
      <Grid item xs={8} sm={6}>
        <Box sx={{ mb: 3  ,mr:-3}}>
          <Typography variant="subtitle1" sx={{ mb: 1 ,fontSize:"18px",fontWeight: 'bold'}}>
            رقم الجوال
          </Typography>
          <input type="text" style={{ width: '60%', padding: '8px' }}  />
        </Box>

        <Box sx={{ mb: 3 ,mr:-3}}>
          <Typography variant="subtitle1" sx={{ mb: 1,fontSize:"18px",fontWeight: 'bold' }}>
            العنوان
          </Typography>
          <input type="text" style={{ width: '60%', padding: '8px' }}  />
        </Box>
      </Grid>
    </Grid>

    {/* زر الإضافة */}
    <Box sx={{ mt: 4,mr:62,width:"70%" }}>
      <Button variant="contained" color="rgb(14,74,35)" sx={{borderRadius:"20px" ,width:"30%",backgroundColor:"rgb(14,74,35)",color:"white"}}>
        إضافة
      </Button>
    </Box>
  </Paper>
</Modal>
{/* /////////////////======================modal for add employee//////////////////=============== */}
{/* /////////////////modal for edit employee////////////////// */}

    <Modal
  open={showEditEmployee}
  onClose={() => setShowEditEmployee(false)}
  aria-labelledby="add-employee-modal"
  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
>
  <Paper
    elevation={4}
    sx={{
      width: 600,
      p: 4,
      borderRadius: 3,
      direction: 'rtl',
      outline: 'none',
     
    }}
  >
    {/* العنوان */}
    <HighlightOffIcon onClick={()=>{setShowEditEmployee(false)}} sx={{mr:74,mt:-1}}/>
    
    <Typography
      variant="h6"
      sx={{
       
        fontWeight: 'bold',
        color: "rgb(14,74,35)",
       
        display: 'inline-block',
        fontSize:"18px",
        mb:0
      }}
    >
      تعديل بيانات موظف
     
    </Typography> <hr style={{height: "4px", /* سمك الخط */
  width: "70%" ,/* عرض كامل */
  background: "linear-gradient(to left, rgb(14,74,35)20%, gray 80%)",
  border: "none",
  
  borderRadius: "2px",
  marginLeft:"30%",marginTop:"0"
  }}/>

<Grid container spacing={2}>
      {/* العمود الأيمن */}
      <Grid item xs={12} sm={6}>
       

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 ,color: "rgb(14,74,35)",fontSize:"18px",fontWeight: 'bold',}}>
            البريد الإلكتروني
          </Typography>
          <input type="email" style={{ width: '60%', padding: '8px' }}  />
        </Box>

       <Box sx={{ mb: 3 }}>
  <Typography variant="subtitle1" sx={{ mb: 1 ,color: "rgb(14,74,35)",fontSize:"18px",fontWeight: 'bold'}}>
    صورة الموظف
  </Typography>

  <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
    {/* الزر المخصص لتحميل الصورة */}
    <Button
      variant="outlined"
      component="label"
      
      sx={{
        width: '65%',
        justifyContent: 'flex-start',
        textTransform: 'none',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        color: '#333',
        backgroundColor: '#fff',
      }}
    >
      تحميل صورة
      {/* input مخفي */}
      <input
        type="file"
        hidden
        accept="image/*"
       
      />
      <SatelliteIcon sx={{  mr:10, color: 'gray' }} />
    </Button>

    {/* أيقونة الصورة على أقصى اليسار */}
    
  </Box>
</Box>

        <Box>
             <Typography variant="subtitle1" sx={{ mb: 1 ,color: "rgb(14,74,35)",fontSize:"18px",fontWeight: 'bold'}}>
            كلمة السر
          </Typography>
          <input type="password" style={{ width: '60%', padding: '8px' ,marginBottom:"26%"}} />
        </Box>
      </Grid>

      {/* العمود الأيسر */}
      <Grid item xs={8} sm={6}>
        <Box sx={{ mb: 3  ,mr:-3}}>
          <Typography variant="subtitle1" sx={{ mb: 1,color: "rgb(14,74,35)",fontSize:"18px",fontWeight: 'bold' }}>
            رقم الجوال
          </Typography>
          <input  
         
          
          type="text" style={{ width: '60%', padding: '8px' }}  />
        </Box>

        <Box sx={{ mb: 3 ,mr:-3}}>
          <Typography variant="subtitle1" sx={{ mb: 1,color: "rgb(14,74,35)",fontSize:"18px",fontWeight: 'bold' }}>
            العنوان
          </Typography>
          <input type="text" style={{ width: '60%', padding: '8px' }}  />
        </Box>
      </Grid>
    </Grid>

    {/* النموذج */}
    
    {/* زر الإضافة */}
    <Box sx={{ mt: 4,mr:62,width:"70%" }}>
      <Button variant="contained" color="rgb(14,74,35)" sx={{borderRadius:"20px" ,width:"30%",backgroundColor:"rgb(14,74,35)",color:"white"}}>
        تاكيد
      </Button>
    </Box>
  </Paper>
</Modal>
{/* /////////////////=========modal for edit employee=============////////////////// */}

  {/* زر word لتحميل ملف من الجهاز */}
 

              {/* أوراق موظفين */}
              {transactions.map((seleectedEditEmployee) => (
                <Grid item xs={12} sm={6} md={3} key={seleectedEditEmployee.id}>
                  <Paper
                    elevation={3}
                    sx={{
                      height: 120,
                      p: 2,
                      backgroundColor: getCardColor(seleectedEditEmployee.status),
                      
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',borderRadius:"5%"
                    }}
                  >
                    {/* الأيقونة - في الأعلى اليسار */}
                     <Avatar sx={{ position: 'absolute', top: 8, left: 8,}} src={seleectedEditEmployee.avatar} />

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                     
                      <Typography variant="body2" color="white">
                        {seleectedEditEmployee.name}
                      </Typography>

                       <Typography variant="body2" color="white">
                        {seleectedEditEmployee.phone}
                      </Typography>

  <Typography variant="body2" color="white">
                        {seleectedEditEmployee.home}
                      </Typography>

                      {/* الحالة */}
                       <Typography
                        variant="body2"
                        sx={{
                          color:
                            'white',
                          fontWeight: 600,
                          mt: 0.5,
                        }}
                      >
                        {seleectedEditEmployee.status}
                      </Typography>

                    
                    </Box>

                    {/* زر التفعيل / إلغاء */}
                       {/* الزر يظهر فقط إذا ليست "قيد الدراسة" */}
                   
                      <Box sx={{ display: 'flex', justifyContent:'space-between'}}>
                         <Button
                         onClick={handleEditEmployee}
                          variant="contained"
                          size="small"
                          sx={{
                            borderRadius: '10px',
                            backgroundColor: 
                                "white",
                            color:
                            seleectedEditEmployee.status==='فعال' ? 'rgb(14, 74, 35)' : 'rgb(215, 34, 24)'
                              ,
                            textTransform: 'none',
                            fontSize: '0.75rem',
                            px: 2,
                            py: 0.5,
                          }}
                        >
                         تعديل
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            borderRadius: '10px',
                            backgroundColor: 
                                "white",
                            color:
                            seleectedEditEmployee.status==='فعال' ? 'rgb(14, 74, 35)' : 'rgb(215, 34, 24)'
                              ,
                            textTransform: 'none',
                            fontSize: '0.75rem',
                            px: 2,
                            py: 0.5,
                          }}
                        >
                                                   {seleectedEditEmployee.status === 'فعال' ? 'إلغاء تفعيل' : 'تفعيل'}

                        </Button>
                        
                      </Box>
                    
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

</Box>



  



</>)}
   




      











       