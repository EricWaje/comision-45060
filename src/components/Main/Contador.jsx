import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

const Contador = ({ stock, onAdd }) => {
    const [cantidad, setCantidad] = useState(1);
    //const navigate = useNavigate();

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const agregar = () => {
        onAdd(cantidad);
        //setTimeout(()=>{
        //navigate('/cart');
        //}, 5000)
    };

    return (
        <div className="counter">
            <section>
                <p>{cantidad}</p>
                <div>
                    <button onClick={restar}>-</button>

                    <button disabled={cantidad === stock} onClick={sumar}>
                        +
                    </button>
                </div>
            </section>
            <div>
                <button className="add" onClick={agregar}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default Contador;
