import React, { useContext } from 'react'
import { Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { SearchContext } from '../TableHolder/SearchContextProvider'

export default function Search() {
    const { _, updateValue } = useContext(SearchContext)

    const onSearchChange = (e) => {
        const val = e.target.value
        if(val.length >= 3) {
            updateValue(val.toLowerCase())
            return undefined
        }
        updateValue('')
    }

    return (
        <Box className="mb-25">
            <TextField
                placeholder="Search"
                InputProps={{
                    endAdornment: <SearchIcon />,
                }}
                onChange={onSearchChange}
            />
        </Box>
    )
}