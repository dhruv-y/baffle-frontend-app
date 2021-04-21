import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function AddButton({ id, name }) {
    const { openModal, favorites } = useContext(GlobalContext);

    let favoritedPokemon = favorites.find(p => p.number === id);
    const favoritesDisabled = favoritedPokemon ? true : false

    const setModalOpen = ({ id, name }, isOpen) => {
        openModal({
            name: name,
            number: id,
            isOpen: isOpen
        })
    }

    return (
        <div className="button-container" style={{ textAlign: 'right' }}>
            <button
                onClick={() => setModalOpen({ id, name }, true)}
                disabled={favoritesDisabled}
                style={{ border: 0, padding: '5px', background: "transparent" }}
            >
                <i className="fas fa-plus" style={{ cursor: 'pointer' }}></i>
            </button>
        </div>
    )
}
