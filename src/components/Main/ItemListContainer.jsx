import React, { useEffect, useState } from 'react';
import { getProducts } from '../../mock/products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
//import PacmanLoader from 'react-spinners/PacmanLoader';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getDocs, query, where } from 'firebase/firestore';
import { collectionProd } from '../../services/firebaseConfig';

const ItemListContainer = () => {
    //console.log('itemListContainer');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // const valor = useParams();
    // console.log(valor.categoryName);

    const { categoryName } = useParams();

    useEffect(() => {
        //const q = query(collectionProd, where('category', '==', categoryName));

        getDocs(collectionProd)
            .then((res) => {
                //console.log(res.docs);
                const products = res.docs.map((prod) => {
                    //console.log(prod);
                    //console.log(prod.data());
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });

        // getProducts(categoryName)
        //     .then((res) => {
        //         setItems(res);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });

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
