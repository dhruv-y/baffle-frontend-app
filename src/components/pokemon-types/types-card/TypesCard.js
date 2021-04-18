import React from 'react'
import axios from 'axios';
export default function TypesCard({ type }) {

    const getTypeData = async (type) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
        console.log(res.data.pokemon)
    }

    return (
        <div className="types-card"
            onClick={() => getTypeData(type)}
        >
            <h4>{type}</h4>
        </div>
    )
}
