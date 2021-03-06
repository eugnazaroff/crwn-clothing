import React from 'react';
import './cart-dropdown.scss'
import CustomButton from "../Custom Button/CustomButton";
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item";
import {selectCartItems} from '../../redux/cart/cart.selectors'


const CartDropdown = ({cartItems}) => {
    return (

        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>)
                    )
                }

            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};


const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})


export default connect(mapStateToProps)(CartDropdown);