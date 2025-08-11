import Card from '@mui/material/Card';
import Navgation from './navgation';
import useDevice from '../../../screen/screensize';


export default function SidBar(){
  const device=useDevice();
  const getCardStyles = () => {
    if (device === 'mobile') {
      return {
        width: '100%',
        height: 'auto',
        borderRadius: '0',
        display: 'none', // إخفاء الـ sidebar في الجوال
      };
    } else if (device === 'tablet') {
      return {
        width: '250px',
        height: '100vh',
        borderRadius: '2px',
      };
    } else {
      // desktop
      return {
        width: '381px',
        height: '955px',
        borderRadius: '2px',
      };
    }
  };
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