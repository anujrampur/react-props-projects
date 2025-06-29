import React from "react";
import MenuItem from "./MenuItem";

function App() {

  return (
    <div style={{textAlign:'center',marginTop:'50px'}}>
      <h1>Restaurent Menu</h1>

      <MenuItem food = "Pizza" category = "Italian" price = "₹ 400" />
      <MenuItem food = "Burger" category = "American" price = "₹ 150"  />
      <MenuItem food = "Biryani" category = "Indian" price = "₹ 250"  />

    </div>

      );
   
  
    
      
  
}

export default App
