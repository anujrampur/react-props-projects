import React from "react";
import Player from "./Player";
function App() {
  
  return (
    <>
      <div style={{textAlign:'center',marginTop:'50px'}}>
        <h1>Players</h1>

        <Player name = "Virat Kohli" team = "India" position = "Batsman" />
        <Player name = "Ronaldo" team = "Portugal" position = "Forward" />
        <Player name = "Dhoni" team = "india" position = "Captain" />

        


      </div>
    </>
  );
}

export default App;
