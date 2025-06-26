import React from 'react';

function Destination(props) {
  return (
    <div style={{
      border: '3px solid orange',
      padding: '10px',
      margin: '10px',
      borderRadius: '10px'
    }}>
      <h2>{props.place}</h2>
      <p>Country: {props.country}</p>
      <p>Main Attraction: {props.attraction}</p>
    </div>
  );
}

export default Destination;
