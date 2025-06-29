import React from "react";
function Track({name, artist, audioSrc}) {
    return (
        <div style={{border:'3px soloid #aaa',padding:'20px',borderRadius:'10px'}}>
            <h2>{name}</h2>
            <p>Artist: {artist}</p>
            <audio controls src={audioSrc} />

        </div>
    );
}
export default Track;