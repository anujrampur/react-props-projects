import React from 'react';
import Destination from './Destination';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Destinations</h1>

      <Destination place="Paris" country="France" attraction="Eiffel Tower" />
      <Destination place="Agra" country="India" attraction="Taj Mahal" />
      <Destination place="New York" country="USA" attraction="Statue of Liberty" />
    </div>
  );
}

export default App;
