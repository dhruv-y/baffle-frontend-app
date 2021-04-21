import React, { useState, useContext } from 'react'
import './modal.style.scss'
import { GlobalContext } from '../../context/GlobalState';
import CloseButton from '../CloseButton'
import InputField from '../InputField'

export default function Modal() {
    const { modal, closeModal, addPokemonToFav } = useContext(GlobalContext)
    const [modalNote, setModalNote] = useState({
        note: ""
    })

    const handleChange = (e) => {
        setModalNote({ ...modalNote, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addPokemonToFav({
            id: modal.id,
            name: modal.name,
            note: modalNote.note
        })
        closeModal()
    }

    return (
        <div className="overlay">
            <div className="modal-container">

                <CloseButton type="modal" />

                <div className="modal-header">
                    <h4>Add a note about <span>{modal.name}</span></h4>
                </div>

                <div className="modal-form">
                    <form onSubmit={handleSubmit}>
                        <InputField
                            name="note"
                            placeholder="Enter an optional note"
                            value={modalNote.note}
                            handleChange={e => handleChange(e)}
                        />
                        <input
                            className="submit"
                            type="submit"
                            value="Add to Favorites"
                        />
                    </form>
                </div>

            </div >
        </div>
    )
}
