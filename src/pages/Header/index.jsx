import React from 'react'
import { NavLink } from 'react-router-dom'
import useStyles from './header-style'
import { Grid, AppBar, Toolbar, Container, Card, CardMedia } from '@mui/material'
//import './header-style1.css'

const Header = () => {
    const classes = useStyles()

    return (
        <div className={classes.header}>
            <AppBar position='relative' elevation={0} sx={{ backgroundColor: 'white', minwidth: '100vw' }}>
                <Toolbar>
                    <Container maxWidth='lg'>
                        <Grid container xs={12} direction='row'>
                            <Grid item align='left' xs={3}>
                                <Card elevation={0}>
                                    <CardMedia component='img' height='auto' image='/images/autoTraceLogo.png' />
                                </Card>
                            </Grid>
                            <Grid item container xs={3}></Grid>
                            <Grid item container xs={6} align='right'>
                                <Grid item>
                                    <NavLink className={classes.item} to='/'>Home</NavLink>
                                </Grid>
                                <Grid item>
                                    <NavLink className={classes.item} to='/Trace'>Trace</NavLink>
                                </Grid>
                                <Grid item>
                                    <NavLink className={classes.item} to='/Register'>Register</NavLink>
                                </Grid>
                                <Grid item>
                                    <NavLink className={classes.item} to='/Transfer'>Transfer</NavLink>
                                </Grid>
                                <Grid item>
                                    <NavLink className={classes.item} to='/Receive'>Receive</NavLink>
                                </Grid>
                                <Grid item>
                                    <NavLink className={classes.item} to='/RepairRequest'>RepairRequest</NavLink>
                                </Grid>
                                <Grid item>
                                    <NavLink className={classes.item} to='/RepairResponse'>RepairResponse</NavLink>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </div >

        /*<div className='header'>
            <div className='logo'>
                <img src='/images/autoTraceLogo.png' alt='AutoTrace Logo' />
            </div>
            <NavLink className='item' to='/'>Home</NavLink>
            <NavLink className='item' to='/Trace'>Trace</NavLink>
            <NavLink className='item' to='/Register'>Register</NavLink>
            <NavLink className='item' to='/Transfer'>Transfer</NavLink>
            <NavLink className='item' to='/Receive'>Receive</NavLink>
            <NavLink className='item' to='/RepairRequest'>RepairRequest</NavLink>
            <NavLink className='item' to='/RepairResponse'>RepairResponse</NavLink>
        </div>*/
    )
}

export default Header