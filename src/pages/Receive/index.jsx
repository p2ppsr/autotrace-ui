import React, { useState } from 'react'
import useStyles from './receive-style'
import { Grid, Typography, Container, TextField, Accordion, AccordionSummary, AccordionDetails, Alert, AlertTitle, Collapse } from '@mui/material'
import Button from '@mui/material/Button'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { AutoTrace } from 'babbage-autotrace'

const Receive = () => {
    const classes = useStyles()
    const [VIN, setVIN] = useState('')
    const [sender, setSender] = useState('')
    const [events, setEvents] = useState([])
    const [alertSeverity, setAlertSeverity] = useState('info')
    const [message, setMessage] = useState('')
    const [collapsed, setCollapsed] = useState(false)

    const autoTrace = new AutoTrace()

    const receiveVehicle = async () => {
        try {
            let receiveStatus = false
            receiveStatus = await autoTrace.receive(VIN, sender)
            const vehicleHistory = await autoTrace.trace(VIN)
            setEvents(vehicleHistory.events)
            if (receiveStatus == undefined) {
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
            <Collapse in={collapsed} onClick={() => { setCollapsed(false) }}>
                <Alert severity={alertSeverity} variant='filled'>
                    <AlertTitle>{message}</AlertTitle>
                </Alert>
            </Collapse>
            <Container maxWidth='lg'>
                <Grid container justify='center' direction='column'>
                    <Grid item align='center' className={classes.heading}>
                        <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Receive</Typography>
                    </Grid>
                    <Grid item align='center' className={classes.text}>
                        <Typography variant='h6'>Receive a transfered vehicle</Typography>
                    </Grid>
                </Grid>
                <Grid container justify='center' direction='column'>
                    <Grid item container spacing={3} align='center' direction='column' className={classes.inputField}>
                        <Grid item>
                            <TextField label='VIN Number' variant='filled' color='primary' value={VIN} onChange={(e) => setVIN(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField label='Sender ID' variant='filled' color='primary' value={sender} onChange={(e) => setSender(e.target.value)} />
                        </Grid>
                    </Grid>
                    <Grid item align='center' className={classes.button}>
                        <Button variant='contained' color='secondary' onClick={receiveVehicle}>Receive</Button>
                    </Grid>
                </Grid>
                <Grid container justify='center' direction='column'>
                    {events.map((event, index) => (
                        <div key={index}>
                            <Grid item align='center' className={classes.button}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls='panel1bh-content'
                                        id='panel1bh-header'
                                    >
                                        <Typography sx={{ color: 'text.secondary' }}> {event.eventType} - {event.description}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {event.document}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                        </div>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Receive