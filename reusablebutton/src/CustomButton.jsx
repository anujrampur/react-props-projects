import React from "react";
function CustomButton({label, color}) {
    return (
        <button style={{
            backgroundColor:color,
            color: 'white',
            padding:'10px 20px',
            margin:'10px',
            border:'none',
            borderRadius:'5px',
            cursor:'pointer'
        }}>
            {label}

        </button>
    );
}
export default CustomButton;