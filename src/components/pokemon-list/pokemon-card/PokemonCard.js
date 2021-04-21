import React from 'react'
import './pokemon-card.style.scss'
import AddButton from "../../AddButton"

export default function PokemonCard({ number, name }) {
    const imageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`

    return (
        <div className="pokemon-card">
            <AddButton id={number} name={name} />

            <div className="img-container">
                <img src={imageLink} alt="pokeimg" />
            </div>

            <div className="info">
                <span className="number">#{number}</span>
                <h4 className="name">{name}</h4>
            </div>
        </div >
    )
}
