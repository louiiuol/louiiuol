import * as React from 'react'
import { ReactSVG } from 'react-svg'

function Icon (props: any) {
    return (<ReactSVG className="icon-svg" src={props.src} />)
}
export default Icon;