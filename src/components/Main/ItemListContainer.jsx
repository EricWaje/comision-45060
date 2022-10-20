import React, { useEffect, useState } from 'react';
import { products } from '../../mock/products';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProducts = () => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(products);
                }, 2000);
            });
        };
        //console.log(task); //esto me devuelve una promesa
        getProducts()
            .then((res) => {
                //console.log('res', res);
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    //console.log(items);

    return (
        <div id="container">
            {items.map((producto) => {
                return (
                    <div key={producto.id}>
                        <img
                            src={producto.img}
                            width="200px"
                            alt={producto.title}
                        />
                        <article>
                            <h2>{producto.title}</h2>
                            <h3>${producto.price}.-</h3>
                        </article>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemListContainer;

//  {
//      items.map((producto) => {
//          return (
//              <div key={producto.id}>
//                  <img src={producto.img} width="200px" alt={producto.title} />
//                  <article>
//                      <h2>{producto.title}</h2>
//                      <h3>${producto.price}.-</h3>
//                  </article>
//              </div>
//          );
//      });
//  }

//  {
//      items.map((producto) => {
//          return (
//              <Item key={producto.id} producto={producto}/>
//          );
//      });
//  }
