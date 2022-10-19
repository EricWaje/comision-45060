import React, { useEffect, useState } from 'react';

const ItemListContainer = () => {
    const [count, setCount] = useState(0);
    const [texto, setTexto] = useState('Carla');

    useEffect(() => {
        //codigo que se ejecuta LUEGO del render y SIEMPRE que se renderice el componente
        console.log('Me renderizo siempre');
    });

    useEffect(() => {
        //codigo que se ejecuta LUEGO del render, UNA sola vez
        //llamadas asincrónicas
        console.log('Me renderizo 1 sola vez');
    }, []);

    useEffect(() => {
        //codigo que se ejecuta LUEGO del render, UNA sola vez y CADA VEZ QUE CAMBIE LA DEPENDENCIA
        console.log('Me renderizo una vez y cada vez que cambie el texto');
    }, [texto]);

    const sumar = () => {
        setCount(count + 1);
    };

    const cambiarTexto = () => {
        setTexto('Eric');
    };

    return (
        <div id="container">
            <p onClick={sumar}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus beatae veniam architecto dolor. Rerum distinctio ad
                at, officiis sapiente quas! Quidem ea sequi molestiae, ad
                voluptas repudiandae vitae molestias quos.
            </p>
            <h1>{texto}</h1>
            <button onClick={cambiarTexto}>Cambiar texto</button>
        </div>
    );
};

export default ItemListContainer;
