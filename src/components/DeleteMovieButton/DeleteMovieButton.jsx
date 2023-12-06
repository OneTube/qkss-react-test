import React from 'react'
import { Button } from '@mui/material'

import { deleteMovies, store } from '../../store'

export default function DeleteMovieButton() {
    const deleteMoviesHandler = () => {
        store.dispatch(deleteMovies())
    }
    return (
        <Button
            variant='outlined'
            color='error'
            onClick={deleteMoviesHandler}
        >
            Delete Movie
        </Button>
    )
}