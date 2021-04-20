import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState';
import './pokemon-card.style.scss'
import AddButton from "../../AddButton"
import Modal from "../modal/Modal"

export default function PokemonCard({ number, name }) {
    const imageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
    //const [modalOpen, setModalOpen] = useState(false);
    const { openModal } = useContext(GlobalContext)

    const setModalOpen = ({ name, number }, isOpen) => {
        console.log(name)
        openModal({
            name: name,
            number: number,
            isOpen: isOpen
        })
    }

    return (
        <div className="pokemon-card">
            <button onClick={() => setModalOpen({ name, number }, true)}>Add</button>
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
