import React from 'react';
import Animal from './Animal';

function App() {
  

  return (
    <>
      <div style={{textAlign:'center',marginTop:'50px'}}>
        <h1>Animals</h1>
        <Animal name = "Dog" sound = "Woof 🐕" />
        <Animal name = "Cat" sound = "Meow 🐈‍⬛" />
        <Animal name = "Cow" sound = "Moo 🐄" />
         
      </div>
      
    </>
  );
}

export default App
