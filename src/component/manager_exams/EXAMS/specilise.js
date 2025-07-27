import SidBar from "../../deywan/dachboard/SIDEBAR/sidbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AddIcon from "@mui/icons-material/Add";
import {
  Typography,
  Grid,
  Paper,
  Modal,
  Checkbox,
  StepLabel,
  TextField,
} from "@mui/material";
import NoteIcon from "@mui/icons-material/Note";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useEffect, useState } from "react";
import AddSpeclist from "./event/ADDspeclist";
import { useDispatch, useSelector } from "react-redux";
import { fetchspeclise } from "../../../reducer/managerexam/showspeclice";



export default function Speclist(){
    const[addspeclist,setAddspeclist]=useState(false)
      const state = useSelector((state) => state.fetchall);
      const dispatch=useDispatch()
      console.log(state.data)
useEffect((()=>{
dispatch(fetchspeclise())
}),[])
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
              {/* زر رفع ملف */}
              <Grid item xs={12} sm={6} md={3}>
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
                  <Box
                    position="relative"
                    display="inline-flex"
                    width={40}
                    height={40}
                  >
                    <TextSnippetIcon sx={{ fontSize: 50 }} />
                    <AddIcon
                      sx={{
                        position: "absolute",
                        top: 2,
                        right: 2,
                        fontSize: 16,
                        backgroundColor: "rgb(233, 218, 218)",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{ mt: 2 }}
                    style={{ fontSize: "20px", fontWeight: "700", mt: -2 }}
                  >
                    اضافة اختصاص
                  </Typography>
                 
                </Button>
              </Grid>
              {/* add file */}
            
              {/* add ============================file============================================= */}
            
                    
              {/* أوراق المعاملات */}
             {state.data && state.data.length > 0 && state.data.map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item.id}>
                  <Paper
                    // onClick={() => {
                    //   setShowFile(true);
                    // }}
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
                    <NoteIcon
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
              ))}
            </Grid>
          </Box>
        </Box>
     {<AddSpeclist
      open={addspeclist}
      onClose={()=>{setAddspeclist(false)}}
     onSuccess={() => dispatch(fetchspeclise())}
      />
    }
      </Box>
        
        </>
    )
}