import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Svg } from '.';

export const Header = () => {

    const [toggle, setToggle] = useState(false);

    return (<nav id='main-nav' className="is-flex between shadowed">
        <Link to='/'>
            <h3 className='is-primary'>L<span>ouis </span>G<span>ODLEWSKI{toggle}</span></h3>
        </Link>
        {toggle}
        <Svg size='xs' src='ui' name='hamburger' styles={`hamburger is-primary ${toggle ? 'toggled' : ''}`} onClick={ () => setToggle(!toggle) }/>
        <ul className={`links is-flex ${toggle ? 'expanded' : ''}`}>
            <NavLink exact to='/' activeClassName="selected"><li onClick={() => setToggle(false)} className='is-primary'>Accueil</li></NavLink>
            <NavLink to='/presentation' activeClassName="selected"><li onClick={() => setToggle(false)} className='is-primary'>Présentation</li></NavLink>
            <NavLink to='/projets' activeClassName="selected"><li onClick={() => setToggle(false)} className='is-primary'>Projets</li></NavLink>
            <li className='is-primary'><a href="mailto:louis.godlewski@gmail.com">Contact</a></li>
        </ul>
    </nav>);
}