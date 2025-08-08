import { Box, Button, Select, MenuItem, Typography, IconButton,Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { CircularProgress } from "@mui/material";
import SidBar from "../../../deywan/dachboard/SIDEBAR/sidbar";
import LogeOut from "../../../deywan/logout"
import ArticleIcon from '@mui/icons-material/Article';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from "react";
import { getData, postData } from "../../../../API/apiService";
import { BaseUrl, EDIT_STATUS_MAIL, PROGRAM, UPDATE_STATUS } from "../../../../API/api";
import Loading from "../../../../wrong/mails/loading";
import { useSelector } from "react-redux";


export default function ShowProgram({showdetials,setShowDetials, setShowProgram ,id }) {
  const [showNotificationPage, setShowNotificationPage] = useState(false);
    const state = useSelector((state) => state.user);
  
const isAdmin=state.roles[0].includes("المدير")

  const stateprogram=useSelector((state)=>state.fetchprogram)
const programInfo = stateprogram?.data?.find((item) => item.id === id);
const year = programInfo?.السنة || "";
const month = programInfo?.الشهر || "";   const [isloading, setisloading] = useState(false);

 const [deteilas, setDeteilas] = useState([]);
        const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  console.log("ID:", id);
 if (id !== null) {
  fetchMail();
}

}, [id]);

const fetchMail = async () => {
  setisloading(true)
  try {
const res = await getData(`${BaseUrl}${PROGRAM}${id}`);
setDeteilas(res.data);
    // console.log( res);
  setisloading(false)

  } catch (err) {
    console.error( err.response?.data || err.message);
  }
};
async function EditPROGRAMStatus(approved){
   setIsLoading(true);
    try{
const response = await postData(`${BaseUrl}${PROGRAM}${UPDATE_STATUS}${id}`,{
  approved
})
console.log(response.data)
return response.data

    }catch(err){
    console.error( err.response?.data || err.message);
    alert( err.response?.data || err.message);

    }finally{
       setIsLoading(false);
    }
  }
 if (showdetials) {
    return (
      <Box sx={{ p: 3 }}>
        {/* زر رجوع */}
       
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => setShowDetials(true)}
          sx={{
            backgroundColor: "rgb(14,74,35)",
            color: "white",
            mb: 3,
            fontWeight: "bold",
          }}
        >
          الرجوع إلى الجدول
        </Button>
      
        {/* محتوى النموذج */}
        <Typography variant="h5" fontWeight="bold">
          نموذج إضافة برنامج الامتحان
        </Typography>

        {/* هنا تضيف النموذج أو الحقول التي تريدها */}
      </Box>
    );
  }
  return (
 
    <Box sx={{ display: "flex", height: "100vh", direction: "rtl", backgroundColor: "rgb(233,232,232)" }}>
         
         <SidBar />
   
         <Box sx={{ flex: 1, p: 2 }}>
           
           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        {/* زر الرجوع */}
        
        <IconButton onClick={() => setShowProgram(false)} sx={{ backgroundColor: "rgb(71, 59, 68)", color: "rgb(233,232,232)" }}>
          <ArrowBackIcon sx={{fontSize:'50px',                  transform: "rotate(180deg)", // إذا بدك يوجه يمين
}} />
        </IconButton>

  


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

           <LogeOut/>
          </Box>
      </Box>
{/* add event */}
{/* الجملة + الأزرار على نفس السطر */}
<Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    direction: "rtl",
    mb: 2,
  }}
>
  {/* الجملة على اليمين */}
  <Typography
    variant="h6"
    sx={{
      fontSize: "24px",
      fontWeight: "700",
      color: "rgb(14,74,35)",
      whiteSpace: "nowrap",
    }}
  >
    {month && year ? `برنامج امتحان سنة : ${year}  دورة : ${month}` : "تفاصيل"}
  </Typography>

  {/* أزرار القبول والرفض على اليسار */}
  {isAdmin && (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button
       onClick={async () => {
    try {
      await EditPROGRAMStatus( "مقبول");
      alert("تم قبول البرنامج بنجاح");
     
    } catch {
      alert("حدث خطأ أثناء قبول الطلب");
    }
  }}
    variant="contained"
    sx={{
      borderRadius: "20px",
      minWidth: "120px",
      backgroundColor: "rgb(14,74,35)",
      color: "white",
      fontWeight: "700",
      fontSize: "20px"
    }}
       
      >
                   {isLoading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "قبول"} 
        
      </Button>
      <Button
       onClick={async () => {
    try {
      await EditPROGRAMStatus( "مرفوض");
      alert("تم رفض البرنامج بنجاح");
     
    } catch {
      alert("حدث خطأ أثناء قبول الطلب");
    }
  }}
        variant="contained"
        sx={{
          borderRadius: "20px",
          minWidth: "120px",
          backgroundColor: "rgba(119, 30, 7, 1)",
          color: "white",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
                           {isLoading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "رفض"} 

      </Button>
    </Box>
  )}
</Box>

{/* الخط الفاصل */}
<hr
  style={{
    height: "4px",
    width: "40%",
    background: "linear-gradient(to left, rgb(14,74,35)20%, gray 80%)",
    border: "none",
    borderRadius: "2px",
    margin: 0,
  }}
/>


                       <hr
                         style={{
                           height: "4px" /* سمك الخط */,
                           width: "40%" /* عرض كامل */,
                           background:
                             "linear-gradient(to left, rgb(14,74,35)20%, gray 80%)",
                           border: "none",
     
                           borderRadius: "2px",
    marginRight: 0, // بدلاً من marginLeft
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
             {isloading ?  (<>
                                        <TableRow>
                                          <TableCell sx={{color:"green"}}>
                                            <Loading />
                                          </TableCell>
                                        </TableRow></>) :
            deteilas.map((row, index) => (
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
                 <TableCell sx={{  color:
      row["الحالة"] === "مقبول"
        ? "green"
        : row["الحالة"] === "انتهى"
        ? "red"
        : row["الحالة"] === "انتظار "
        ? "orange"
        : "inherit", fontWeight: "700" ,fontSize:'16px'  }} align="center">
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
                 onClick={()=>{  setShowDetials(true);
  setShowProgram(false);}}
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
   

      </Box>
    </Box></Box>
  );
}
