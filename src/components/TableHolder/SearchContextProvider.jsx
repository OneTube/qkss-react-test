import React, { useState, createContext } from 'react'

export const SearchContext = createContext(null)

export default function SearchContextProvider({ children }) {
    const [searchValue, setSearchValue] = useState('')

    const updateValue = (newValue) => {
        setSearchValue(newValue);
    }

    return (
        <SearchContext.Provider value={{ searchValue, updateValue }}>
            {children}
        </SearchContext.Provider>
    )
}