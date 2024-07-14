import React from "react";



const Button = ({innertext, className, handleClick}) => {
  return (
    <div>
        <button onClick={handleClick} className={className}>
            {innertext}
        </button>
    </div>
  )
}

export default Button