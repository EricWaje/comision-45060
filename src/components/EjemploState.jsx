import React, { useState } from 'react';

const EjemploState = () => {
    const [texto, setTexto] = useState('Eric');

    const cambiarTexto = () => {
        if (texto === 'Eric') {
            setTexto('Hola Mundo');
        } else {
            setTexto('Eric');
        }
    };

    return (
        <div>
            <h1>{texto}</h1>
            <button onClick={cambiarTexto}>Cambiar Texto</button>
        </div>
    );
};

export default EjemploState;
