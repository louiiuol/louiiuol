import React from 'react';
import Icon from '../../../../shared/icon/Icon';

import codewars from '../../../../../../assets/img/icons/codewars.svg';
import linkedin from '../../../../../../assets/img/icons/linkedin.svg';
import codepen from '../../../../../../assets/img/icons/codepen.svg';
import github from '../../../../../../assets/img/icons/github.svg';

import './Socials.css';

function Socials() {
    return (
        <div className='socials'>
            <em>Retrouvez moi sur les réseaux</em>:
            <ul>
                <li><a target='blank' href="https://www.linkedin.com/in/louis-godlewski"><Icon src={linkedin} /></a></li>
                <li><a target='blank' href="https://codepen.io/louiiuol"><Icon src={codepen} /></a></li>
                <li><a target='blank' href="https://github.com/louiiuol"><Icon src={github} /></a></li>
                <li><a target='blank' href="https://www.codewars.com/users/louiiuol"><Icon src={codewars} /></a></li>
            </ul>
        </div>
    );
}

export default Socials;