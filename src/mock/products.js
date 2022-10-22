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
        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372705/camisa2_tmojul.jpg',
    },
];

// export const getProducts = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(products);
//         }, 2000);
//     });
// };
