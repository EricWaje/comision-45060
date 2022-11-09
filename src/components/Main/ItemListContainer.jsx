import React, { useEffect, useState } from 'react';
import { getProducts } from '../../mock/products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
//import PacmanLoader from 'react-spinners/PacmanLoader';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ItemListContainer = () => {
    //console.log('itemListContainer');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

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
            })
            .finally(() => {
                setLoading(false);
            });

        return () => setLoading(true);
    }, [categoryName]);

    if (loading) {
        return (
            <div className="container">
                {/* <PacmanLoader size={30} /> */}
                {/* <Skeleton /> */}
                <Skeleton count={7} width={200} height={40} />
            </div>
        );
    }

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
