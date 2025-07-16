import Button from '@mui/material/Button';
import { Typography, Grid ,Paper,Avatar,Box,Popper,Modal ,ListItem} from '@mui/material';
import SidBar from './dachboard/SIDEBAR/sidbar';
import SatelliteIcon from '@mui/icons-material/Satellite';
import Appar from './dachboard/SIDEBAR/appar';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


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
export default function Employee(){
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
    maxWidth: '3000px', 
    width: '1600px',
    alignSelf: 'rtl', 
  }}
>
   <Grid container spacing={2}>

  {/* زر رفع ملف */}
  <Grid item xs={12} sm={6} md={3}>
    <Button
    onClick={handleAddEmployee}
      variant="outlined"
      fullWidth
      sx={{
        height: 200,
        borderStyle: 'dashed',border:'4px dashed rgb(14,74,35)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',borderRadius:"5%"
      }}
    >
      <Box position="relative" display="inline-flex" width={40} height={40}>
      <AccountBoxIcon sx={{fontSize:'32px'}} /> 
       <AddIcon
        sx={{
          position: 'absolute',
          bottom: -3,
          right: -5,
          fontSize: 19,color:'white',
          backgroundColor:  'rgb(14, 74, 35)',
          borderRadius: '50%',border:"3px solid rgb(209, 218, 213)"
        }}
      /></Box>
      <Typography sx={{fontSize:'20px',fontWeight:'700'}}>      اضافة موظف
