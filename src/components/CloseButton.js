import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function CloseButton({ type, id }) {
    const { closeModal, removePokemonFromFav } = useContext(GlobalContext);

    return (
        <div className="button-container">
            {type === "modal" && (
                <>
                    <button className="close-button">
                        <i className="fas fa-times close"
                            onClick={() => closeModal()}>
                        </i>
                    </button>
                </>
            )}

            {type === 'favorites' && (
                <>
                    <button className="close-button">
                        <i className="fas fa-times close"
                            onClick={() => {
                                if (window.confirm('Delete from favorites?'))
                                    removePokemonFromFav(id)
                            }}>
                        </i>
                    </button>
                </>
            )}
        </div>
    )
}
