import React from "react";
function MenuItem(props) {
    return (
        <div style={{
            border:'2px solid maroon',
            padding:'10px',
            margin:'10px',
            borderRadius:'10px'
        }}>
            <h2>{props.food}</h2>
            <p>Category: {props.category}</p>
            <p>Price: {props.price}</p>


        </div>
    );
}
export default MenuItem;