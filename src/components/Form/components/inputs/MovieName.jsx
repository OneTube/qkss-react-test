import React from 'react'
import { useFormContext, useController } from 'react-hook-form'
import { TextField  } from '@mui/material'

export default function MovieName() {
    const { control } = useFormContext()
    const { field, fieldState: { error } } = useController({
        name: 'movieName',
        control,
        defaultValue: '',
        rules: {
            required: true
        },
    })

    return (
        <TextField
            {...field}
            label={<label>Movie Name</label>}
            placeholder="Movie"
            error={error !== undefined}
            helperText={error?.message}
        />
    )
}