import React from "react";
function Weather(props) {
    return (
        <div style={{
        border:'2px solid orange',
        padding:'10px',
        margin:'10px',
        borderRadius:'10px'
    }}>
    
        <h2>{props.city}</h2>
        <p>Temprature: {props.temp} °C</p>
         <p>Condition: {props.condition}</p>

    </div>
    );
}
export default Weather