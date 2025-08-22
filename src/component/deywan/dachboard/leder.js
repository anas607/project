
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
import { useState } from 'react';


export default function Leader(){
    const state = useSelector((state) => state.user);
const isAdmin=state.roles?.some(role => role === "المدير")
  const [searchTerm, setSearchTerm] = useState(""); // هنا نخزن قيمة البحث


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

    <Appar onSearch={setSearchTerm}/>

   
  
        <Box sx={{ display: 'flex', height: '100%', flexGrow: 1, gap: 2 }}>
  {/* بوكس الموظفين (يسار الصفحة) */}
  {isAdmin?<Colum/>:<SmallBoxes searchTerm={searchTerm} />}
     
  {/* البوكسين على اليمين */}
 <Box sx={{  display: 'flex', flexDirection: 'column', height: '1020px',width: 'auto', maxWidth: '1604px', }}>
  
  {/* الصف العلوي - البوكسين */}  
<Box
  sx={{
    backgroundColor: "rgba(218, 215, 215, 1)",
    display: 'flex',
    gap: '24px',
    height: '500px',
    width: '100%',  
    justifyContent: 'flex-start', 
    mt: 3,
    borderRadius:'20%',
    mb:7
  }}
>
  <Box sx={{ flex: 1, height: '100%', borderRadius:'4%', display: 'flex', flexDirection: 'column' }}>
    <Peaper />
  </Box>

  <Box sx={{ flex: 1, height: '100%', borderRadius:'4%', display: 'flex', flexDirection: 'column' }}>
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