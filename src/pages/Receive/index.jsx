import React from 'react'
import useStyles from './receive-style'
import { Grid, Typography, Container} from '@mui/material'

const Receive = () => {
    const classes = useStyles()

    return (
        <div className={classes.background}>
             <Container maxWidth='lg' className={classes.container} >
                <Grid container justify='center' direction='column'>
                    <Grid item align='center'>
                        <Typography variant='h3'>Receive</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Receive