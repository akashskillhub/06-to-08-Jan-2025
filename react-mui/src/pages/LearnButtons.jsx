import { Button, ButtonGroup, Fab } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
const LearnButtons = () => {
    return <>
        <Button>test</Button>
        <Button variant='contained'>contained</Button>
        <Button variant='outlined'>outlined</Button>
        <Button variant='text'>text</Button>
        <hr />
        <Button variant='contained' color='error'>error</Button>
        <Button variant='contained' color='info'>info</Button>
        <Button variant='contained' color='primary'>primary</Button>
        <Button variant='contained' color='secondary'>secondary</Button>
        <Button variant='contained' color='success'>success</Button>
        <Button variant='contained' color='warning'>warning</Button>
        <hr />
        <Button variant='contained' color='warning' size='large'>warning large</Button>
        <Button variant='contained' color='warning' size='medium'>warning medium</Button>
        <Button variant='contained' color='warning' size='small'>warning small</Button>
        <hr />
        <Button variant='outlined' color='error' startIcon={<DeleteIcon />}>delete</Button>
        <Button variant='outlined' endIcon={<SendIcon />}>Submit</Button>
        <Button variant='outlined' endIcon={<SendIcon />} loading >Submit</Button>
        <hr />
        <ButtonGroup>
            <Button color='error'>error</Button>
            <Button color='info'>info</Button>
            <Button color='primary'>primary</Button>
        </ButtonGroup>
        <hr />
        <Fab>
            <EditIcon />
        </Fab>

    </>
}

export default LearnButtons