import React, { memo } from 'react';
import Item from './Item';

const ItemList = memo(
    ({ items }) => {
        //console.log('itemList');
        return (
            <div className="item-list">
                {items.map((producto) => {
                    return <Item producto={producto} key={producto.id} />;
                })}
            </div>
        );
    },
    (a, b) => a.items === b.items
);

export default ItemList;
