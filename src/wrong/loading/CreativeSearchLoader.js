// import React, { useEffect, useState, useRef, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, FileText, Sparkles, Clock, CheckCircle, Shield } from "lucide-react";
// import {
//   Box,
//   Paper,
//   Typography,
//   LinearProgress,
//   Button,
//   IconButton,
//   Stack,
//   useTheme,
// } from "@mui/material";

// /**
//  * CreativeSearchLoader with Material-UI
//  * لودر كرييتف بالعربي باستخدام Material-UI + Framer Motion
//  */

// const defaultTips = [
//   "نعمّل المطابقة مع السجلات…",
  
// ];

// export default function CreativeSearchLoader({
//   query,
//   tips = defaultTips,
//   onCancel,
// }) {
//   const theme = useTheme();
//   const [tipIndex, setTipIndex] = useState(0);
//   const [pulseKey, setPulseKey] = useState(0);

//   useEffect(() => {
//     const i = setInterval(() => setTipIndex((v) => (v + 1) % tips.length), 2000);
//     const p = setInterval(() => setPulseKey((k) => k + 1), 1200);
//     return () => {
//       clearInterval(i);
//       clearInterval(p);
//     };
//   }, [tips.length]);

//   const particles = useMemo(
//     () =>
//       new Array(8).fill(0).map((_, i) => ({
//         id: i,
//         delay: (i * 0.2).toFixed(2),
//         size: Math.floor(6 + (i % 3) * 2),
//         dist: 40 + (i % 5) * 6,
//       })),
//     []
//   );

//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       minHeight="60vh"
//       sx={{
//         background: theme.palette.mode === "dark" ? "#121212" : "#fafafa",
//         p: 3,
//         borderRadius: 3,
//       }}
//     >
//       <Paper
//         elevation={6}
//         sx={{ p: 4, maxWidth: 720, width: "100%", borderRadius: 3 }}
//       >
//         {/* Header */}
//         <Stack direction="row" justifyContent="space-between" alignItems="center">
//           <Stack direction="row" spacing={2} alignItems="center">
//             <Search color={theme.palette.primary.main} />
//             <Box>
//               <Typography variant="body2" color="text.secondary">
//                 نبحث الآن
//               </Typography>
              
//             </Box>
//           </Stack>
//           <Stack direction="row" spacing={1} alignItems="center">
//             <Clock size={18} />
//             <Typography variant="caption" color="text.secondary">
//               عادةً يستغرق ثوانٍ قليلة
//             </Typography>
//           </Stack>
//         </Stack>

//         {/* Main Section */}
//         <Stack direction={{ xs: "column", md: "row" }} spacing={4} mt={4}>
//           {/* Loader Circle */}
//           <Box position="relative" mx="auto">
//             <motion.div
//               style={{
//                 width: 160,
//                 height: 160,
//                 borderRadius: "50%",
//                 border: `3px solid ${theme.palette.divider}`,
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//               animate={{ rotate: 360 }}
//               transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
//             >
//               {/* Scanning Beam */}
//               <motion.div
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   background:
//                     "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.3) 60deg, transparent 100deg)",
//                 }}
//                 animate={{ rotate: 360 }}
//                 transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
//               />

//               {/* Particles */}
//               {particles.map((p) => (
//                 <motion.span
//                   key={`${p.id}-${pulseKey}`}
//                   style={{
//                     position: "absolute",
//                     width: p.size,
//                     height: p.size,
//                     borderRadius: "50%",
//                     backgroundColor: theme.palette.text.secondary,
//                     left: `calc(50% - ${p.size / 2}px)`,
//                     top: `calc(50% - ${p.size / 2}px)`,
//                   }}
//                   initial={{ opacity: 0, x: 0, y: 0 }}
//                   animate={{
//                     opacity: [0, 1, 0],
//                     x: [0, p.dist, 0],
//                     y: [0, 0, 0],
//                   }}
//                   transition={{ repeat: Infinity, duration: 2.4, delay: Number(p.delay) }}
//                 />
//               ))}

//               {/* Document Icon */}
//               <Box
//                 position="absolute"
//                 top="50%"
//                 left="50%"
//                 sx={{ transform: "translate(-50%, -50%)" }}
//               >
//                 <FileText color={theme.palette.text.primary} size={28} />
//               </Box>
//             </motion.div>
//           </Box>

//           {/* Textual Side */}
//           <Box flex={1}>
//             <Typography variant="h6" fontWeight={600} gutterBottom>
//               <Sparkles size={20} color={theme.palette.warning.main} /> بنفتّش لك بأذكى الطرق…
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               نقارن البيانات من أكثر من مصدر،    .
//             </Typography>

//             <Box mt={3}>
//               <LinearProgress />
//             </Box>

//             <Box mt={3} display="flex" alignItems="center" gap={1}>
//               <Shield size={18} />
//               <AnimatePresence mode="wait">
//                 <motion.span
//                   key={tipIndex}
//                   initial={{ opacity: 0, y: 6 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -6 }}
//                   transition={{ duration: 0.25 }}
//                 >
//                   <Typography variant="body2">{tips[tipIndex]}</Typography>
//                 </motion.span>
//               </AnimatePresence>
//             </Box>

//             <Stack direction="row" spacing={2} mt={3} alignItems="center">
              
//               <Stack direction="row" spacing={1} alignItems="center">
//                 <CheckCircle size={18} color={theme.palette.success.main} />
//                 <Typography variant="caption" color="text.secondary">
//                   سيتم إعلامك فور ظهور النتيجة
//                 </Typography>
//               </Stack>
//             </Stack>
//           </Box>
//         </Stack>
//       </Paper>
//     </Box>
//   );
// }
