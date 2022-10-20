import { useState } from 'react';

const Contador = ({ stock }) => {
    const [cantidad, setCantidad] = useState(0);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const reset = () => {
        setCantidad(0);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
            }}
        >
            <p>{cantidad}</p>
            <button disabled={cantidad === stock} onClick={sumar}>
                +
            </button>
            <button onClick={reset}>Volver a 0</button>
        </div>
    );
};

export default Contador;
