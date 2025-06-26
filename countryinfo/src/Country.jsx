import React from "react";
function Country(props) {
    return (
        <div style={{
            border:'5px solid navy',
            padding:'10px',
            margin:'10px',
            borderRadius:'10px'
        }}>
            <h2>{props.name}</h2>
            <p>Capital: {props.capital}</p>
            <p>Population: {props.population}</p>

        </div>
    );
}
export default Country;