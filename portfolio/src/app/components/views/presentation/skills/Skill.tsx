import React from 'react';
import { Svg } from '../../../shared/Svg';


const Skill = (props: any) => {

    const skill = props.value;
    return (
        <section className="skill">
            <aside className='is-primary'>
                <Svg size='xs' styles='skill-icon' src='skills' name={skill.icon} />
            </aside>
            <div className="content">
                <h3 className="name">{skill.name}</h3>
                <div className="infos container start">
                    <p>{skill.level}</p>
                    {skill.certified ? <Svg size='xxs' styles='graduated hoverable' src='ui' name='certified' /> : null}
                    {skill.pro ? <Svg size='xxs' styles='pro hoverable' src='ui' name='pro' /> : null}
                </div>
            </div>
        </section>
    );

}; export default Skill;