import React, { useState } from 'react'
import TYPE_DATA from './TypesData'
import TypesCard from '../types-card/TypesCard'
import './types-container.style.scss'

export default function TypesContainer() {
    const [pokeTypes, setPokeTypes] = useState({
        types: TYPE_DATA
    });
    const { types } = pokeTypes

    return (
        <div className="types-container">
            <h2 className="title">Pokemon Types</h2>
            {
                types.map(({ id, type }) => (
                    <TypesCard key={id} type={type} />
                ))
            }
        </div>
    )
}
