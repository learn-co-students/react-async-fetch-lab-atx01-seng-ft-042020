import React from 'react'

export default function Astro(props) {
    return (
        <div className="astro">
            <h2> {props.astro.name}</h2>
            <p> Craft: {props.astro.craft}</p>
        </div>
    )
}
