import React from "react";

const Test = (props) => {
    return (
        <div>
            <div>A Reusable component</div>
            <div>This got passed in: {props.thing}</div>
        </div>
    )
}

export default Test;