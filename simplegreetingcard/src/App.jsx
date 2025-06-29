import React from "react";
import Greeting from "./Greeting";

function App() {
  

  return (
    <>
      <div style={{textAlign:'center',marginTop:'50px'}}>
        <Greeting name = "Anuj" time = "Morning" />
        <Greeting name = "Payal" time = "Afternoon" />
        <Greeting name = "Pranjal" time = "Evening" />

      </div>
    </>
  );
}

export default App
