import React from 'react'
import { useFormContext } from 'react-hook-form'

import MovieName from './components/inputs/MovieName';
import TimeSpan from './components/inputs/TimeSpan';
import Rating from './components/inputs/Rating';
import AddMovieButton from './components/AddMovieButton';
import {addMovie, store} from '../../store';

export default function Form() {
    const { handleSubmit, reset } = useFormContext()

    const addMovieToStore = (movie) => {
        store.dispatch(addMovie(movie))
    }

    const onSubmit = (formData) => {
        addMovieToStore({
            ...formData,
            id: new Date().getTime(),
            checked: false
        })

        reset()
    };


    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <MovieName />
            <TimeSpan />
            <Rating />
            <AddMovieButton />
        </form>
    )
}