</Typography>
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
      width: '677px',
      height: '765px',
      p: 4,
      borderRadius: 3,
      direction: 'rtl',
      outline: 'none',
     
    }}
  >
    {/* العنوان */}
    <HighlightOffIcon onClick={()=>{setShowAddEmployee(false)}} sx={{mr:80 ,fontSize:'30px',cursor:'pointer'}}/>
    
    <Typography
      variant="h6"
      sx={{
        
        fontWeight: '700',
        color: "rgb(14,74,35)",
        fontSize:'24px',
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
          <Typography variant="subtitle1" sx={{ mb: 1 ,fontSize:"24px",fontWeight: '700'}}>
            اسم الموظف
          </Typography>
          <input type="text" style={{ width: '60%',height:'30px', padding: '8px', border: '1px solid #ccc', }}  />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ mb: 1,fontSize:"24px",fontWeight: '700' }}>
            البريد الإلكتروني
          </Typography>
          <input type="email" style={{ width: '60%',height:'30px', padding: '8px', border: '1px solid #ccc', }}  />
        </Box>

       <Box sx={{ mb: 3 }}>
  <Typography variant="subtitle1" sx={{ mb: 1 ,fontSize:"24px",fontWeight: '700'}}>
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
             <Typography variant="subtitle1" sx={{ mb: 1,fontSize:"24px",fontWeight: '700' }}>
            كلمة السر
          </Typography>
          <input type="password" style={{ width: '60%',height:'30px', padding: '8px', border: '1px solid #ccc', }} />
        </Box>
      </Grid>

      {/* العمود الأيسر */}
      <Grid item xs={8} sm={6}>
        <Box sx={{ mb: 3  ,mr:-3}}>
          <Typography variant="subtitle1" sx={{ mb: 1 ,fontSize:"24px",fontWeight: '700'}}>
            رقم الجوال
          </Typography>
          <input type="text" style={{ width: '60%',height:'30px', padding: '8px' , border: '1px solid #ccc',}}  />
        </Box>

        <Box sx={{ mb: 3 ,mr:-3}}>
          <Typography variant="subtitle1" sx={{ mb: 1,fontSize:"24px",fontWeight: '700' }}>
            العنوان
          </Typography>
          <input type="text" style={{ width: '60%',height:'30px', padding: '8px', border: '1px solid #ccc', }}  />
        </Box>
      </Grid>
    </Grid>

    {/* زر الإضافة */}
    <Box sx={{ mt: 20,mr:62,width:"70%" }}>
      <Button variant="contained" color="rgb(14,74,35)" sx={{borderRadius:"20px" ,width:"40%",backgroundColor:"rgb(14,74,35)",color:"white",fontSize:'24px',fontWeight:'700'}}>
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
      width: '677px',
      height: '765px',
      p: 4,
      borderRadius: 3,
      direction: 'rtl',
      outline: 'none',
     
    }}
  >
    {/* العنوان */}
    <HighlightOffIcon onClick={()=>{setShowEditEmployee(false)}} sx={{mr:80,mt:-1 ,cursor:'pointer',fontSize:'30px'}}/>
    
    <Typography
      variant="h6"
      sx={{
       
       fontSize:"24px",fontWeight: '700' ,
        color: "rgb(14,74,35)",
       
        display: 'inline-block',
       
       
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
          <Typography variant="subtitle1" sx={{ mb: 1 ,fontSize:"24px",fontWeight: '700' ,mt:2}}>
            البريد الإلكتروني
          </Typography>
          <input type="email" style={{ width: '60%',height:'30px', padding: '8px' , border: '1px solid #ccc',}}  />
        </Box>

       <Box sx={{ mb: 3 }}>
  <Typography variant="subtitle1" sx={{ mb: 1 ,fontSize:"24px",fontWeight: '700'}}>
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
             <Typography variant="subtitle1" sx={{ mb: 1 ,fontSize:"24px",fontWeight: '700' }}>
            كلمة السر
          </Typography>
          <input type="password" style={{ width: '60%',height:'30px', padding: '8px' , border: '1px solid #ccc',}} />
        </Box>
      </Grid>

      {/* العمود الأيسر */}
      <Grid item xs={8} sm={6}>
        <Box sx={{ mb: 3  ,mr:-3}}>
          <Typography variant="subtitle1" sx={{ mb: 1,fontSize:"24px",fontWeight: '700' ,mt:2 }}>
            رقم الجوال
          </Typography>
          <input  
         
          
          type="text" style={{ width: '60%',height:'30px', padding: '8px' , border: '1px solid #ccc',}}  />
        </Box>

        <Box sx={{ mb: 3 ,mr:-3}}>
          <Typography variant="subtitle1" sx={{ mb: 1,fontSize:"24px",fontWeight: '700' }}>
            العنوان
          </Typography>
          <input type="text" style={{ width: '60%',height:'30px', padding: '8px' , border: '1px solid #ccc',}}  />
        </Box>
      </Grid>
    </Grid>

    {/* النموذج */}
    
    {/* زر الإضافة */}
    <Box sx={{ mt: 34,mr:62,width:"70%" }}>
      <Button variant="contained" color="rgb(14,74,35)" sx={{borderRadius:"20px" ,width:"40%",backgroundColor:"rgb(14,74,35)",color:"white",fontSize:"24px",fontWeight: '700' }}>
        تاكيد
      </Button>
    </Box>
  </Paper>
</Modal>
{/* /////////////////=========modal for edit employee=============////////////////// */}

  
 

              {/* أوراق موظفين */}
              {transactions.map((seleectedEditEmployee) => (
                <Grid item xs={12} sm={6} md={3} key={seleectedEditEmployee.id}>
                  <Paper
                    elevation={3}
                    sx={{
                      height: 178,
                      p: 2,
                      backgroundColor: getCardColor(seleectedEditEmployee.status),
                      
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',borderRadius:"5%"
                    }}
                  >
                    {/* الأيقونة - في الأعلى اليسار */}
                     <Avatar sx={{width:64,height:64, position: 'absolute', top: 17, left: 8,}} src={seleectedEditEmployee.avatar} />

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                     
                      <Typography variant="body2" color="white" sx={{fontSize:"14px",fontWeight:"700",mt:1 }}>
                        {seleectedEditEmployee.name}
                      </Typography>

                       <Typography variant="body2" color="white" sx={{fontSize:"14px",fontWeight:"700",mt:1}}>
                        {seleectedEditEmployee.phone}
                      </Typography>

  <Typography  sx ={{fontSize:"14px" ,fontWeight:"700",mt:1}} variant="body2" color="white"> 
                        {seleectedEditEmployee.home}
                      </Typography>

                      {/* الحالة */}
                       <Typography
                        variant="body2"
                        sx={{
                          color:
                            'white',
                          fontWeight: 700,fontSize:"14px",
                          mt: 1,
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
                          
                          sx={{
                            borderRadius: '15px',
                            backgroundColor: 
                                "white", fontSize:'12px'  ,fontWeight:'700',
                            color:
                            seleectedEditEmployee.status==='فعال' ? 'rgb(14, 74, 35)' : 'rgb(215, 34, 24)'
                              ,
                            textTransform: 'none',
                            width:'30%',height:'34px',
                            px: 2,
                            py: 0.5,
                          }}
                        >
                         تعديل
                        </Button>
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: '15px',
                            backgroundColor: 
                                "white",
                            color:
                            seleectedEditEmployee.status==='فعال' ? 'rgb(14, 74, 35)' : 'rgb(215, 34, 24)'
                              ,whiteSpace:'wrap',
                            textTransform: 'none',
 width:'30%',height:'34px', fontSize:'12px'  ,fontWeight:'700',                         px: 2,
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
   




      











       