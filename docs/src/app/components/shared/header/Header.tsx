import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Header.css';

function Header() {
    return (<nav className="main-nav is-flex between shadowed">
        <Link to='/louiiuol/'>
            <h3 className='is-primary'>
                L<span>ouis </span>
                G<span>ODLEWSKI</span>
            </h3>
        </Link>
        
        <ul className='links is-flex'>
            <NavLink exact to='/louiiuol/' activeClassName="selected"><li className='is-primary'>Accueil</li></NavLink>
            <NavLink to='/louiiuol/presentation' activeClassName="selected"><li className='is-primary'>Présentation</li></NavLink>
            <NavLink to='/louiiuol/projets' activeClassName="selected"><li className='is-primary'>Projets</li></NavLink>
            <NavLink to='/louiiuol/contact' activeClassName="selected"><li className='is-primary'>Contact</li></NavLink>
        </ul>
    </nav>);
}

export default Header;