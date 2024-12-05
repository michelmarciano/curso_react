import React from "react";

export default (props) => {
    const {min, max} = props
    const numero_aleatorio = Math.floor(Math.random() * (max - min) + min);
    return (
        <div>
            <h1>Aleatorio</h1>
            
            {numero_aleatorio}
        </div>
    )
}