import React from 'react';
import './CustomButton.scss'
const CustomButton = ({children, inverted, ...otherProps}) => {
    return (
        <button className={`button ${inverted ? "inverted" : ''} `} {...otherProps}>
            {children}
        </button>
    );
};

export default CustomButton;