import React from 'react';
import { Img } from '../../shared';

import works from '../../../../assets/json/works/graphism.json';

export const Graphism = () =>
    (<section id='graphism' className='container evenly'>
        {works.map(graphic =>
            <article key={graphic.id} className="graphic shadowed">
                <Img src='works/graphism' name={graphic.src} alt={graphic.name}/>
                <h2>{graphic.name}</h2>
                <p>{graphic.description}</p>
            </article>
        )}
    </section>)