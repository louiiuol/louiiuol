import React from 'react';
import Icon from '../../../shared/icon/Icon';

import codewars from '../../../../../assets/img/icons/codewars.svg';
import linkedin from '../../../../../assets/img/icons/linkedin.svg';
import codepen from '../../../../../assets/img/icons/codepen.svg';
import github from '../../../../../assets/img/icons/github.svg';

const Socials = () => {
    return (
        <div className='socials is-white spaced'>
            <em className='centered'>Retrouvez moi sur les réseaux</em>:
            <ul className='is-flex evenly fullwidth spaced'>
                <li><a className='is-white' target='blank' href="https://www.linkedin.com/in/louis-godlewski"><Icon size='xs'src={linkedin} /></a></li>
                <li><a className='is-white' target='blank' href="https://codepen.io/louiiuol"><Icon size='xs'src={codepen} /></a></li>
                <li><a className='is-white' target='blank' href="https://github.com/louiiuol"><Icon size='xs'src={github} /></a></li>
                <li><a className='is-white' target='blank' href="https://www.codewars.com/users/louiiuol"><Icon size='xs'src={codewars} /></a></li>
            </ul>
        </div>
    );
}; export default Socials;