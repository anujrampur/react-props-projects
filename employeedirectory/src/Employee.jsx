import React from "react";
function Employee(props) {
    return (
        <div style={{
            border:'2px solid black',
            padding:'10px',
            margin:'10px',
            borderRadius:'10px'

        }}>
            <h2>{props.name}</h2>
            <p>Department: {props.department}</p>
            <p>Designation: {props.designation}</p>

        </div>
    );
}
export default Employee;