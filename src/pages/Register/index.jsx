import React, { useState } from 'react'
import useStyles from './register-style'
import Button from '@mui/material/Button'
import { Grid, Typography, TextField, Container, Alert, AlertTitle, Collapse } from '@mui/material'
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
    const [alertSeverity, setAlertSeverity] = useState('info')
    const [message, setMessage] = useState('')
    const [collapsed, setCollapsed] = useState(false)

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

        try {
            let registerStatus = false
            registerStatus = await autoTrace.register(VIN, event, registrationDoc)
            if (registerStatus == undefined) {
                setAlertSeverity('success')
                setMessage('Success')
                setCollapsed(true)
            }
        } catch (error) {
            setAlertSeverity('error')
            setMessage('Something went wrong')
            setCollapsed(true)
        }
    }

    return (
        <div className={classes.background}>
            <Container maxWidth='lg'>
                <Collapse in={collapsed} onClick={() => { setCollapsed(false) }}>
                    <Alert severity={alertSeverity} variant='filled'>
                        <AlertTitle>{message}</AlertTitle>
                    </Alert>
                </Collapse>
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
                                <TextField label='VIN Number' variant='filled' color='primary' value={VIN} onChange={(e) => setVIN(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField label='Make' variant='filled' color='primary' value={make} onChange={(e) => setMake(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField label='Model' variant='filled' color='primary' value={model} onChange={(e) => setModel(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField label='Year' variant='filled' color='primary' value={year} onChange={(e) => setYear(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField label='Color' variant='filled' color='primary' value={color} onChange={(e) => setColor(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField label='First Name' variant='filled' color='primary' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <TextField label='Last Name' variant='filled' color='primary' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </Grid>
                        </Grid>
                        <Grid item align='center' className={classes.button}>
                            <Button variant='contained' color='secondary' onClick={registerVehicle}>Register</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Register
