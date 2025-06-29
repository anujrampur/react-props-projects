import { useState } from 'react'

import Welcome from './Welcome';

function App() {
  
  return (
    <>
      <div style={{textAlign:'center',marginTop:'50px'}}>
        <h1>React Props and components</h1>
        <Welcome name = "Anuj" />
         <Welcome name = "Payal" />
          <Welcome name = "Pranjal" />

      </div>
    </>
  );
}

export default App;
