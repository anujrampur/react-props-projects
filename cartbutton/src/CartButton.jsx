import React from "react";
function CartButton({name, price}) {
    const handleClick = () => {
        console.log("Name:", name);
        console.log("Price:", price);
        alert(`${name} added to cart ₹${price}`);

    };
    return (
        <button onClick={handleClick} style={{
            padding:'10px 20px',
            backgroundColor:'green',
            color:'white',
            border:'none',
            borderRadius:'5px',
            cursor:'pointer'
        }}>
            Add {name} to cart

        </button>

    );

}
export default CartButton;