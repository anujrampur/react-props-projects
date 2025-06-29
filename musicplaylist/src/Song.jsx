import React from 'react';

function Song(props) {
  return (
    <div style={{
      border: '4px solid darkblue',
      padding: '10px',
      margin: '10px',
      borderRadius: '10px'
    }}>
      <h2>{props.title}</h2>
      <p>Artist: {props.artist}</p>
      <p>Duration: {props.duration}</p>
    </div>
  );
}

export default Song;
