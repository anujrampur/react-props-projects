import React from "react";
function CalendarCard({day, date, event}) {
    return (
        <div style={{
            border:'2px solid #ccc',
            padding:'15px',
            borderRadius:'8px',
            width:'150px',
            textAlign:'center'
        }}>
            <h3>{day}</h3>
            <h1>{date}</h1>
            <p>{event}</p>

        </div>
    );
}
export default CalendarCard;