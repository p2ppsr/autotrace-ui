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
                        <Typography variant='h3' sx={{fontWeight: 'bold'}}>Register</Typography>
                    </Grid>
                    <Grid item align='center' className={classes.text}>
                        <Typography variant='h6'>Start your journey today</Typography>
                    </Grid>
                    <Grid item container align='center' direction='column'>
                        <Grid item container spacing={3} align='center' direction='column' className={classes.inputField}>
                            <Grid item>
                                <TextField id='registerVinNumber' label='VIN Number' variant='filled' color='primary'/>
                            </Grid>
                            <Grid item>
                                <TextField id='registerMake' label='Make' variant='filled' color='primary'/>
                            </Grid>
                            <Grid item>
                                <TextField id='registerModel' label='Model' variant='filled' color='primary'/>
                            </Grid>
                            <Grid item>
                                <TextField id='registerYear' label='Year' variant='filled' color='primary'/>
                            </Grid>
                            <Grid item>
                                <TextField id='registerColor' label='Color' variant='filled' color='primary'/>
                            </Grid>
                            <Grid item>
                                <TextField id='registerFirstName' label='First Name' variant='filled' color='primary'/>
                            </Grid>
                            <Grid item>
                                <TextField id='registerLastName' label='Last Name' variant='filled' color='primary'/>
                            </Grid>
                        </Grid>
                        <Grid item align='center' className={classes.button}>
                            <Button variant='contained' color='secondary' id='register'>Register</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>       
        </div>
    )
}

export default Register
