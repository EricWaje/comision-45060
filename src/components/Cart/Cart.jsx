import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    //si quiero pintar los productos llamo al estado "cart" del contexto 😎
    const { cart, deleteAll, deleteOne } = useContext(CartContext); //cart = []
    return (
        <div>
            {cart.map((prod) => (
                <div key={prod.id}>
                    <img src={prod.img} alt={prod.title} width="80px" />
                    <div>
                        <h3>{prod.title}</h3>
                        <h3>{prod.cantidad}</h3>
                        <button onClick={() => deleteOne(prod.id)}>
                            Eliminar
                        </button>
                    </div>
                </div>
            ))}
            <h2>Total: $</h2>
            <button onClick={deleteAll}>Vaciar carrito</button>
        </div>
    );
};

export default Cart;
