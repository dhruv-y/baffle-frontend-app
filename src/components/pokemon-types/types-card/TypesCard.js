import React, { useContext } from 'react'
import axios from 'axios';
import { GlobalContext } from '../../../context/GlobalState';
import './types-card.style.scss'

export default function TypesCard({ type }) {
    const { getAllPokemon } = useContext(GlobalContext);

    const getTypeData = async (type) => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
            const pokemons = res.data.pokemon
            getAllPokemon(pokemons)

        } catch (err) {
            console.log("error", err);
            // handle error
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
