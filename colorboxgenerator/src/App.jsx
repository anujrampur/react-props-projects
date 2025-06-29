import React from "react";
import ColorBox from "./ColorBox";
function App() {
  

  return (
    <>
      <div style={{padding:'20px'}}>
        <h1>Color Boxes</h1>
        <ColorBox bgColor = "#ff4444" text = "Red"  />
        <ColorBox bgColor = "#44ff44" text = "Green"  />
        <ColorBox bgColor = "#4444ff" text = "Blue"  />

      </div>
      
    </>
  );
}

export default App
