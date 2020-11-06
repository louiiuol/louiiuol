import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Svg } from '.';

import '../../../assets/styles/components/shared/header.css';

export const Header = () => {

    const [toggle, setToggle] = useState(false);

    const sections = [
        {name: 'Accueil', url: '/', exact: true},
        {name: 'Présentation', url: '/presentation/profil', exact: false},
        {name: 'Projets', url: '/projets', exact: false}
    ]

    return (<nav id='main-nav'>
        <Link to='/'>
            <h3 onClick={() => setToggle(false)}>L<span>ouis </span>G<span>ODLEWSKI{toggle}</span></h3>
        </Link>
        <Svg src='ui' name='hamburger' styles={`hamburger is-primary ${toggle ? 'toggled' : ''}`} onClick={ () => setToggle(!toggle) }/>
        <ul className={`links ${toggle ? 'expanded' : ''}`}>
            {sections.map(({ name, url, exact }) =>
                <li onClick={() => setToggle(false)}>
                    <NavLink exact={exact} to={url} activeClassName="selected">{name}</NavLink></li>)}
            <li><a href="mailto:louis.godlewski@gmail.com">Contact</a></li>
        </ul>
    </nav>);
}