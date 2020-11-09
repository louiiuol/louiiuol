import React, { useState } from 'react';
import { Img } from '../../shared';

import videos from '../../../../assets/json/works/videos.json';
import '../../../../assets/styles/components/views/works/videos.css';
import { QuarterContent } from '../../shared/QuarterContent';

export const Videos = () => {

    const feed = [...videos];
    const [selected, setSelected] = useState(feed[0].content[0]);

    return (
        <QuarterContent id='videos-container'>
            <Player selected={selected} />
            <section className="next">
                    { feed.map((collection, index) =>
                        <article key={index} className="collection-preview">
                            <h3>{collection.name}</h3>
                            <div className="covers">
                                {collection.content.map((video, id) =>
                                    <div key={id} className="cover" onClick={() => setSelected(video)} >
                                        <Img src='works/videos-covers' name={video.cover} alt={video.name} />
                                        <div className="preview-infos">
                                            <p className='is-primary'>{video.name}</p>
                                            <em>{video.date}</em>
                                        </div>
                                    </div>)}
                            </div>
                        </article> )}
                </section>
        </QuarterContent>);

};

const Player = (props: any) => {

    return (
        <section className="video-details">
            <div className="screen">
                <iframe title={props.selected?.name} key={props?.src} src={`https://www.youtube.com/embed/${props.selected?.src}`}></iframe>
            </div>
            <div className="infos">
                <h3 className='is-primary'>{props.selected?.name} - <strong>{props.selected?.date}</strong></h3>
                
                <p>
                    {props.selected?.description.map((desc: string, id: number) => <span key={id}>{desc}</span>)}
                </p>
                
            </div>
        </section>
    );

}