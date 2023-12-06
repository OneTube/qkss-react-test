import React from 'react'
import { TextField  } from '@mui/material'
import { useController, useFormContext } from 'react-hook-form'

export default function TimeSpan() {
    const { control } = useFormContext()
    const { field, fieldState: { error } } = useController({
        name: 'timeSpan',
        control,
        defaultValue: '',
        rules: {
            required: true
        },
    })

    return (
        <TextField
            {...field}
            label={<label>Time Span</label>}
            placeholder="1 hour"
            error={error !== undefined}
            helperText={error?.message}
        />
    )
}