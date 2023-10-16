import { useRef, useState } from "react";
function CanvasImage(props) {
  const canvasRef = useRef(null);
  const [r, setR] = useState(),
    [g, setG] = useState(),
    [b, setB] = useState();

  function handleImageLoad() {
    try{

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
  
      ctx.drawImage(image, 0, 0, 200, 200);
  
      const x = 67; // 59
      const y = 80; //90
  
      const imageData = ctx.getImageData(x, y, 1, 1);
      const pixel = imageData.data;
      if(pixel[0] >=250 && pixel[1] >=250 && pixel[2] >=250){
        setR(250)
        setG(0)
        setB(0)
      }
      else{
  
        setR(pixel[0]);
        setG(pixel[1]);
        setB(pixel[2]);
      }
    }
    catch{
      console.error("error")
    }

  }
  const image = new Image();
  // The canvas has been tainted by cross-origin data 에러 방지
  image.crossOrigin = "anonymous";
  image.src = `${props.url}`;
  image.onload = handleImageLoad;

  return (
    <>
      <div
        style={{
          backgroundColor: `rgb(${r},${g},${b})`,
          width: "240px",
          height: "210px",
          position: "absolute",
          borderRadius: "10px",
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          width: "250px",
          height: "210px",
          position: "absolute",
          borderRadius: "10px",
          display:"none"
        }}
      />
    </>
  );
}

export default CanvasImage;
