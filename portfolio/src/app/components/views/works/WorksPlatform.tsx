import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';
import WorkDetail from './WorkDetail';
import Icon from '../../shared/icon/Icon';
import closeIcon from '../../../../assets/img/icons/ui/close.svg'

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
                    <Icon src={closeIcon} size='xs' extra='close is-primary'></Icon>
                    <WorkDetail category={category} />
                </section> : null}
            </article> )}
        </section> );

}; export default WorksPlatform;