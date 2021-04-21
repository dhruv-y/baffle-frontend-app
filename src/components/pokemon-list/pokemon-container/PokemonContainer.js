import React, { useContext } from 'react'
import PokemonCard from '../pokemon-card/PokemonCard'
import { GlobalContext } from '../../../context/GlobalState';
import pokeball from '../../../img/pokeball.svg'
import './pokemon-container.style.scss'

export default function PokemonContainer() {
    const { currentType, pokemons } = useContext(GlobalContext);

    // map through all pokemon if available
    return (
        <div className="pokemon-container">
            <h3 className='header'>{currentType}</h3>
            {
                pokemons.length ? (
                    pokemons[0].map(({ pokemon }) => {
                        // get ID from the url attribute
                        const pokeNumber = pokemon.url.split('/')[pokemon.url.split('/').length - 2]
                        return (
                            <PokemonCard
                                key={pokeNumber}
                                number={pokeNumber}
                                name={pokemon.name}
                            />
                        )
                    })

                ) : (
                        <h3 className="inner-text">Select your favorite type <img src={pokeball} alt="pokeImg" className="icon" /></h3>
                    )
            }
        </div >
    )
}
