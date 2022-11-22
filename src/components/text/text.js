import React from "react";
import "./text.css"

const Text = ({ children, textColor,textTransform,bcColor }) => {
    return (
        <div className="text" style={{ color: textColor, textTransform: textTransform, backgroundColor: bcColor}}>
            {children}
        </div>
    )
}

export default Text