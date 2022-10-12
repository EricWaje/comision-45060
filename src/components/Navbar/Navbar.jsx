import React from 'react';
import estilos from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={estilos.navbar}>
            <ul>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
        </nav>
    );
};

export default Navbar;
