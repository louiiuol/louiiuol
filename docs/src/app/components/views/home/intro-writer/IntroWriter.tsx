import React from 'react';
import Typist from 'react-typist';

import './IntroWriter.css';

function IntroWriter() {
    return <h2 className='intro typist'>
        <Typist avgTypingDelay={50} startDelay={0}>
            Bienvenue !
            <Typist.Backspace count={28} delay={950} /><Typist.Delay ms={200} />
            Je suis un UI / UX Designer
            <Typist.Backspace count={16} delay={950} /><Typist.Delay ms={200} />
            architecte informatique
            <Typist.Backspace count={23} delay={950} /><Typist.Delay ms={200} />
            Développeur fullstack Javascript & JAVA
            <Typist.Backspace count={42} delay={950} /><Typist.Delay ms={200} />
            disponible pour échanger
        </Typist>
    </h2>
}

export default IntroWriter;