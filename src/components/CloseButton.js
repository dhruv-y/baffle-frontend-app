import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function CloseButton({ type, id }) {
    const { closeModal, removePokemonFromFav } = useContext(GlobalContext);

    return (
        <div className="close-button" style={{ textAlign: 'right' }}>
            {type === "modal" && (
                <>
                    <button style={{ border: 0, background: "transparent" }}>
                        <i className="fas fa-times"
                            style={{ cursor: 'pointer', color: 'red' }}
                            onClick={() => closeModal()}>
                        </i>
                    </button>
                </>
            )

            }

            {type === 'favorites' && (
                <>
                    <button style={{ border: 0, background: "transparent" }}>
                        <i className="fas fa-times"
                            style={{ cursor: 'pointer', color: 'red' }}
                            onClick={() => removePokemonFromFav(id)}>
                        </i>
                    </button>
                </>
            )
            }
        </div>
    )
}
