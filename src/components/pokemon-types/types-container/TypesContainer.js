import React, { useState, useEffect } from 'react'
import TYPE_DATA from './TypesData'
import TypesCard from '../types-card/TypesCard'
import InputField from '../../InputField.js'
import './types-container.style.scss'

export default function TypesContainer() {
    const [searchResult, setSearchResult] = useState([])
    const [searchItem, setSearchItem] = useState("")

    // runs every time the search item changes
    useEffect(() => {
        const results = TYPE_DATA.filter(({ type }) =>
            type.includes(searchItem.toLowerCase())
        );
        setSearchResult(results);
    }, [searchItem])

    const handleChange = (e) => {
        setSearchItem(e.target.value)
    }

    return (
        <div className="types-container">
            <InputField
                value={searchItem}
                handleChange={e => handleChange(e)}
                name="search"
                placeholder="Search a type..."
            />

            {
                searchResult.map(({ id, type }) => (
                    <TypesCard key={id} type={type} />
                ))
            }
        </div >
    )
}
