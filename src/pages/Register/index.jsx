import React from 'react'
import useStyles from './register-style'
import Button from '@mui/material/Button'
import { Grid, Typography, TextField, Container} from '@mui/material'

const Register = () => {
    const classes = useStyles()

    return (
        <div className={classes.background}>
            <Container maxWidth='lg'>
                <Grid container justify='center' direction='column'>
                    <Grid item align='center' className={classes.heading}>
                        <Typography variant='h3'>Register</Typography>
                    </Grid>
                    <Grid item align='center' className={classes.text}>
                        <Typography variant='h6'>Start your journey today</Typography>
                    </Grid>
                    <Grid item container spacing={3} align='center' direction='column' className={classes.inputField}>
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
