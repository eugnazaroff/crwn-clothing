import React from 'react';
import './cart-dropdown.scss'
import CustomButton from "../Custom Button/CustomButton";

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items"/>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

export default CartDropdown;