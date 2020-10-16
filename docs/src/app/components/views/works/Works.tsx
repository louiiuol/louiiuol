import React from 'react';
import Typist from 'react-typist';

import './Works.css';

function Works() {
    return (
        <section className="container">
            <h4 className='typist'>
                <Typist avgTypingDelay={50} startDelay={0}>
                    Coming soon
                </Typist>
            </h4>
        </section>
    );
} export default Works;