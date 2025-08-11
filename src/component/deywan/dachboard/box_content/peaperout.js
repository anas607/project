import { Box, Paper, Typography } from "@mui/material";

import PolarOut from "../chart/polarout";
import { getData } from "../../../../API/apiService";
import  {
  BaseUrl,showExternalStatistics
} from "../../../../API/api";
import { useEffect,useState } from "react";
export default function PeaperOut() {
 const[state,setState]= useState([])
   useEffect(()=>{
     fetchInternalStatisticsSummary()
   },[])
   async function fetchInternalStatisticsSummary(){
     try{const response =await getData(`${BaseUrl}${showExternalStatistics}`)
    //  console.log(response.data)
          setState(response.data)

 }catch(err){
   console.log(err)
 }
 
   }
  

  return (
    <>
      {" "}
      <Box
        sx={{ flex: 1, backgroundColor: "white", borderRadius: 2, padding: 2 }}
      >
        <Typography
          sx={{ marginLeft: "69%", fontSize: "42px", mt: 1, fontWeight: "700" }}
          variant="h5"
        >
          البريد الخارجي
        </Typography>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          sx={{ marginTop: "-8%" }}
        >
          {/* Text content on the RIGHT */}
          <Box>
            
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "700",
                mt: 8,
                color: "rgb(14,74,35)",
              }}
              variant="h5"
            ></Typography>
              {/* {done + pending + under_review} */}
{state.done}            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                marginTop: "1%",
                marginBottom: "5%",
              }}
              variant="h5"
            >
              عدد معاملات البريد الخارجي
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <Box
                sx={{
                  width: 20,
                  height: 8,
                  borderRadius: "30%",
                  backgroundColor: "rgb(14,74,35)",

                  mr: 1,
                }}
              />
              <Typography
                sx={{ fontSize: "18px", fontWeight: "700", mr: 1 }}
                variant="h5"
              >
                
                <Box
                  component="span"
                  sx={{
                    ml: 1,
                    fontWeight: "500",
                    //  fontSize: "18px",
                    color: "#666",
                  }}
                >
{state.done}                </Box>
                من البريد المنتهي
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Box
                sx={{
                  width: 20,
                  height: 8,
                  borderRadius: "30%",
                  backgroundColor: "rgb(14,215,84)",
                  mr: 1,
                }}
              />
              <Typography
                sx={{ fontSize: "18px", mr: 1, fontWeight: "700" }}
                variant="h5"
              >
                <Box
                  component="span"
                  sx={{ ml: 1, fontWeight: "500", color: "#666" }}
                >

{state.pending}                </Box>
                من البريد انتظار
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Box
                sx={{
                  width: 20,
                  height: 8,
                  borderRadius: "30%",
                  backgroundColor: "rgb(11,141,56)",
                  mr: 1,
                }}
              />
              <Typography
                sx={{ fontSize: "18px", mr: 1, fontWeight: "700" }}
                variant="h5"
              >
                <Box
                  component="span"
                  sx={{ ml: 1, fontWeight: "500", color: "#666" }}
                >
                  {state.under_review}                </Box>

                من البريد قيد الدراسة
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mr: 22 }}>
            <PolarOut />
          </Box>
        </Box>
      </Box>
    </>
  );
}
