import React from "react";
function Book(props) {
    return (
        <div style={{
            border:'5px solid brown',
            padding:'10px',
            margin:'10px',
            borderRadius:'10px'
        }}>
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <p>Year: {props.year}</p>

        </div>
    );
}
export default Book