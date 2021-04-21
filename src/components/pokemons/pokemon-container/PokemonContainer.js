import React, { useContext } from 'react'
import PokemonCard from '../pokemon-card/PokemonCard'
import Modal from '../modal/Modal'
import { GlobalContext } from '../../../context/GlobalState';
import pokeball from '../../../img/pokeball.svg'
import './pokemon-container.style.scss'

export default function PokemonContainer() {
    const { pokemons, modal } = useContext(GlobalContext);
    return (
        <div className="pokemon-container">
            {
                modal.isOpen ? (
                    <Modal />
                ) : null
            }
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
                        <h3 className="inner-text">Select your favorite type <img src={pokeball} alt="pokeImg" className="icon" /></h3>
                    )
            }
        </div >
    )
}
