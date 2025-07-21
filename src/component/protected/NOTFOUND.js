import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#2F3242",
        position: "relative",
        overflow: "hidden",
        color: "#fff",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {/* SVG الخلفي */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 380,
          height: 500,
          zIndex: 1,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 837 1045"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M353,9 L626.66,170 L626.66,487 L353,642 L79.34,487 L79.34,170 L353,9 Z"
              stroke="#007FB2"
              strokeWidth="6"
              className="animate-float delay0"
            />
            <path
              d="M78.5,529 L147,569.19 L147,648.31 L78.5,687 L10,648.31 L10,569.19 L78.5,529 Z"
              stroke="#EF4A5B"
              strokeWidth="6"
              className="animate-float delay1"
            />
            <path
              d="M773,186 L827,217.54 L827,279.64 L773,310 L719,279.64 L719,217.54 L773,186 Z"
              stroke="#795D9C"
              strokeWidth="6"
              className="animate-float delay2"
            />
            <path
              d="M639,529 L773,607.85 L773,763.09 L639,839 L505,763.09 L505,607.85 L639,529 Z"
              stroke="#F2773F"
              strokeWidth="6"
              className="animate-float delay3"
            />
            <path
              d="M281,801 L383,861.03 L383,979.21 L281,1037 L179,979.21 L179,861.03 L281,801 Z"
              stroke="#36B455"
              strokeWidth="6"
              className="animate-float delay4"
            />
          </g>
        </svg>
      </Box>

      {/* الرسالة */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(100px, -50%)",
          zIndex: 2,
          width: 380,
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "52px", mb: 4, fontWeight:'700' }}>
          404
        </Typography>
        <Typography variant="h6"> يبدو انك بحثت عن رابط غير موجود او معطل لان هذه الصفحة غير موجودة  </Typography>
        <Stack direction="row" spacing={2} mt={4}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "rgb(14,74,35)",width:"60%" ,"&:hover": { backgroundColor: "#5A5C6C" } }}
            onClick={() => navigate(-1)}
          >
            عُد إلى الخلف
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "rgb(14,74,35)", width:"60%","&:hover": { backgroundColor: "#5A5C6C" } }}
            onClick={() => navigate("/dashbord")}
          >
            الصفحة الرئيسية
          </Button>
        </Stack>
      </Box>

      <style>
        {`
        @keyframes float {
          100% {
            transform: translateY(20px);
          }
        }
        .animate-float {
          animation: float 1s infinite ease-in-out alternate;
        }
        .delay0 { animation-delay: 0s; }
        .delay1 { animation-delay: 0.2s; }
        .delay2 { animation-delay: 0.4s; }
        .delay3 { animation-delay: 0.6s; }
        .delay4 { animation-delay: 0.8s; }
      `}
      </style>
    </Box>
  );
}
