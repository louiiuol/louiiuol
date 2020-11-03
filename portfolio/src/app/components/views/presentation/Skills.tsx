import React from 'react';
import Typist from 'react-typist';
import { Svg } from '../../shared';

import categories from '../../../../assets/json/skills.json';

export const Skills = () => {

  categories.sort((current, next) => next.id - current.id);
  return (
    <section id='skills' className="container cols start tabs animate__animated animate__bounceInRight">
      <Typist avgTypingDelay={50} startDelay={0}>
        Domaines de compétences
        </Typist>
      <section className="card-list">
        {categories.map(category =>
          <article key={category.id} className='card'>
            <header className="header">
              <h2>{category.title}</h2>
            </header>
            <section className="content">
              {category.skills.map(skill => <Skill key={skill.id} value={skill} className="card-skill" />)}
            </section>
          </article>)}
      </section>
    </section>
  );

}

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

}