import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Header = () =>
    (<nav id='main-nav' className="is-flex between shadowed">
        <Link to='/'>
            <h3 className='is-primary'>L<span>ouis </span>G<span>ODLEWSKI</span></h3>
        </Link>

        <ul className='links is-flex'>
            <NavLink to='/presentation' activeClassName="selected"><li className='is-primary'>Présentation</li></NavLink>
            <NavLink to='/projets' activeClassName="selected"><li className='is-primary'>Projets</li></NavLink>
            <li className='is-primary'><a href="mailto:louis.godlewski@gmail.com">Contact</a></li>
        </ul>
    </nav>);