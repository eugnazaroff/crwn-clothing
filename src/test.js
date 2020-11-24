import React from 'react';
import {connect} from 'react-redux';

function mapStateToProps({cart: {cartItems}}) {
    return {cartItems};
}

const Test = ({cartItems}) => {

    return (
        <div>
            {cartItems.map(item => <p>{item.name}</p>)}
        </div>
    );

}

export default connect(mapStateToProps)(Test);