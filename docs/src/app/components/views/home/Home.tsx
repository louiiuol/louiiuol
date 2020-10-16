import React from 'react';
import logo from '../../../../assets/img/lg.svg';
import IntroWriter from './intro-writer/IntroWriter';
import Icon from '../../shared/icon/Icon';

import './Home.css';

function Home() {

    return (
        <section className='container cols'>
            <Icon src={logo} className="app-logo" />
            <IntroWriter />
        </section>
    );

} export default Home;