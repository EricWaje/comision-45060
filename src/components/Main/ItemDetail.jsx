import React, { useState } from 'react';
import Contador from './Contador';

const ItemDetail = ({ item }) => {
    //const [cant, setCant] = useState(0);
    const [show, setShow] = useState(true);

    const onAdd = (qty) => {
        console.log(qty);
        //setCant(qty);
        setShow(false);
    };

    return (
        <div className="detail">
            <img src={item.img} alt={item.title} />
            <article>
                {show ? (
                    <h2>{item.title}</h2>
                ) : (
                    <h2>Este producto no tiene titulo</h2>
                )}
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus optio, necessitatibus iusto odit cupiditate a quae
                    tempora dolor earum laboriosam hic distinctio. Nemo odit
                    laboriosam quasi! Temporibus fugit omnis deleniti?
                </p>
                <h3>${item.price}.-</h3>
                <Contador stock={item.stock} onAdd={onAdd} />
            </article>
        </div>
    );
};

export default ItemDetail;

//const foo = (argumento) => {}
