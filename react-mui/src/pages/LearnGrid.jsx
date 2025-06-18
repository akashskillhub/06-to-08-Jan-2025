import { Grid, Paper, Stack } from '@mui/material'
import React from 'react'

const LearnGrid = () => {
    return <>
        <Grid container>
            <Grid size={{ xs: 10, sm: 6, md: 2 }}> <Paper>box 1</Paper> </Grid>
            <Grid size={{ xs: 2, sm: 6, md: 10 }}> <Paper>box 2</Paper> </Grid>
        </Grid>

        <hr />
        <Stack direction={'row'} sx={{ justifyContent: "space-between" }}>
            <Paper>box 1</Paper>
            <Paper>box 2</Paper>
        </Stack>
    </>
}

export default LearnGrid