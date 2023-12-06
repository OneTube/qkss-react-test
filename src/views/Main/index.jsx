import React from 'react';
import { Box  } from '@mui/material'

import Form from '../../components/Form'
import TableHolder from '../../components/TableHolder'

export default function MainView() {
    return (
        <Box className="main-wrap">
            <Form />
            <TableHolder />
        </Box>
    )
}