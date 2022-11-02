import React, { useEffect, useState } from 'react';
import { getProducts } from '../../mock/products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    // const valor = useParams();
    // console.log(valor.categoryName);

    const { categoryName } = useParams();

    useEffect(() => {
        getProducts(categoryName)
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryName]);

    return (
        <div onClick={() => console.log('click en ITLC')} className="container">
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
