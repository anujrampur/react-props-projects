import React from 'react';

function University(props) {
  return (
    <div style={{
      border: '4px solid gold',
      padding: '10px',
      margin: '10px',
      borderRadius: '10px'
    }}>
      <h2>{props.name}</h2>
      <p>Location: {props.location}</p>
      <p>World Ranking: {props.rank}</p>
    </div>
  );
}

export default University;
