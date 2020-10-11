import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
    return <nav className="main-nav">
        <h3><strong>L</strong>ouis <strong>G</strong>ODLEWSKI</h3>
        <ul className='links'>
            <Link to='/louiiuol/'><li className="nav-links">Accueil</li></Link>
            <Link to='/louiiuol/parcours'><li className="nav-links">Parcours</li></Link>
            <Link to='/louiiuol/projets'><li className="nav-links">Projets</li></Link>
            <Link to='/louiiuol/contact'><li className="nav-links">Contact</li></Link>
        </ul>
    </nav>
}

export default Header;