import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function AddButton({ id, name }) {
    const { openModal, favorites } = useContext(GlobalContext);

    // disable button if already favorited
    let favoritedPokemon = favorites.find(fav => fav.id === id);
    const favoritesDisabled = favoritedPokemon ? true : false

    const setModalOpen = ({ id, name }, isOpen) => {
        openModal({
            id: id,
            name: name,
            isOpen: isOpen
        })
    }

    return (
        <div className="button-container">
            <button
                onClick={() => setModalOpen({ id, name }, true)}
                disabled={favoritesDisabled}
                className="add-button"
            >
                <i className="fas fa-plus add"></i>
            </button>
        </div>
    )
}
