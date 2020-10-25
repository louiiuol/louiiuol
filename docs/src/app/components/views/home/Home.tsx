import React from 'react';
import logo from '../../../../assets/img/lg.svg';
import IntroWriter from './IntroWriter';
import Icon from '../../shared/icon/Icon';

function Home() {

    return (
        <section className='container cols'>
            <Icon src={logo} id="app-logo" />
            <IntroWriter />
        </section>
    );

} export default Home;