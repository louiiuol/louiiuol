import React, { useEffect } from 'react';

import experiences from '../../../../assets/json/experiences.json';

import '../../../../assets/styles/components/views/presentation/experiences.css'
import { Tab } from '../../shared';

export const Experiences = () => {

    const feed = [...experiences].reverse();
    useEffect(() => {window.setTimeout(() => document.querySelector('#experiences')?.classList.add('scrollable'), 4000)});

    return (
        <Tab id='experiences' title='Expériences professionnelles' styles='cols start'>
            {feed.map((xp, index) => <Experience key={index} xp={xp}/> )}
        </Tab>);

}

const Experience = (props: any) => {

    return (
        <li className="card-wrapper">
            <article key={props.xp.id} className={`card shadowed ${props.xp.type === 'FORMATION' ? 'accent' : ''}`}>
                <aside className="aside">
                    <p>{props.xp.date}</p>
                </aside>
                <section className="card-content">
                    <header className="header">
                        <h5>{props.xp.title}</h5>
                        <p className="location">{props.xp.location.establishment} <br /> <span>{props.xp.location.city}</span></p>
                    </header>
                    <div className="description">
                        <p className='legend' >{props.xp.description}</p>
                        <ul className='list'> {props.xp.actions.map((action: string, index: number) => <li key={index} className='action'>{action}</li>)} </ul>
                    </div>
                    <footer> {props.xp.keyword.map((keyword: string, index: string) => <strong key={index} className='keyword'>{keyword}</strong>)} </footer>
                </section>
            </article>
        </li>
    );

}