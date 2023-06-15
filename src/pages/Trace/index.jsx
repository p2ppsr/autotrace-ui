import React from 'react'
import useStyles from './trace-style'
import Button from '@mui/material/Button'
import { Grid, Typography, TextField, Container} from '@mui/material'

const Trace = () => {
    const classes = useStyles()

    return (
        <div className={classes.background}>
            <Container maxWidth='lg'>
                <Grid container justify='center' direction='column'>
                    <Grid item align='center' className={classes.heading}>
                        <Typography variant='h3'>Trace</Typography>
                    </Grid>
                    <Grid item align='center' className={classes.text}>
                        <Typography variant='h6'>We leave no stone unturned in revealing the complete vehicle story</Typography>
                    </Grid>
                    <Grid item container spacing={3} align='center' direction='column' className={classes.inputField}>
                        <Grid item>
                            <TextField id='outlined-basic' label='VIN Number' variant='outlined' color='primary'/>
                        </Grid>
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