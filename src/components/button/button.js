import React from "react";

const Button = (props) => {
    return <button onClick={() =>
    alert(`A label desse botão é ${props.label}`)}>{props.label}</button>
}

Button.defaultProps = {
    label:"Clique aqui"
}

export default Button