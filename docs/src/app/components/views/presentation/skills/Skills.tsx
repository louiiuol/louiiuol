import React from 'react';
import Typist from 'react-typist';
import categories from '../../../../../assets/json/skills.json';

import './Skills.css';
import Skill from './Skill/Skill';

const Skills = () => {

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
              {category.skills.map(skill => <Skill key={skill.id} value={skill} className="card-skill"></Skill>)}
            </section>
          </article>)}
      </section>
    </section>);

}; export default Skills;
