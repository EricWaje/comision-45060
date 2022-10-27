import React from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ isInHeader }) => {
    //console.log(isInHeader);

    return (
        <nav className="navbar">
            <h1>
                <Link className="links" to="/">
                    Comisión 45060
                </Link>
            </h1>
            <ul>
                <NavLink className="links" to="/categoria/remeras">
                    Remeras
                </NavLink>
                <NavLink className="links" to="/categoria/camisas">
                    Camisas
                </NavLink>
                <NavLink className="links" to="/categoria/billeteras">
                    Billeteras
                </NavLink>
            </ul>
            <Link className="links" to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};

export default Navbar;
