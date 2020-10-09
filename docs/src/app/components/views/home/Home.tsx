import React from 'react';
import logo from '../../../../assets/img/lg.svg';
import TypeWriter from './TypeWriter';
import Icon from '../../shared/Icon';

import './Home.css';

function Home() {

    return (
        <div className='content'>
            <Icon src={logo} className="app-logo" />
            <TypeWriter />
        </div>
    );
}

export default Home;