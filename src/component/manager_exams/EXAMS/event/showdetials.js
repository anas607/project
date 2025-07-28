import { Box, Button, Select, MenuItem, Typography, IconButton,Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SidBar from "../../../deywan/dachboard/SIDEBAR/sidbar";

import ArticleIcon from '@mui/icons-material/Article';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AddIcon from '@mui/icons-material/Add';



const outboxRows = [
  {
    id: "#789541",
    mailTitle: "  98989",
    officeName: "قسم الإحصاء",
    receiverName: "د. سامي حسن",
    receiverPhone: "+963993222111",
    type:"شهادة ",
    dateSubmitted: "1/5/2025",
    dateSent: "2/5/2025",
  }
];
export default function ShowDetials({showdetials, setShowDetials, setShowProgram  }) {

  return (
    <Box sx={{ display: "flex", height: "100vh", direction: "rtl", backgroundColor: "rgb(233,232,232)" }}>
         
         <SidBar />
   
         <Box sx={{ flex: 1, p: 2 }}>
           
           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        {/* زر الرجوع */}
        <IconButton onClick={() => {
  setShowDetials(false);
  setShowProgram(true); // أو فقط setShowDetials(false) حسب التصميم
}}
 sx={{ backgroundColor: "rgb(71, 59, 68)", color: "rgb(233,232,232)" }}>
          <ArrowBackIcon sx={{fontSize:'50px',                  transform: "rotate(180deg)", // إذا بدك يوجه يمين
}} />
        </IconButton>

        {/* إشعارات وخروج */}
          {/* الزرين */}
          <Box sx={{ display: "flex", gap: 3 }}>
            <IconButton
            //   ref={notifBtnRef}
            //   onClick={handleToggleNotifications}
              sx={{
                border: "1px solid rgba(212, 208, 212, 0.31)",
                borderRadius: "50px",
                width: "64px",
                height: "64px",
                padding: "8px",
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.secondary.main,
                position: "relative",
              }}
            >
              <NotificationsIcon sx={{ fontSize: "30px" }} />
              <Box
                sx={(theme) => ({
                  position: "absolute",
                  top: 18.4,
                  right: 18,
                  width: 7,
                  height: 7,
                  bgcolor: "white",
                  borderRadius: "50%",
                  border: `2px solid ${theme.palette.primary.main}`,
                })}
              />
            </IconButton>

            <IconButton
            //   onClick={() => setShowLogOut(true)}
              sx={{
                border: "1px solid rgba(212, 208, 212, 0.31)",
                borderRadius: "50px",
                padding: "8px",
                width: "64px",
                height: "64px",
                backgroundColor: "rgb(71, 59, 68)",
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              <PowerSettingsNewIcon sx={{ fontSize: "30px" }} />
            </IconButton>
          </Box>
      </Box>

      {/* select للدورة والسنة */}
       <Typography
                         variant="h6"
                         sx={{
                           fontSize: "24px",
                           fontWeight: "700",
                           color: "rgb(14,74,35)",
      marginLeft: "90%",
                           display: "inline-block",whiteSpace:'nowrap'
                         }}
                       >
تفاصيل                       </Typography>{" "}
                       <hr
                         style={{
                           height: "4px" /* سمك الخط */,
                           width: "40%" /* عرض كامل */,
                           background:
                             "linear-gradient(to left, rgb(14,74,35)20%, gray 80%)",
                           border: "none",
     
                           borderRadius: "2px",
                           marginLeft: "90%",
                           marginTop: "0",
                         }}
                       />

      {/* جدول أو محتوى آخر */}
      <Box>
      
               <TableContainer sx={{ backgroundColor: "transparent", boxShadow: "none" , width: "1690px",mt:2,mr:1}}>
            <Table  sx={{Width: '100%'}}>
             <TableHead sx={{ width: "1690px", height:'88px'}}>
            <TableRow sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                الاختصاص 
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px' }}>
                 اليوم
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                 التاريخ
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                 الساعة
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                 الحالة
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                عدد المرشحين
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                عدد المتقدمين
              </TableCell>
             <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
                نسبة النجاح
              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
بسيط              </TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
متوسط              </TableCell>
<TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'20px'  }}>
صعب              </TableCell>
             <TableCell align="center" sx={{ color: "white", fontWeight: "700" ,fontSize:'16px'  }}>
                {/* أيقونة */}
              </TableCell>
            </TableRow>
          </TableHead>
          
          
          
          <TableBody>
            {outboxRows.map((row, index) => (
              <TableRow key={index} sx={{ borderBottom: "3px solid rgb(14, 74, 35)"}}>
          
                <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">{row.الاختصاص}</TableCell>
               <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 { row.اليوم}
                </TableCell>
                <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 { row.التاريخ}
                </TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 {  row.الساعة}
                </TableCell>
                 <TableCell sx={{  fontWeight: "700" ,fontSize:'16px'  }} align="center">
                 { row["الحالة"] ?? "—" }
                </TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }}align="center">
                 { row["عدد المرشحين"] ?? "—"}
                </TableCell>
                 <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }}align="center">
                 { row["عدد المتقدمين"] ?? "—"}
                </TableCell> <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }}align="center">
                 { row["نسبة النجاح"] ?? "—" }
                </TableCell> <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }}align="center">
                  {row.بسيط}
                </TableCell> <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }}align="center">
                  {row.متوسط}
                </TableCell>
                <TableCell  sx={{  fontWeight: "700" ,fontSize:'16px'  }}align="center">{row.صعب}</TableCell>
               
               <TableCell align="center">
                
                  <IconButton
  onClick={() => setShowDetials(true)}
                    sx={{
                      border: "1px solid rgba(212, 208, 212, 0.31)",
                      borderRadius: "50px",ml:-3,
                      width: 52,
                      height: 52,
                      padding: "8px",
                      backgroundColor: (theme) => theme.palette.primary.main,
                      color: (theme) => theme.palette.secondary.main,
                    }}
                  >
                    <ArticleIcon sx={{ fontSize: 30 }} />
                    <ArrowUpwardIcon
                      sx={{
                        position: "absolute",
                       top: 24,
              right: 10,
                        fontSize: 6,
                        backgroundColor: "white",
                        color: "black",
                        transform: "rotate(60deg)",
                        borderRadius: "50%",
                        padding: "2px",border: "3px solid rgb(14, 74, 35)",
                      }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
         


          </TableBody>
          
          
          
            </Table>
          </TableContainer>
    

        {/* يمكنك وضع جدول MUI هنا */}
      </Box>
    </Box></Box>
  );
}
