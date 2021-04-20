import React, { useState, useContext } from 'react'
import './modal.style.scss'
import { GlobalContext } from '../../../context/GlobalState';
import CloseButton from '../../CloseButton'

export default function Modal() {
    const { modal, closeModal, addPokemonToFav } = useContext(GlobalContext)
    const [modalNote, setModalNote] = useState({
        note: ""
    })

    const closeModalHandler = () => {
        closeModal()
    }

    const handleChange = (e) => {
        setModalNote({ ...modalNote, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addPokemonToFav({
            name: modal.name,
            number: modal.number,
            note: modalNote.note
        })

        closeModalHandler()
    }

    return (
        <div
            className="modal-container"
        >
            <div className="modal-header">
                <h4>Add {modal.name} to Favorites</h4>
                <button onClick={closeModalHandler}>x</button>
            </div>
            <div className="modal-form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="note"
                        placeholder="Enter an optional note..."
                        value={modalNote.note}
                        onChange={handleChange}
                    />
                    <input
                        type="submit"
                    />
                </form>
            </div>
        </div >
    )
}
