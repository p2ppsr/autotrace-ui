import React, { useState } from 'react'
import useStyles from './receive-style'
import { Grid, Typography, Container, TextField, Accordion, AccordionSummary, AccordionDetails, Alert, AlertTitle, Collapse, LinearProgress } from '@mui/material'
import Button from '@mui/material/Button'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { AutoTrace } from '@cwi/autotrace'
import Renderer from '../Renderer'

const autoTrace = new AutoTrace()

const Receive = () => {
  const classes = useStyles()
  const [VIN, setVIN] = useState('')
  const [sender, setSender] = useState('')
  const [events, setEvents] = useState([])
  const [alertSeverity, setAlertSeverity] = useState('info')
  const [message, setMessage] = useState('')
  const [collapsed, setCollapsed] = useState(false)
  const [loading, setLoading] = useState(false)

  const receiveVehicle = async () => {
    setLoading(true)
    try {
      let receiveStatus = false
      receiveStatus = await autoTrace.receive(VIN, sender)
      if (receiveStatus == undefined) {
        const vehicleHistory = await autoTrace.trace(VIN)
        setEvents(vehicleHistory.events)
        setAlertSeverity('success')
        setMessage('Success')
        setCollapsed(true)
      }
    } catch (error) {
      console.error(error)
      setAlertSeverity('error')
      setMessage(error.message || 'Something went wrong')
      setCollapsed(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={classes.background}>
      <Typography variant='h3' color='black' align='center' sx={{ fontWeight: 'bold' }}>RECEIVE</Typography>
      <Typography variant='h6' color='black' align='center' >Receive a transfered vehicle</Typography>
      <Container maxWidth='lg' className={classes.content_wrap}>
        <Collapse in={collapsed} onClick={() => { setCollapsed(false) }}>
          <Alert severity={alertSeverity} variant='filled' className={classes.alert}>
            <AlertTitle>{message}</AlertTitle>
          </Alert>
        </Collapse>
        <Grid container justify='center' direction='column'>
          <Grid item container spacing={3} align='center' direction='column' className={classes.inputField}>
            <Grid item>
              <TextField disabled={loading} label='VIN Number' variant='filled' color='secondary' value={VIN} onChange={(e) => setVIN(e.target.value)} />
            </Grid>
            <Grid item>
              <TextField disabled={loading} label='Sender ID' variant='filled' color='secondary' value={sender} onChange={(e) => setSender(e.target.value)} />
            </Grid>
          </Grid>
          <Grid item align='center' className={classes.button}>
            {loading && <LinearProgress color='secondary' className={classes.progress} />}
            <Button disabled={loading} variant='contained' color='secondary' onClick={receiveVehicle}>{loading ? 'Loading...' : 'Receive'}</Button>
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
                    <Renderer content={event.document} />
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