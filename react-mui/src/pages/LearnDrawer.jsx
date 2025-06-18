import { Button, Dialog, DialogContent, Drawer, List, ListItem, Snackbar } from '@mui/material'
import React, { useState } from 'react'

const LearnDrawer = () => {
    const [show, setShow] = useState(false)
    return <>
        <Button variant='contained' onClick={e => setShow(true)}>Click Me</Button>
        <Drawer open={show} onClose={e => setShow(false)}>
            <List>
                <ListItem>Dashboard</ListItem>
                <ListItem>Orders</ListItem>
                <ListItem>Users</ListItem>
            </List>
        </Drawer>

        <Dialog open={show} onClose={e => setShow(false)}>
            <DialogContent> Lorem ipsum dolor sit amet. </DialogContent>
        </Dialog>

        <Snackbar
            open={show}
            onClose={e => setShow(false)}
            message="thank you"
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
            autoHideDuration={3000} />
    </>
}

export default LearnDrawer