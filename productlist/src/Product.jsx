import React from "react";
function Product(props) {
    return (
        <div style={{
            border:'10px solid green',
            padding:'10px',
            margin:'10px',
            borderRadius:'10px'
        }}>
            <h2>{props.name}</h2>
            <p>Price: ₹ {props.price}</p>

        </div>
    );
}
export default Product;