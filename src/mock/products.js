export const products = [
    {
        id: 1,
        descuento: 15,
        title: 'Remera',
        price: 2000,
        stock: 10,
        category: 'remeras',
        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/remera4_wyfums.jpg',
    },
    {
        id: 2,
        descuento: 35,
        title: 'Billetera',
        price: 200,
        stock: 5,
        category: 'billeteras',
        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/billetera2C_bf0hvq.jpg',
    },
    {
        id: 3,
        descuento: 50,
        title: 'Camisa',
        price: 3000,
        stock: 7,
        category: 'camisas',
        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/camisa4_ehruek.jpg',
    },
];

export const getProducts = (categoryName) => {
    return new Promise((res, rej) => {
        const prodFiltrados = products.filter(
            (prod) => prod.category === categoryName
        );
        const ref = categoryName ? prodFiltrados : products;
        setTimeout(() => {
            res(ref);
        }, 500);
    });
};

export const getProduct = (idProd) => {
    return new Promise((res, rej) => {
        const product = products.find((prod) => prod.id === +idProd);
        setTimeout(() => {
            res(product);
        }, 500);
    });
};
