import React from 'react';
import Videos from './Videos';

const WorkDetail = (props: {category:string}) => {

    if (props.category === "Vidéos") {
        return <Videos />
    } else {
        return (<div></div>);
    }

}; export default WorkDetail;