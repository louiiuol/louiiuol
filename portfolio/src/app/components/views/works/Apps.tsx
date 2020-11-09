import React from 'react';
import { QuarterContent } from '../../shared';

import apps from '../../../../assets/json/works/apps.json';

export const Apps = () => {

    return (
        <QuarterContent id='apps'>
            <section id="apps-gallery">
                {apps.map((app, index) =>
                    <article key={index}>
                        {app}
                    </article>)}
            </section>
        </QuarterContent>)

}