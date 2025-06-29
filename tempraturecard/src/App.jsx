import React from "react";
import TempratureCard from "./TempratureCard";

function App() {
  

  return (
    <>
      <div style={{padding:'20px'}}>
        <TempratureCard temp = {32} unit = "C" />
         <TempratureCard temp = {12} unit = "C" />
        
      </div>
      
    </>
  )
}

export default App;
