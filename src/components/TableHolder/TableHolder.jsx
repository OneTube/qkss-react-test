import React from 'react'
import { Box } from '@mui/material'

import SearchContextProvider from './SearchContextProvider'
import Search from '../Search'
import Table from '../Table'
import DeleteMovieButton from '../DeleteMovieButton'

export default function TableHolder() {
    return (
        <Box>
            <SearchContextProvider>
                <Search />
                <Table />
            </SearchContextProvider>
            <DeleteMovieButton />
        </Box>
    )
}