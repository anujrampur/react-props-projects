import React from 'react';
import Country from './Country';

function App() {
  
  return (
    <>
      <div style={{textAlign:'center',marginTop:'50px'}}>
        <h1>Countries</h1>
        <Country name = "India" capital = "New Delhi" population = "1.4 Billion" />
        <Country name = "USA" capital = "Washington DC" population = "330 Million" />
        <Country name = "Japan" capital = "Tokyo" population = "126 Million" />
       
      </div>
      
    </>
  );
}

export default App;
