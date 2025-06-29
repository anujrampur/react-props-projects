import React from "react";
function Car(props) {
    return (
        <div style={{
            border:'2px solid darkgreen',
            padding:'10px',
            margin:'10px',
            borderRadius:'10px',
            

        }}>
            <h2>{props.brand}</h2>
            <p>Model:{props.model}</p>
            <p>Price:{props.price}</p>

        </div>
    );
}
export default Car;