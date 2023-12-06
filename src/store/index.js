import { createSlice, configureStore } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
    name: 'movies',
    initialState: [],
    reducers: {
        addMovie: (state, {payload}) => {
            state.push(payload);
        },
        deleteMovies: state => state.filter(movie => movie.checked === false),
        checkMovie: (state, { payload }) => {
            const movieIndex = state.findIndex(movie => movie.id === payload);
            state[movieIndex].checked = !state[movieIndex].checked
        }
    }
})

export const store = configureStore({
    reducer: moviesSlice.reducer
})

export const { addMovie, deleteMovies, checkMovie } = moviesSlice.actions