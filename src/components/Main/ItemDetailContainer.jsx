import React from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { idProd } = useParams();

    console.log(idProd);
    console.log(typeof idProd); //Number(idProd) / +idProd / parseInt(idProd)

    return (
        <div
            style={{
                margin: '10px',
                border: '2px solid black',
                padding: '10px',
            }}
        >
            <ItemDetail />
        </div>
    );
};

export default ItemDetailContainer;
