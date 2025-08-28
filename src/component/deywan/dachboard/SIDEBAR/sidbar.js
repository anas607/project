import { Card, Drawer, Box } from "@mui/material";
import Navgation from './navgation';
import useDevice from '../../../screen/screensize';
import { useTheme, useMediaQuery } from '@mui/material';


export default function SidBar({ open, onClose }){
  const device=useDevice();
 
    return(

        <>
        
        
        
         <Card
        sx={{
          
          width: '381px',
          height: '1080',
         backgroundColor: 'white',
          borderRadius: '2px',
           
        
        }}
      >
        
      <img src='logo.png'  style={{ width: '153px', height: '151px',marginTop:"10%" }}></img>
           
             
            <Navgation/>
             
             

      </Card>
        
        
        
        
        </>
    )
}