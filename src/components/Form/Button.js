import React from 'react'

const Button = ({ text , ...rest}) => {
    return <button className="w-full py-3 mt-6 poppins btn-primary" {...rest}>{text}</button>
}

export default Button
