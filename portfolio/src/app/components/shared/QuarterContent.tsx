import React from 'react';
import { Svg } from '.';
import { Redirect } from 'react-router-dom';

export const QuarterContent = (quarter: {id: string, children: any, styles?: string,}) =>{
    
    const onClose = () => {
        document.querySelector('.full')?.classList.remove('full');
        return <Redirect to="/projets" />
    }

    return (<section className="quarter-container">
        <Svg src='ui' name='close' styles='close' onClick={() =>onClose()}/>
        <section id={quarter.id} className={`quarter-content ${quarter.styles ? quarter.styles : ''}`}>
            {quarter.children}
        </section>
    </section>)
}