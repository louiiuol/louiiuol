import React from 'react';
import Typist from 'react-typist';

const IntroWriter = () => {

    return (
        <h1 id='intro-typer'>
            <Typist avgTypingDelay={50} startDelay={0}>
                Bienvenue !
                <Typist.Backspace count={28} delay={950} /><Typist.Delay ms={200} />
                Je suis un UI / UX Designer
                <Typist.Backspace count={16} delay={950} /><Typist.Delay ms={200} />
                concepteur d'application
                <Typist.Backspace count={24} delay={950} /><Typist.Delay ms={200} />
                Développeur web fullstack Javascript & JAVA
                <Typist.Backspace count={46} delay={950} /><Typist.Delay ms={200} />
                disponible pour échanger sur vos projets et besoins
            </Typist>
        </h1>
    );

}; export default IntroWriter;