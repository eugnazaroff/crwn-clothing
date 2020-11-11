import React from 'react';
import {connect} from 'react-redux';
import './header.scss'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase-utils'
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const Header = ({currentUser, hidden}) => {
    console.log(currentUser)
    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo'/>

            </Link>

            <div className="options">
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {currentUser ? (
                    <div className='option' onClick={ () => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className='option' to='/login'>
                        SIGN IN
                    </Link>
                )}
                <CartIcon/>
            </div>
            {
                hidden ? null : <CartDropdown/>
            }

        </div>
    );
};

const mapStateToProps = ({user: {currentUser}, cart:{hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);