import React, { useState } from 'react';

import videos from '../../../../assets/json/works/videos.json';
import Player from './Player';
import { Img } from '../../shared';

const Videos = () => {

    const feed = [...videos];
    const [selected, setSelected] = useState(feed[0]);

    return (
        <section className='videos-container fullsize'>
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

}; export default Videos;