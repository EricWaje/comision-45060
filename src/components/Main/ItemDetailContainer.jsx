import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
//import { getProduct } from '../../mock/products';
import { doc, getDoc } from 'firebase/firestore';
import { collectionProd } from '../../services/firebaseConfig';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { idProd } = useParams();

    useEffect(() => {
        const ref = doc(collectionProd, idProd);

        getDoc(ref)
            .then((res) => {
                //console.log(res);
                setItem({
                    id: res.id,
                    ...res.data(),
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });

        // getProduct(idProd)
        //     .then((res) => {
        //         setItem(res);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });
    }, [idProd]);

    if (loading) {
        return (
            <div className="detail-container">
                <h1>Cargando...</h1>
            </div>
        );
    }

    return (
        <div className="detail-container">
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
