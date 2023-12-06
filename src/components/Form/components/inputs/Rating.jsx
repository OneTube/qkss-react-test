import React from 'react'
import { useFormContext, useController } from 'react-hook-form'

import { TextField  } from '@mui/material'

import { validationsToRules  } from '../../../../utils/validationsToRules'

export default function Rating() {
    const { control } = useFormContext()
    const { field, fieldState: { error } } = useController({
        name: 'rating',
        control,
        defaultValue: '',
        rules: validationsToRules({
            min:  {
                value: 1,
                message: 'Rating should be more than 0'
            },
            max: {
                value: 10,
                message: 'Rating should be less than 10'
            },
        }),
    })


    return (
        <TextField
            {...field}
            type="number"
            label={<label>Rating</label>}
            placeholder="7"
            error={error !== undefined}
            helperText={error?.message}
        />
    )
}