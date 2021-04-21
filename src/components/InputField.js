import React from 'react'

export default function SearchFilter(props) {
    const { value, handleChange, placeholder, name } = props
    return (
        <div>
            <input
                type="text"
                name={name}
                className={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}
