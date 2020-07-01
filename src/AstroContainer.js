import React from 'react'

import Astro from './Astro'
export default function AstroContainer(props) {
    return (
        <div>
            {props.astros.map(astro => <Astro key={Math.random()} astro={astro} />)}
        </div>
    )
}
