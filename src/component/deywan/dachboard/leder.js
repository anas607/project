
import Box from '@mui/material/Box';




// component
import SidBar from './SIDEBAR/sidbar';
import SmallBoxes from './box_content/smallboxes'
;
import Peaper from './box_content/peaper';
import PeaperOut from './box_content/peaperout';
import TableBox from './box_content/table';
import Appar from './SIDEBAR/appar';
import { useSelector } from 'react-redux';
import Colum from './SIDEBAR/Colum';


export default function Leader(){
    const state = useSelector((state) => state.user);
const isAdmin=state.roles?.some(role => role === "المدير")


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
  <SidBar />

  <Box sx={{ flexGrow: 1, padding: '2%', display: 'flex', flexDirection: 'column' }}>

    <Appar/>

   
  
        <Box sx={{ display: 'flex', height: '100%', flexGrow: 1, gap: 2 }}>
  {/* بوكس الموظفين (يسار الصفحة) */}
  {isAdmin?<Colum/>:<SmallBoxes/>}
     
  {/* البوكسين على اليمين */}
 <Box sx={{  display: 'flex', flexDirection: 'column', height: '790px',width: 'auto', maxWidth: '1604px', }}>
  
  {/* الصف العلوي - البوكسين */}  
  <Box
  sx={{
    backgroundColor: "rgb(233, 232, 232)",
    display: 'flex',
    gap: '24px',
    width: 'auto',  
    justifyContent: 'flex-start', 
    mt: 3,borderRadius:'20%',
    mb:5
  }}
>
  <Box sx={{ width: '1280px', flex: 1, minHeight: '200px',borderRadius:'4%' }}>
    <Peaper />
  </Box>

  <Box sx={{ width: '1280px', flex: 1, minHeight: '200px',borderRadius:'4%' }}>
    <PeaperOut />
  </Box>
</Box>

  

  <TableBox />
</Box>


</Box>

</Box>



  </Box>


       </>
    )
}