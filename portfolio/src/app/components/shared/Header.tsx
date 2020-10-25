import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {

    return (
        <nav id='main-nav' className="is-flex between shadowed">
            <Link to='/'>
                <h3 className='is-primary'>
                    L<span>ouis </span>
                    G<span>ODLEWSKI</span>
                </h3>
            </Link>

            <ul className='links is-flex'>
                <NavLink exact to='/' activeClassName="selected"><li className='is-primary'>Accueil</li></NavLink>
                <NavLink to='/presentation' activeClassName="selected"><li className='is-primary'>Présentation</li></NavLink>
                <NavLink to='/projets' activeClassName="selected"><li className='is-primary'>Projets</li></NavLink>
                <NavLink to='/contact' activeClassName="selected"><li className='is-primary'>Contact</li></NavLink>
            </ul>
        </nav>
    );

}; export default Header;