import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartWidget = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <AiOutlineShoppingCart size={27} />
            <span>10</span>
        </div>
    );
};

export default CartWidget;
