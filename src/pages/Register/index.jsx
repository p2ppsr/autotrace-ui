import React from 'react'
import useStyles from './register-style'
import Button from '@mui/material/Button'
import { Grid, Typography, TextField, Container, Box} from '@mui/material'

const Register = () => {
    const classes = useStyles()

    return (
        <div className={classes.background}>
            <Container maxWidth='lg' className={classes.container} >
                <Grid container justify='center' direction='column'>
                    <Grid item align='center'>
                        <Typography variant='h3'>Register</Typography>
                    </Grid>
                    <Grid item align='center' className={classes.body1}>
                        <Typography variant='body1'>Start your journey today</Typography>
                    </Grid>
                    <Grid item container spacing={3} align='center' className={classes.inputField}>
                        <Grid item>
                            <TextField id='outlined-basic' label='VIN Number' variant='outlined' color='primary'/>
                        </Grid>
                        <Grid item>
                            <TextField id='outlined-basic' label='Make' variant='outlined' color='primary'/>
                        </Grid>
                        <Grid item>
                            <TextField id='outlined-basic' label='Model' variant='outlined' color='primary'/>
                        </Grid>
                        <Grid item>
                            <TextField id='outlined-basic' label='Year' variant='outlined' color='primary'/>
                        </Grid>
                        <Grid item>
                            <TextField id='outlined-basic' label='Color' variant='outlined' color='primary'/>
                        </Grid>
                        <Grid item>
                            <TextField id='outlined-basic' label='First Name' variant='outlined' color='primary'/>
                        </Grid>
                        <Grid item>
                            <TextField id='outlined-basic' label='Last Name' variant='outlined' color='primary'/>
                        </Grid>
                    </Grid>
                    <Grid item align='center' className={classes.button}>
                        <Button variant='contained' color='secondary'>Register</Button>
                    </Grid>
                </Grid>
            </Container>       
        </div>
    )
}

export default Register
