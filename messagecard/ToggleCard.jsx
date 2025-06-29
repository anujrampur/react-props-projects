import React, {useState} from "react";

function ToggleCard({messageA,messageB}) {
    const [showA,setShowA] = useState(true);

    return (
        <div onClick={() => setShowA(!showA)} style={{
            padding:'20px',
            margin:'10px',
            backgroundColor:'#eee',
            textAlign:'center',
            cursor:'pointer'
        }}>
            <h2 style={{backgroundColor:'red'}}>{showA ? messageA : messageB}</h2>
        </div>
    );
}

export default ToggleCard;