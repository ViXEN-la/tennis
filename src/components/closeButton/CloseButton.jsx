import React, {useState} from "react";
import './CloseButton.css';

export default function CloseButton({transformX, setTransformX}) {

    const closeInfo = () => {
            setTransformX(100);
    }

    return (
        <div className="close-button" style={ (transformX == 0) ? {right: "30px"} : {right: "-300px"} } >
            <a onClick={closeInfo} href="#info"> Close </a>
        </div>
    )
}