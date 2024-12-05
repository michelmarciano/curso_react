import "./Card.css"
import React from "react";

export default (props) => {
    const { titulo } = props

    const cardStyle = {
        backgroundColor: props.color,
        borderColor: props.color
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
};