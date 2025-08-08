import SidBar from "../../deywan/dachboard/SIDEBAR/sidbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import { CircularProgress } from "@mui/material";
import AddToQueueIcon from '@mui/icons-material/AddToQueue';import {
  Typography,
  Grid,
  Paper,
  Modal,
  Checkbox,
  StepLabel,
  TextField,
} from "@mui/material";
        import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import { useEffect, useState } from "react";
import AddSpeclist from "./event/ADDspeclist";
import { useDispatch, useSelector } from "react-redux";
import { fetchspeclise } from "../../../reducer/managerexam/showspeclice";
import EDITSpeclist from "./event/editspeclist";
import AddBoxIcon from '@mui/icons-material/AddBox';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

export default function Speclist(){
   const stateRoll = useSelector((state) => state.user);
  const isSub_exam=stateRoll.roles[0].includes("رئيس الامتحانات")
    const[addspeclist,setAddspeclist]=useState(false)
        const[editspeclist,setEditspeclist]=useState(false)
const [selectedid, setSelectedid] = useState(null);
      const state = useSelector((state) => state.fetchall);
      const selectedSpec = state.data.find(item => item.id === selectedid);

      const dispatch=useDispatch()
      console.log(state.data)
useEffect((()=>{
dispatch(fetchspeclise())
}),[])
function handleedit(id) {
  setSelectedid(id); // تخزين ID
  setEditspeclist(true);
}


    return(
        <>
        <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        direction: "rtl",
        alignItems: "flex-start",
        mt:-2,
        width: "320px",mr:-5
      }}
    >
       

        <Box
          sx={{
            flexGrow: 1,
            padding: "2%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(233,232,232,0.5)",
          }}
        >
          {/*  صف العنوان + البحث + الإشعار */}
          {/* <Appar /> */}

          <Box
            sx={{
              //  backgroundColor:"rgb(233,232,232)",
              p: 2,
              borderRadius: 5,
              maxWidth: "3000px",
              maxHeight: "2000px",
              width: "1600px",
              alignSelf: "rtl",
            }}
          >
            <Grid container spacing={2}>
              {isSub_exam && (  <Grid item xs={12} sm={6} md={3}>
                <Button
                 onClick={()=>{setAddspeclist(true)}}
                  variant="outlined"
                  fullWidth
                  sx={{
                    height: 230,
                    width: "290px",
                    borderStyle: "dashed",
                    border: "4px dashed rgb(14,75,35) ",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    borderRadius: "5%",
                  }}
                >
                 <LocalHospitalIcon  sx={{ fontSize: "56px" }}/>
                  <Typography
                    sx={{ mt: 2 }}
                    style={{ fontSize: "20px", fontWeight: "700", mt: -2 }}
                  >
                    اضافة اختصاص
                  </Typography>
                 
                </Button>
              </Grid>)}
            
              {/* add file */}
            
              {/* add ============================file============================================= */}
            
                    
              {/* أوراق المعاملات */}
             {state.isloading ?(<> 
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 300, 
        width: "100%",
      }}
    >
      <CircularProgress sx={{ color: "green" }} size={60} />
    </Box>
  </>):
             !state.loading && state.data.length === 0 ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: isSub_exam?"150px":"750px",
        width: "100%",
        color: "gray",
        textAlign: "center",
        position: "relative", // لضمان التوسيط العمودي
      }}
    >
      <ContentPasteSearchIcon sx={{ fontSize: 140, mb: 2 }} />
      <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "22px" }}>
        لا يوجد اختصاصات لعرضها في الوقت الحالي
      </Typography>

      <Typography
        variant="body1"
        sx={{ fontWeight: "bold", fontSize: "22px", mb: 3 }}
      >
        لم يتم إضافة أي اختصاص بعد.
      </Typography>

      {isSub_exam && (
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            fontSize: "22px",
            mb: 3,
            color: "rgb(14,75,35)",
          }}
        >
          يمكنك اضافة المزيد من الاختصاصات في الزر أعلاه
        </Typography>
      )}
    </Box>
) : ( state.data &&
  state.data.length > 0 &&
  state.data.map((item) => (  <Grid item xs={12} sm={6} md={3} key={item.id}>
                  <Paper
  onClick={isSub_exam ? () => handleedit(item.id) : undefined}
                 
                    variant="outlined"
                    elevation={3}
                    sx={{
                      height: 200,
                      cursor: "pointer",
                      width: "270px",
                      p: 2,
                      backgroundColor: "rgba(255, 255, 255, 0.02)",
                      border:
                       
                           "3px solid rgb(1, 53, 19)"
                          
                         
                         
                         ,
                      color:
                       
                           " rgb(1, 53, 19)"
                         ,
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "5%",
                    }}
                  >
                    {/* الأيقونة - في الأعلى اليسار */}
                    <AddBoxIcon
                      sx={{
                        position: "absolute",
                        top: 8,
                        left: 8,
                        color:
                         
                             "rgb(1, 53, 19)",
                            

                        fontSize: "64px",
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        mt: 2,
                      }}
                    >
                      {/* التاريخ */}
                     
 <Typography
                        variant="subtitle1"
                        sx={{
                          color:
                            "rgb(1, 53, 19)",
                              
                          mt: 0.5,
                          fontSize: "18px",
                          fontWeight: 700,
                        }}
                      >
                        {item.name}
                      </Typography>
                      {/* الحالة */}
                      <Typography
                        variant="body2"
                        sx={{
                          color:
                            "rgb(1, 53, 19)",
                             
                          fontWeight: 700,
                          fontSize: "18px",
                          mt: 0.5,
                        }}
                      >
                        {item.bachelors_degree}
                      </Typography>

                      {/* الاسم */}
{/*                      
                       <Typography
                        variant="subtitle1"
                        sx={{
                          color:
                            "rgb(1, 53, 19)",
                              
                          mt: 0.5,
                          fontSize: "18px",
                          fontWeight: 700,
                        }}
                      >
                        {item.date}
                      </Typography> */}
                       <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "700",
                          color:
                             "rgb(1, 53, 19)"
                             
                        }}
                        variant="body2"
                      >
 {Object.entries(item.experience_years).map(
            ([field, years]) => `${field}: ${years} سنوات`
          ).join(" | ")}                      </Typography>
                    </Box>
                    
                    
                  </Paper>
                </Grid>
             
             
             
             
        )))}
            </Grid>
          </Box>
        </Box>
     {<AddSpeclist
      open={addspeclist}
      onClose={()=>{setAddspeclist(false)}}
     onSuccess={() => dispatch(fetchspeclise())}
      />
    }
      {<EDITSpeclist
      open={editspeclist}
      onClose={()=>{setEditspeclist(false)}}
spec={state.data.find(item => item.id === selectedid)}
     onSuccess={() => dispatch(fetchspeclise())}
      />
    }
      </Box>
        
        </>
    )
}