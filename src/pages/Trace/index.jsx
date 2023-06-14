import React from 'react'
import useStyles from './trace-style'
import Button from '@mui/material/Button'
import { Grid, Typography, TextField, Container} from '@mui/material'

const Trace = () => {
    const classes = useStyles()

    return (
        <div className={classes.background}>
            <Container maxWidth='lg' className={classes.container} >
                <Grid container justify='center' direction='column'>
                    <Grid item align='center'>
                        <Typography variant='h3'>Trace</Typography>
                    </Grid>
                    <Grid item align='center' className={classes.body1}>
                        <Typography variant='body1'>We leave no stone unturned in revealing the complete vehicle story</Typography>
                    </Grid>
                    <Grid item align='center' className={classes.inputField}>
                        <TextField id='outlined-basic' label='VIN Number' variant='outlined' color='primary'/>
                    </Grid>
                    <Grid item align='center' className={classes.button}>
                        <Button variant='contained' color='secondary'>Search</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Trace