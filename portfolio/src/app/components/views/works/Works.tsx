import React, { useEffect } from 'react';
import Typist from 'react-typist';
import { Graphism, Apps, Algos, Videos } from '.';
import {Svg} from '../../shared';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import '../../../../assets/styles/components/views/works/works.css';

export const Works = () => {

    const sections = [
        { name: 'Audiovisuel', img:'motion', url: 'audiovisuel', component: Videos },
        { name: 'Graphisme', img:'graphic', url: 'graphisme', component: Graphism },
        { name: 'Applications', img:'wireframe', url: 'apps', component: Apps },
        { name: 'Algorithmie', img:'algos', url: 'algorithmie', component: Algos },
    ]

    const onClose = () => {
        document.querySelector('.full')?.classList.remove('full');
        return <Redirect to="/projets" />
    }

    useEffect(() =>
        document.querySelectorAll('.quarter').forEach(quarter =>
            quarter.querySelector('header')?.addEventListener('click', () => quarter.classList.add('full'))))

    return (
        <section id='works'>
            {sections.map(({name, img, url, component}) =>
                <article key={url} className="quarter">
                    <Link to={`/projets/${url}`} >
                        <header>
                            <Typist avgTypingDelay={50} startDelay={0}>{name}</Typist>
                            <Svg src='skills' name={img} styles='category-icon is-white' />
                        </header>
                    </Link>
                    <Switch>
                        <section className="content">
                            <Svg src='ui' name='close' styles='close is-primary' onClick={() =>onClose()}/>
                            <Route key={url + '-content'} exact path={`/projets/${url}`} component={component} />
                        </section>
                    </Switch>
                </article> )}
        </section> );

}