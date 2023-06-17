import React, { useState } from 'react'
import useStyles from './register-style'
import Button from '@mui/material/Button'
import { Grid, Typography, TextField, Container } from '@mui/material'
import { AutoTrace, ATEvent } from 'babbage-autotrace'

const Register = () => {
  const classes = useStyles()
  const [VIN, setVIN] = useState('')
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [color, setColor] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const autoTrace = new AutoTrace()

  const registerVehicle = async () => {
    const registrationDoc = {
      make,
      model,
      year,
      color,
      firstName,
      lastName
    }

    const event = new ATEvent(
      crypto.randomUUID(),
      'TitleRegistration',
      'Register a new vehicle',
      Date.now().toString(),
      JSON.stringify(registrationDoc)
    )
    await autoTrace.register(VIN, event)
  }

  return (
    <div className={classes.background}>
      <Container maxWidth='lg'>
        <Grid container justify='center' direction='column'>
          <Grid item align='center' className={classes.heading}>
            <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Register</Typography>
          </Grid>
          <Grid item align='center' className={classes.text}>
            <Typography variant='h6'>Start your journey today</Typography>
          </Grid>
          <Grid item container align='center' direction='column'>
            <Grid item container spacing={3} align='center' direction='column' className={classes.inputField}>
              <Grid item>
                <TextField id='registerVinNumber' label='VIN Number' variant='filled' color='primary' value={VIN} onChange={(e) => setVIN(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField id='registerMake' label='Make' variant='filled' color='primary' value={make} onChange={(e) => setMake(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField id='registerModel' label='Model' variant='filled' color='primary' value={model} onChange={(e) => setModel(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField id='registerYear' label='Year' variant='filled' color='primary' value={year} onChange={(e) => setYear(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField id='registerColor' label='Color' variant='filled' color='primary' value={color} onChange={(e) => setColor(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField id='registerFirstName' label='First Name' variant='filled' color='primary' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </Grid>
              <Grid item>
                <TextField id='registerLastName' label='Last Name' variant='filled' color='primary' value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </Grid>
            </Grid>
            <Grid item align='center' className={classes.button}>
              <Button variant='contained' color='secondary' id='register' onClick={registerVehicle}>Register</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Register
