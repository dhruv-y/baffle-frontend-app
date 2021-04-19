import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../context/GlobalState';
import './pokemon-card.style.scss'
import AddButton from "../../AddButton"

export default function PokemonCard({ number, name }) {
    const imageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="pokemon-card">
            <AddButton onClick={() => setModalOpen(true)} />
            <div className="img-container">
                <img src={imageLink} alt="pokeimg" />
            </div>
            <div className="info">
                <span className="number">#{number}</span>
                <h4 className="name">{name}</h4>
            </div>
        </div>
    )
}
