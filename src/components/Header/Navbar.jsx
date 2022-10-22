import React from 'react';
import CartWidget from './CartWidget';

const Navbar = ({ isInHeader }) => {
    //console.log(isInHeader);

    return (
        <nav className="navbar">
            <h1>Comisión 45060</h1>
            <ul>
                <li>Remeras</li>
                <li>Camisas</li>
                <li>Billeteras</li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;
