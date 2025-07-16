import Card from '@mui/material/Card';
import Navgation from './navgation';



export default function SidBar(){
    return(

        <>
        
        
        
         <Card
        sx={{
          width: 200,
          height: 500,
         backgroundColor: 'white',
          borderRadius: '2%',
           height: '100vh',
           width:"20%"
          
        
        }}
      >
        
      <img src='logo.png'  style={{ width: '90px', height: '90px',marginTop:"10%" }}></img>
           
             
            <Navgation/>
             
             

      </Card>
        
        
        
        
        </>
    )
}