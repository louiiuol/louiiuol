import React from 'react';

import experiences from '../../../../../assets/json/experiences.json';
import Typist from 'react-typist';

import './Experience.css';

function ExperienceTable() {
    experiences.sort((current, next) => next.id - current.id );
    return (
        <section id='experience-table' className='container'>
            <h4 className='typist'>
                <Typist avgTypingDelay={50} startDelay={0}>
                    historique d'expériences significatives
                </Typist>
            </h4>
            <div className="table-wrapper">
                <ul className='container cols start'>
                    {experiences.map(xp =>
                        <li className="card-wrapper">
                            <article key={xp.id} className={`card shadowed ${xp.type === 'FORMATION' ? 'accent' : '' }`}>
                                <aside className="aside">
                                    <p>{xp.date.end}</p>
                                    <p>{xp.date.start}</p>
                                </aside>
                                <section className="card-content">
                                    <header className="header">
                                        <h5>{xp.title}</h5>
                                        <div className="location">
                                            <p>{xp.location.establishment} <br /> <span>{xp.location.city}</span></p>
                                        </div>
                                    </header>
                                    <div className="description">
                                        <em>{xp.description}</em>
                                        <ul>
                                            {xp.actions.map(action => <li className='action'>{action}</li>)}
                                        </ul>
                                    </div>
                                    <footer>
                                        {/* <div className="chip"><strong>{xp.type}</strong></div> */}
                                            {xp.keyword.map(skill => <strong className='skill'>{skill}</strong>)}
                                    </footer>
                                </section>
                            </article>
                        </li> )}
                </ul>
            </div>
        </section>
        );
} export default ExperienceTable;
