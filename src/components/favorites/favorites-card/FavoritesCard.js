import React from 'react'
import './favorites-card.style.scss'
import CloseButton from '../../CloseButton'

export default function FavoritesCard({ id, name, note }) {
    return (
        <div className="favorites-card">
            <CloseButton type="favorites" id={id} />
            <h4>{name}</h4>
            <p>{note}</p>
        </div>
    )
}
