import React from 'react';
import './CustomButton.scss'
const CustomButton = ({children, ...otherProps}) => {
    return (
        <button className='button' {...otherProps}>
            {children}
        </button>
    );
};

export default CustomButton;