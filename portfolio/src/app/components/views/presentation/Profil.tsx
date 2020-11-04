import React from 'react';
import Typist from 'react-typist';
import { Img, Svg } from '../../shared';

export const Profil = () => {

    return (
        <section className="container cols start tabs no-overflow">
            <Typist avgTypingDelay={50} startDelay={0}>
                Développeur Fullstack Javascript
            </Typist>
            <section className="container evenly reverse">
                <div id='intro' className="is-flex cols animate__animated animate__zoomInDown">
                    <Img alt="Louis Godlewski's avatar" styles='shadowed rounded colorless' size='lg'
                        src='intro' name='portrait' type='png'/>
                    <Socials />
                </div>
                <div className="is-white spaced-lg halfwidth-md no-overflow">
                    <p className='animate__animated animate__flipInX animate__delay-1s legend spaced-xs'>
                        Passionné d'UX design et de structure de données, je suis un développeur web souhaitant contribuer à l'ensemble des étapes de construction d'un projet web, en fonction de vos besoins.
                    </p>
                    <ul className='list circle bolded'>
                        <li className='animate__animated animate__fadeInLeft animate__delay-2s'>Création de composants graphiques comportant une logique d'affichage dédiée et réutilisable.</li>
                        <li className='animate__animated animate__fadeInLeft animate__delay-2s'>Implémentation d'algorithmes et de services persistant la logique métier en base de données.</li>
                        <li className='animate__animated animate__fadeInLeft animate__delay-2s'>Vérification du code via des tests d'intégration ou unitaire.</li>
                        <li className='animate__animated animate__fadeInLeft animate__delay-2s'>Déploiement en continue des fonctionnalités via Github, Jenkins, AWS</li>
                    </ul>
                    <p className='animate__animated animate__flipInX animate__delay-3s spaced-xs' ><strong>Poste recherché</strong>: développeur full stack Javascript. <br />Si mon profil vous intéresse, n'hésitez pas à me contacter !</p>
                </div>
            </section>
        </section>
    );

}

const Socials = () => {
    const links = [
        { name: 'linkedin', src: 'https://www.linkedin.com/in/louis-godlewski' },
        { name: 'codepen', src: 'https://codepen.io/louiiuol' },
        { name: 'github', src: 'https://github.com/louiiuol' },
        { name: 'codewars', src: 'https://www.codewars.com/users/louiiuol' },
    ]

    return (
        <div className='socials is-white spaced'>
            <em className='centered'>Retrouvez moi sur les réseaux</em>:
            <ul className='is-flex evenly fullwidth'>
                {links.map(social =>
                    <li>
                        <a className='is-white' target='blank' href={social.src}>
                            <Svg size='xs' src='socials' name={social.name} />
                        </a>
                    </li>)}
            </ul>
        </div>
    );
}