import React from 'react'
import { NavLink } from 'react-router-dom'
import useStyles from './header-style'
import { Grid, AppBar, Toolbar, Card, CardMedia } from '@mui/material'

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <AppBar position='relative' elevation={0} sx={{ backgroundColor: 'white', minwidth: '100vw' }}>
        <Toolbar>
          <div className={classes.nav_wrap}>
            <Card elevation={0} className={classes.logo}>
              <NavLink to='/'>
                <CardMedia component='img' height='auto' image='/images/autoTraceLogo.png' />
              </NavLink>
            </Card>
            <Grid container align='right' className={classes.links_wrap}>
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
          </div>
        </Toolbar>
      </AppBar>
    </div >
  )
}

export default Header