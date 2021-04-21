import React from 'react'

export default function SearchFilter({
    value, handleChange, className, placeholder, name
}) {
    return (
        <div>
            <input
                type="text"
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                name={name}
            />
        </div>
    )
}
