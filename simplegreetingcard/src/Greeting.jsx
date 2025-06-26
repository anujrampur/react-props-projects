import React from "react";
function Greeting(props) {
    return (
        <h2>Good {props.time}, {props.name}! 🌞</h2>
    );
}
export default Greeting;