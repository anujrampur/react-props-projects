import React from "react";
function Movie(props) {
    return (
        <div style={{
            border:'2px solid teal',
            padding:'10px',
            margin:'10px',
            borderRadius:'10px'
        }}>
            <h2>{props.title}</h2>
            <p>Director: {props.director}</p>
            <p>Year: {props.year}</p>

        </div>
    );
}
export default Movie;