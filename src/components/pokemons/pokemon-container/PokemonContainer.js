import React, { useState, useContext } from 'react'
import PokemonCard from '../pokemon-card/PokemonCard'
import { GlobalContext } from '../../../context/GlobalState';
import './pokemon-container.style.scss'

export default function PokemonContainer() {
    const { pokemons } = useContext(GlobalContext);
    console.log(pokemons[0])
    return (
        <div className="container">
            <h2>Pokemons</h2>
            {
                pokemons.length ? (
                    pokemons[0].map(({ pokemon }) => (
                        <PokemonCard
                            key={pokemon.url.split('/', 7)[-1]}
                            name={pokemon.name}
                        />
                    ))

                ) : (
                        <div className="inner-message">
                            <h3>Select a type first...</h3>
                        </div >
                    )
            }
        </div >
    )
}
