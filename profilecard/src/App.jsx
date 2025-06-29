import React from 'react';
import ProfileCard from './ProfileCard';


function App() {
  
  return (
    <>
      <div style={{textAlign:'center',marginTop:'50px'}}>
        <h1>User Profiles</h1>
        <ProfileCard name = "Anuj" age = {25} city = "Delhi" />
        <ProfileCard name = "Payal" age = {20} city = "Rampur" />
        <ProfileCard name = "Pranjal" age = {5} city = "Swar" />

      </div>
    </>
  );
}

export default App;
