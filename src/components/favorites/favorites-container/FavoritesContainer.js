import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState';
import FavoritesCard from '../favorites-card/FavoritesCard'
import './favorites-container.style.scss'

export default function FavoritesContainer() {
    const { favorites } = useContext(GlobalContext);

    return (
        <div className="favorites-container">
            <h2 className="title">Favorites</h2>
            {
                favorites.length ? (
                    favorites.map(favorite => (
                        <FavoritesCard
                            key={favorite.id}
                            favorite={favorite}
                        />
                    ))
                ) : (
                        <h4 className="inner-message">No favorites yet</h4>
                    )
            }
        </div>
    )
}
