import React from "react";
function Question(props) {
    return (
        <div style={{
            border:'3px solid gray',
            padding:'20px',
            margin:'20px 0',
            borderRadius:'10px'
        }}>
            <h3>{props.question}</h3>
            <ul style={{listStyleType:'upper-alpha',paddingLeft:'20px'}}>
                <li><button>{props.optionA}</button></li>
                <li><button>{props.optionB}</button></li>
                <li><button>{props.optionC}</button></li>
                <li><button>{props.optionD}</button></li>
                </ul>






            

        </div>
    );
}
export default Question;