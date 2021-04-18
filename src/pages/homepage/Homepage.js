import React from 'react'
import './homepage.style.scss'
import logo from '../../assets/pokedex.png'
import TypesContainer from '../../components/pokemon-types/types-container/TypesContainer'
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

                </div>
                <div className="favorites">

                </div>
            </div>
        </div>
    )
}
