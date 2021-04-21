import React, { useContext } from 'react'
import axios from 'axios';
import { GlobalContext } from '../../../context/GlobalState';
import './types-card.style.scss'

export default function TypesCard({ type }) {
    const { getAllPokemon } = useContext(GlobalContext);

    const getTypeData = async (type) => {
        try {
            // set global state for current type pokemons
            const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
            const pokemons = res.data.pokemon
            getAllPokemon({
                pokemons: pokemons,
                type: type
            })

        } catch (err) {
            // handle error
            console.log("error", err);
        }
    }

    return (
        <div className="types-card"
            onClick={() => getTypeData(type)}
        >
            <h4 className="type">{type}</h4>
        </div>
    )
}
