import React, { useState } from 'react'
import { Img, Svg } from '../../shared'

import works from '../../../../assets/json/works/graphism.json'

export const Graphism = () => {

    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState({});
    const [isSelected, setIsSelected] = useState(false);

    const select = (currentIndex: number) => {
        const workSize = works.length -1
        if (currentIndex === 0) {
            currentIndex = workSize;
        } else if (currentIndex === workSize) {
            currentIndex = 0;
        }
        setIndex(currentIndex);
        setSelected(works[currentIndex]);
        if (!isSelected) { setIsSelected(true) }
        console.log(selected)
    }

    const hide = () => setIsSelected(false)

    return (<section id='graphism' className='container evenly'>
        {works.map((graphic, current) =>
            <article key={graphic.id} className="graphic shadowed" onClick={() => select(current)}>
                <Img src='works/graphism' name={graphic.src} alt={graphic.name}/>
                <h2>{graphic.name}</h2>
                <p>{graphic.description}</p>
            </article>
        )}
        {isSelected && (<section id="gallery-fullscreen">
            <ImgExpanded selected={selected} />
            <nav>
                <Svg src='ui' name='close' size='xs' styles='close is-white' onClick={() => hide()} />
                <Svg src='ui' name='left' size='sm' styles='nav prev is-white' onClick={() => select(index - 1)} />
                <Svg src='ui' name='left' size='sm' styles='nav next is-white' onClick={() => select(index + 1)}/>
            </nav>
        </section> )}

    </section>)
}

export const ImgExpanded = (props: {selected: any}) =>
    (<section className="selected">
        <header><h3>{props.selected.name}</h3></header>
        <Img src='works/graphism' name={props.selected.src} alt={props.selected.name} />
        <p className="description">{props.selected?.description}</p>
    </section>)
