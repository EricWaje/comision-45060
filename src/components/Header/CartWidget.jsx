import React from 'react';
import { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { totalUnidades } = useContext(CartContext);

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <AiOutlineShoppingCart size={27} />
            <span>{totalUnidades() !== 0 && totalUnidades()}</span>
        </div>
    );
};

export default CartWidget;
