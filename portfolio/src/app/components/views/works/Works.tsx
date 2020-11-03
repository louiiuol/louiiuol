import React, { useEffect } from 'react';
import Typist from 'react-typist';
import { Graphism, Apps, Algos, Videos } from '.';
import {Svg} from '../../shared';

export const Works = () => {

    const worksCategories = ['Vidéos', 'Graphisme', 'Web UI', 'Algorithme'];

    const setFullScreen = (quarter: Element) => () => {
        quarter.classList.add('full');
        quarter.querySelector('.close')?.addEventListener('click', () => quarter.classList.remove('full'));
    }

    const toggleQuarters = (quarter: Element) =>
        quarter.querySelector('header')?.addEventListener('click', setFullScreen(quarter))

    useEffect(() =>
        document.querySelectorAll('.quarter').forEach(quarter => toggleQuarters(quarter)))

    return (
        <section id='works' className="container">
            {worksCategories.map((category, index) =>
                <article key={index} className="quarter">
                    <header>
                        <Typist avgTypingDelay={50} startDelay={0} cursor={{ hideWhenDone: true }}>{category}</Typist>
                    </header>
                    <section className="content">
                        <Svg src='ui' name='close' size='xs' styles='close is-primary' />
                        <WorksDetails category={index} />
                    </section>
                </article> )}
        </section> );

}

const WorksDetails = (props: {category:number}) => {

    switch (props.category) {
        case 0: return <Videos />;
        case 1: return <Graphism />;
        case 2: return <Apps />;
        case 3: return <Algos />;
        default: return <p>This category does'nt exist</p>;
    }

}