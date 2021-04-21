import React, { useContext } from 'react'
import './homepage.style.scss'
import logo from '../../img/pokedex.png'
import TypesContainer from '../../components/pokemon-types/types-container/TypesContainer'
import PokemonContainer from '../../components/pokemons/pokemon-container/PokemonContainer'
import FavoritesContainer from '../../components/favorites/favorites-container/FavoritesContainer'
import Modal from '../../components/modal/Modal'
import { GlobalContext } from '../../context/GlobalState';

export default function Homepage() {
    const { modal } = useContext(GlobalContext);
    return (
        <div className="homepage">
            <div className="header">
                <img src={logo} className="logo" alt="pokedex" />
            </div>
            <div className="container">
                {
                    modal.isOpen && (
                        <Modal />
                    )
                }
                <div className="types">
                    <TypesContainer />
                </div>
                <div className="pokemons">
                    <PokemonContainer />
                </div>
                <div className="favorites">
                    <FavoritesContainer />
                </div>
            </div>
        </div>
    )
}
