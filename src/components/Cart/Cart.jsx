import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    //si quiero pintar los productos llamo al estado "cart" del contexto 😎
    const { cart, deleteAll, deleteOne, totalPrecio } = useContext(CartContext); //cart = []

    if (cart.length === 0)
        return (
            <h1>
                Aún no hay productos, volvé al <Link to="/">Home</Link>
            </h1>
        );

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
            <h2>Total: {totalPrecio()}$</h2>
            <button onClick={deleteAll}>Vaciar carrito</button>
            <Link to="/checkout">Checkout</Link>
        </div>
    );
};

export default Cart;
