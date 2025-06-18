import { MenuItem, TextField } from '@mui/material'
import React from 'react'

const LearnInput = () => {
    return <>
        <TextField />
        <TextField label='filled' variant='filled' />
        <TextField label='outlined' variant='outlined' />
        <TextField label='standard' variant='standard' />
        <hr />
        <TextField error label='outlined' variant='outlined' />
        <hr />
        <TextField multiline label='outlined' variant='outlined' />
        <hr />
        <TextField select label='choose city' >
            <MenuItem value="delhi">delhi</MenuItem>
            <MenuItem value="mumbai">mumbai</MenuItem>
            <MenuItem value="punr">punr</MenuItem>
        </TextField>
        <hr />
        <TextField label='outlined' variant='outlined' fullWidth />
        <TextField label='outlined' variant='outlined' fullWidth color='success' />



    </>
}

export default LearnInput