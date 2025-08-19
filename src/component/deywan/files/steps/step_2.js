import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setElements } from '../../../../reducer/files/manual';
 // تأكد من المسار الصحيح

export default function Step_2() {
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.step.elements); // استدعاء عناصر الريدوكس

  // تحديث عنصر محدد
  const handleChange = (index, value) => {
    const newElements = [...elements];
    newElements[index] = value;
    dispatch(setElements(newElements));
  };

  // التأكد من وجود 4 عناصر افتراضيًا
  React.useEffect(() => {
    if (elements.length === 0) {
      dispatch(setElements(['', '', '', ['', '']])); // النص، الحقل الكتابي، الحقل التاريخي، متعدد الاختيارات
    }
  }, []);

  return (
    <Box sx={{ flex: 1, mt: 1 }}>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Button
          sx={{
            backgroundColor: 'rgb(14,74,35)',
            color: 'white',
            borderRadius: '5px',
            mt: 2,
            width: '20%',
            height: '69px',
            fontSize: '24px',
            fontWeight: 700,
          }}
        >
          نص كتابي
        </Button>

        <Button
          sx={{
            backgroundColor: 'rgb(14,74,35)',
            color: 'white',
            borderRadius: '5px',
            mt: 2,
            width: '20%',
            height: '69px',
            fontSize: '24px',
            fontWeight: 700,
          }}
        >
          حقل كتابي
        </Button>

        <Button
          sx={{
            backgroundColor: 'rgb(14,74,35)',
            color: 'white',
            borderRadius: '5px',
            mt: 2,
            width: '20%',
            height: '69px',
            fontSize: '24px',
            fontWeight: 700,
          }}
        >
          حقل تاريخ
        </Button>

        <Button
          sx={{
            backgroundColor: 'rgb(14,74,35)',
            color: 'white',
            borderRadius: '5px',
            mt: 2,
            width: '30%',
            height: '69px',
            fontSize: '24px',
            fontWeight: 700,
          }}
        >
          اختيار من متعدد
        </Button>
      </Box>

      {/* نص كتابي */}
      <Box sx={{ mt: 2 }}>
        <Typography sx={{ fontSize: '24px', mb: 1, fontWeight: 700 }}>
          نص كتابي:
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Typography sx={{ color: 'rgb(30,30,30)', fontSize: '24px', fontWeight: 700, mt: 0.9 }}>
            النص
          </Typography>
          <input
            value={elements[0] || ''}
            onChange={(e) => handleChange(0, e.target.value)}
            style={{
              height: '40px',
              width: '65%',
              border: '2px solid rgba(71, 59, 68, 1)',
              borderRadius: '5px',
            }}
          />
        </Box>
        <hr
          style={{
            height: '2px',
            border: 'none',
            marginRight: -9,
            width: '100%',
            background: 'rgba(206, 199, 199, 0.43)',
          }}
        />
      </Box>

      {/* حقل كتابي */}
      <Typography sx={{ fontSize: '24px', mb: 1, fontWeight: 700 }}>حقل كتابي:</Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Typography sx={{ color: 'rgb(30,30,30)', fontSize: '24px', fontWeight: 700, mt: 0.5 }}>
          العنوان
        </Typography>
        <input
          value={elements[1] || ''}
          onChange={(e) => handleChange(1, e.target.value)}
          style={{
            height: '40px',
            width: '65%',
            border: '2px solid rgba(71, 59, 68, 1)',
            borderRadius: '5px',
          }}
        />
      </Box>
      <hr
        style={{
          height: '2px',
          border: 'none',
          marginRight: -9,
          width: '100%',
          background: 'rgba(206, 199, 199, 0.43)',
        }}
      />

      {/* حقل تاريخ */}
      <Typography sx={{ fontSize: '24px', mb: 1, fontWeight: 700 }}>حقل تاريخ:</Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Typography sx={{ color: 'rgb(30,30,30)', fontSize: '24px', fontWeight: 700, mt: 0.5 }}>
          العنوان
        </Typography>
        <input
          value={elements[2] || ''}
          onChange={(e) => handleChange(2, e.target.value)}
          style={{
            height: '40px',
            width: '65%',
            border: '2px solid rgba(71, 59, 68, 1)',
            borderRadius: '5px',
          }}
        />
      </Box>
      <hr
        style={{
          height: '2px',
          border: 'none',
          marginRight: -9,
          width: '100%',
          background: 'rgba(206, 199, 199, 0.43)',
        }}
      />

      {/* اختيار من متعدد */}
      <Typography sx={{ fontSize: '24px', mb: 1, fontWeight: 700 }}>اختيار من متعدد:</Typography>
      {['الخيار1', 'الخيار2'].map((label, idx) => (
        <Box sx={{ display: 'flex', gap: 2, mb: idx === 0 ? 2 : 0 }} key={idx}>
          <Typography sx={{ color: 'rgb(30,30,30)', fontSize: '24px', fontWeight: 700, mt: 0.5 }}>
            {label}
          </Typography>
          <input
            value={elements[3]?.[idx] || ''}
            onChange={(e) => {
              const newMulti = [...(elements[3] || ['', ''])];
              newMulti[idx] = e.target.value;
              handleChange(3, newMulti);
            }}
            style={{
              height: '40px',
              width: '65%',
              border: '2px solid rgba(71, 59, 68, 1)',
              borderRadius: '5px',
            }}
          />
        </Box>
      ))}
      <hr
        style={{
          height: '2px',
          border: 'none',
          marginRight: -9,
          width: '100%',
          background: 'rgba(206, 199, 199, 0.43)',
        }}
      />
    </Box>
  );
}
