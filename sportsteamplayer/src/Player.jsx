import React from "react";
function Player(props) {
    return (
        <div style={{
        border:'3px solid violet',
        padding:'10px',
        margin:'10px',
        borderRadius:'10px'
    }}>
        <h2>{props.name}</h2>
        <p>Team: {props.team}</p>
        <p>Position: {props.position}</p>

    </div>
    );
}
export default Player;