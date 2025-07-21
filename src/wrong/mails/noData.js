import {
  TableCell,
  TableRow,
  
} from "@mui/material";

export default function NoData(){
    return(
        <>
        <TableRow sx={{ borderBottom: "3px solid rgb(14, 74, 35)" ,width:'100%'}}>
            <TableCell colSpan={8} align="center" sx={{fontSize:'24px', fontWeight: '700' }} >
              لا توجد بيانات حالياً
            </TableCell>
          </TableRow>
        
        
        
        </>
    )
}