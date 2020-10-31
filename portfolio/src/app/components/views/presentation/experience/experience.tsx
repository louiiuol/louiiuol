import React from 'react';

const Experience = (props: any) => {

    return (
        <li className="card-wrapper">
            <article key={props.xp.id} className={`card shadowed ${props.xp.type === 'FORMATION' ? 'accent' : ''}`}>
                <aside className="aside">
                    <p>{props.xp.date.end}</p>
                    <p>{props.xp.date.start}</p>
                </aside>
                <section className="card-content">
                    <header className="header">
                        <h5>{props.xp.title}</h5>
                        <div className="location">
                            <p>{props.xp.location.establishment} <br /> <span>{props.xp.location.city}</span></p>
                        </div>
                    </header>
                    <div className="description">
                        <em>{props.xp.description}</em>
                        <ul>
                            {props.xp.actions.map((action: string, index: number) => <li key={index} className='action'>{action}</li>)}
                        </ul>
                    </div>
                    <footer>
                        {props.xp.keyword.map((keyword: string, index: string) => <strong key={index} className='keyword'>{keyword}</strong>)}
                    </footer>
                </section>
            </article>
        </li>
    );

}; export default Experience;