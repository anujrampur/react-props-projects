import React from 'react';
import Account from './Account';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bank Accounts</h1>

      <Account holder="Anuj" type="Savings" balance="₹1,50,000" />
      <Account holder="Priya" type="Current" balance="₹50,000" />
      <Account holder="Rahul" type="Salary" balance="₹2,00,000" />
    </div>
  );
}

export default App;
