import React from "react";
function Student (props) {
    const result = props.marks >=50 ? "Pass ✅" : "Fail ❌";
    return (
        <div style={{
            border:'2px solid blue',
            padding:'10px',
            margin:'10px',
            borderRadius:'10px'
        }}>
            <h2>{props.name}</h2>
            <p>Marks: {props.marks}</p>
            <p>Result: {result}</p>

        </div>
    );

}

export default Student;