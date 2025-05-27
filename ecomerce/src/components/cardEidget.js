import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <button className="btn btn-outline-secondary mx-2">
            <FontAwesomeIcon icon={faShoppingCart} /> 0
        </button>
    );
};

export default CartWidget;
