import React from 'react';
import {Svg} from '../../../shared/Svg';

const Socials = () => {
    return (
        <div className='socials is-white spaced'>
            <em className='centered'>Retrouvez moi sur les réseaux</em>:
            <ul className='is-flex evenly fullwidth'>
                <li><a className='is-white' target='blank' href="https://www.linkedin.com/in/louis-godlewski"><Svg size='xs'src='socials' name='linkedin' /></a></li>
                <li><a className='is-white' target='blank' href="https://codepen.io/louiiuol"><Svg size='xs'src='socials' name='codepen' /></a></li>
                <li><a className='is-white' target='blank' href="https://github.com/louiiuol"><Svg size='xs'src='socials' name='github' /></a></li>
                <li><a className='is-white' target='blank' href="https://www.codewars.com/users/louiiuol"><Svg size='xs'src='socials' name='codewars' /></a></li>
            </ul>
        </div>
    );
}; export default Socials;