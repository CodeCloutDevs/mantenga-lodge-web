import React from 'react'
import {Container, Grid, Button, makeStyles, Typography} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import Front from '../img/front.jpg'
import Logo from '../img/mantage-lodge.png'

const useStyles = makeStyles({
    container: {
        backgroundImage: `url(${Front})`,
        height: '80vh',
        backgroundSize: 'cover'
    },
    appbar: {
        backgroundColor: '#111111',
        opacity: .9,
        padding: '5px 2px'
    },
    logo: {
        marginLeft: 10
    },
    navs: {
        color: '#FFFFFF'
    },
    btnVisit: {
        backgroundColor: '#1BD14D',
        color: '#FFFFFF',
        borderRadius: 0,
        marginRight: 10
    },
    welcome: {
        textAlign: 'center',
        margin: '40px auto',
        color: '#FFFFFF'
    },
    lblVilla: {
        fontSize: 72
    },
    btnMore: {
        textTransform: 'capitalize',
        letterSpacing: 2.3,
        backgroundColor: '#1BD14D',
        padding: 18,
        color: '#FFFFFF',
        width: 200,
        marginTop: 50,
        borderRadius: 0,
    }
}) 

const Navbar = () => {
    const classes = useStyles()
    return (
        <Container maxWidth='xl' className={classes.container}>
            <Grid container>
                <Grid item container direction="row" justify="space-between" alignItems="center" className={classes.appbar}>
                    <Grid item>
                        <img src={Logo} alt="logo" width="100" className={classes.logo}/>
                    </Grid>
                    <Grid item>
                        <Button endIcon={<ExpandMore />} className={classes.navs}>
                            Home
                        </Button>
                        <Button className={classes.navs}>
                            About
                        </Button>
                        <Button className={classes.navs}>
                            Gallery
                        </Button>
                        <Button endIcon={<ExpandMore />} className={classes.navs}>
                            Pages
                        </Button>
                        <Button className={classes.navs}>
                            Contact
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.btnVisit}>
                            Schedule a visit
                        </Button>
                    </Grid>
                </Grid>
                <Grid item container justify="center">
                    <Container maxWidth="sm" className={classes.welcome}>
                        <Typography>AWESOME LOCATION - GREAT PRICES</Typography>
                        <Typography variant="h2" className={classes.lblVilla}>DISCOVER</Typography>
                        <Typography variant="h2" className={classes.lblVilla}>ESWATINI VILLA</Typography>
                        <Button className={classes.btnMore}>
                            Read More
                        </Button>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Navbar