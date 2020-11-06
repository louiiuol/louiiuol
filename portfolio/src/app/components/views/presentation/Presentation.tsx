import React from 'react';
import {Profil, Experiences, Skills } from '.';
import { Link, Route, Switch } from 'react-router-dom';

import '../../../../assets/styles/components/views/presentation/presentation.css';

export const Presentation = () => {

    const sections = [
        { name: 'Profil', url: 'profil', component: Profil },
        { name: 'Expériences', url: 'experiences', component: Experiences },
        { name: 'Compétences', url: 'competences', component: Skills }
    ]

    return (
        <section id='presentation' className='main-container'>
            <ul className='sub-nav'>
                {sections.map(({ name, url }) => <li key={url}><Link to={`/presentation/${url}`}>{name}</Link></li> )}
            </ul>
            <Switch>
                {sections.map(({component, url}) => <Route key={url + '-content'} exact path={`/presentation/${url}`} component={component} />)}
            </Switch>
        </section>);

}