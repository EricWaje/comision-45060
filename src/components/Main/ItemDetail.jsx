import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Contador from './Contador';

const ItemDetail = ({ item }) => {
    //const [cant, setCant] = useState(0);
    const [show, setShow] = useState(true);

    const { addToCart, cantidadDeProducto } = useContext(CartContext);

    const onAdd = (qty) => {
        //console.log(qty);
        //setCant(qty);
        setShow(false);
        addToCart(item, qty);
    };

    const cantidad = cantidadDeProducto(item.id);

    return (
        <div className="detail">
            <img src={item.img} alt={item.title} />
            <article>
                <h2>{item.title}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus optio, necessitatibus iusto odit cupiditate a quae
                    tempora dolor earum laboriosam hic distinctio. Nemo odit
                    laboriosam quasi! Temporibus fugit omnis deleniti?
                </p>
                <h3>${item.price}.-</h3>
                {/* <h3>{show ? 'True' : 'False'}</h3> */}
                {show ? (
                    <Contador
                        stock={item.stock}
                        onAdd={onAdd}
                        initial={cantidad}
                    />
                ) : (
                    <Link to="/cart">Ir al carrito</Link>
                )}
            </article>
        </div>
    );
};

export default ItemDetail;

//const foo = (argumento) => {}
