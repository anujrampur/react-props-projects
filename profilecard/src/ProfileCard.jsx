import React from "react";
function ProfileCard(props) {
    return (
        <div style={{
            border:'1px solid gray',
            padding:'10px',
            margin:'10px',
            borderRadius:'10px'
        }}>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>City: {props.city}</p>

        </div>
    );
}
export default ProfileCard;