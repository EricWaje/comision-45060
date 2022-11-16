import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/firebaseConfig';

const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [orderId, setOrderId] = useState('');
    //crear un estado de loading

    const { cart, totalPrecio, deleteAll } = useContext(CartContext);
    const totalCarrito = totalPrecio();

    const enviarDatos = (e) => {
        e.preventDefault();
        //console.log({ name, lastName });
        const objOrden = {
            buyer: {
                name,
                lastName,
                telefono: 123456,
                direccion: 'Calle fals 123',
                email: 'ericprofe@coder.com',
            },
            items: cart,
            //cart -> [id, title,stock,price,img,etc]
            //cartReducido -> [id,title,price]
            total: totalCarrito,
            date: serverTimestamp(),
        };

        const orderCollection = collection(db, 'orders');

        addDoc(orderCollection, objOrden)
            .then((res) => {
                setOrderId(res.id);
                deleteAll();
            })
            .catch((error) => {
                console.log('Hubo un error', error);
            });
        // .finally(()=>{
        //cambio el estado a false
        // })
        //jJm3DW99HuP4uJHH8r0m;
    };

    const handleName = (e) => setName(e.target.value);

    const handleLastName = (e) => setLastName(e.target.value);

    if (orderId) {
        return (
            <h1>Gracias por tu compra tu número de seguimiento es {orderId}</h1>
        );
    }

    return (
        <div
            style={{
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <form action="" onSubmit={enviarDatos}>
                <input
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    onChange={handleName}
                    value={name}
                />
                <input
                    type="text"
                    placeholder="Apellido"
                    name="apellido"
                    onChange={handleLastName}
                    value={lastName}
                />
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;

//const eventos = () => {}

//onClick = {eventos};
