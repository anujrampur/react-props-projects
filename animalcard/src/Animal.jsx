import React from "react";
function Animal(props) {
    return (
        <div style={{
            border:'5px solid purple',
            padding:'10px',
            margin:'10px',
            borderRadius:'10px'
        }}>
            <h2>{props.name}</h2>
            <p style={{fontSize:'50px'}}>Sound: {props.sound}</p>

        </div>
    );

}
export default Animal;