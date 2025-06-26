import React from "react";
import Movie from "./Movie";
function App() {
  

  return (
    <>
      <div style={{textAlign:'center',marginTop:'50px'}}>
        <h1>Movie Detail</h1>

        <Movie title = "Inception" director = "Christopher Nolan" year = {2010} />
        <Movie title = "Interstellar" director = "Christopher Nolan" year = {2014} />
        <Movie title = "Avatar" director = "James" year = {2009} />




      </div>
    </>
  );
}

export default App
