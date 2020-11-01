import React from 'react';
import Typist from 'react-typist';
import Socials from './Socials';

import portrait from '../../../../../assets/img/louis-godlewski.png';

const Introduction = () => {

    return (
        <section className="container cols start tabs no-overflow">
            <Typist avgTypingDelay={50} startDelay={0}>
                Développeur Fullstack Javascript
            </Typist>
            <section className="container evenly reverse">
                <div className="is-flex cols animate__animated animate__zoomInDown">
                    <img src={portrait} alt="Louis Godlewski's avatar" className='shadowed rounded lg' />
                    <Socials />
                </div>
                <div className="is-white spaced-lg halfwidth-md no-overflow">
                    <p className='animate__animated animate__flipInX animate__delay-1s legend spaced-xs'>
                        Passionné d'UX design et de structure de données, je suis un développeur web capable de contribuer à l'ensemble des étapes de construction d'un projet web.
                    </p>
                    <ul className='list circle bolded'>
                        <li className='animate__animated animate__fadeInLeft animate__delay-2s'>Création de composants graphiques comportant une logique d'affichage dédiée et réutilisable.</li>
                        <li className='animate__animated animate__fadeInLeft animate__delay-2s'>Implémentation d'algorithmes et de services persistant la logique métier en base de données.</li>
                        <li className='animate__animated animate__fadeInLeft animate__delay-2s'>Vérification du code via des tests d'intégration ou unitaire.</li>
                        <li className='animate__animated animate__fadeInLeft animate__delay-2s'>Déploiement en continue des fonctionnalités via Github, Jenkins, AWS</li>
                    </ul>
                    <p className='animate__animated animate__flipInX animate__delay-3s spaced-xs' >Je suis actuellement à la recherche d’un CDI en tant que développeur full stack Javascript. Si mon profil vous intéresse, n'hésitez pas à me contacter !</p>
                </div>
            </section>
        </section>
    );

}; export default Introduction;