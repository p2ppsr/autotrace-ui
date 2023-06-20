import React, { useState } from 'react'
import useStyles from './transfer-style'
import Button from '@mui/material/Button'
import { Grid, Typography, TextField, Container, Alert, AlertTitle, Collapse } from '@mui/material'
import { AutoTrace, ATEvent } from 'babbage-autotrace'


const Transfer = () => {
    const classes = useStyles()
    const [VIN, setVIN] = useState('')
    const [recipient, setRecipient] = useState('')
    const [alertSeverity, setAlertSeverity] = useState('info')
    const [message, setMessage] = useState('')
    const [collapsed, setCollapsed] = useState(false)

    const autoTrace = new AutoTrace()

    const transferVehicle = async () => {
        const transferDoc = {
            VIN,
            recipient
        }

        const event = new ATEvent(
            crypto.randomUUID(),
            'TransferTitle',
            'Transfer a vehicle to a new owner',
            Date.now().toString(),
            JSON.stringify(transferDoc)
        )

        try {
            let transferStatus = false
            transferStatus = await autoTrace.transfer(VIN, recipient, event)
            if (transferStatus == undefined) {
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
                        <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Transfer</Typography>
                    </Grid>
                    <Grid item align='center' className={classes.text}>
                        <Typography variant='h6'>From one buyer to the next</Typography>
                    </Grid>
                    <Grid item container spacing={3} align='center' direction='column' className={classes.inputField}>
                        <Grid item>
                            <TextField label='VIN Number' variant='filled' color='primary' value={VIN} onChange={(e) => setVIN(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField label='Recipient ID' variant='filled' color='primary' value={recipient} onChange={(e) => setRecipient(e.target.value)} />
                        </Grid>
                    </Grid>
                    <Grid item align='center' className={classes.button}>
                        <Button variant='contained' color='secondary' onClick={transferVehicle}>Transfer</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Transfer