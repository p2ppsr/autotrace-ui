import React, { useState } from 'react'
import useStyles from './register-style'
import { Grid, Typography, Button, TextField, Container, Alert, AlertTitle, Collapse, LinearProgress } from '@mui/material'
import { AutoTrace, ATEvent } from 'babbage-autotrace'

const autoTrace = new AutoTrace()

const Register = () => {
    const classes = useStyles()
    const [VIN, setVIN] = useState('')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [color, setColor] = useState('')
    const [alertSeverity, setAlertSeverity] = useState('info')
    const [message, setMessage] = useState('')
    const [collapsed, setCollapsed] = useState(false)
    const [loading, setLoading] = useState(false)

    const registerVehicle = async () => {
        setLoading(true)
        const registrationDoc = {
            make,
            model,
            year,
            color,
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
            setMessage(error.message || 'Something went wrong')
            setCollapsed(true)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={classes.background}>
            <Typography variant='h3' color='black' align='center' sx={{ fontWeight: 'bold' }}>REGISTER</Typography>
            <Typography variant='h6' color='black' align='center'>Start your journey today</Typography>
            <Container maxWidth='lg' className={classes.content_wrap}>
                <Collapse in={collapsed} onClick={() => { setCollapsed(false) }}>
                    <Alert severity={alertSeverity} variant='filled' className={classes.alert}>
                        <AlertTitle>{message}</AlertTitle>
                    </Alert>
                </Collapse>
                <Grid container justify='center' direction='column'>
                    <Grid item container align='center' direction='column' spacing={3}>
                        <Grid item container spacing={3} align='center' direction='row' className={classes.inputField}>
                            <Grid xs={12} item>
                                <TextField disabled={loading} label='VIN Number' variant='filled' color='secondary' value={VIN} onChange={(e) => setVIN(e.target.value)} fullWidth />
                            </Grid>
                        </Grid>
                        <Grid item container spacing={3} align='center' direction='row' className={classes.inputField}>
                            <Grid xs={3} item>
                                <TextField disabled={loading} label='Make' variant='filled' color='secondary' value={make} onChange={(e) => setMake(e.target.value)} />
                            </Grid>
                            <Grid xs={3} item>
                                <TextField disabled={loading} label='Model' variant='filled' color='secondary' value={model} onChange={(e) => setModel(e.target.value)} />
                            </Grid>
                            <Grid xs={3} item>
                                <TextField disabled={loading} label='Year' variant='filled' color='secondary' value={year} onChange={(e) => setYear(e.target.value)} />
                            </Grid>
                            <Grid xs={3} item>
                                <TextField disabled={loading} label='Color' variant='filled' color='secondary' value={color} onChange={(e) => setColor(e.target.value)} />
                            </Grid>
                        </Grid>
                        <Grid item align='center' className={classes.button}>
                            {loading && <LinearProgress color='secondary' className={classes.progress} />}
                            <Button disabled={loading} variant='contained' color='secondary' onClick={registerVehicle}>{loading ? 'Loading...' : 'Register'}</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Register
