import React, { useState } from 'react';
import { Img, QuarterContent } from '../../shared';

import videos from '../../../../assets/json/works/videos.json';
import '../../../../assets/styles/components/views/works/videos.css';

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

const Player = (video: any) =>
    (<section className="video-details">
        <iframe title={video.selected?.name} key={video?.src} src={`https://www.youtube.com/embed/${video.selected?.src}`}></iframe>
        <div className="infos">
            <h3 className='is-primary'>{video.selected?.name} - <strong>{video.selected?.date}</strong></h3>
            <p>{video.selected?.description.map((desc: string, id: number) => <span key={id}>{desc}</span>)}</p>
        </div>
    </section>);

