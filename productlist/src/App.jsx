import React from 'react';
import Product from './Product';


function App() {
  

  return (
    <>
      <div style={{textAlign:'center',marginTop:'50px'}}>
        <h1>Products</h1>
        <Product name = "Laptop" price = {60000} />
        <Product name = "Smartphone" price = {25000} />
        <Product name = "Tablet" price = {15000} />

      </div>
    </>
  );
}

export default App;
