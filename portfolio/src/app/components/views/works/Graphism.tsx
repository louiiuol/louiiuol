import React, { useState, useEffect } from 'react'
import { Img, Svg, QuarterContent } from '../../shared'

import works from '../../../../assets/json/works/graphism.json'
import '../../../../assets/styles/components/views/works/graphism.css';

export const Graphism = () => {

    const feed = [...works].reverse();

    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(feed[0]);
    const [isSelected, setIsSelected] = useState(false);

    const select = (currentIndex: number) => {
        const formatedIndex = currentIndex === -1 ? feed.length - 1 : (currentIndex === feed.length ? 0 : currentIndex);
        setIndex(formatedIndex );
        setSelected(feed[formatedIndex]);
        if (!isSelected) { setIsSelected(true) }
    }

    return (
        <QuarterContent id='graphism'>
            {feed.map((collection, current) =>
                <article key={current} className="graphic shadowed" onClick={() => select(current)}>
                    <Img src={`works/graphism/${collection.src}`} name={collection.content[0].src} alt={collection.name}/>
                    <h2>{collection.name}</h2>
                </article>
            )}
            {isSelected && (<section id="gallery-fullscreen">
                <ImgFullScreen collection={selected} />
                <nav>
                    <Svg src='ui' name='close' styles='close white' onClick={() => setIsSelected(false)} />
                    <Svg src='ui' name='left' styles='nav prev' onClick={() => select(index - 1)} />
                    <Svg src='ui' name='left' styles='nav next' onClick={() => select(index + 1)}/>
                </nav>
            </section> )}
        </QuarterContent>)

}

const ImgFullScreen = (props: any) => {

    const [index, setIndex] = useState(0);
    const select = (currentIndex: number) =>
        setIndex(currentIndex === -1 ? props.collection?.content.length - 1
            : (currentIndex === props.collection?.content.length ? 0 : currentIndex));

    useEffect( () => { if (index > props.collection?.content.length - 1) { setIndex(0) } }, [props.collection, index])

    return props.collection?.content[index] ?
        (<section className="collection">
            <header>
                <h3>{props.collection?.name}</h3>
                <p className="legend">{props.collection?.location}</p>
            </header>
            <div className="selected">
                <div className="wrapper">
                    <h4>{props.collection?.content[index].name}</h4>
                    <p className="description">{props.collection?.content[index].description}</p>
                    {props.collection?.content.length > 1 ? <div className="navbar">
                        <Svg src='ui' name='left' styles='nav prev' onClick={() => select(index - 1)} />
                        <Svg src='ui' name='left' styles='nav next' onClick={() => select(index + 1)} />
                    </div> : null }
                </div>
                <Img src={`works/graphism/${props.collection.src}`} name={props.collection?.content[index].src} alt={props.collection?.content[index].name} />
            </div>
        </section>) : null;

}