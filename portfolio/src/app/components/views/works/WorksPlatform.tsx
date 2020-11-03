import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';
import WorkDetail from './WorkDetail';
import {Svg} from '../../shared/Svg';

const WorksPlatform = () => {

    const worksCategories = ['Vidéos', 'Graphsime', 'Web-UI', 'Algorithme'];
    const [clicked, setClicked] = useState(false);

    const toggleQuarters = (quarter: Element) => {
        quarter.querySelector('header')?.addEventListener('click', () => {
            quarter.classList.add('full');
            setClicked(true);
            quarter.querySelector('.close')?.addEventListener('click', () => {
                quarter.classList.remove('full');
                setClicked(false);
            });
        })
    }

    useEffect( () => { document.querySelectorAll('.quarter').forEach(quarter => toggleQuarters(quarter)) }, []);

    return (
        <section id='works' className="container">
            { worksCategories.map( (category, index) => <article key={index} className="quarter">
                <header>
                    <Typist avgTypingDelay={50} startDelay={index}>
                        {category}
                    </Typist>
                </header>
                {clicked ? <section className="content">
                    <Svg src='ui' name='close' size='xs' styles='close is-primary' />
                    <WorkDetail category={category} />
                </section> : null}
            </article> )}
        </section> );

}; export default WorksPlatform;