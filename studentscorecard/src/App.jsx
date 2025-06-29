import React from 'react';
import Student from './Student';



function App() {
  

  return (
    <>
      <div style={{textAlign:'center',marginTop:'50px'}}>
        <h1>Student Results</h1>
        <Student name = "Anuj" marks = {85} />
        <Student name = "Priya" marks = {65} />
        <Student name = "Rahul" marks = {42} />


      </div>
    </>
  );
}

export default App;
