import React from 'react'
import './homepage.style.scss'
import logo from '../../img/pokedex.png'
import TypesContainer from '../../components/pokemon-types/types-container/TypesContainer'
import PokemonContainer from '../../components/pokemons/pokemon-container/PokemonContainer'

export default function Homepage() {
    return (
        <div className="homepage">
            <div className="header">
                <img src={logo} className="logo" alt="pokedex" />
            </div>
            <div className="container">
                <div className="types">
                    <TypesContainer />
                </div>
                <div className="pokemons">
                    <PokemonContainer />
                </div>
                <div className="favorites">

                </div>
            </div>
        </div>
    )
}
