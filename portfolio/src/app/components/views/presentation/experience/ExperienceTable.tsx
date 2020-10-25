import React from 'react';

import experiences from '../../../../../assets/json/experiences.json';
import Typist from 'react-typist';
import Experience from './experience';

const ExperienceTable = () => {

    experiences.sort((current, next) => next.id - current.id);
    return (
        <section id='experience-table' className='container cols start tabs'>
            <Typist avgTypingDelay={50} startDelay={0}>
                historique d'expériences significatives
            </Typist>
            <section className="container table-wrapper">
                <ul className='container cols start'>
                    {experiences.map(xp => <Experience xp={xp}/> )}
                </ul>
            </section>
        </section>
    );

}; export default ExperienceTable;
