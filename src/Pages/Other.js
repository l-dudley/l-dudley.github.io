import React, { useState } from "react";
import Test from "../Components/Test";

const Other = () => {  
    const buttonClicked = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h4>Other Page</h4>
            <div>
            </div>
            <button onClick={buttonClicked}>DO NOT PRESS</button>
        </div>
    )
}

export default Other;