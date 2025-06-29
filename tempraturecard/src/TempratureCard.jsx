import React from "react";

function TempratureCard ({temp, unit}) {
    const getEmoji = () => {
        if (temp >= 30) return "☀️";
        if (temp >= 15) return "🌨️";
        return "❄️";
    };

    return (
        <div style={{
            border:'3px solid #ccc',
            padding:'20px',
            borderRadius:'10px',
            widows:'150px',
            textAlign:'center',
            marginBottom:'10px'
        }}>
            <h2>{temp} °{unit}</h2>
            <span style={{fontSize:'30px'}}>{getEmoji()}</span>

        </div>
    );
}
export default TempratureCard;