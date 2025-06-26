import React from "react";
import Car from "./Car";

function App() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginLeft: "600px ",
          marginTop:'50px'
        }}
      >
        <h1> Car Showroom</h1>
        <Car brand="BMW" model="X5" price="₹90 Lakhs" />
        <Car brand="Audi" model="A4" price="₹50 Lakhs" />
        <Car brand="Tesla" model="model S" price="$ 80,000" />
      </div>
    </>
  );
}

export default App;
