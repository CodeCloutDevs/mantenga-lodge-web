import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'

function Overview() {
    return (
        <Container maxWidth="lg">
            <Grid container direction="row">
                <Grid item md={6}>

                </Grid>
                <Grid item md={6}>
                    <Typography>LODGE OVERVIEW</Typography>
                    <Typography variant="h4">About Mantenga Lodge</Typography>
                    <Typography>Mantenga Lodge is centrally situated and provides an ideal base from which to explore all that the Kingdom of Swaziland has to offer</Typography>
                    <Typography>Mantenga Lodge is located in the beautiful Ezulwini Valley (Valley of Heaven) situated among natural surroundings at the foot of Sheba’s Breasts Mountains (immortalized by Rider Haggards' “King Solomon’s Mines”) overlooking the legendary “Execution Rock”.</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Overview
