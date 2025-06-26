import React from 'react';

function Account(props) {
  return (
    <div style={{
      border: '4px solid gray',
      padding: '10px',
      margin: '10px',
      borderRadius: '10px'
    }}>
      <h2>Account Holder: {props.holder}</h2>
      <p>Type: {props.type}</p>
      <p>Balance: {props.balance}</p>
    </div>
  );
}

export default Account;
