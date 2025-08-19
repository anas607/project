import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SortIcon from '@mui/icons-material/Sort';
import { Typography, MenuItem,
  Select,
  InputLabel,
  FormControl} from '@mui/material';
import { useEffect, useState } from 'react';
import { getData } from '../../../../API/apiService';
import { BaseUrl, FETCHOFFICE } from '../../../../API/api';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedOfficeId, setTransactionCost, setTransactionName } from '../../../../reducer/files/manual';


export default function Step_1(){
   const dispatch = useDispatch();
  const { transactionName, transactionCost, selectedOfficeId } = useSelector(state => state.step);

   const [offices, setOffices] = useState([]);
      useEffect(() => {
        
          fetchOffices();
       
      }, []); 
      const fetchOffices = async () => {
        try {
          const res = await getData(`${BaseUrl}${FETCHOFFICE}`);
          setOffices(res.data[0]);
      console.log(res.data[0])
          // console.log(setOffices) 
        } catch (err) {
          console.error("فشل في جلب المكاتب:", err);
        }
      };
return(


         
          <>
          <Box sx={{ flex: 1,mt:2}}>
            <Box sx={{display:"flex", gap:2 }}><Typography sx={{color:"rgb(30,30,30)" ,fontSize:"24px"
,fontWeight:700 ,mt:0.5
            }}>   اسم المعاملة 
             
            </Typography>
            <input value={transactionName}
      onChange={(e) => dispatch(setTransactionName(e.target.value))}style={{height:"40px" ,width:'65%',border:'2px solid rgba(71, 59, 68, 1) ',borderRadius:'5px'}}/>
            </Box>
            
            <hr style={{ height: "2px",border: "none",
            width: "100%",background:"rgba(206, 199, 199, 0.43)"}}/>
            <Box sx={{display:"flex", gap:2 }}><Typography sx={{color:"rgb(30,30,30)" ,fontSize:"24px"
,fontWeight:700 ,mt:0.5
            }}>   رسوم المعاملة 
             
            </Typography>
                        <input   value={transactionCost}
      onChange={(e) => dispatch(setTransactionCost(e.target.value))} style={{height:"40px" ,width:'65%',border:'2px solid rgba(71, 59, 68, 1) ',borderRadius:'5px'}}/>
</Box> <hr style={{ height: "2px",border: "none",
            width: "100%",background:"rgba(206, 199, 199, 0.43)"}}/>
            <Typography sx={{color:"rgb(30,30,30)" ,fontSize:"24px"
,fontWeight:700 ,mt:0.5
            }}>   مسار  المعاملة 
             
            </Typography>
             <Box sx={{display:"flex", gap:2 }}>
             <Button
             
              sx={{
                backgroundColor: ' rgb(14,74,35)',
                color: 'white',
                borderRadius: '10px',mt:2,width:'30%',height:'69px',fontSize:"24px"
,fontWeight:700,
                minWidth: '100px',
                
              }}
            >
              المالية
            </Button>
            <KeyboardBackspaceIcon sx={{mr:-2,fontSize:'49px' ,color:' rgb(14,74,35)' ,mt:3}}/>

             <Button
             
              sx={{
                backgroundColor: ' rgb(14,74,35)',
                color: 'white',
                borderRadius: '10px',mt:2,mr:-2,width:'30%',height:'69px',fontSize:"24px"
,fontWeight:700,
                minWidth: '100px',
               
              }}
            >
              الديوان
            </Button>
            <KeyboardBackspaceIcon sx={{mr:-2 ,fontSize:'49px' ,color:' rgb(14,74,35)',mt:3}}/>
           
            
                      
            
                       
               <FormControl sx={{
  minWidth: 300,
  border: '4px dashed rgb(14,74,35)',
  borderRadius: '8px',
  px: 1,
  py: 0.5
}}>
  <Select
    value={selectedOfficeId}
      onChange={(e) => dispatch(setSelectedOfficeId(e.target.value))}
    displayEmpty
    renderValue={(selected) => {
      if (!selected) {
        return (
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
            <SortIcon fontSize="32px" />
            <KeyboardBackspaceIcon
              sx={{
                fontSize: '32px',fontWeight:'700',
                transform: 'rotate(270deg)',
                color: 'rgb(14,74,35)',
              }}
            />
            <h3 sx={{
                fontSize: '32px',fontWeight:'700',  color: 'rgb(14,74,35)'}}>            إضافة مسار
</h3>
          </Box>
        );
      }
      const office = offices.find((o) => o.id === selected);
      return office ? office.name : '';
    }}
    fullWidth
  >
    {offices.map((office) => (
      <MenuItem key={office.id} value={office.id}>
        {office.name}
      </MenuItem>
    ))}
  </Select>
</FormControl>


                     
            </Box>
              <hr style={{ height: "2px",border: "none",
            width: "100%",background:"rgba(206, 199, 199, 0.43)"}}/>
          </Box></>

         
           
)}
   




      











       