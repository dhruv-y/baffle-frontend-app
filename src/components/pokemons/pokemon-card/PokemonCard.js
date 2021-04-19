import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState';
import './pokemon-card.style.scss'

export default function PokemonCard({ name }) {
    console.log(name)
    return (
        <div className="pokemon-card">
            <h4>{name}</h4>
        </div>
    )
}
