import Card from '@mui/material/Card';
import Navgation from './navgation';



 function SidBar(){
    return(

        <>
        
        
        
         <Card
        sx={{
           width: '381px',
          height: '960px',
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
export { SidBar as SidBarComponent };
