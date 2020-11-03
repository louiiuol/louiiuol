import React from 'react';
import {Svg} from '../../shared/Svg';
import Typist from 'react-typist';

export const Home = () =>
    <section className='container cols'>
        <Svg styles="app-logo" src='socials' name='logo'/>
        <IntroWriter />
    </section>

const IntroWriter = () =>
    (<h1 id='intro-typer'>
        <Typist avgTypingDelay={75} startDelay={0}>
            Bienvenue !
            <Typist.Backspace count={28} delay={1250} /><Typist.Delay ms={200} />
            Je suis un UI / UX Designer
            <Typist.Backspace count={16} delay={1250} /><Typist.Delay ms={200} />
            concepteur d'application
            <Typist.Backspace count={24} delay={1250} /><Typist.Delay ms={200} />
            Développeur web fullstack Javascript & JAVA
            <Typist.Backspace count={46} delay={1250} /><Typist.Delay ms={200} />
            disponible pour échanger sur vos projets et besoins
        </Typist>
    </h1>);