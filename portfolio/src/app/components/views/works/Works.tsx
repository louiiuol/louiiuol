import React, { useEffect } from 'react';
import Typist from 'react-typist';
import { Graphism, Apps, Algos, Videos } from '.';
import {Svg} from '../../shared';
import { Switch, Route, Link } from 'react-router-dom';

import '../../../../assets/styles/components/views/works/works.css';

export const Works = () => {

    const sections = [
        { name: 'Audiovisuel', img:'motion', url: 'audiovisuel', component: Videos },
        { name: 'Graphisme', img:'graphic', url: 'graphisme', component: Graphism },
        { name: 'Applications', img:'wireframe', url: 'apps', component: Apps },
        { name: 'Algorithmie', img:'algos', url: 'algorithmie', component: Algos },
    ]

    useEffect(() =>
        document.querySelectorAll('.quarter').forEach(quarter =>
            quarter.querySelector('header')?.addEventListener('click', () =>
                quarter.classList.add('full'))))

    return (
        <section id='works' className='main-container'>
            {sections.map(({name, img, url, component}) =>
                <article key={url} className="quarter">
                    <Link className='quarter-link' to={`/projets/${url}`} >
                        <header>
                            <Typist avgTypingDelay={50} startDelay={0}>{name}</Typist>
                            <Svg src='skills' name={img} styles='category-icon is-white' />
                        </header>
                    </Link>
                    <Switch>
                        <Route key={url + '-content'} exact path={`/projets/${url}`} component={component} />
                    </Switch>
                </article> )}
        </section> );

}