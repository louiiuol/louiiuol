import React from 'react';

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

}; export default Player;