import React, { useEffect, useState } from 'react';

const EjemploApis = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {data.map((producto) => (
                <div key={producto.id} className="item">
                    <img
                        src={producto.image}
                        width="200px"
                        alt={producto.title}
                    />
                    <article className="info">
                        <h2>{producto.title}</h2>
                        <h4 className="descuento">20% off</h4>
                        <div className="info-price">
                            <h3>${(producto.price * 20) / 100}.-</h3>
                            <h5>${producto.price}.-</h5>
                        </div>
                    </article>
                </div>
            ))}
        </div>
    );
};

export default EjemploApis;
