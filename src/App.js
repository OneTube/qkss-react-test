import React from 'react'
import { Provider } from 'react-redux'
import { FormProvider, useForm } from 'react-hook-form'

import {store} from './store/index'

import MainView from './views/Main'

import './App.css'

function App() {
    const methods = useForm({
        mode: 'onSubmit',
    })

    return (
        <Provider store={store}>
            <FormProvider {...methods}>
                <MainView/>
            </FormProvider>
        </Provider>
    )
}

export default App
