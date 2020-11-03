import React, { useEffect } from 'react';
import Typist from 'react-typist';
import WorkDetail from './WorkDetail';
import {Svg} from '../../shared';

const WorksPlatform = () => {

    const worksCategories = ['Vidéos', 'Graphsime', 'Web-UI', 'Algorithme'];

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
            { worksCategories.map( (category, index) => <article key={index} className="quarter">
                <header>
                    <Typist avgTypingDelay={50} startDelay={index}>{category}</Typist>
                </header>
                <section className="content">
                    <Svg src='ui' name='close' size='xs' styles='close is-primary' />
                    <WorkDetail category={category} />
                </section>
            </article> )}
        </section> );

}; export default WorksPlatform;