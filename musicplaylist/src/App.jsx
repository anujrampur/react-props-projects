import React from 'react';
import Song from './Song';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>My Playlist</h1>

      <Song title="Believer" artist="Imagine Dragons" duration="3:24" />
      <Song title="Shape of You" artist="Ed Sheeran" duration="4:02" />
      <Song title="Levitating" artist="Dua Lipa" duration="3:23" />
    </div>
  );
}

export default App;
