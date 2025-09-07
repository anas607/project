import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import WifiOffIcon from '@mui/icons-material/WifiOff';
import SignalWifiStatusbarConnectedNoInternet4Icon from '@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4';
import { useEffect } from "react";
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';
export default function ConnectionBanner() {
  const isOnline = useSelector((state) => state.connection.isOnline);

  const handleRetry = () => {
    window.location.reload();
  };

  if (isOnline) return null;

  // useEffect(() => {
  //   const canvas = document.getElementById("canvas");
  //   if (!canvas) return;
  //   const ctx = canvas.getContext("2d");
  //   let WIDTH = (canvas.width = window.innerWidth);
  //   let HEIGHT = (canvas.height = window.innerHeight);
  //   ctx.fillStyle = "white";
  //   ctx.fillRect(0, 0, WIDTH, HEIGHT);
  //   ctx.fill();

  //   let imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
  //   let pix = imgData.data;

  //   const flickering = () => {
  //     for (let i = 0; i < pix.length; i += 4) {
  //       let color = Math.random() * 255 + 50;
  //       pix[i] = color;
  //       pix[i + 1] = color;
  //       pix[i + 2] = color;
  //     }
  //     ctx.putImageData(imgData, 0, 0);
  //   };

  //   const flickerInterval = setInterval(flickering, 30);
  //   return () => clearInterval(flickerInterval);
  // }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        background: "#fff",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Glitch Canvas */}
      <canvas
        id="canvas"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      ></canvas>

      {/* Caps / Glitch overlay */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('http://ademilter.com/caps.png')",
          backgroundSize: "cover",
          opacity: 0,
          animation: "capsFlicker 8s linear infinite",
          zIndex: 2,
        }}
      ></div>

      {/* Moving lines */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 3,
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 19%, rgba(0,0,0,0.9) 100%)",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 0,
              top: "-20%",
              width: "100%",
              height: "20%",
              backgroundColor: "rgba(0,0,0,0.12)",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              animation: `lineMove 12s linear ${i * 4}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <h1
        style={{
          zIndex: 4,
          fontSize: "200px",
          fontWeight: "bold",
          color: "transparent",
          textShadow: "0 0 30px rgba(0,0,0,0.5)",
          animation: "textFlicker 2s linear infinite",
          marginBottom: 20,
        }}
      >
        WIFI
      </h1>
      <WifiOffIcon sx={{ fontSize: "195px", color: "red", zIndex: 4, marginBottom: 20 }} />
      <div style={{display:"flex"}}>
        <WifiProtectedSetupIcon sx={{ fontSize: "105px", color: "black", zIndex: 4}}/>
         <h3 style={{          fontWeight: "700",fontSize:"36px",
 zIndex: 4, margin: "10px 0" }}>لا يوجد اتصال بالانترنت</h3>
      </div>
     
      <h3 style={{          fontWeight: "700",fontSize:"36px",
 zIndex: 4, margin: "10px 0" }}>يبدو أنك فقدت الاتصال بالشبكة</h3>

      <Button
        onClick={handleRetry}
        variant="contained"
        sx={{
          bgcolor: "#1a5204ff",
          fontWeight: "700",fontSize:"32px",
          px: 4,
          py: 1.5,
          mt: 3,
          "&:hover": { bgcolor: "#1a5204ff" },
          zIndex: 4,
        }}
      >
        معاودة الاتصال
      </Button>

      {/* Animations */}
      <style>
        {`
          @keyframes textFlicker {
            0% { text-shadow: 0 0 30px rgba(0,0,0,0.5);}
            33% { text-shadow: 0 0 10px rgba(0,0,0,0.4);}
            66% { text-shadow: 0 0 20px rgba(0,0,0,0.2);}
            100% { text-shadow: 0 0 40px rgba(0,0,0,0.8);}
          }
          @keyframes capsFlicker {
            0% {opacity:0;}
            10% {opacity:0.3;}
            20% {opacity:0.1;}
            30% {opacity:0.5;}
            40% {opacity:0;}
            50% {opacity:0.8;}
            55% {opacity:0;}
          }
          @keyframes lineMove {
            0% { top: -20%; }
            100% { top: 100%; }
          }
        `}
      </style>
    </div>
  );
}
