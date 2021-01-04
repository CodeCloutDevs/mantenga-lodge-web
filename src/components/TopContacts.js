import React from 'react'
import { Container, IconButton, Grid, Button, makeStyles } from '@material-ui/core'
import { Facebook, Twitter, Instagram, YouTube, EmailOutlined, Call, LocationOn } from '@material-ui/icons'


const useStyles = makeStyles({
    mainContainer: {
        backgroundColor: '#111111'
    },
    contactsContainer: {

    },
    btn: {
        textTransform: 'none',
        color: '#FFFFFF'
    },
    socialIcons: {
        fill: '#FFFFFF'
    },
    contactIcons: {
        fill: '#1BD14D'
    }
})

const TopContacts = () => {
    const classes = useStyles()
    return (
        <Container maxWidth='xl' className={classes.mainContainer}>
            <Container maxWidth='lg'>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                        <IconButton>
                            <Facebook className={classes.socialIcons}/>
                        </IconButton>
                        <IconButton>
                            <Twitter className={classes.socialIcons}/>
                        </IconButton>
                        <IconButton>
                            <Instagram className={classes.socialIcons}/>
                        </IconButton>
                        <IconButton>
                            <YouTube className={classes.socialIcons}/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Button startIcon={<EmailOutlined className={classes.contactIcons}/>} className={classes.btn}>
                            reservations@mantengalodge.com
                        </Button>
                        <Button startIcon={<Call className={classes.contactIcons}/>} className={classes.btn}>
                            +268 2416-1049
                        </Button>
                        <Button startIcon={<LocationOn className={classes.contactIcons}/>} className={classes.btn}>
                            Tivakashi St, Ezulwini Road
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default TopContacts