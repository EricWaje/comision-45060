import React from 'react';
import Contador from './Contador';

const ItemDetail = () => {
    const onAdd = (qty) => console.log(qty);
    return (
        <div>
            <img src="./logo192.png" alt="" />
            <div>
                <h2>Remera</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus optio, necessitatibus iusto odit cupiditate a quae
                    tempora dolor earum laboriosam hic distinctio. Nemo odit
                    laboriosam quasi! Temporibus fugit omnis deleniti?
                </p>
                <h3>$300</h3>
                <Contador stock={10} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;
