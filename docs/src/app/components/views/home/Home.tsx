import React from 'react';
import logo from '../../../../assets/img/lg.svg';
import TypeWriter from './TypeWriter';

import './Home.css'

function Home() {
    return (
        <div className='content'>
            <img src={logo} className="App-logo" alt="logo général de présentation" />
            <TypeWriter />
        </div>
    );
}

export default Home;