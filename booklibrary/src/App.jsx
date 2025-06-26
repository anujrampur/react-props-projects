import React from 'react';
import Book from './Book';


function App() {
  
  return (
    <>
      <div style={{textAlign:'center',marginTop:'50px'}}>
        <h1>Library</h1>

        <Book title = "Atomic Habits" author = "James Clear" year = {2018}  />
        <Book title = "Deep Work" author = "Cal Newport" year = {2016}  />
        <Book title = "The Alchemist" author = "Paulo Coelho" year = {1998}  />
        
      </div>
      
    </>
  );
}

export default App
