import React from "react";
import BirthdayCard from "./BirthdayCard";

function App() {
  
  return (
    <>
      <div style={{padding:'20px'}}>
        <BirthdayCard name = "Priya" age = {25} message = "Wishing you joy and success!" />
        
      </div>
      
    </>
  );
}

export default App
