import React, { useEffect } from 'react';
import Typist from 'react-typist';
import { Svg } from '../../shared';

import categories from '../../../../assets/json/skills.json';

export const Skills = () => {

  const addHoverEffect = (cards: Element | null) => {
    if (cards) {
      const childs = cards.children;
      for (let i = 0; i < childs.length - 1; i++) {
        childs[i].addEventListener('mouseenter', () => childs[i].parentElement?.classList.add('hovered'))
        childs[i].addEventListener('mouseleave', () => childs[i].parentElement?.classList.remove('hovered'))
      }
    }
  }

  const feed = [...categories].reverse();
  useEffect(() => addHoverEffect(document.querySelector('.card-list')))
  return (
    <section id='skills' className="container cols start tabs animate__animated animate__bounceInRight">
      <Typist avgTypingDelay={50} startDelay={0}>
        Domaines de compétences
        </Typist>
      <section className="card-list">
        {feed.map((category, index) =>
          <article key={index} className='card'>
            <header className="header">
              <h2>{category.title}</h2>
            </header>
            <section className="content">
              {category.skills.map((skill, i) => <Skill key={i} value={skill} className="card-skill" />)}
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