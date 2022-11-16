import React from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../services/firebaseConfig';

const Navbar = ({ isInHeader }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const catCollection = collection(db, 'categorias');
        getDocs(catCollection)
            .then((res) => {
                const secciones = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setCategories(secciones);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    //console.log(categories);

    return (
        <nav className={isInHeader ? 'navbar' : 'footer'}>
            <h1>
                <Link className="links" to="/">
                    Comisión 45060
                </Link>
            </h1>
            <ul>
                {categories.map((cat) => (
                    <NavLink
                        key={cat.id}
                        className="links"
                        to={`/categoria/${cat.path}`}
                    >
                        {cat.title}
                    </NavLink>
                ))}
            </ul>
            {isInHeader && (
                <Link className="links" to="/cart">
                    <CartWidget />
                </Link>
            )}
        </nav>
    );
};

export default Navbar;
