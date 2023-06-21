import React, { useState } from 'react'
import useStyles from './response-style'
import Button from '@mui/material/Button'
import { Grid, Typography, TextField, Container, Alert, AlertTitle, Collapse } from '@mui/material'
import { AutoTrace, ATEvent } from 'babbage-autotrace'


const RepairResponse = () => {
    const classes = useStyles()
    const [VIN, setVIN] = useState('')
    const [owner, setOwner] = useState('')
    const [description, setDescription] = useState('')
    const [alertSeverity, setAlertSeverity] = useState('info')
    const [message, setMessage] = useState('')
    const [collapsed, setCollapsed] = useState(false)

    const autoTrace = new AutoTrace()

    const repairVehicle = async () => {
        const repairResponseDoc = {
            VIN,
            owner,
            description
        }

        const event = new ATEvent(
            crypto.randomUUID(),
            'RepairResponse',
            'Repairs completed on a vehicle',
            Date.now().toString(),
            JSON.stringify(repairResponseDoc)
        )

        try {
            let responseStatus = false
            responseStatus = await autoTrace.transfer(VIN, owner, event)
            if (responseStatus == undefined) {
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
                        <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Repair Response</Typography>
                    </Grid>
                    <Grid item align='center' className={classes.text}>
                        <Typography variant='h6'>Hit the ol' dusty trail</Typography>
                    </Grid>
                    <Grid item container spacing={3} align='center' direction='column' className={classes.inputField}>
                        <Grid item>
                            <TextField label='VIN Number' variant='filled' color='primary' value={VIN} onChange={(e) => setVIN(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField label='Owner ID' variant='filled' color='primary' value={owner} onChange={(e) => setOwner(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField label='Repair Description' variant='filled' color='primary' multiline value={description} onChange={(e) => setDescription(e.target.value)} />
                        </Grid>
                    </Grid>
                    <Grid item align='center' className={classes.button}>
                        <Button variant='contained' color='secondary' onClick={repairVehicle}>Complete Repairs</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default RepairResponse