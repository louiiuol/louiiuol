import React from 'react';
import IntroWriter from './IntroWriter';
import {Svg} from '../../shared/Svg';

function Home() {

    return (
        <section className='container cols'>
            <Svg styles="app-logo" src='socials' name='logo'/>
            <IntroWriter />
        </section>
    );

} export default Home;