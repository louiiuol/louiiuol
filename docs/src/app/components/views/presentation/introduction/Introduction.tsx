import React from 'react';

import './Introduction.css';
import Typist from 'react-typist';
import photo from '../../../../../assets/img/louis-godlewski.png';
import Socials from './socials/Socials';

function Introduction() {
    return (
        <section className="container cols start tabs">
            <Typist avgTypingDelay={50} startDelay={0}>
                Développeur Fullstack Javascript & JAVA
            </Typist>
            <section className="container evenly reverse noflex">
                <div className="photo is-flex cols animate__animated animate__zoomInDown">
                    <img src={photo} alt="Louis Godlewski's avatar" className='shadowed' />
                    <Socials />
                </div>
                <div className="intro">
                    <p className='animate__animated animate__flipInX animate__delay-1s'>
                        Passionné d'UX design et de structure de données, je suis un développeur web capable de contribuer à l'ensembles des étapes de construction d'un projet web.
                    </p>
                    <ul>
                        <li className='animate__animated animate__fadeInLeft animate__delay-2s'>Création de composants graphiques comportant une logique d'affichage dédiée et réutilisable.</li>
                        <li className='animate__animated animate__fadeInLeft animate__delay-2s'>Implémentation d'algorithmes et de services persistant la logique métier en base de données.</li>
                        <li className='animate__animated animate__fadeInLeft animate__delay-2s'>Vérification du code via des tests d'intégration ou unitaire.</li>
                        <li className='animate__animated animate__fadeInLeft animate__delay-2s'>Déploiement en continue des fonctionnalités via Github, Jenkins, AWS</li>
                    </ul>
                    <p className='animate__animated animate__flipInX animate__delay-3s' >Je suis actuellement à la recherche d’un CDI en tant que développeur full stack Javascript. Si mon profi vous intéresse, n'hésitez pas à me contacter !</p>
                </div>
                </section>
        </section>
        );
}

export default Introduction;