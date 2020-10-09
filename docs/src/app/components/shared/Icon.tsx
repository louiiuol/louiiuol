import * as React from 'react'
import { ReactSVG } from 'react-svg'

function Icon (props: any) {
    return (<ReactSVG src={props.src} />)
}
export default Icon;