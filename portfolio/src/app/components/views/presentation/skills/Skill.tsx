import React from 'react';
import Icon from '../../../shared/icon/Icon';
import DynamicIcon from '../../../shared/icon/DynamicIcon';

import certifiedIcon from '../../../../../assets/img/icons/skills/certified.svg';
import proIcon from '../../../../../assets/img/icons/skills/pro.svg';

const Skill = (props: any) => {

    const skill = props.value;
    return (
        <section className="skill">
            <aside className='is-primary'>
                <DynamicIcon size='xs' skill={true} className='skill-icon' name={skill.icon} />
            </aside>
            <div className="content">
                <h3 className="name">{skill.name}</h3>
                <div className="infos container start">
                    <p>{skill.level}</p>
                    {skill.certified ? <Icon size='xxs' extra='graduated hoverable' src={certifiedIcon} /> : null}
                    {skill.pro ? <Icon size='xxs' extra='hoverable' src={proIcon} /> : null}
                </div>
            </div>
        </section>
    );

}; export default Skill;