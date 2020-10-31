import React from 'react';

const Player = (props: any) => {

    return (
        <section className="video-details">
            <div className="screen">
                <video controls key={props?.src}
                    src={`${process.env.PUBLIC_URL}/works/movies/${props.selected?.src}`}
                    poster={`${process.env.PUBLIC_URL}/works/movies/covers/${props.selected?.cover}`}>
                    Désolé, votre navigateur ne supporte pas ce type de vidéo ..
                </video>
            </div>
            <div className="infos">
                <h3 className='is-primary'>{props.selected?.name}</h3>
                <p>{props.selected?.description}</p>
            </div>
        </section>
    );

}; export default Player;