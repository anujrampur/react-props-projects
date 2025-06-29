import React from "react";
import Weather from "./Weather";

function App() {
  

  return (
    <>
    <div style={{textAlign:'center',marginTop:'50px'}}>
      <h1>Weather Report</h1>

      <Weather city = "Delhi" temp ={40} condition = "Sunny ☀️ " />
      <Weather city = "Mumbai" temp ={32} condition = "Humid 💦 " />
      <Weather city = "Shimla" temp ={15} condition = "Cool 😎 " />

    </div>
      
        
    </>
  );
}

export default App
