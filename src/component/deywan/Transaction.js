import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Checkbox, FormControlLabel, Typography, Box } from '@mui/material';
import { useState } from 'react';

export default function Transaction(){



const [open, setOpen] = useState(true) // افتح الفورم تلقائياً
  const handleClose = () => setOpen(false);

    return(
        <>
        
        
        
        
         <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      scroll="paper"
    >
      <DialogTitle>
        بيان برنامج تدريبي
        <Button
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
          size="small"
          variant="outlined"
        >
          X
        </Button>
      </DialogTitle>
      <DialogContent dividers>
        {/* هنا تحط الحقول */}
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="الاسم الأول" variant="outlined" size="small" />
          <TextField label="الأب" variant="outlined" size="small" />
          <TextField label="اللقب" variant="outlined" size="small" />
          <TextField label="الرقم الوطني" variant="outlined" size="small" />
          <TextField label="الجنسية" variant="outlined" size="small" />
          <TextField label="الاختصاص" variant="outlined" size="small" />
          <FormControlLabel control={<Checkbox />} label="رئيسي" />
          <FormControlLabel control={<Checkbox />} label="فرعي" />
          {/* أكمل باقي الحقول حسب النموذج */}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>إغلاق</Button>
        <Button variant="contained">حفظ</Button>
      </DialogActions>
    </Dialog>
        </>
    )
}