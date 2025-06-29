import React from "react";
import VedioPlayer from "./VedioPlayer";

function App() {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <VedioPlayer
          title="React Basics"
          url="https://www.youtube.com/embed/Ke90Tje7VS0"
          description="Learn the basics of React in this vedio"
        />
      </div>
    </>
  );
}

export default App;
