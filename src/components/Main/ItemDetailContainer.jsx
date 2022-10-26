const getProducts = () => {
    return new Promise((res, rej) => {
        //alguna lógica para obtetner 1 solo producto
        //método de array me devuelve un objeto
        //const product = products.find((prod)=>prod.id === variable)
        setTimeout(() => {
            res(product);
        }, 2000);
    });
};
