import React, { useState } from 'react';
import { Img } from '../../shared';

import videos from '../../../../assets/json/works/videos.json';
import '../../../../assets/styles/components/views/works/videos.css';

export const Videos = () => {

    const feed = [...videos];
    const [selected, setSelected] = useState(feed[0]);

    return (
        <section id='videos-container' className='fullsize'>
            <Player selected={selected} />
                <section className="next">
                    { feed.map((video, index) =>
                        <article key={index} className="video-preview" onClick={() => setSelected(feed[index])}>
                            <div className="cover">
                                <Img src='works/videos-covers' name={video.cover} alt={video.name}/>
                            </div>
                            <h4 className='is-primary'>{video.name}</h4>
                        </article> )}
                </section>
        </section>
    );

};

const Player = (props: any) => {

    return (
        <section className="video-details">
            <div className="screen">
                <iframe title={props.selected?.name} key={props?.src} src={`https://www.youtube.com/embed/${props.selected?.src}`}></iframe>
            </div>
            <div className="infos">
                <h3 className='is-primary'>{props.selected?.name}</h3>
                <p>{props.selected?.description}</p>
            </div>
        </section>
    );

}