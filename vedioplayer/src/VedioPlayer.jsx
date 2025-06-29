import React from "react";
function VedioPlayer({ title, url, description}) {
    return (
        <div style={{marginBottom:'20px'}}>
            <h2>{title}</h2>
            <iframe 
            width="560"
            height="315"
            src= {url}
            title= {title}
            allowFullScreen
            style={{borderRadius:'10px'}}
            ></iframe>

            
        </div>
    );
}

export default VedioPlayer;