import React, { useState } from 'react'
import { Img, Svg, QuarterContent } from '../../shared'

import works from '../../../../assets/json/works/graphism.json'
import '../../../../assets/styles/components/views/works/graphism.css';

export const Graphism = () => {

    const feed = [...works].reverse();

    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState({});
    const [isSelected, setIsSelected] = useState(false);

    const select = (currentIndex: number) => {
        const formated = currentIndex === -1 ? feed.length - 1 : (currentIndex === feed.length ? 0 : currentIndex);
        setIndex(formated );
        setSelected(feed[formated]);
        if (!isSelected) { setIsSelected(true) }
    }

    return (
        <QuarterContent id='graphism'>
            {feed.map((graphic, current) =>
                <article key={current} className="graphic shadowed" onClick={() => select(current)}>
                    <Img src='works/graphism' name={graphic.src} alt={graphic.name}/>
                    <h2>{graphic.name}</h2>
                    <p className='description'>{graphic.description}</p>
                </article>
            )}
            {isSelected && (<section id="gallery-fullscreen">
                <ImgExpanded selected={selected} />
                <nav>
                    <Svg src='ui' name='close' styles='close white' onClick={() => setIsSelected(false)} />
                    <Svg src='ui' name='left' styles='nav prev' onClick={() => select(index - 1)} />
                    <Svg src='ui' name='left' styles='nav next' onClick={() => select(index + 1)}/>
                </nav>
            </section> )}
        </QuarterContent>)

}

export const ImgExpanded = (props: {selected: any}) =>
    (<section className="selected">
        <header><h3>{props.selected.name}</h3></header>
        <Img src='works/graphism' name={props.selected.src} alt={props.selected.name} />
        <p className="description">{props.selected?.description}</p>
    </section>)
