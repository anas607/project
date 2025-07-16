
import Box from '@mui/material/Box';




// component
import SidBar from './SIDEBAR/sidbar';
import SmallBoxes from './box_content/smallboxes'
;
import Peaper from './box_content/peaper';
import PeaperOut from './box_content/peaperout';
import TableBox from './box_content/table';
import Appar from './SIDEBAR/appar';


export default function Leader(){
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
 <Box sx={{  display: 'flex', flexDirection: 'column', height: '790px',width: 'auto', maxWidth: '1204px', }}>
  
  {/* الصف العلوي - البوكسين */}  
  <Box
    sx={{
      backgroundColor: "rgb(233, 232, 232)",
      display: 'flex',
      gap: '24px',// لضبط المحاذاة
      height: '288px',
      width: 'auto',  // عشان يتوسع حسب العرض الداخلي
      justifyContent: 'flex-start', // حتى يطابق TableBox
    }}
  >
    <Box sx={{ width: '550px' }}>
      <Peaper />
    </Box>

    <Box sx={{ width: '550px' }}>
      <PeaperOut />
    </Box>
  </Box>

  {/* البوكس السفلي */}  
  <TableBox />
</Box>


</Box>




 
    

</Box>



  </Box>



   




     
      
  













       </>
    )
}