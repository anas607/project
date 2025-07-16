
import Box from '@mui/material/Box';




// component
import SidBar from './SIDEBAR/sidbar';
import SmallBoxes from './box_content/smallboxes'
;
import Peaper from './box_content/peaper';
import PeaperOut from './box_content/peaperout';
import TableBox from './box_content/table';
import Appar from './SIDEBAR/appar';


export default function Leader_Shahadat(){
    return(
        <>
        
       
    <Box
  sx={{
    direction: "rtl",
    height: '100vh',
    backgroundColor:"rgb(233, 232, 232)",
    display: "flex"
  }}
>
  {/* السايد بار */}
  <SidBar />

  {/* المحتوى الرئيسي */}
  <Box sx={{ flexGrow: 1, padding: '2%', display: 'flex', flexDirection: 'column' }}>

    {/*  صف العنوان + البحث + الإشعار */}
    <Appar/>

   
  
        <Box sx={{ display: 'flex', height: '100%', flexGrow: 1, gap: 2 }}>
  {/* بوكس الموظفين (يسار الصفحة) */}
  
     <SmallBoxes/>
  {/* البوكسين على اليمين */}
  <Box sx={{ width: '180%', display: 'flex', flexDirection: 'column', height: '100%' }}>
  
  
  <Box sx={{ flex: 2 }}>
    <Box sx={{
      backgroundColor: "rgb(233, 232, 232)",
      display: 'flex',
      gap: 2, // المسافة بين البوكسين
      height: '80%',
    }}>
     
      <Peaper/>
     <PeaperOut/>
    </Box>
  </Box>

  {/* السفلي - يأخذ الباقي */}
  <TableBox/>
 
</Box>

</Box>




 
    

</Box>



  </Box>



   




     
      
  













       </>
    )
}