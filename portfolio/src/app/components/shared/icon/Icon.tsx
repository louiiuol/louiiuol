import * as React from 'react'
import { ReactSVG } from 'react-svg'

const Icon = (props: any) => {

    return (<ReactSVG className={`icon-svg ${props.size}`} src={props.src} />);

}; export default Icon;