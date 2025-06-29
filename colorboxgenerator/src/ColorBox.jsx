import React from "react";
function ColorBox({bgColor,text}) {
    return (
        <div style={{
            backgroundColor:bgColor,
            color:'#fff',
            padding:'20px',
            margin:'10px 0',
            borderRadius:'10px',
            textAlign:'center'
        }}>

            <h2>{text}</h2>

        </div>

    );
}
export default ColorBox;