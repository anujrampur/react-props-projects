import React from 'react';
import University from './University';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Universities</h1>

      <University name="IIT Delhi" location="India" rank={2} />
      <University name="MIT" location="USA" rank={1} />
      <University name="Oxford" location="UK" rank={3} />
    </div>
  );
}

export default App;
