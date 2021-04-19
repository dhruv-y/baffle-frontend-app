import React, { useState, useContext } from 'react'
import PokemonCard from '../pokemon-card/PokemonCard'
import { GlobalContext } from '../../../context/GlobalState';
import './pokemon-container.style.scss'

export default function PokemonContainer() {
    const { pokemons } = useContext(GlobalContext);
    return (
        <div className="pokemon-container">
            {
                pokemons.length ? (
                    pokemons[0].map(({ pokemon }) => (
                        <PokemonCard
                            key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                            number={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                            name={pokemon.name}
                        />
                    ))

                ) : (
                        <h3 className="inner-text">Select your favorite type</h3>
                    )
            }
        </div >
    )
}
