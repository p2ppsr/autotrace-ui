import React from 'react'
import { NavLink } from 'react-router-dom'
import useStyles from './home-style'
import Button from '@mui/material/Button'
import { Grid, Typography, Container} from '@mui/material'

const Home = () => {
    const classes = useStyles()

    return (
        <div>
            <Container maxWidth='lg'>
                <Grid container justify='center' direction='column'>
                    <Grid item align='center' className={classes.heading}>
                        <Typography variant='h3'>Home</Typography>
                        <Button variant='contained' color='secondary'>Begin</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Home