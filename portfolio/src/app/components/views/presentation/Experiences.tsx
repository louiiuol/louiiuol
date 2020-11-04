import React, { useEffect } from 'react';
import Typist from 'react-typist';

import experiences from '../../../../assets/json/experiences.json';

export const Experiences = () => {

    const feed = [...experiences].reverse();
    useEffect(() => {
        window.setTimeout(() => document.querySelector('.table-wrapper')?.classList.add('scrollable'), 3000);
    });
    return (
        <section id='experiences' className='container cols start tabs'>
            <Typist avgTypingDelay={50} startDelay={0}>
                Expériences professionnelles
            </Typist>
            <section className="container table-wrapper">
                <ul className='container cols start'>
                    {feed.map((xp, index) => <Experience key={index} xp={xp}/> )}
                </ul>
            </section>
        </section>
    );

}

const Experience = (props: any) => {

    return (
        <li className="card-wrapper">
            <article key={props.xp.id} className={`card shadowed ${props.xp.type === 'FORMATION' ? 'accent' : ''}`}>
                <aside className="aside">
                    <p>{props.xp.date.end}</p>
                    <p>{props.xp.date.start}</p>
                </aside>
                <section className="card-content">
                    <header className="header">
                        <h5>{props.xp.title}</h5>
                        <div className="location">
                            <p>{props.xp.location.establishment} <br /> <span>{props.xp.location.city}</span></p>
                        </div>
                    </header>
                    <div className="description">
                        <em>{props.xp.description}</em>
                        <ul>
                            {props.xp.actions.map((action: string, index: number) => <li key={index} className='action'>{action}</li>)}
                        </ul>
                    </div>
                    <footer>
                        {props.xp.keyword.map((keyword: string, index: string) => <strong key={index} className='keyword'>{keyword}</strong>)}
                    </footer>
                </section>
            </article>
        </li>
    );

}