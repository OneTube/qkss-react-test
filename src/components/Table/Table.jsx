import React, { useContext, useMemo} from 'react'
import { useSelector } from 'react-redux'
import { DataGrid, GridColDef,  } from '@mui/x-data-grid'
import { Checkbox } from '@mui/material'

import { checkMovie, store } from '../../store'
import { SearchContext } from '../TableHolder/SearchContextProvider'

const columns = [
    {
        field: 'id',
        headerName: 'Delete',
        width: 70,
        sortable: false,
        renderCell: (params) => (
            <div>
                <Checkbox onChange={() => {store.dispatch(checkMovie(params.row.id))}} />
            </div>
        ),
    },
    {
        field: 'movieName',
        headerName: 'Movie Name',
    },
    {
        field: 'timeSpan',
        headerName: 'Time Span',
        sortable: false,
    },
    {
        field: 'rating',
        headerName: 'Rating',
        sortable: false,
    },
];

export default function Search() {
    const { searchValue } = useContext(SearchContext)

    const rows = useSelector(state => state)

    const filteredRows = useMemo(() => rows.filter(row => row.movieName.toLowerCase().includes(searchValue)),
        [rows, searchValue])

    return (
        <DataGrid
            className="mb-25"
            rows={filteredRows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                },
            }}
        />
    )
}