import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {
    return (
        <div>
           {React.cloneElement(props.children, props)}
        </div>
    )
}