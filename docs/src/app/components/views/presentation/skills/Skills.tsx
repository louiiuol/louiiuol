import React from 'react';

import './Skills.css';
import Typist from 'react-typist';

function Skills() {
    return (
        <section className="container">
            <h4 className='typist'>
                <Typist avgTypingDelay={50} startDelay={0}>
                    Coming soon
                </Typist>
            </h4>
        </section>
    );
} export default Skills;
