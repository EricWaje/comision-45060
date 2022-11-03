import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    //crear copia del cart
    // const copia = [...cart]
    //const copia = cart.map((prod)=> prod )
    //console.log(props.children);

    //funciones
    const addToCart = (item, cantidad) => {
        //SPREAD --> ...item --> id: 1, title: 'Camisa', price: 200
        //console.log({ ...item, cantidad });
        if (isInCart(item.id)) {
            //sumo la cantidad
            //alert('Ya está en el carrito sumale la cantidad flaco 🚨');
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    //funcion para ver si está en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    //funcion para sumar la cantidad de un mismo producto

    //funcion para vaciar el carrito
    const deleteAll = () => {
        setCart([]);
    };

    //funcion para eliminar un solo producto

    //funcion para sumar total $ del carrito

    //funcion para sumar unidades totales del carrito (CartWidget)

    console.log(cart);

    //variables

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteAll }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
