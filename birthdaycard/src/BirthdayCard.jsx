import React from "react";
function BirthdayCard({name, age, message}) {
    return (
        <div style={{
            border:'2px solid pink',
            padding:'20px',
            borderRadius:'15px',
            textAlign:'center'
        }}>
            <h2> 🎉Happy Birthday {name} 🎂</h2>
            <p>Age: {age}</p>
            <p>Message: {message}</p>

        </div>
    );
}
export default BirthdayCard;